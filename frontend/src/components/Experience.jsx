import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

const statusColor = {
  ACTIVE: 'text-signal-cyan border-signal-cyan/40 bg-signal-cyan/10',
  COMPLETE: 'text-signal-violet border-signal-violet/40 bg-signal-violet/10',
  DRAFT: 'text-signal-alert border-signal-alert/40 bg-signal-alert/10'
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-void-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="02" label="Career Log" title="Where I've been building." />

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-cyan via-signal-violet to-transparent" />

          {experience.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-12 top-1.5 w-3.5 h-3.5 rounded-full bg-void border-2 border-signal-cyan shadow-glow-cyan" />

              <div className="hud-frame glass rounded-2xl p-6 sm:p-8 hover:shadow-glow transition-shadow">
                <span className="corner-bl" />
                <span className="corner-br" />

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`mono-tag text-[10px] uppercase px-2.5 py-1 rounded-full border ${statusColor[job.status]}`}>
                    {job.status}
                  </span>
                  <span className="mono-tag text-xs text-ink-faint">{job.period}</span>
                  <span className="mono-tag text-xs text-ink-faint">· {job.location}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold">
                  {job.role} <span className="text-ink-muted font-normal">— {job.org}</span>
                </h3>

                <p className="text-ink-muted mt-3 leading-relaxed">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink/90 leading-relaxed">
                      <span className="mono-tag text-signal-cyan shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
