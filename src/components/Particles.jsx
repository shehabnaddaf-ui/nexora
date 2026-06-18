import { useEffect, useRef } from 'react'

function createParticles(count, width, height) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.8 + 0.3,
    opacity: Math.random() * 0.35 + 0.08,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 6,
    vx: (Math.random() - 0.5) * 0.15,
  }))
}

export default function Particles() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.offsetWidth
      height = parent.offsetHeight
      canvas.width = width
      canvas.height = height
      particlesRef.current = createParticles(Math.floor((width * height) / 22000), width, height)
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)

      particlesRef.current.forEach((particle) => {
        const drift = Math.sin((time / 1000 + particle.delay) / particle.duration) * 18
        const x = (particle.x + particle.vx * time * 0.02 + width) % width
        const y = (particle.y + drift + height) % height

        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 174, 239, ${particle.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    resize()
    animationRef.current = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}
