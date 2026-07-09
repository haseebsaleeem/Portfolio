import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleField from './ParticleField'
import { profile } from '../data/content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-void">
      <div className="absolute inset-0 bg-hud-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0">
        <ParticleField density={90} />
      </div>
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-signal-violet/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] bg-signal-cyan/15 rounded-full blur-[120px]" />

      {/* corner HUD readouts */}
      <div className="hidden sm:block absolute top-24 left-6 mono-tag text-[11px] text-ink-faint">
        <p>LAT {profile.location === 'Faisalabad, Pakistan' ? '31.4187° N' : '—'}</p>
        <p>LON 73.0791° E</p>
        <p className="text-signal-cyan mt-1">{time.toLocaleTimeString('en-GB')}</p>
      </div>
      <div className="hidden sm:flex absolute top-24 right-6 mono-tag text-[11px] text-ink-faint flex-col items-end">
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-blink" /> SYSTEM ONLINE
        </p>
        <p>BUILD 2026.07</p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mono-tag text-xs uppercase text-signal-cyan mb-6 flex items-center gap-2"
        >
          <span className="w-8 h-px bg-signal-cyan" /> Portfolio · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="font-display font-bold text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
        >
          {profile.name.split(' ')[0]}
          <br />
          <span className="text-gradient">{profile.name.split(' ')[1]}</span>
        </motion.h1>

        <div className="mt-6 h-10 flex items-center">
          <span className="mono-tag text-signal-alert mr-2">&gt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
              className="mono-tag text-lg sm:text-xl text-ink-muted"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="mono-tag text-signal-cyan ml-1 animate-blink">_</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            data-cursor-hover
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-signal-violet text-white font-medium overflow-hidden shadow-glow"
          >
            <span className="relative z-10">View Work</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-gradient-to-r from-signal-cyan to-signal-violet opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink-faint/40 hover:border-signal-cyan/60 hover:text-signal-cyan transition-colors font-medium"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mono-tag text-[10px] text-ink-faint uppercase"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-signal-cyan to-transparent" />
      </motion.div>
    </section>
  )
}
