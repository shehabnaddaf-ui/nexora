import { useEffect, useRef } from 'react'

function createParticles(count, size) {
  const radius = size / 2
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: Math.random() * Math.PI * 2,
    distance: Math.random() * radius * 0.85 + radius * 0.15,
    size: Math.random() * 1.2 + 0.4,
    opacity: Math.random() * 0.35 + 0.15,
    speed: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
    drift: Math.random() * Math.PI * 2,
  }))
}

export default function LogoParticles({ size = 220 }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    particlesRef.current = createParticles(18, size)

    const draw = (time) => {
      const t = time / 1000
      ctx.clearRect(0, 0, size, size)
      const center = size / 2

      particlesRef.current.forEach((particle) => {
        const angle = particle.angle + t * particle.speed
        const wobble = Math.sin(t * 0.6 + particle.drift) * 6
        const distance = particle.distance + wobble
        const x = center + Math.cos(angle) * distance
        const y = center + Math.sin(angle) * distance

        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 174, 239, ${particle.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [size])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    />
  )
}
