import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const bookingUrl = 'https://bookings12.rmscloud.com/Search/Index/EBF23A147D0A35BB/1/'
const diningUrl = 'https://www.brightvelo.com.au/basils'
const contactUrl = 'https://www.brightvelo.com.au/contact-bright-cycling-hotel'

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-ridge hero-ridge-back" />
        <div className="hero-ridge hero-ridge-front" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Bright Velo concept homepage">
            <span>BRIGHT</span><span>VELO</span>
          </a>
          <nav id="site-menu" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
            <a href="#stay" onClick={closeMenu}>Stay</a>
            <a href="#ride" onClick={closeMenu}>Ride</a>
            <a href="#gather" onClick={closeMenu}>Gather</a>
            <a href={diningUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Basils</a>
          </nav>
          <a className="header-book" href={bookingUrl} target="_blank" rel="noreferrer">Book a stay <Arrow /></a>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            <i /><i />
          </button>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Bright, Victoria · High Country</p>
          <h1>Stay in the<br /><em>rhythm</em> of the ride.</h1>
          <p className="hero-copy">A considered base for big climbs, long lunches and unhurried weekends in the mountains.</p>
          <div className="hero-actions">
            <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Arrow /></a>
            <a className="text-link text-link-light" href="#stay">Discover the hotel <span>↓</span></a>
          </div>
        </div>

        <div className="hero-foot">
          <span>Designed for the ride out<br />and the return home.</span>
          <span className="hero-index">01 / 04</span>
        </div>
      </section>

      <section className="intro section-pad" id="stay">
        <div className="section-label">The hotel</div>
        <div className="intro-main">
          <p className="kicker">A smaller kind of grand.</p>
          <h2>For people who plan the day around the <em>good part.</em></h2>
          <p className="intro-copy">Wake up in the centre of Bright. Roll out to the high country. Come back to a proper shower, a generous bed, a place to put your feet up — and a table worth staying in for.</p>
          <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">Find your room <Arrow /></a>
        </div>
        <div className="intro-stamp" aria-label="High Country, Victoria">High<br />Country<br /><span>VIC</span></div>
      </section>

      <section className="room-grid" aria-label="Hotel experiences">
        <article className="room-card room-card-stay">
          <div className="room-art art-room" />
          <div className="room-card-top"><span>01</span><span>Rest well</span></div>
          <div className="room-card-bottom"><h3>Rooms made<br />for recovery.</h3><a href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Find a room">Explore <Arrow /></a></div>
        </article>
        <article className="room-card room-card-table">
          <div className="room-art art-table" />
          <div className="room-card-top"><span>02</span><span>Eat slowly</span></div>
          <div className="room-card-bottom"><h3>Basils, after<br />the last descent.</h3><a href={diningUrl} target="_blank" rel="noreferrer" aria-label="Visit Basils dining">Meet Basils <Arrow /></a></div>
        </article>
      </section>

      <section className="ride-section section-pad" id="ride">
        <div className="ride-visual" aria-hidden="true"><div className="road road-one" /><div className="road road-two" /><div className="sun" /></div>
        <div className="ride-content">
          <div className="section-label">The reason</div>
          <p className="kicker">Ride further.</p>
          <h2>Take the long way<br />back to <em>Bright.</em></h2>
          <p>Road, gravel, trail or a beautifully lazy day off the bike. Start with local knowledge and end with everything in the right place.</p>
          <ul>
            <li><span>01</span> Secure bike room &amp; wash-down</li>
            <li><span>02</span> Space to reset between rides</li>
            <li><span>03</span> High Country on your doorstep</li>
          </ul>
          <a className="button button-dark" href={contactUrl} target="_blank" rel="noreferrer">Plan a riding stay <Arrow /></a>
        </div>
      </section>

      <section className="gather-section" id="gather">
        <div className="gather-copy">
          <p className="eyebrow">For groups &amp; good stories</p>
          <h2>Bring your people.<br /><em>We’ll make room.</em></h2>
          <p>From a small crew escaping for the weekend to a fully planned cycling experience, start with a conversation and leave the moving parts to us.</p>
          <a className="button button-olive" href={contactUrl} target="_blank" rel="noreferrer">Start a group enquiry <Arrow /></a>
        </div>
        <div className="gather-art" aria-hidden="true"><div className="gather-sun" /><div className="gather-frame" /><span>BRIGHT<br />VELO</span></div>
      </section>

      <section className="proof section-pad">
        <p className="kicker">The return is part of the ritual.</p>
        <div className="proof-grid">
          <h2>Less rush.<br /><em>More story.</em></h2>
          <blockquote>“The day doesn’t end when the ride does.”<span>— Bright Velo concept</span></blockquote>
          <p>We have deliberately left the booking engine where it belongs and created a calmer path to it: one that makes the stay feel as considered as the destination.</p>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top"><span>BRIGHT</span><span>VELO</span></a>
        <div><p>High Country, Victoria</p><a href={bookingUrl} target="_blank" rel="noreferrer">Book a stay <Arrow /></a></div>
        <div><p>Concept preview</p><span>Original layout &amp; placeholder imagery<br />Content pending client approval</span></div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
