import { GOLD, STATS } from '../assets/constants'

export default function Stats() {
  return (
    <section className="stats-grid" aria-label="Extuse Me portfolio statistics">
      {STATS.map(({ number, label }, i) => (
        <div key={i} className="stats-item">
          <div className="stats-number" style={{ fontWeight: 800, color: GOLD, letterSpacing: -1 }}>{number}</div>
          <div className="stats-label" style={{ color: 'rgba(255,255,255,.68)', marginTop: 4, letterSpacing: 2, textTransform: 'uppercase' }}>{label}</div>
        </div>
      ))}
    </section>
  )
}
