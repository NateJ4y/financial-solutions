import type { ReactNode } from 'react'
import {
  company,
  facebook,
  primary,
  secondary,
  services,
  whatsapp,
} from '../content'

export function Button({
  href,
  children,
  outline = false,
}: {
  href: string
  children: ReactNode
  outline?: boolean
}) {
  return (
    <a className={outline ? 'button outline' : 'button'} href={href}>
      {children}<span aria-hidden="true">→</span>
    </a>
  )
}

export function PageTitle({
  label,
  title,
  copy,
}: {
  label: string
  title: ReactNode
  copy: string
}) {
  return (
    <section className="inner-hero dark">
      <div className="wrap inner-hero-content">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{copy}</p>
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="closing-cta" aria-labelledby="closing-title">
      <div className="wrap closing-inner">
        <div className="closing-copy">
          <p className="eyebrow">A conversation is a good place to begin</p>
          <h2 id="closing-title">Let’s make it <em>happen.</em></h2>
          <p>Tell us what you have in mind. We’ll help you understand the next step.</p>
        </div>
        <div className="actions closing-actions">
          <Button href={whatsapp()}>Chat on WhatsApp</Button>
          <Button href="/contact/" outline>Speak to the team</Button>
        </div>
      </div>
    </section>
  )
}

export function ServiceCards({ showLinks = false }: { showLinks?: boolean }) {
  return (
    <div className={showLinks ? 'service-grid' : 'service-grid service-grid-large'}>
      {services.map((service, index) => (
        <article className="service-card reveal" key={service.id} id={service.id}>
          <div className="service-card-top">
            <span className="service-number">0{index + 1} <i aria-hidden="true">/</i> 03</span>
            <span className="service-card-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="service-card-body">
            <h3>{service.name}</h3>
            <p>{service.copy}</p>
          </div>
          {showLinks && (
            <a className="text-link" href={`/services/#${service.id}`}>
              Explore {service.name.toLowerCase()} <span aria-hidden="true">→</span>
            </a>
          )}
        </article>
      ))}
    </div>
  )
}

const steps = [
  ['Tell us what you need', 'Share the vehicle or finance option you’re exploring.'],
  ['Talk it through', 'We’ll help you understand the process and what to prepare.'],
  ['Take the next step', 'When you’re ready, we’ll guide you on the way forward.'],
] as const

export function Journey() {
  return (
    <section className="section journey-section">
      <div className="wrap">
        <div className="section-heading journey-heading">
          <p className="eyebrow">A clear way forward</p>
          <h2>Simple steps. <em>Personal guidance.</em></h2>
          <p className="section-note">A human conversation, a clearer picture, and support when you’re ready to move.</p>
        </div>
        <ol className="journey-grid">
          {steps.map(([heading, copy], index) => (
            <li className="journey-step reveal" key={heading}>
              <span className="journey-index">0{index + 1}</span>
              <div className="journey-step-content">
                <h3>{heading}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const faq = [
  ['What can I finance?', 'Speak to the team about cars, bakkies, bikes, trailers, caravans and boats.'],
  ['Can I buy from a private seller?', 'We help with private-to-private vehicle finance. Contact us to talk through what you and the seller should prepare.'],
  ['Can I refinance a vehicle I already own?', 'We can discuss refinancing with you. The options depend on the vehicle and your circumstances.'],
  ['What documents should I prepare?', <>Start with the <a href="/checklist/">application checklist</a>. If you’re self-employed, ask the team what to use as proof of income.</>],
  ['Can I speak to someone about my credit history?', <>Yes. <a href="/contact/">Contact the team</a> for a discovery call to discuss your situation.</>],
  ['Does an enquiry guarantee approval?', 'Finance decisions and terms depend on the lender’s assessment and your circumstances.'],
] as const

export function FinanceFaq() {
  return (
    <section className="section">
      <div className="wrap faq-layout">
        <div>
          <p className="eyebrow">Finance FAQ</p>
          <h2>Questions, <em>answered.</em></h2>
        </div>
        <div className="faq">
          {faq.map(([question, answer], index) => (
            <details className="reveal" key={question}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<b aria-hidden="true">+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CreditHistoryHelp() {
  return (
    <aside className="help">
      <h3>Want to discuss your credit history?</h3>
      <p>Speak directly with the team about adverse credit or debt review before preparing documents.</p>
      <a href={`tel:+${primary.dial}`}>Call {primary.number}</a>
    </aside>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer dark">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="Call Me Finance Solutions home">
              <span className="brand-monogram" aria-hidden="true">CM</span>
              <span className="brand-name">Call Me<small>Finance Solutions</small></span>
            </a>
            <p>South African vehicle finance facilitation, with personal guidance at every step.</p>
            <div className="footer-contact">
              <a href={`tel:+${primary.dial}`}>{primary.number}</a>
              <a href={`https://wa.me/${primary.dial}`}>WhatsApp the team</a>
            </div>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <nav aria-label="Explore">
              <a href="/about/">About Us</a>
              <a href="/services/">Finance Solutions</a>
              <a href="/apply/">Apply for Finance</a>
              <a href="/faq/">Finance FAQ</a>
              <a href="/checklist/">Application Checklist</a>
            </nav>
          </div>
          <div>
            <p className="footer-label">Speak to us</p>
            <nav aria-label="Company information">
              <a href={`tel:+${secondary.dial}`}>{secondary.number}</a>
              <a href="/contact/">Contact the team</a>
              <a href={facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
              <a href="/privacy/">Privacy Policy</a>
              <a href="/terms/">Terms and Disclaimers</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company}. All rights reserved.</span>
          <span>South Africa · Personal finance guidance</span>
        </div>
      </div>
    </footer>
  )
}
