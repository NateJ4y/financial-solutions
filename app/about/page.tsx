import { ContactBand, Journey } from '../components/sections'

export const metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">ABOUT CALL ME FINANCE SOLUTIONS</p>
          <h1>
            Your journey.
            <br />
            <em>Our priority.</em>
          </h1>
          <p className="lead">
            Personal guidance for vehicle finance in South Africa, built around
            real conversations and clear next steps.
          </p>
        </div>
      </section>
      <section className="section about-intro">
        <div className="wrap about-grid">
          <div className="about-image reveal">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=82"
              alt="Driver enjoying a scenic open road"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">A personal approach</p>
            <h2>
              Because every journey is <em>different.</em>
            </h2>
            <p>
              Whether you’re buying your first car, looking for more room for
              the family, purchasing from a private seller or exploring
              refinancing, the questions are personal. Your finance journey
              should be too.
            </p>
            <p>
              From our base in Vanderbijlpark, we guide vehicle buyers and
              sellers through the finance process and help both parties
              understand what to prepare.
            </p>
          </div>
        </div>
      </section>
      <Journey />
      <ContactBand />
    </>
  )
}
