import { GOLD, FILMS_1, FILMS_2 } from '../assets/constants'

function MarqueeRow({ films, reverse }) {
  const items = [...films, ...films]
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div className={reverse ? 'marquee-track-r' : 'marquee-track-l'} style={{ display: 'flex', gap: 14, whiteSpace: 'nowrap', marginTop: reverse ? 12 : 0 }}>
        {items.map((film, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', border: '.5px solid rgba(255,255,255,.07)', borderRadius: 99, flexShrink: 0 }}>
            <span style={{ color: GOLD, fontSize: 14 }}>🎬</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: 1, textTransform: 'uppercase' }}>{film}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div style={{ padding: '48px 0 36px', overflow: 'hidden' }}>
      <MarqueeRow films={FILMS_1} reverse={false} />
      <MarqueeRow films={FILMS_2} reverse={true} />
    </div>
  )
}
