'use client'

import { useEffect, useRef } from 'react'

export default function MetalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (typeof window === 'undefined') return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particules élégantes avec connexions
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(59, 130, 246, 0.2)', // Bleu
      'rgba(139, 92, 246, 0.18)', // Violet
      'rgba(236, 72, 153, 0.15)', // Rose
      'rgba(34, 197, 94, 0.15)', // Vert
    ]

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 2 + Math.random() * 4,
        opacity: 0.4 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animationFrame: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.004

      // Fond dégradé sophistiqué avec plusieurs couches
      const bgGradient1 = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )
      bgGradient1.addColorStop(0, 'rgba(248, 250, 252, 0.98)')
      bgGradient1.addColorStop(0.3, 'rgba(241, 245, 249, 0.97)')
      bgGradient1.addColorStop(0.6, 'rgba(249, 250, 251, 0.98)')
      bgGradient1.addColorStop(1, 'rgba(248, 250, 252, 0.98)')

      ctx.fillStyle = bgGradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Couche de texture subtile
      const textureGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) * 0.8
      )
      textureGradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)')
      textureGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)')
      textureGradient.addColorStop(1, 'rgba(59, 130, 246, 0.01)')

      ctx.fillStyle = textureGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Cercles élégants avec profondeur
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + Math.sin(time * 0.2 + i) * 50
        const y = (canvas.height / 4) + Math.cos(time * 0.25 + i) * 70
        const radius = 100 + Math.sin(time * 0.3 + i) * 50
        
        // Cercle externe avec glow
        const outerGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        outerGradient.addColorStop(0, `rgba(59, 130, 246, ${0.08 + Math.sin(time + i) * 0.03})`)
        outerGradient.addColorStop(0.6, `rgba(139, 92, 246, ${0.05 + Math.cos(time + i) * 0.02})`)
        outerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        
        ctx.fillStyle = outerGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Cercle interne plus intense
        const innerGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.5)
        innerGradient.addColorStop(0, `rgba(59, 130, 246, ${0.12 + Math.sin(time * 2 + i) * 0.04})`)
        innerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        
        ctx.fillStyle = innerGradient
        ctx.beginPath()
        ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Lignes courbes élégantes avec gradients
      ctx.lineCap = 'round'
      for (let i = 0; i < 6; i++) {
        const startX = (canvas.width / 7) * i
        const startY = canvas.height / 2 + Math.sin(time * 0.3 + i) * 80
        const cp1X = startX + 150
        const cp1Y = startY - 120 + Math.cos(time * 0.4 + i) * 60
        const cp2X = startX + 300
        const cp2Y = startY + 120 + Math.sin(time * 0.35 + i) * 60
        const endX = startX + 450
        const endY = startY + Math.cos(time * 0.3 + i) * 80

        const lineGradient = ctx.createLinearGradient(startX, startY, endX, endY)
        lineGradient.addColorStop(0, `rgba(59, 130, 246, ${0.08 + Math.sin(time + i) * 0.03})`)
        lineGradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.1 + Math.cos(time + i) * 0.03})`)
        lineGradient.addColorStop(1, `rgba(59, 130, 246, ${0.08 + Math.sin(time + i) * 0.03})`)

        ctx.strokeStyle = lineGradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY)
        ctx.stroke()
      }

      // Particules avec connexions
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebond sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Opacité pulsante
        const pulse = 0.6 + Math.sin(time * 2 + particle.x * 0.01) * 0.4

        // Dessiner la particule
        const particleGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        )
        particleGradient.addColorStop(0, particle.color.replace('0.2', String(particle.opacity * pulse)))
        particleGradient.addColorStop(0.5, particle.color.replace('0.2', String(particle.opacity * pulse * 0.5)))
        particleGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

        ctx.fillStyle = particleGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Cœur de la particule
        ctx.fillStyle = particle.color.replace('0.2', String(particle.opacity * pulse))
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Connexions entre particules proches
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const connectionGradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y
            )
            const opacity = (1 - distance / 150) * 0.15
            connectionGradient.addColorStop(0, particle.color.replace('0.2', String(opacity)))
            connectionGradient.addColorStop(1, other.color.replace('0.2', String(opacity)))

            ctx.strokeStyle = connectionGradient
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      // Motif de grille subtile
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)'
      ctx.lineWidth = 0.5
      const gridSize = 120
      const gridOffsetX = (time * 15) % gridSize
      const gridOffsetY = (time * 12) % gridSize

      for (let x = -gridOffsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = -gridOffsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Reflets sophistiqués
      const reflectionGradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )
      reflectionGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      reflectionGradient.addColorStop(
        0.4 + Math.sin(time * 0.2) * 0.1,
        'rgba(255, 255, 255, 0.04)'
      )
      reflectionGradient.addColorStop(
        0.6 + Math.cos(time * 0.2) * 0.1,
        'rgba(255, 255, 255, 0.03)'
      )
      reflectionGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = reflectionGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ opacity: 1 }}
    />
  )
}
