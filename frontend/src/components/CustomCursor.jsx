import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
      }
      const target = e.target
      setHovering(!!target.closest('[data-cursor-hover]'))
    }

    let raf
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[70] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-signal-cyan"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ${
          hovering
            ? 'w-14 h-14 border-signal-violet bg-signal-violet/10'
            : 'w-9 h-9 border-signal-cyan/60'
        }`}
        style={{ willChange: 'transform' }}
      >
        {hovering && (
          <>
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-signal-cyan" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-signal-cyan" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-signal-cyan" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-signal-cyan" />
          </>
        )}
      </div>
    </div>
  )
}
