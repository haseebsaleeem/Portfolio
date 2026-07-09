import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile, stats, education } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" label="About" title="Who's behind the code." />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-xl sm:text-2xl leading-relaxed text-ink font-light">
              {profile.bio}
            </p>

            <div className="mt-10 hud-frame always glass rounded-2xl p-6 text-signal-cyan/70">
              <span className="corner-bl" />
              <span className="corner-br" />
              <p className="mono-tag text-xs uppercase text-ink-muted mb-2">Currently studying</p>
              <p className="font-display text-lg text-ink">{education.degree}</p>
              <p className="text-ink-muted text-sm mt-1">{education.school} · {education.period}</p>
              <p className="text-ink-faint text-xs mt-3 mono-tag">{education.coursework}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="hud-frame glass rounded-2xl p-6 text-signal-violet hover:shadow-glow transition-shadow"
              >
                <span className="corner-bl" />
                <span className="corner-br" />
                <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.value}</p>
                <p className="mono-tag text-[11px] uppercase text-ink-muted mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
