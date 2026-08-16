import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import FeatureStrip from './components/FeatureStrip'
import Stats from './components/Stats'
import Marquee from './components/Marquee'
import Works from './components/Works'
import Templates from './components/Templates'
import Picks from './components/Picks'
import Collab from './components/Collab'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div style={{ background: '#06060a', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <FeatureStrip />
      <Marquee />
      <Stats />
      <Works />
      <Templates />
      <Picks />
      <Collab />
      <Footer />
    </div>
  )
}
