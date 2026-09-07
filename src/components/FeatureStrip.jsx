import { useState } from 'react'
import { GOLD } from '../assets/constants'
import titleCardImg from '../assets/title card.jpg'

export default function FeatureStrip() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <section className="feature-strip" aria-labelledby="feature-title">

      {/* Image panel */}
      <div className="feature-image-panel">
        <img src={titleCardImg} alt="Extuse Me cinema title card on the big screen" loading="lazy" width="16" height="9" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 50%,rgba(0,0,0,.2),rgba(10,10,20,.6))' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 9, letterSpacing: 3, color: 'rgba(240,220,130,.85)', textTransform: 'uppercase', border: '.5px solid rgba(240,220,130,.3)', padding: '4px 10px', borderRadius: 99, zIndex: 2, background: 'rgba(15,15,28,.7)', backdropFilter: 'blur(4px)' }}>
          Big Screen Moment
        </div>
      </div>

      {/* Text panel */}
      <div className="feature-text-panel">
        {/* <div style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(240,220,130,.45)', textTransform: 'uppercase' }}>What I do</div> */}
        <h2 id="feature-title" style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1, lineHeight: 1.15 }}>
          Every frame has a Story
        </h2>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,.68)', lineHeight: 1.85 }}>
         There are moments every movie lover dreams of, and this is one of mine. Seeing my logo on the big screen and knowing I had the opportunity to be a part of this film is a feeling I'll never forget. As someone who genuinely loves cinema, it's difficult to put into words what this moment means to me. It's more than just recognition. It's a reminder that passion, creativity, and consistency can lead to incredible opportunities. I'm truly grateful to everyone who made this possible, and I hope this is just the beginning of many more unforgettable experiences in the world of cinema.
        </div>
        <a href="#works"
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, color: GOLD, border: '.5px solid rgba(240,220,130,.3)', padding: '8px 18px', borderRadius: 99, cursor: 'pointer', width: 'fit-content', background: ctaHover ? 'rgba(240,220,130,.08)' : 'transparent', transition: 'all .25s', textDecoration: 'none' }}>
          Explore my work →
        </a>
      </div>

    </section>
  )
}
