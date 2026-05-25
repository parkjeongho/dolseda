"use client"

import { useEffect, useRef } from "react"

const R = 37, G = 99, B = 235

function noise(x: number, y: number, t: number) {
  return (
    Math.sin(x * 1.3 + t * 0.31) * Math.cos(y * 1.1 - t * 0.23) * 0.40 +
    Math.sin(x * 2.7 - t * 0.17) * Math.cos(y * 2.3 + t * 0.29) * 0.25 +
    Math.sin(x * 0.7 + y * 0.9 + t * 0.13) * 0.20 +
    Math.cos(x * 3.8 - y * 2.9 + t * 0.09) * 0.15
  )
}

const NUM_CURVES = 22
const SEGS       = 130
const SPEED      = 0.025
const HATCH_STEP = 9

type ShapeType = "circle" | "triangle" | "square"
const SHAPES: { ox: number; oy: number; rf: number; sp: number; ph: number; type: ShapeType }[] = [
  { ox: 0.20, oy: 0.35, rf: 0.12, sp: 0.07, ph: 0.0, type: "circle"   },
  { ox: 0.78, oy: 0.60, rf: 0.10, sp: 0.05, ph: 2.1, type: "triangle" },
  { ox: 0.50, oy: 0.18, rf: 0.09, sp: 0.09, ph: 4.2, type: "square"   },
  { ox: 0.62, oy: 0.80, rf: 0.08, sp: 0.06, ph: 1.4, type: "circle"   },
  { ox: 0.14, oy: 0.72, rf: 0.07, sp: 0.08, ph: 3.0, type: "triangle" },
  { ox: 0.87, oy: 0.32, rf: 0.07, sp: 0.07, ph: 1.8, type: "square"   },
]

