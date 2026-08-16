import { useState } from 'react'
import { GOLD, BG } from '../assets/constants'

export default function Collab() {
  const [hover, setHover] = useState(false)

  return (
    <section id="collab" className="collab-container" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle,rgba(240,220,130,.04),transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(240,220,130,.4)', textTransform: 'uppercase', marginBottom: 16 }}>
        Let's create together
      </div>
      <h2 style={{ fontSize: 'clamp(28px,6vw,68px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, marginBottom: 14, margin: '0 0 14px 0' }}>
        Got a project?<br />
        Let's make it <em style={{ color: GOLD, fontStyle: 'italic', fontWeight: 300 }}>cinematic.</em>
      </h2>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,.28)', maxWidth: 360, margin: '0 auto 30px', lineHeight: 1.8 }}>
        Open for collabs, client work, and anything film-related that needs a creative touch.
      </div>
      <a
        href="https://www.instagram.com/extuse_me?igsh=MWgweDl0aGJlamhjcQ=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Collaborate with Extuse Me on Instagram"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ padding: '14px 44px', background: GOLD, color: BG, border: 'none', borderRadius: 99, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transform: hover ? 'scale(1.04)' : 'scale(1)', boxShadow: hover ? '0 0 40px rgba(240,220,130,.2)' : 'none', transition: 'all .3s', textDecoration: 'none', display: 'inline-block' }}>
        ✉ Collab with me
      </a>
    </section>
  )
}
