import { ContactBand, Journey, ServiceCards } from './components/sections'
import { VehicleExplorer } from './components/finance-controls'

export default function HomePage() {
  return (
    <>
      <section className="launch-hero" aria-labelledby="hero-title">
        <div className="launch-glow launch-glow-one" aria-hidden="true" />
        <div className="launch-glow launch-glow-two" aria-hidden="true" />
        <div className="wrap launch-grid">
          <div className="launch-copy">
            <p className="eyebrow launch-eyebrow">
              <span className="eyebrow-line" />
              SOUTH AFRICAN VEHICLE FINANCE
            </p>
            <h1 id="hero-title">
              Your next chapter.
              <br />
              <em>In the driver’s seat.</em>
            </h1>
            <p className="launch-lead">
              The right vehicle can open up a world of possibility. Let’s make
              the finance journey feel clear, personal and considered.
            </p>
            <div className="actions launch-actions">
              <a
                className="button"
                href="https://wa.me/27833032807?text=Hi%20Call%20Me%20Finance%20Solutions%2C%20I%E2%80%99d%20like%20to%20discuss%20vehicle%20finance."
              >
                Let’s talk finance <span aria-hidden="true">↗</span>
              </a>
              <a className="button outline" href="/services/">
                Explore solutions <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="launch-proof" aria-label="Our approach">
              <div className="launch-proof-mark" aria-hidden="true">CM</div>
              <div>
                <strong>A more considered finance journey</strong>
                <span>Personal guidance. Clear next steps.</span>
              </div>
            </div>
          </div>

          <div className="launch-visual">
            <div className="launch-image-frame">
              <img
                className="launch-image"
                src="/assets/hero.jpg"
                alt="Premium vehicle ready for the road"
                width="1920"
                height="1080"
                fetchPriority="high"
                decoding="async"
              />
              <div className="launch-image-shade" />
              <div className="launch-image-label">
                <span>THE ROAD AHEAD</span>
                <span>01 — 03</span>
              </div>
            </div>
            <div className="launch-float-card">
              <span className="launch-card-icon" aria-hidden="true">↗</span>
              <div>
                <span>YOUR JOURNEY, YOUR WAY</span>
                <strong>Move forward<br />with confidence.</strong>
              </div>
            </div>
            <div className="launch-orbit launch-orbit-one" aria-hidden="true" />
            <div className="launch-orbit launch-orbit-two" aria-hidden="true" />
          </div>
        </div>
        <a className="launch-scroll" href="#welcome">
          <span className="launch-scroll-line" />
          SCROLL TO DISCOVER
        </a>
      </section>

      <div className="trust-strip">
        <div className="wrap">
          <span>VEHICLE FINANCE</span><i />
          <span>PRIVATE-TO-PRIVATE</span><i />
          <span>REFINANCING</span><i />
          <span>PERSONAL GUIDANCE</span>
        </div>
      </div>

      <section className="section welcome-section" id="welcome">
        <div className="wrap welcome-grid">
          <div className="welcome-visual reveal">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82"
              alt="Luxury sports car on a scenic road"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <div className="image-caption">
              <span>THE ROAD AHEAD</span>
              <span>STARTS WITH A CONVERSATION</span>
            </div>
          </div>
          <div className="welcome-copy reveal">
            <p className="eyebrow">A better way to move forward</p>
            <h2>More than a vehicle.<br /><em>A feeling.</em></h2>
            <p>
              It’s the comfort of a better commute. The space for your family.
              The freedom to explore. Or the confidence to take your business
              further.
            </p>
            <p>
              At Call Me Finance Solutions, we believe the finance journey
              should feel just as considered as the destination. We offer
              personal guidance to help you understand your options and take
              your next step with confidence.
            </p>
            <div className="actions">
              <a className="button outline" href="/about/">Get to know us</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>Finance that fits <em>your life.</em></h2>
            </div>
            <p className="section-note">
              Different journeys call for different solutions. Start with the
              one that sounds right for you.
            </p>
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
            <p>
              We’ll help you understand the information you may need and the
              questions worth asking. Every finance application is assessed on
              its own merits, so a conversation is the best place to begin.
            </p>
            <div className="actions">
              <a className="button" href="/apply/">Prepare for an enquiry</a>
              <a className="button outline" href="/faq/">Read the FAQs</a>
            </div>
          </div>
          <div className="affordability-visual reveal">
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1100&q=82"
              alt="Comfortable modern vehicle interior"
              width="1100"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <div className="visual-note">
              <span>01 / PREPARE</span>
              <strong>A little clarity<br />goes a long way.</strong>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