export default function NetworkBackground({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    let W = 0, H = 0, dpr = 1, t = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const drawCircle = (cx: number, cy: number, r: number, sp: number, ph: number) => {
      ctx.strokeStyle = `rgba(${R},${G},${B},0.38)`
      ctx.lineWidth   = 1.6
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()

      ctx.strokeStyle = `rgba(${R},${G},${B},0.18)`
      ctx.lineWidth   = 0.9
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2); ctx.stroke()

      ctx.strokeStyle = `rgba(${R},${G},${B},0.42)`
      ctx.lineWidth   = 1.1
      for (let k = 0; k < 12; k++) {
        const ang  = (k / 12) * Math.PI * 2
        const cos  = Math.cos(ang), sin = Math.sin(ang)
        const tick = k % 3 === 0 ? 11 : 5
        ctx.beginPath()
        ctx.moveTo(cx + cos * (r - tick), cy + sin * (r - tick))
        ctx.lineTo(cx + cos * r,          cy + sin * r)
        ctx.stroke()
      }

      // rotating diameter
      const a = Math.PI / 4 + t * sp * 0.3
      ctx.strokeStyle = `rgba(${R},${G},${B},0.22)`
      ctx.lineWidth   = 0.8
      ctx.beginPath()
      ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
      ctx.lineTo(cx - Math.cos(a) * r, cy - Math.sin(a) * r)
      ctx.stroke()

      ctx.fillStyle = `rgba(${R},${G},${B},0.38)`
      ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill()
    }

    const drawTriangle = (cx: number, cy: number, r: number, sp: number, ph: number) => {
      const rot = t * sp * 0.4 + ph * 0.1
      const verts = Array.from({ length: 3 }, (_, k) => ({
        x: cx + Math.cos(rot + k * (Math.PI * 2 / 3) - Math.PI / 2) * r,
        y: cy + Math.sin(rot + k * (Math.PI * 2 / 3) - Math.PI / 2) * r,
      }))

      // outer triangle
      ctx.strokeStyle = `rgba(${R},${G},${B},0.38)`
      ctx.lineWidth   = 1.6
      ctx.beginPath()
      ctx.moveTo(verts[2].x, verts[2].y)
      for (const v of verts) ctx.lineTo(v.x, v.y)
      ctx.stroke()

      // inner triangle (inverted, smaller)
      const ri = r * 0.45
      const verts2 = Array.from({ length: 3 }, (_, k) => ({
        x: cx + Math.cos(rot + Math.PI + k * (Math.PI * 2 / 3) - Math.PI / 2) * ri,
        y: cy + Math.sin(rot + Math.PI + k * (Math.PI * 2 / 3) - Math.PI / 2) * ri,
      }))
      ctx.strokeStyle = `rgba(${R},${G},${B},0.18)`
      ctx.lineWidth   = 0.9
      ctx.beginPath()
      ctx.moveTo(verts2[2].x, verts2[2].y)
      for (const v of verts2) ctx.lineTo(v.x, v.y)
      ctx.stroke()

      // midpoint tick on each side
      ctx.strokeStyle = `rgba(${R},${G},${B},0.40)`
      ctx.lineWidth   = 1.0
      for (let k = 0; k < 3; k++) {
        const a = verts[k], b = verts[(k + 1) % 3]
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
        const dx = b.x - a.x, dy = b.y - a.y
        const len = Math.sqrt(dx * dx + dy * dy) || 1
        const px = -dy / len, py = dx / len
        ctx.beginPath()
        ctx.moveTo(mx - px * 7, my - py * 7)
        ctx.lineTo(mx + px * 7, my + py * 7)
        ctx.stroke()
      }

      // inscribed circle
      const inR = r * Math.sin(Math.PI / 3) / (1 + Math.sin(Math.PI / 3)) * 0.9
      ctx.strokeStyle = `rgba(${R},${G},${B},0.14)`
      ctx.lineWidth   = 0.8
      ctx.beginPath(); ctx.arc(cx, cy, inR, 0, Math.PI * 2); ctx.stroke()

      ctx.fillStyle = `rgba(${R},${G},${B},0.38)`
      ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill()
    }

    const drawSquare = (cx: number, cy: number, r: number, sp: number, ph: number) => {
      const rot = t * sp * 0.35 + ph * 0.1
      const verts = Array.from({ length: 4 }, (_, k) => ({
        x: cx + Math.cos(rot + k * (Math.PI / 2) + Math.PI / 4) * r,
        y: cy + Math.sin(rot + k * (Math.PI / 2) + Math.PI / 4) * r,
      }))

      // outer square
      ctx.strokeStyle = `rgba(${R},${G},${B},0.38)`
      ctx.lineWidth   = 1.6
      ctx.beginPath()
      ctx.moveTo(verts[3].x, verts[3].y)
      for (const v of verts) ctx.lineTo(v.x, v.y)
      ctx.stroke()

      // inner square rotated 45°
      const ri = r * 0.55
      const verts2 = Array.from({ length: 4 }, (_, k) => ({
        x: cx + Math.cos(rot + k * (Math.PI / 2)) * ri,
        y: cy + Math.sin(rot + k * (Math.PI / 2)) * ri,
      }))
      ctx.strokeStyle = `rgba(${R},${G},${B},0.18)`
      ctx.lineWidth   = 0.9
      ctx.beginPath()
      ctx.moveTo(verts2[3].x, verts2[3].y)
      for (const v of verts2) ctx.lineTo(v.x, v.y)
      ctx.stroke()

      // L-bracket at each corner
      ctx.strokeStyle = `rgba(${R},${G},${B},0.42)`
      ctx.lineWidth   = 1.1
      for (let k = 0; k < 4; k++) {
        const v    = verts[k]
        const prev = verts[(k + 3) % 4]
        const next = verts[(k + 1) % 4]
        const arm  = 9
        const toPrev = { x: (prev.x - v.x), y: (prev.y - v.y) }
        const toNext = { x: (next.x - v.x), y: (next.y - v.y) }
        const lp = Math.sqrt(toPrev.x ** 2 + toPrev.y ** 2) || 1
        const ln = Math.sqrt(toNext.x ** 2 + toNext.y ** 2) || 1
        ctx.beginPath()
        ctx.moveTo(v.x + toPrev.x / lp * arm, v.y + toPrev.y / lp * arm)
        ctx.lineTo(v.x, v.y)
        ctx.lineTo(v.x + toNext.x / ln * arm, v.y + toNext.y / ln * arm)
        ctx.stroke()
      }

      // one diagonal
      ctx.strokeStyle = `rgba(${R},${G},${B},0.20)`
      ctx.lineWidth   = 0.8
      ctx.beginPath()
      ctx.moveTo(verts[0].x, verts[0].y)
      ctx.lineTo(verts[2].x, verts[2].y)
      ctx.stroke()

      ctx.fillStyle = `rgba(${R},${G},${B},0.38)`
      ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill()
    }

    const tick = () => {
      t += SPEED
      ctx.clearRect(0, 0, W, H)
      ctx.lineCap  = "round"
      ctx.lineJoin = "round"

      // ── Flowing sketch curves with hatching ───────────────────────
      for (let ci = 0; ci < NUM_CURVES; ci++) {
        const baseY = (ci / (NUM_CURVES - 1)) * H
        const mid   = 1 - Math.abs((ci / (NUM_CURVES - 1)) - 0.5) * 2
        const alpha = 0.07 + mid * 0.17
        const lw    = 0.35 + mid * 0.60

        const pts: { x: number; y: number }[] = []
        for (let si = 0; si <= SEGS; si++) {
          const u  = si / SEGS
          const nx = u * 6
          const ny = ci * 0.42
          const n  = noise(nx, ny, t)
          const jn = noise(nx * 4.3, ny * 3.1 + 18, t * 5) * 3.5
          pts.push({ x: u * W, y: baseY + n * H * 0.17 + jn })
        }

        ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`
        ctx.lineWidth   = lw
        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i].x + pts[i + 1].x) / 2
          const my = (pts[i].y + pts[i + 1].y) / 2
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my)
        }
        ctx.stroke()

        const hLen   = 3 + mid * 6
        const hAlpha = alpha * 0.50
        ctx.strokeStyle = `rgba(${R},${G},${B},${hAlpha})`
        ctx.lineWidth   = 0.28

        for (let si = HATCH_STEP; si < pts.length - 1; si += HATCH_STEP) {
          const p   = pts[si]
          const pn  = pts[si + 1]
          const dx  = pn.x - p.x
          const dy  = pn.y - p.y
          const len = Math.sqrt(dx * dx + dy * dy) || 1
          const px  = -dy / len
          const py  =  dx / len
          ctx.beginPath()
          ctx.moveTo(p.x - px * hLen, p.y - py * hLen)
          ctx.lineTo(p.x + px * hLen, p.y + py * hLen)
          ctx.stroke()
        }
      }

      // ── Construction shapes ───────────────────────────────────────
      for (const s of SHAPES) {
        const cx = W * s.ox + Math.sin(t * s.sp + s.ph) * W * 0.12
        const cy = H * s.oy + Math.cos(t * s.sp * 0.7 + s.ph) * H * 0.10
        const r  = W * s.rf + Math.sin(t * 0.11 + s.ph) * W * 0.014

        if (s.type === "circle")   drawCircle(cx, cy, r, s.sp, s.ph)
        if (s.type === "triangle") drawTriangle(cx, cy, r, s.sp, s.ph)
        if (s.type === "square")   drawSquare(cx, cy, r, s.sp, s.ph)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  )
}
