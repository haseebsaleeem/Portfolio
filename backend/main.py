"""
Portfolio backend API — FastAPI

Mirrors the stack used in the Smart Accident Detection System project
(Python + FastAPI, chosen for async request handling). Handles the
contact form on the portfolio site and forwards submissions by email.

Run locally:
    pip install -r requirements.txt
    uvicorn main:app --reload --port 8000
"""

import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="Haseeb Saleem — Portfolio API",
    description="Contact form endpoint for haseebsaleem.dev",
    version="1.0.0",
)

# Allow the deployed frontend (and local dev) to call this API.
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=4000)


# In-memory log as a fallback so no submission is silently lost if email
# sending isn't configured yet. Swap for a real database (e.g. MongoDB,
# matching the accident-detection project) when you deploy this for real.
SUBMISSIONS: list[dict] = []


def send_email_notification(msg: ContactMessage) -> bool:
    """Send the contact form submission to your inbox via SMTP.

    Configure these environment variables to enable it:
        SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL
    Returns True if sent, False if SMTP isn't configured (submission is
    still logged in SUBMISSIONS either way).
    """
    host = os.getenv("SMTP_HOST")
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASS")
    to_email = os.getenv("CONTACT_TO_EMAIL", "haseebsaleeeem@gmail.com")

    if not (host and user and password):
        return False

    port = int(os.getenv("SMTP_PORT", "587"))

    email_msg = MIMEMultipart()
    email_msg["From"] = user
    email_msg["To"] = to_email
    email_msg["Subject"] = f"Portfolio contact — {msg.name}"
    body = f"From: {msg.name} <{msg.email}>\n\n{msg.message}"
    email_msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(host, port) as server:
        server.starttls()
        server.login(user, password)
        server.sendmail(user, to_email, email_msg.as_string())
    return True


@app.get("/api/health")
def health_check():
    return {"status": "online", "time": datetime.now(timezone.utc).isoformat()}


@app.post("/api/contact")
def submit_contact(payload: ContactMessage):
    record = {
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "received_at": datetime.now(timezone.utc).isoformat(),
    }
    SUBMISSIONS.append(record)

    try:
        send_email_notification(payload)
    except Exception as exc:  # noqa: BLE001 — surface as 502, don't crash the API
        raise HTTPException(status_code=502, detail=f"Stored, but email failed to send: {exc}") from exc

    return {"ok": True, "message": "Submission received."}


@app.get("/api/contact")
def list_submissions():
    """Debug endpoint — remove or protect with auth before deploying publicly."""
    return {"count": len(SUBMISSIONS), "submissions": SUBMISSIONS}
