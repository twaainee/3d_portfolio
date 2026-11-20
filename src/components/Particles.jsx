import { twMerge } from 'tailwind-merge'
import React, { useEffect, useRef } from 'react'

function hexToRgb(hex) {
  const value = hex.replace('#', '')
  const normalized = value.length === 3 ? value.split('').map((char) => char + char).join('') : value
  const parsed = Number.parseInt(normalized, 16)
  return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255]
}

const Particles = ({
  className = '',
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = '#ffffff',
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef(null)
  const canvasContainerRef = useRef(null)
  const contextRef = useRef(null)
  const circlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const canvasSizeRef = useRef({ w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvasContainerRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !container || !context) return undefined

    const dpr = window.devicePixelRatio || 1
    const rgb = hexToRgb(color)
    contextRef.current = context
    let rafId = null
    let resizeTimeout = null

    const clearContext = () => {
      context.clearRect(0, 0, canvasSizeRef.current.w, canvasSizeRef.current.h)
    }

    const drawCircle = (circle) => {
      context.save()
      context.translate(circle.translateX, circle.translateY)
      context.beginPath()
      context.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
      context.fillStyle = `rgba(${rgb.join(', ')}, ${circle.alpha})`
      context.fill()
      context.restore()
    }

    const createCircle = () => {
      const { w, h } = canvasSizeRef.current
      return {
        x: Math.floor(Math.random() * w),
        y: Math.floor(Math.random() * h),
        translateX: 0,
        translateY: 0,
        size: Math.floor(Math.random() * 2) + size,
        alpha: 0,
        targetAlpha: Number((Math.random() * 0.6 + 0.1).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        magnetism: 0.1 + Math.random() * 4,
      }
    }

    const resizeCanvas = () => {
      const width = container.offsetWidth
      const height = container.offsetHeight
      canvasSizeRef.current = { w: width, h: height }
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initCanvas = () => {
      resizeCanvas()
      clearContext()
      circlesRef.current = Array.from({ length: quantity }, createCircle)
      circlesRef.current.forEach(drawCircle)
    }

    const animate = () => {
      clearContext()

      for (let index = circlesRef.current.length - 1; index >= 0; index -= 1) {
        const circle = circlesRef.current[index]
        const edges = [
          circle.x + circle.translateX - circle.size,
          canvasSizeRef.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSizeRef.current.h - circle.y - circle.translateY - circle.size,
        ]
        const closestEdge = Math.min(...edges)

        if (closestEdge > 20) {
          circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha)
        } else {
          circle.alpha = circle.targetAlpha * Math.max(0, closestEdge / 20)
        }

        circle.x += circle.dx + vx
        circle.y += circle.dy + vy
        circle.translateX +=
          (mouseRef.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
        circle.translateY +=
          (mouseRef.current.y / (staticity / circle.magnetism) - circle.translateY) / ease
        drawCircle(circle)

        if (
          circle.x < -circle.size ||
          circle.x > canvasSizeRef.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSizeRef.current.h + circle.size
        ) {
          circlesRef.current.splice(index, 1)
          const replacement = createCircle()
          circlesRef.current.push(replacement)
          drawCircle(replacement)
        }
      }

      rafId = window.requestAnimationFrame(animate)
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const { w, h } = canvasSizeRef.current
      const x = event.clientX - rect.left - w / 2
      const y = event.clientY - rect.top - h / 2
      if (Math.abs(x) < w / 2 && Math.abs(y) < h / 2) {
        mouseRef.current = { x, y }
      }
    }

    const handleResize = () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(initCanvas, 200)
    }

    initCanvas()
    animate()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId)
      if (resizeTimeout != null) window.clearTimeout(resizeTimeout)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      contextRef.current = null
    }
  }, [color, ease, quantity, refresh, size, staticity, vx, vy])

  return (
    <div
      {...props}
      ref={canvasContainerRef}
      className={twMerge('pointer-events-none', className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}

export default Particles
