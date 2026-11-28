import { ContactBand, Journey, ServiceCards } from './components/sections'
import { VehicleExplorer } from './components/finance-controls'
import { whatsapp } from './content'

export default function HomePage() {
  return (
    <>
      <section className="launch-hero" aria-labelledby="hero-title">
        <div className="launch-background" aria-hidden="true">
          <img className="launch-background-image" src="/assets/hero.jpg" alt="" width="1920" height="1080" fetchPriority="high" decoding="async" />
          <div className="launch-background-shade" />
          <div className="launch-background-label">YOUR JOURNEY <span>01 — 03</span></div>
        </div>
        <div className="wrap launch-grid">
          <div className="launch-copy">
            <p className="eyebrow launch-eyebrow"><span className="eyebrow-line" /> SOUTH AFRICAN VEHICLE FINANCE</p>
            <h1 id="hero-title"><span className="hero-title-line">Your journey.</span>Our priority.</h1>
            <p className="launch-lead">
              Safe. Simple. Trusted. Helping you secure today, so you can enjoy tomorrow.
              Personal guidance for vehicle finance, private-to-private purchases and refinancing.
            </p>
            <div className="actions launch-actions">
              <a className="button" href={whatsapp()}>Let’s talk finance <span aria-hidden="true">↗</span></a>
              <a className="button outline" href="/services/">Explore solutions <span aria-hidden="true">→</span></a>
            </div>
            <div className="launch-proof" aria-label="Our promise">
              <div className="launch-proof-mark" aria-hidden="true">CM</div>
              <div><strong>Safe. Secure. Confidential.</strong><span>Your journey matters. We’re here to help.</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap">
          <span>CARS</span><i aria-hidden="true" />
          <span>BAKKIES</span><i aria-hidden="true" />
          <span>BIKES</span><i aria-hidden="true" />
          <span>TRAILERS</span><i aria-hidden="true" />
          <span>CARAVANS</span><i aria-hidden="true" />
          <span>BOATS</span>
        </div>
      </div>

      <section className="section welcome-section" id="welcome">
        <div className="wrap welcome-grid">
          <div className="welcome-visual reveal">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82" alt="Premium vehicle on an open road" width="1200" height="900" loading="lazy" decoding="async" />
            <div className="image-caption"><span>THE ROAD AHEAD</span><span>STARTS WITH A CONVERSATION</span></div>
          </div>
          <div className="welcome-copy reveal">
            <p className="eyebrow">Real people. Real solutions.</p>
            <h2>More than a vehicle.<br /><em>A feeling.</em></h2>
            <p>It’s the comfort of a better commute. The space for your family. The freedom to explore. Or the confidence to take your business further.</p>
            <p>At Call Me Finance Solutions, we believe the finance journey should feel just as considered as the destination. We offer personal guidance to help you understand your options and take your next step with confidence.</p>
            <div className="actions"><a className="button outline" href="/about/">Get to know us</a></div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">How we can help</p><h2>Finance that fits <em>your life.</em></h2></div>
            <p className="section-note">Different journeys call for different solutions. Start with the one that sounds right for you.</p>
          </div>
          <ServiceCards showLinks />
        </div>
      </section>
      <VehicleExplorer />
      <Journey />
      <section className="section affordability-section">
        <div className="wrap affordability-grid">
          <div className="affordability-copy reveal">
            <p className="eyebrow">Confidence starts with clarity</p>
            <h2>Know your next step.<br /><em>Before you take it.</em></h2>
            <p>We’ll help you understand the information you may need and the questions worth asking. Every finance application is assessed on its own merits, so a conversation is the best place to begin.</p>
            <div className="actions"><a className="button" href="/apply/">Prepare for an enquiry</a><a className="button outline" href="/faq/">Read the FAQs</a></div>
          </div>
          <div className="affordability-visual reveal">
            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1100&q=82" alt="Comfortable modern vehicle interior" width="1100" height="900" loading="lazy" decoding="async" />
            <div className="visual-note"><span>01 / PREPARE</span><strong>A little clarity<br />goes a long way.</strong></div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
