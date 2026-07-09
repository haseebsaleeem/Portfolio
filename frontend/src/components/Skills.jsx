import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-void-soft overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="04" label="Toolkit" title="What I build with." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="hud-frame glass rounded-2xl p-6 hover:shadow-glow-cyan transition-shadow text-signal-cyan/60"
            >
              <span className="corner-bl" />
              <span className="corner-br" />
              <p className="mono-tag text-xs uppercase text-signal-cyan mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + i * 0.03 }}
                    whileHover={{ y: -3, borderColor: 'rgba(0,229,255,0.6)' }}
                    className="text-sm px-3 py-1.5 rounded-lg border border-ink-faint/25 text-ink/90 bg-white/[0.02]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
