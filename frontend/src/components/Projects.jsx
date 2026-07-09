import { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import { projects } from '../data/content'

function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onClick={() => onOpen(project)}
        data-cursor-hover
        className="hud-frame always glass rounded-3xl overflow-hidden cursor-pointer group relative"
      >
        <span className="corner-bl text-signal-cyan" />
        <span className="corner-br text-signal-cyan" />

        <div className="relative aspect-video overflow-hidden bg-void-deep">
          <video
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          <div className="scan-line animate-scan opacity-0 group-hover:opacity-100" />

          <div className="absolute top-4 left-4 mono-tag text-[10px] uppercase text-signal-cyan flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-alert animate-blink" /> REC · LIVE DEMO
          </div>

          <div
            style={{ transform: 'translateZ(40px)' }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center shadow-glow">
              <div className="w-0 h-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white ml-1" />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8" style={{ transform: 'translateZ(20px)' }}>
          <p className="mono-tag text-[11px] uppercase text-signal-cyan mb-2">{project.tag}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{project.title}</h3>
          <p className="text-ink-muted text-sm leading-relaxed mb-5">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="mono-tag text-[10px] uppercase px-2.5 py-1 rounded-full border border-ink-faint/30 text-ink-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="03" label="Selected Work" title="Two systems. Click to watch them run." />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
