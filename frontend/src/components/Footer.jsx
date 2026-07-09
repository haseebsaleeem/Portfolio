import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-ink-faint/10 bg-void-deep">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mono-tag text-xs text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name} · Built with React, FastAPI &amp; too much coffee.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-blink" /> STATUS: OPEN TO WORK
        </p>
      </div>
    </footer>
  )
}
