"use client"

import { useEffect, useRef } from "react"

export function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Comet {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      angle: number
      thickness: number
    }

    const comets: Comet[] = []

    const createComet = (): Comet => {
      const angle = Math.PI / 4 + (Math.random() * Math.PI) / 6 // 45-75 degrees
      return {
        x: Math.random() * canvas.width * 1.5,
        y: -50 - Math.random() * 200,
        length: 80 + Math.random() * 120,
        speed: 3 + Math.random() * 4,
        opacity: 0.15 + Math.random() * 0.25,
        angle,
        thickness: 1 + Math.random() * 1.5,
      }
    }

    // Initialize comets
    for (let i = 0; i < 8; i++) {
      const comet = createComet()
      comet.y = Math.random() * canvas.height
      comet.x = Math.random() * canvas.width
      comets.push(comet)
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      comets.forEach((comet, index) => {
        // Calculate end point based on angle
        const endX = comet.x - Math.cos(comet.angle) * comet.length
        const endY = comet.y - Math.sin(comet.angle) * comet.length

        // Create gradient for comet tail
        const gradient = ctx.createLinearGradient(comet.x, comet.y, endX, endY)
        gradient.addColorStop(0, `rgba(140, 180, 200, ${comet.opacity})`)
        gradient.addColorStop(0.3, `rgba(100, 150, 180, ${comet.opacity * 0.6})`)
        gradient.addColorStop(1, "rgba(100, 150, 180, 0)")

        // Draw comet
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = comet.thickness
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw bright head
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.thickness, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 240, ${comet.opacity * 1.5})`
        ctx.fill()

        // Update position
        comet.x += Math.cos(comet.angle) * comet.speed
        comet.y += Math.sin(comet.angle) * comet.speed

        // Reset if off screen
        if (comet.y > canvas.height + 100 || comet.x > canvas.width + 200) {
          comets[index] = createComet()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)" }}
    />
  )
}
