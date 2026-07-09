# Haseeb Saleem — Portfolio

A dark, futuristic, HUD/detection-system-themed portfolio built with **React
+ Vite + TailwindCSS + Framer Motion** — the same frontend stack used in the
Smart Accident Detection System project.

```
portfolio/
├── frontend/     React + Vite + Tailwind + Framer Motion site (this is the whole live site)
└── backend/      Optional FastAPI API — not required to publish the site
```

**The live site is 100% static.** The contact form submits directly from the
browser to [Web3Forms](https://web3forms.com) (free, no card, no server to
run), so you can deploy just `frontend/` to Vercel and share one link — no
backend to host, no cold starts.

The `backend/` folder is a separate, optional FastAPI service kept in this
repo to demonstrate the async Python stack from your other project — plug it
in later if you want a real database of submissions, but it's not part of
the deployed site.

## Design

- **Look:** dark futuristic, glassmorphism, neon violet/cyan, monospace HUD
  labels — themed like a live detection dashboard (bounding-box corner
  brackets on every card, scan-line sweeps, blinking status dots) as a nod to
  the computer-vision project.
- **Motion:** animated particle/node network in the hero that reacts to your
  cursor, scroll-triggered reveals throughout, 3D-tilt project cards, a
  custom reticle cursor, rotating role text.
- **Sections:** Hero → About → Experience → Projects → Skills → Contact.

## Run it locally

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`.

To build for production:

```bash
npm run build      # outputs to frontend/dist
npm run preview    # serve the production build locally
```

## Turn on the contact form (2 minutes, free)

Right now, submitting the form just opens the visitor's email client with a
pre-filled message — it works, but a real inbox delivery is nicer:

1. Go to [web3forms.com](https://web3forms.com) → enter your email → they
   send you a free access key. No card, no signup form beyond your email.
2. In `frontend/`, create a file named `.env` with:
   ```
   VITE_WEB3FORMS_KEY=paste-your-key-here
   ```
3. Rebuild/redeploy. Submissions now land straight in your inbox, up to 250
   free per month — plenty for a portfolio.

## Deploying — one link, free forever

### Vercel (recommended)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo,
   set **Root Directory** to `frontend`. Vercel auto-detects Vite.
3. Add the environment variable `VITE_WEB3FORMS_KEY` (from the step above).
4. Deploy. You get a permanent URL like `https://haseeb-saleem.vercel.app` —
   this is the one link you put on LinkedIn. Vercel's free/Hobby tier has no
   sleep, no cold starts, and doesn't expire.

### Alternatives (same idea, also free forever, no card)

- **Netlify** — drag the `frontend/dist` folder into Netlify Drop, or
  connect the repo the same way as Vercel (build command `npm run build`,
  publish directory `dist`).
- **GitHub Pages** — works too, just needs `base: '/your-repo-name/'` set in
  `vite.config.js` first since it serves from a sub-path.

All three are static hosts, so none of them have the sleep/cold-start
tradeoff that a free backend server (like Render) has — which is exactly
why the contact form was moved off a backend in the first place.

## Optional: deploying the FastAPI backend later

If you eventually want your own database of contact submissions instead of
Web3Forms, `backend/render.yaml` and `backend/Procfile` are ready to go.
Worth knowing: Render's free tier really is free (no card required) — the
only tradeoff is the service falls asleep after 15 minutes of no traffic and
takes ~30-60 seconds to wake back up on the next request. Fine for
occasional use, not something you'd notice for a contact form. This is
entirely optional and not needed for the site to work.

## Things to edit before you publish

1. The accident detection project has no public repo or live demo yet —
   the modal shows "Prototype stage" instead of dead links. Once you push it
   to GitHub / host it, add the URLs to `projects[1].links` in
   `frontend/src/data/content.js`.
2. Replace the video files in `frontend/public/assets/videos/` if you get
   cleaner recordings later — same filenames (`documind.mp4`,
   `accident-detection.mp4`) will just drop in.
