import { useState } from 'react'
import { GOLD } from '../assets/constants'

const LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/extuse_me?igsh=MWgweDl0aGJlamhjcQ==' },
  { label: 'Telegram',  href: 'https://t.me/Tintujc' },
  { label: 'YouTube',   href: 'https://youtube.com/@talesoftintu?si=iYCQ71-T9wrwBzvD' },
]

export default function Footer() {
  const [hovered, setHovered] = useState(null)

  return (
    <footer className="footer-container" style={{ borderTop: '.5px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: 3, textTransform: 'uppercase' }}>extuse me</div>
      <div style={{ display: 'flex', gap: 22 }}>
        {LINKS.map(({ label, href }, i) => (
          <a key={i} href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Extuse Me on ${label}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ fontSize: 11, color: hovered === i ? GOLD : 'rgba(255,255,255,.22)', textDecoration: 'none', transition: 'color .2s' }}>
            {label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.1)' }}>© 2025 extuse me</div>
    </footer>
  )
}
