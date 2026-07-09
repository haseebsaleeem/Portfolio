import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

// Web3Forms — free, no backend required. Get a free access key at
// https://web3forms.com (just verify your email, no card needed) and put it
// in frontend/.env as VITE_WEB3FORMS_KEY. Until then the form falls back to
// opening the visitor's email client with a pre-filled message.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()

    if (!WEB3FORMS_KEY) {
      // No key configured yet — fall back to a pre-filled mailto so the
      // form is never a dead end.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${encodeURIComponent(form.name)}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          ...form
        })
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 bg-void">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="05" label="Contact" title="Let's build something real." />

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ink-muted text-lg leading-relaxed mb-8">
              Open to AI/ML roles, computer-vision work, and collaborations through LearnerTech. Send a message and I'll route it straight to my inbox.
            </p>

            <div className="space-y-4 mono-tag text-sm">
              <a href={`mailto:${profile.email}`} data-cursor-hover className="flex items-center gap-3 text-ink hover:text-signal-cyan transition-colors">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-signal-cyan">@</span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} data-cursor-hover className="flex items-center gap-3 text-ink hover:text-signal-cyan transition-colors">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-signal-cyan">#</span>
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-3 text-ink hover:text-signal-cyan transition-colors">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-signal-cyan">in</span>
                linkedin.com/in/haseeb-saleem-ah
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-3 text-ink hover:text-signal-cyan transition-colors">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-signal-cyan">gh</span>
                github.com/haseebsaleeem
              </a>
              <p className="flex items-center gap-3 text-ink-muted">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-signal-cyan">◎</span>
                {profile.location}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="hud-frame always glass rounded-2xl p-6 sm:p-8 space-y-5 text-signal-cyan/60"
          >
            <span className="corner-bl" />
            <span className="corner-br" />

            <div>
              <label className="mono-tag text-xs uppercase text-ink-muted block mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-ink-faint/25 rounded-lg px-4 py-3 text-ink outline-none focus:border-signal-cyan/60 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mono-tag text-xs uppercase text-ink-muted block mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-ink-faint/25 rounded-lg px-4 py-3 text-ink outline-none focus:border-signal-cyan/60 transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mono-tag text-xs uppercase text-ink-muted block mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-ink-faint/25 rounded-lg px-4 py-3 text-ink outline-none focus:border-signal-cyan/60 transition-colors resize-none"
                placeholder="Tell me about the project or role..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor-hover
              className="w-full py-3.5 rounded-lg bg-signal-violet hover:bg-signal-cyan text-white font-medium transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="mono-tag text-xs text-signal-cyan">Message received — I'll reply by email shortly.</p>
            )}
            {status === 'error' && (
              <p className="mono-tag text-xs text-signal-alert">
                Couldn't reach the server. Email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
