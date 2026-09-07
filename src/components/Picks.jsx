import { useState, useEffect, useRef, useCallback } from 'react'
import { GOLD, PICKS } from '../assets/constants'

export default function Picks() {
  const [hovered, setHovered] = useState(null)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timerRef = useRef(null)

  // Detect mobile/tablet
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const goTo = useCallback((idx) => {
    setCurrent((idx + PICKS.length) % PICKS.length)
  }, [])

  // Auto-play every 5 seconds on mobile
  useEffect(() => {
    if (!isMobile) return
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % PICKS.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [isMobile])

  // Reset timer on manual swipe/dot tap
  const resetTimer = useCallback((idx) => {
    clearInterval(timerRef.current)
    goTo(idx)
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % PICKS.length)
    }, 5000)
  }, [goTo])

  // Touch swipe support
  const touchStartX = useRef(null)
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) resetTimer(diff > 0 ? current + 1 : current - 1)
    touchStartX.current = null
  }

  const card = (p, i, extra = {}) => (
    <div
      key={i}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      style={{
        padding: 20,
        background: '#0a0a12',
        borderRadius: 12,
        border: `.5px solid ${hovered === i ? 'rgba(240,220,130,.18)' : 'rgba(255,255,255,.05)'}`,
        transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all .35s cubic-bezier(.16,1,.3,1)',
        cursor: 'pointer',
        ...extra,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{p.title}</div>
        <div style={{ fontSize: 12, color: GOLD, fontWeight: 600, whiteSpace: 'nowrap' }}>{p.rating}</div>
      </div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.68)' }}>{p.meta}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.68)', marginTop: 10, paddingLeft: 10, borderLeft: '2px solid rgba(240,220,130,.22)', lineHeight: 1.7 }}>{p.quote}</div>
    </div>
  )

  return (
    <section id="picks" className="section-container">
      <div className="section-badge">What to watch</div>
      <h2 className="section-title">My movie picks</h2>

      {isMobile ? (
        /* ── Mobile / Tablet: Auto-play Carousel ── */
        <div>
          {/* Slide window */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ position: 'relative', overflow: 'hidden', borderRadius: 12 }}
          >
            {/* Slide track */}
            <div
              style={{
                display: 'flex',
                transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
                transform: `translateX(calc(-${current * 100}%))`,
              }}
            >
              {PICKS.map((p, i) =>
                card(p, i, { minWidth: '100%', boxSizing: 'border-box' })
              )}
            </div>
          </div>


        </div>
      ) : (
        /* ── Desktop: original grid ── */
        <div className="picks-grid">
          {PICKS.map((p, i) => card(p, i))}
        </div>
      )}
    </section>
  )
}
