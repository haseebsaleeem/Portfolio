import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') onClose()
        }
        if (project) {
            document.addEventListener('keydown', onKey)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [project, onClose])

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[80] flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-void-deep/90 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="relative w-full max-w-6xl my-6 sm:my-10 hud-frame always glass rounded-3xl overflow-hidden text-signal-cyan grid md:grid-cols-2"
                    >
                        <span className="corner-bl" />
                        <span className="corner-br" />

                        <button
                            onClick={onClose}
                            data-cursor-hover
                            aria-label="Close"
                            className="fixed top-5 right-5 sm:top-8 sm:right-8 z-[100] w-11 h-11 rounded-full bg-void border border-ink-faint/40 flex items-center justify-center hover:bg-signal-alert/20 hover:border-signal-alert/60 hover:text-signal-alert transition-colors text-ink shadow-lg"
                        >
                            ✕
                        </button>

                        {/* Video — right column on desktop, top on mobile, fully fitted with no cropping */}
                        <div className="order-1 md:order-2 flex items-center justify-center bg-black p-3 sm:p-5 md:p-6">
                            <div
                                className="w-full rounded-xl overflow-hidden bg-void-deep"
                                style={{ aspectRatio: project.videoAspect || '16 / 9' }}
                            >
                                <video
                                    key={project.id}
                                    src={project.video}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-contain bg-black"
                                />
                            </div>
                        </div>

                        {/* Details — left column on desktop, below video on mobile */}
                        <div className="order-2 md:order-1 p-6 sm:p-8 md:p-10 text-ink md:max-h-[85vh] md:overflow-y-auto">
                            <p className="mono-tag text-[11px] uppercase text-signal-cyan mb-2">{project.tag}</p>
                            <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-ink-muted leading-relaxed mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map((s) => (
                                    <span key={s} className="mono-tag text-[10px] uppercase px-2.5 py-1 rounded-full border border-signal-cyan/30 text-signal-cyan">
                                        {s}
                                    </span>
                                ))}
                            </div>

                            {project.links?.live !== '#' || project.links?.github !== '#' ? (
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.links?.live && project.links.live !== '#' && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            data-cursor-hover
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-signal-violet hover:bg-signal-cyan text-white text-sm font-medium transition-colors"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                    {project.links?.github && project.links.github !== '#' && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            data-cursor-hover
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-faint/40 hover:border-signal-cyan/60 hover:text-signal-cyan text-sm font-medium transition-colors"
                                        >
                                            Source Code ↗
                                        </a>
                                    )}
                                </div>
                            ) : (
                                <p className="mono-tag text-xs uppercase text-ink-faint mb-8">
                                    Prototype stage — code & live demo not yet public
                                </p>
                            )}

                            <div className="grid gap-5">
                                {project.details.map((d) => (
                                    <div key={d.heading} className="border-l-2 border-signal-violet/40 pl-4">
                                        <p className="mono-tag text-xs uppercase text-signal-violet mb-1.5">{d.heading}</p>
                                        <p className="text-sm text-ink-muted leading-relaxed">{d.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                data-cursor-hover
                                className="mt-10 w-full py-3 rounded-lg border border-ink-faint/30 text-ink-muted hover:border-signal-cyan/50 hover:text-signal-cyan transition-colors mono-tag text-xs uppercase"
                            >
                                ✕ Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
