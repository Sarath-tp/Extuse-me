import { useState } from 'react'
import { GOLD } from '../assets/constants'
import extuseMeImg from '../assets/extuse_me.jpg'

const TAGS = ['🎥 Cinema lover', '✏️ Content creator', '🖼 Memer']

export default function About() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="about" className="about-grid" style={{ alignItems: 'center' }}>

      {/* Text */}
      <div>
        <div style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(240,220,130,.5)', textTransform: 'uppercase', marginBottom: 14 }}>
          Who I am
        </div>
        <h2 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, marginBottom: 14, margin: '0 0 14px 0' }}>
          Hi, I'm <span style={{ color: GOLD }}>Extuse me</span> 👋
        </h2>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,.35)', lineHeight: 1.9, marginBottom: 20 }}>
          I'm an amateur content creator, meme maker, and someone who breathes cinema. I started this page in <em style={{ color: GOLD, fontStyle: 'italic' }}>2021</em>, beginning with simple edits driven by nothing more than a love for movies. Over the years, that passion has grown into a space where I share memes, cinematic edits, posters, and creative experiments. From Malayalam classics to global hits, every piece of content comes from a place of genuine admiration for the craft of filmmaking. I believe a single shot, a perfect line, or a shared laugh can say more than words ever could, and that's exactly what I strive to capture here.
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TAGS.map((tag, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ fontSize: 11, padding: '6px 14px', borderRadius: 99, border: `.5px solid ${hovered === i ? 'rgba(240,220,130,.4)' : 'rgba(255,255,255,.1)'}`, color: hovered === i ? GOLD : 'rgba(255,255,255,.38)', cursor: 'default', transition: 'all .25s' }}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Avatar */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://www.instagram.com/extuse_me?igsh=MWgweDl0aGJlamhjcQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Extuse Me on Instagram"
          className="about-avatar-box"
          style={{ borderRadius: 20, background: 'linear-gradient(135deg,#131320,#0d0d18)', border: '1px solid rgba(240,220,130,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', animation: 'floatAnim 5s ease-in-out infinite', overflow: 'hidden', textDecoration: 'none', cursor: 'pointer' }}
        >
          <img src={extuseMeImg} alt="Sarath - Extuse Me film editor and meme creator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 16, right: 16, background: GOLD, color: '#06060a', fontSize: 10, fontWeight: 700, padding: '5px 12px', borderRadius: 99, zIndex: 2, boxShadow: '0 4px 12px rgba(0,0,0,.4)' }}>
            View Instagram
          </div>
        </a>
      </div>

    </section>
  )
}
