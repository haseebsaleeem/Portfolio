import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { profile } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-signal-violet via-signal-cyan to-signal-alert origin-left z-[65]"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <nav
          className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass py-3 px-6' : ''
          }`}
        >
          <a href="#top" data-cursor-hover className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-cyan animate-blink" />
            HS<span className="text-signal-cyan">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 mono-tag text-xs uppercase text-ink-muted">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} data-cursor-hover className="hover:text-signal-cyan transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={profile.resume}
            download
            data-cursor-hover
            className="hidden md:inline-flex items-center gap-2 mono-tag text-xs uppercase px-4 py-2 rounded-full border border-signal-cyan/40 text-signal-cyan hover:bg-signal-cyan/10 transition-colors"
          >
            Resume
          </a>

          <button
            data-cursor-hover
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-[2px] w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass mx-5 mt-3 rounded-2xl p-6 flex flex-col gap-4 mono-tag text-sm uppercase"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-muted hover:text-signal-cyan">
                {l.label}
              </a>
            ))}
            <a href={profile.resume} download className="text-signal-cyan">
              Download Resume
            </a>
          </motion.div>
        )}
      </header>
    </>
  )
}
