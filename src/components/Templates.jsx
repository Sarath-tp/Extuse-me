import { useState, useEffect } from 'react'
import { GOLD, TEMPLATES } from '../assets/constants'

const Card = ({ t, i, hovered, setHovered, style = {} }) => (
  <a
    href={t.link || undefined}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Download ${t.name} free editing assets`}
    onMouseEnter={() => setHovered(i)}
    onMouseLeave={() => setHovered(null)}
    style={{
      borderRadius: 12,
      overflow: 'hidden',
      border: `.5px solid ${hovered === i ? 'rgba(240,220,130,.25)' : 'rgba(255,255,255,.06)'}`,
      transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'all .35s cubic-bezier(.16,1,.3,1)',
      cursor: t.link ? 'pointer' : 'default',
      display: 'block',
      textDecoration: 'none',
      flexShrink: 0,
      ...style,
    }}
  >
    <div style={{ aspectRatio: '1', background: '#0e0e16', position: 'relative', overflow: 'hidden' }}>
      <img src={t.image} alt={`Free ${t.name} download for video editing`} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,10,.8)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: hovered === i ? 1 : 0, transition: 'opacity .3s' }}>
        <div style={{ fontSize: 24, color: GOLD }}>⬇</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)' }}>Download free</div>
      </div>
    </div>
    <div style={{ padding: '9px 12px', background: '#0b0b12', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{t.name}</div>
      <div style={{ fontSize: 10, background: 'rgba(240,220,130,.1)', color: GOLD, padding: '3px 10px', borderRadius: 99, border: '.5px solid rgba(240,220,130,.2)' }}>Free</div>
    </div>
  </a>
)

export default function Templates() {
  const [hovered, setHovered] = useState(null)

  // Reset hover when user leaves the tab/window (e.g. clicked a link)
  useEffect(() => {
    const reset = () => setHovered(null)
    window.addEventListener('blur', reset)
    document.addEventListener('visibilitychange', reset)
    return () => {
      window.removeEventListener('blur', reset)
      document.removeEventListener('visibilitychange', reset)
    }
  }, [])

  return (
    <section id="templates" className="section-container">
      <div style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(240,220,130,.5)', textTransform: 'uppercase', marginBottom: 10 }}>Free Resources</div>
      <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 700, letterSpacing: -2, marginBottom: 28, margin: '0 0 28px 0' }}>Editing Templates &amp; Stuff</h2>

      {/* Desktop: 3-column grid */}
      <div className="templates-grid templates-desktop">
        {TEMPLATES.map((t, i) => (
          <Card key={i} t={t} i={i} hovered={hovered} setHovered={setHovered} />
        ))}
      </div>

      {/* Mobile: horizontal peek scroll */}
      <div className="templates-mobile-scroll">
        {TEMPLATES.map((t, i) => (
          <Card key={i} t={t} i={i} hovered={hovered} setHovered={setHovered} style={{ width: '78%' }} />
        ))}
      </div>
    </section>
  )
}
