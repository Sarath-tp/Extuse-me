import { GOLD, STATS } from '../assets/constants'

export default function Stats() {
  return (
    <div className="stats-grid">
      {STATS.map(({ number, label }, i) => (
        <div key={i} className="stats-item">
          <div className="stats-number" style={{ fontWeight: 800, color: GOLD, letterSpacing: -1 }}>{number}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,.22)', marginTop: 4, letterSpacing: 2, textTransform: 'uppercase' }}>{label}</div>
        </div>
      ))}
    </div>
  )
}
