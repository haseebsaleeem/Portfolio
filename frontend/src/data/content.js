export const profile = {
  name: 'Haseeb Saleem',
  roles: [
    'AI / ML Developer',
    'Founder — LearnerTech',
    'Computer Vision Engineer',
    'RAG Systems Builder'
  ],
  location: 'Faisalabad, Pakistan',
  email: 'haseebsaleeeem@gmail.com',
  phone: '0306-2803244',
  linkedin: 'https://linkedin.com/in/haseeb-saleem-ah',
  github: 'https://github.com/haseebsaleeem',
  resume: './assets/Haseeb_Saleem_Resume.pdf',
  tagline: 'I build systems that watch, reason, and respond — in real time.',
  bio:
    "I'm a software engineering student and AI/ML developer based in Faisalabad, Pakistan, currently building the full pipeline from raw data to deployed product — regression models, RAG pipelines, and computer-vision detection engines that run on live video. I founded LearnerTech to put that same practical, ship-it mindset into a company that trains the next generation of developers and designers."
}

export const stats = [
  { label: 'Years Building', value: '2+' },
  { label: 'Shipped Projects', value: '3' },
  { label: 'Detection Accuracy', value: '88.7%' },
  { label: 'Company Founded', value: '2026' }
]

export const experience = [
  {
    id: 'learnertech',
    org: 'LearnerTech',
    role: 'Founder',
    period: 'May 2026 — Present',
    location: 'Faisalabad, Pakistan',
    status: 'ACTIVE',
    summary:
      'IT services company (11–50 employees) building custom web & mobile apps, UI/UX design, AI models, and IT training for the next generation of tech professionals.',
    points: [
      'Built and lead a technology company delivering custom web & mobile application development, UI/UX design, software solutions, digital marketing, graphic design, and AI model development.',
      'Set the mission to bridge the gap between learning and industry — combining client delivery with hands-on IT training that prepares students and businesses for the digital future.',
      'Responsible for company direction, service architecture, and quality bar across every client engagement and training cohort.'
    ]
  },
  {
    id: 'falcon',
    org: 'Falcon Scaling',
    role: 'Junior AI/ML Developer — Internship',
    period: 'Feb 2026 — Apr 2026',
    location: 'Faisalabad, Pakistan',
    status: 'COMPLETE',
    summary:
      'End-to-end ML pipeline work: agricultural yield prediction, NLP fake news detection, and an LLM-powered career advisor — all shipped to production.',
    points: [
      'Trained an XGBoost regression model on agricultural data across all four provinces of Pakistan — 88.69% accuracy (R²) predicting crop yield, deployed live on Streamlit Cloud.',
      'Built an NLP fake-news detection pipeline using TF-IDF vectorization + Logistic Regression — 75% classification accuracy on Pakistani news headlines.',
      'Developed an AI career-advisor chatbot integrating the Google Gemini LLM API with LangChain memory for context-aware, memory-enabled job guidance, deployed live on Streamlit.',
      'Owned the full ML pipeline end-to-end: data preprocessing, EDA, feature engineering, model training, and production deployment.'
    ]
  }
]

