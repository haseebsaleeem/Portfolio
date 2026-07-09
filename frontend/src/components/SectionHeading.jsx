import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="mono-tag text-xs text-signal-cyan">SEC_{index}</span>
        <span className="h-px w-10 bg-signal-cyan/40" />
        <span className="mono-tag text-xs text-ink-muted uppercase">{label}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
        {title}
      </h2>
    </motion.div>
  )
}
