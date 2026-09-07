import { useEffect, useRef, useState } from 'react'
import { GOLD, BG } from '../assets/constants'

function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pts = useRef([])
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    pts.current = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r:  Math.random() * 1.4 + 0.3,
      a:  Math.random() * 0.5 + 0.1,
    }))

    mouse.current = { x: canvas.width / 2, y: canvas.height / 2 }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.parentElement.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouse.current

      pts.current.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        const dx = p.x - mx, dy = p.y - my
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 110) { p.x += (dx / d) * 0.4; p.y += (dy / d) * 0.4 }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240,220,130,${p.a})`
        ctx.fill()
      })

      for (let i = 0; i < pts.current.length; i++) {
        for (let j = i + 1; j < pts.current.length; j++) {
          const dx = pts.current[i].x - pts.current[j].x
          const dy = pts.current[i].y - pts.current[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 95) {
            ctx.beginPath()
            ctx.moveTo(pts.current[i].x, pts.current[i].y)
            ctx.lineTo(pts.current[j].x, pts.current[j].y)
            ctx.strokeStyle = `rgba(240,220,130,${(1 - d / 95) * 0.07})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

const words = [
  { text: 'Cinema',   delay: '.25s', suffix: null },
  { text: 'is not',   delay: '.36s', suffix: null },
  { text: 'just a ',  delay: '.47s', suffix: 'hobby.' },
]

export default function Hero() {
  const [btnHover, setBtnHover] = useState([false, false])

  const setHover = (i, val) => setBtnHover(prev => prev.map((v, idx) => idx === i ? val : v))

  return (
    <div className="hero-container" style={{ position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 2 }}>

        <div style={{ fontSize: 10, letterSpacing: 5, color: 'rgba(240,220,130,.5)', textTransform: 'uppercase', marginBottom: 22, animation: 'fadeUp .8s .3s forwards', opacity: 0 }}>
          Film · Memes · Creative
        </div>

        <h1 style={{ fontSize: 'clamp(40px,8.5vw,108px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -1, marginBottom: 24, margin: 0, padding: 0 }}>
          {words.map(({ text, delay, suffix }, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
              <span style={{ display: 'inline-block', transform: 'translateY(110%)', animation: `slideUp .9s ${delay} forwards cubic-bezier(.16,1,.3,1)` }}>
                {text}
                {suffix && <em style={{ color: GOLD, fontStyle: 'italic', fontWeight: 300 }}>{suffix}</em>}
              </span>
            </div>
          ))}
        </h1>

        <div style={{ fontSize: 15, color: 'rgba(255,255,255,.68)', lineHeight: 1.8, margin: '0 auto 30px', maxWidth: 420, animation: 'fadeUp .8s 1s forwards', opacity: 0 }}>
          Cinema through memes, edits, and unforgettable scenes
        </div>

        <div className="hero-buttons" style={{ display: 'flex', gap: 12, justifyContent: 'center', animation: 'fadeUp .8s 1.2s forwards', opacity: 0 }}>
          <a href="#works"
            onMouseEnter={() => setHover(0, true)}
            onMouseLeave={() => setHover(0, false)}
            style={{ padding: '13px 32px', background: GOLD, color: BG, border: 'none', borderRadius: 99, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transform: btnHover[0] ? 'scale(1.04)' : 'scale(1)', transition: 'transform .2s', textDecoration: 'none' }}>
            ▶ See my work
          </a>
          <a href="#templates"
            onMouseEnter={() => setHover(1, true)}
            onMouseLeave={() => setHover(1, false)}
            style={{ padding: '13px 32px', background: 'transparent', color: btnHover[1] ? '#fff' : 'rgba(255,255,255,.55)', border: `1px solid ${btnHover[1] ? 'rgba(255,255,255,.4)' : 'rgba(255,255,255,.14)'}`, borderRadius: 99, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .25s', textDecoration: 'none' }}>
            Free templates
          </a>
        </div>

      </div>
    </div>
  )
}