export const projects = [
  {
    id: 'documind',
    tag: 'RAG · DOCUMENT INTELLIGENCE',
    title: 'DocuMind AI',
    oneLiner: 'Upload any PDF and have a full conversation with it — natural language, cited, and scored.',
    video: './assets/videos/accident-detection.mp4',
    stack: ['Gemini', 'RAG', 'ChromaDB', 'LangChain', 'Streamlit', 'Docker'],
    links: { live: 'https://docxmind-ai.streamlit.app/', github: 'https://github.com/haseebsaleeem/Documind' },
    description:
      'A production-grade AI document intelligence system. Upload any PDF and query it in natural language, with source citations and confidence scoring on every answer.',
    details: [
      {
        heading: 'RAG Pipeline',
        text: 'Full retrieval pipeline: PDF extraction → cleaning → chunking (1000-char, 200 overlap) → Gemini embeddings (3072-dim) → ChromaDB vector search → LLM generation.'
      },
      {
        heading: 'Agent Layer',
        text: 'An AI agent layer handles intent planning and multi-step action routing — search, summarize, compare, risk analysis — with response synthesis powered by Gemini 2.5 Flash.'
      },
      {
        heading: 'Analytics',
        text: 'Automated CSV analytics with Plotly visualizations, IQR anomaly detection, and AI-generated business insights, plus an evaluation suite using LLM-as-judge scoring (1–5 scale).'
      },
      {
        heading: 'Shipped',
        text: 'Docker deployment, 13 automated pytest unit tests, and a modern glassmorphism UI.'
      }
    ]
  },
  {
    id: 'accident-detection',
    tag: 'COMPUTER VISION · REAL-TIME SYSTEMS',
    title: 'Smart Accident Detection System',
    oneLiner: 'Watches live CCTV footage, detects road accidents in real time, and auto-triggers emergency response.',
    video: './assets/videos/documind.mp4',
    stack: ['Python', 'OpenCV', 'React', 'FastAPI', 'WebSockets', 'MongoDB'],
    links: { live: '#', github: '#' },
    description:
      'A full-stack, real-time accident detection platform. The moment it detects a collision on a live camera feed, it fires a full-screen emergency alert, logs the incident with a snapshot, starts a 30-second rescue dispatch countdown, and auto-escalates to emergency services if no team responds in time.',
    details: [
      {
        heading: 'Detection Engine',
        text: 'Three CV methods run simultaneously on every frame: frame differencing against 3–4 frames back to isolate motion, bounding-box tracking of every moving vehicle, and collision detection via box overlap, motion-explosion (3× spike in change score), and box-merge signals.'
      },
      {
        heading: 'Frontend',
        text: 'React 18 + Vite, TailwindCSS, and Framer Motion for the interface; Zustand for state; Leaflet.js for live map tracking of incidents; Recharts for analytics dashboards.'
      },
      {
        heading: 'Backend',
        text: 'Python + FastAPI, chosen specifically for async support so the server can handle multiple camera streams, WebSocket connections, and database operations at once without blocking. Alerts reach the dashboard in under 2 seconds via a persistent WebSocket connection.'
      },
      {
        heading: 'Data',
        text: 'MongoDB stores each incident — GPS coordinates, severity level, base64 snapshots, timestamps, and team assignment — as flexible, unstructured records.'
      },
      {
        heading: "What's next",
        text: 'Swapping the frame-diff prototype for a YOLOv8 model trained on accident datasets, adding license-plate recognition with EasyOCR, Twilio SMS/email alerts, and HTTPS + multi-user auth for real deployment.'
      }
    ]
  }
]

export const skills = [
  {
    category: 'Languages & Tools',
    items: ['Python', 'SQL', 'Git', 'GitHub', 'Jupyter Notebook', 'Streamlit']
  },
  {
    category: 'ML / AI',
    items: ['XGBoost', 'Scikit-learn', 'Regression', 'Classification', 'Feature Engineering', 'Model Deployment']
  },
  {
    category: 'LLM & GenAI',
    items: ['LangChain', 'Google Gemini API', 'RAG Pipelines', 'AI Agents', 'ChromaDB', 'Vector Databases']
  },
  {
    category: 'NLP',
    items: ['TF-IDF', 'Text Preprocessing', 'Logistic Regression']
  },
  {
    category: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Statistical Modeling', 'Hypothesis Testing']
  },
  {
    category: 'Full-Stack & Systems',
    items: ['React', 'FastAPI', 'WebSockets', 'MongoDB', 'OpenCV', 'TailwindCSS', 'Framer Motion']
  }
]

export const education = {
  school: 'National University of Modern Languages (NUML)',
  degree: 'Bachelor of Science in Software Engineering (BSSE)',
  period: '2023 — 2027',
  location: 'Faisalabad, Pakistan',
  coursework: 'Data Structures, Algorithms, Database Systems, Machine Learning, Software Engineering'
}
