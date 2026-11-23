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
      {children}
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
      <div className="wrap">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{copy}</p>
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="closing-cta">
      <div className="wrap closing-inner">
        <div>
          <p className="eyebrow">Speak to the team</p>
          <h2>
            Let’s make it <em>happen.</em>
          </h2>
          <p>
            Tell us what you have in mind. We’ll help you understand the next
            step.
          </p>
        </div>
        <div className="actions">
          <Button href={whatsapp()}>Chat on WhatsApp</Button>
          <Button href="/contact/" outline>
            Speak to the team
          </Button>
        </div>
      </div>
    </section>
  )
}

export function ServiceCards({ showLinks = false }: { showLinks?: boolean }) {
  return (
    <div
      className={showLinks ? 'service-grid' : 'service-grid service-grid-large'}
    >
      {services.map((service) => (
        <article
          className="service-card reveal"
          key={service.id}
          id={service.id}
        >
          <h3>{service.name}</h3>
          <p>{service.copy}</p>
          {showLinks && (
            <a className="text-link" href={`/services/#${service.id}`}>
              Explore {service.name.toLowerCase()}
            </a>
          )}
        </article>
      ))}
    </div>
  )
}

const steps = [
  [
    'Tell us what you need',
    'Share the vehicle or finance option you’re exploring.',
  ],
  [
    'Talk it through',
    'We’ll help you understand the process and what to prepare.',
  ],
  [
    'Take the next step',
    'When you’re ready, we’ll guide you on the way forward.',
  ],
] as const

export function Journey() {
  return (
    <section className="section journey-section">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">A clear way forward</p>
          <h2>
            Simple steps. <em>Personal guidance.</em>
          </h2>
        </div>
        <ol className="journey-grid">
          {steps.map(([heading, copy], index) => (
            <li className="journey-step reveal" key={heading}>
              <span aria-hidden="true">{index + 1}</span>
              <h3>{heading}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const faq = [
  [
    'What can I finance?',
    'Speak to the team about cars, bakkies, bikes, trailers, caravans and boats.',
  ],
  [
    'Can I buy from a private seller?',
    'We help with private-to-private vehicle finance. Contact us to talk through what you and the seller should prepare.',
  ],
  [
    'Can I refinance a vehicle I already own?',
    'We can discuss refinancing with you. The options depend on the vehicle and your circumstances.',
  ],
  [
    'What documents should I prepare?',
    <>
      Start with the <a href="/checklist/">application checklist</a>. If you’re
      self-employed, ask the team what to use as proof of income.
    </>,
  ],
  [
    'Can I speak to someone about my credit history?',
    <>
      Yes. <a href="/contact/">Contact the team</a> for a discovery call to
      discuss your situation.
    </>,
  ],
  [
    'Does an enquiry guarantee approval?',
    'Finance decisions and terms depend on the lender’s assessment and your circumstances.',
  ],
] as const

export function FinanceFaq() {
  return (
    <section className="section">
      <div className="wrap faq-layout">
        <div>
          <p className="eyebrow">Finance FAQ</p>
          <h2>
            Questions, <em>answered.</em>
          </h2>
        </div>
        <div className="faq">
          {faq.map(([question, answer]) => (
            <details className="reveal" key={question}>
              <summary>
                {question}
                <b aria-hidden="true">+</b>
              </summary>
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
      <p>
        Speak directly with the team about adverse credit or debt review before
        preparing documents.
      </p>
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
            <a className="brand" href="/">
              <span className="brand-name">
                Call Me<small>Finance Solutions</small>
              </span>
            </a>
            <p>South African vehicle finance facilitation.</p>
            <div className="footer-contact">
              <a href={`tel:+${primary.dial}`}>{primary.number}</a>
              <a href="/contact/">Contact the team</a>
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
            <p className="footer-label">Get in touch</p>
            <nav aria-label="Company information">
              <a href={`tel:+${secondary.dial}`}>{secondary.number}</a>
              <a href={facebook}>Facebook</a>
              <a href="/privacy/">Privacy Policy</a>
              <a href="/terms/">Terms and Disclaimers</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} {company}
        </div>
      </div>
    </footer>
  )
}
