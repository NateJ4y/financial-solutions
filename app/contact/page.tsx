export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>
            Let’s talk about
            <br />
            <em>what’s next.</em>
          </h1>
          <p className="lead">
            A question, an idea or ready to explore your options? We’d love to
            hear from you.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="wrap contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">A real conversation</p>
            <h2>
              We’re just a call <em>away.</em>
            </h2>
            <p>
              Reach the team in Vanderbijlpark, South Africa. Choose the contact
              that works for you.
            </p>
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1100&q=82"
              alt="Elegant vehicle parked in a modern setting"
              width="1100"
              height="700"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="contact-cards">
            <article className="contact-card reveal">
              <span>01 / PRIMARY CONTACT</span>
              <h3>Madeleine Roos</h3>
              <a href="tel:+27833032807" className="contact-number">
                083 303 2807
              </a>
              <a
                className="text-link"
                href="https://wa.me/27833032807?text=Hi%20Call%20Me%20Finance%20Solutions%2C%20I%E2%80%99d%20like%20to%20discuss%20vehicle%20finance."
              >
                WhatsApp Madeleine
              </a>
            </article>
            <article className="contact-card reveal">
              <span>02 / ADDITIONAL CONTACT</span>
              <h3>Speak to our team</h3>
              <a href="tel:+27832764669" className="contact-number">
                083 276 4669
              </a>
              <a
                className="text-link"
                href="https://wa.me/27832764669?text=Hi%20Call%20Me%20Finance%20Solutions%2C%20I%E2%80%99d%20like%20to%20discuss%20vehicle%20finance."
              >
                WhatsApp the team
              </a>
            </article>
            <a
              className="text-link"
              href="https://www.facebook.com/people/Call-Me-Finance-Solutions/100085114699187/"
            >
              Find us on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
