import { useState } from 'react'
import { GOLD, SOCIAL_LINKS } from '../assets/constants'

const LINKS = [
  { label: 'Instagram', href: SOCIAL_LINKS.instagram },
  { label: 'Telegram',  href: SOCIAL_LINKS.telegram },
  { label: 'YouTube',   href: SOCIAL_LINKS.youtube },
]

export default function Footer() {
  const [hovered, setHovered] = useState(null)

  return (
    <footer className="footer-container">
      <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: 3, textTransform: 'uppercase' }}>extuse me</div>
      <div style={{ display: 'flex', gap: 22 }}>
        {LINKS.map(({ label, href }, i) => (
          <a key={i} href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Extuse Me on ${label}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ fontSize: 11, color: hovered === i ? GOLD : 'rgba(255,255,255,.68)', textDecoration: 'none', transition: 'color .2s' }}>
            {label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)' }}>© 2025 extuse me</div>
    </footer>
  )
}
