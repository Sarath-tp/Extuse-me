import { useState, useEffect } from 'react'
import { GOLD, BG } from '../assets/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [btnHover, setBtnHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`} style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(6,6,10,.95)' : BG,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: '.5px solid rgba(240,220,130,.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all .4s',
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: 3, textTransform: 'uppercase' }}>
        extuse me
      </div>
      <a
        href="https://www.instagram.com/extuse_me?igsh=MWgweDl0aGJlamhjcQ=="
        target="_blank"
        rel="noopener noreferrer"
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
  )
}
