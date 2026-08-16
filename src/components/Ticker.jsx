import { BG } from '../assets/constants'
import districtLogo from '../assets/district.png'
import primeLogo from '../assets/prime.png'
import netflixLogo from '../assets/netflix.png'
import zee5Logo from '../assets/zee5.png'
import hotstarLogo from '../assets/jio hotstar.png'
import tataLogo from '../assets/tata.png'

const ITEMS = ['MEMES & TROLLS', 'FILM EDITS', 'AESTHETIC EDITS', 'BRAND PROMOTIONS', 'REEL EDITS', 'CLIENT WORKS']

function BrandLogos() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
      {/* District Logo */}
      <img src={districtLogo} alt="District" style={{ height: 42, width: 'auto', opacity: 0.8, filter: 'brightness(1.1)' }} />

      {/* Prime Video Logo */}
      <img src={primeLogo} alt="Prime Video" style={{ height: 40, width: 'auto', opacity: 0.8, filter: 'brightness(1.1)' }} />

      {/* Netflix Logo */}
      <img src={netflixLogo} alt="Netflix" style={{ height: 42, width: 'auto', opacity: 0.85, filter: 'brightness(1.1)' }} />

      {/* ZEE5 Logo */}
      <img src={zee5Logo} alt="ZEE5" style={{ height: 42, width: 'auto', opacity: 0.8, filter: 'brightness(1.1)' }} />

      {/* JioHotstar Logo */}
      <img src={hotstarLogo} alt="JioHotstar" style={{ height: 42, width: 'auto', opacity: 0.8, filter: 'brightness(1.1)' }} />

      {/* TATA Logo */}
      <img src={tataLogo} alt="TATA" style={{ height: 40, width: 'auto', opacity: 0.85, filter: 'brightness(1.1)' }} />
    </div>
  )
}

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div>
      {/* Gold Ticker Strip */}
      <div style={{ background: '#f0dc82', padding: '9px 0', overflow: 'hidden' }}>
        <div className="ticker-gold-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {doubled.map((item, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 700, color: BG, letterSpacing: 3, textTransform: 'uppercase', padding: '0 20px' }}>
              {item} <span style={{ opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Client Logos Marquee Strip at the Bottom of Ticker */}
      <div style={{ background: '#050508', borderBottom: '.5px solid rgba(255,255,255,.05)', padding: '16px 0', overflow: 'hidden', display: 'flex' }}>
        <div className="ticker-brand-track" style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', minWidth: 'max-content' }}>
          <BrandLogos />
          <BrandLogos />
          <BrandLogos />
        </div>
      </div>
    </div>
  )
}
