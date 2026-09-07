import { useState, useEffect } from 'react'
import { GOLD, BG, SOCIAL_LINKS } from '../assets/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [btnHover, setBtnHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`} aria-label="Primary navigation" style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(6,6,10,.95)' : BG,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: '.5px solid rgba(240,220,130,.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all .4s',
    }}>
      <a href="/" aria-label="Extuse Me home" style={{ fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: 3, textTransform: 'uppercase', textDecoration: 'none' }}>
        extuse me
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Collab with Extuse Me on Instagram"
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          fontSize: 11, color: btnHover ? BG : GOLD,
          border: '1px solid rgba(240,220,130,.35)',
          padding: '8px 20px', borderRadius: 99, cursor: 'pointer',
          background: btnHover ? GOLD : 'transparent',
          fontFamily: 'inherit', letterSpacing: .5, transition: 'all .3s',
          textDecoration: 'none', display: 'inline-block'
        }}>
        Collab →
      </a>
    </nav>
    </header>
  )
}
