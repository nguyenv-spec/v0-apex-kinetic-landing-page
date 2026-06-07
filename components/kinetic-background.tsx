'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
}

export function KineticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const nodeCount = Math.min(Math.ceil((canvas.width * canvas.height) / 80000), 20)
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
    }))

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0)' // Transparent, no fill needed
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current

      // Update nodes
      nodes.forEach((node) => {
        const dx = node.targetX - node.x
        const dy = node.targetY - node.y
        const distance = Math.hypot(dx, dy)

        if (distance < 10) {
          node.targetX = Math.random() * canvas.width
          node.targetY = Math.random() * canvas.height
        }

        if (!prefersReducedMotion) {
          node.x += (dx * 0.002 + node.vx) * 0.5
          node.y += (dy * 0.002 + node.vy) * 0.5
        }

        // Wrap around edges
        if (node.x < -50) node.x = canvas.width + 50
        if (node.x > canvas.width + 50) node.x = -50
        if (node.y < -50) node.y = canvas.height + 50
        if (node.y > canvas.height + 50) node.y = -50
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.15)'
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.hypot(dx, dy)

          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(45, 212, 191, 0.4)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
