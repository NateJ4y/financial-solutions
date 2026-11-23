import { ContactBand, Journey, ServiceCards } from './components/sections'
import { VehicleExplorer } from './components/finance-controls'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src="/assets/hero.jpg"
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-shade"></div>
        <div className="wrap hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line"></span> SOUTH AFRICAN VEHICLE FINANCE
          </p>
          <h1>
            Your next chapter.
            <br />
            <em>In the driver’s seat.</em>
          </h1>
          <p className="lead">
            The right vehicle can open up a world of possibility. Let’s make the
            finance journey feel clear, personal and considered.
          </p>
          <div className="actions">
            <a
              className="button"
              href="https://wa.me/27833032807?text=Hi%20Call%20Me%20Finance%20Solutions%2C%20I%E2%80%99d%20like%20to%20discuss%20vehicle%20finance."
            >
              Let’s talk finance
            </a>
            <a className="button outline" href="/services/">
              Explore solutions
            </a>
          </div>
        </div>
        <a
          className="scroll-cue"
          href="#welcome"
          aria-label="Scroll to discover"
        >
          <span></span> SCROLL TO DISCOVER
        </a>
      </section>
      <div className="trust-strip">
        <div className="wrap">
          <span>VEHICLE FINANCE</span>
          <i></i>
          <span>PRIVATE-TO-PRIVATE</span>
          <i></i>
          <span>REFINANCING</span>
          <i></i>
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
            <h2>
              More than a vehicle.
              <br />
              <em>A feeling.</em>
            </h2>
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
              <a className="button outline" href="/about/">
                Get to know us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>
                Finance that fits <em>your life.</em>
              </h2>
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
            <h2>
              Know your next step.
              <br />
              <em>Before you take it.</em>
            </h2>
            <p>
              We’ll help you understand the information you may need and the
              questions worth asking. Every finance application is assessed on
              its own merits, so a conversation is the best place to begin.
            </p>
            <div className="actions">
              <a className="button" href="/apply/">
                Prepare for an enquiry
              </a>
              <a className="button outline" href="/faq/">
                Read the FAQs
              </a>
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
              <strong>
                A little clarity
                <br />
                goes a long way.
              </strong>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
