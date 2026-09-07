import { useState } from 'react'
import { GOLD, WORKS, TYPE_LABELS } from '../assets/constants'

const FILTERS = [
  { key: 'all',    label: 'All'         },
  { key: 'cut',    label: 'Movie'  },
  { key: 'song', label: 'Song'     },
  { key: 'meme',   label: 'Memes'       },
  { key: 'client', label: 'Clients' },
]

function WorkCard({ work, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderRadius: 12, overflow: 'hidden', background: '#0e0e16', border: `.5px solid ${hovered ? 'rgba(240,220,130,.25)' : 'rgba(255,255,255,.05)'}`, transform: hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)', transition: 'all .4s cubic-bezier(.16,1,.3,1)', cursor: 'pointer', animation: `cardIn .5s ${delay}s ease forwards`, opacity: 0 }}>
      <div style={{ width: '100%', aspectRatio: work.type === 'meme' ? '4/5' : '1/1', background: work.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, position: 'relative', overflow: 'hidden' }}>
        {work.image
          ? <img src={work.image} alt={`${work.name} ${TYPE_LABELS[work.type].toLowerCase()} thumbnail by Extuse Me`} loading="lazy" width={work.type === 'meme' ? 4 : 1} height={work.type === 'meme' ? 5 : 1} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform .4s cubic-bezier(.16,1,.3,1)' }} />
          : <span>{work.icon}</span>
        }
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(6, 6, 10, 0.4)', opacity: hovered ? 1 : 0, transition: 'opacity .35s ease', pointerEvents: 'none' }} />
      </div>
      <div style={{ padding: '10px 12px 14px' }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#fff' }}>{work.name}</div>
        {Boolean(work.sub && work.sub.trim()) && (
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)', marginTop: 3, lineHeight: 1.4 }}>{work.sub}</div>
        )}
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.22)', marginTop: (work.sub && work.sub.trim()) ? 5 : 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 3, height: 3, borderRadius: '50%', background: GOLD, opacity: .6 }} />
          {TYPE_LABELS[work.type]}
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all'
    ? WORKS.filter(w => w.type !== 'client' && w.type !== 'meme')
    : WORKS.filter(w => w.type === filter)

  return (
    <section id="works" className="section-container">
      <div className="section-badge">My work</div>
      <h2 className="section-title" style={{ marginBottom: 12 }}>Recent works</h2>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, width: '100%', marginBottom: 24 }}>
        These are some of my recent works. I have a strong network of <strong style={{ color: GOLD, fontWeight: 400, fontStyle: 'italic' }}>100+ Fx pages and troll pages across Kerala</strong>, allowing me to provide effective promotions at competitive rates. I focus on choosing the right pages for each campaign to ensure <strong style={{ color: GOLD, fontWeight: 400 , fontStyle: 'italic' }}>good reach, engagement, and maximum visibility</strong> for my clients.
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {FILTERS.map(({ key, label }) => (
          <button key={key} onClick={() => setFilter(key)} style={{ fontSize: 11, padding: '7px 18px', borderRadius: 99, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .25s', background: filter === key ? 'rgba(240,220,130,.12)' : 'transparent', border: filter === key ? '.5px solid rgba(240,220,130,.4)' : '.5px solid rgba(255,255,255,.1)', color: filter === key ? GOLD : 'rgba(255,255,255,.3)' }}>
            {label}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filtered.map((w, i) => <WorkCard key={w.name + filter} work={w} delay={i * 0.06} />)}
      </div>
    </section>
  )
}
