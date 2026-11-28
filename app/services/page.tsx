import { ContactBand } from '../components/sections'
import { VehicleExplorer } from '../components/finance-controls'
import { primary, whatsapp } from '../content'

export const metadata = {
  title: 'Vehicle Finance Solutions | Call Me Finance Solutions',
  description:
    'Explore vehicle finance, private-to-private finance and vehicle refinancing. Understand what to prepare and speak to our team about your next step.',
}

const preparation = [
  'A valid South African ID',
  'A valid driver’s licence',
  'Your latest three months of payslips, if employed',
  'Your latest three months of bank statements',
]

const serviceDetails = [
  {
    id: 'vehicle-finance',
    number: '01',
    title: 'Vehicle finance',
    intro: 'Financing a vehicle from a dealership?',
    detail:
      'We’ll help you understand the application journey, the information to prepare and what happens next.',
    prompt: 'I’m interested in vehicle finance.',
    bestFor: 'Buying through a dealership',
  },
  {
    id: 'private-to-private-finance',
    number: '02',
    title: 'Private-to-private finance',
    intro: 'Found the right vehicle from a private seller?',
    detail:
      'We’ll talk you through the steps involved and what you and the seller may need before moving forward.',
    prompt: 'I’m interested in private-to-private vehicle finance.',
    bestFor: 'Buying directly from an owner',
  },
  {
    id: 'vehicle-refinancing',
    number: '03',
    title: 'Vehicle refinancing',
    intro: 'Already have a vehicle and want to explore your options?',
    detail:
      'Tell us a little about your situation. The team can explain whether a refinancing enquiry may be worth exploring.',
    prompt: 'I’d like to discuss vehicle refinancing.',
    bestFor: 'Reviewing your current vehicle finance',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="finance-hero">
        <div className="wrap finance-hero-inner">
          <div className="finance-hero-copy">
            <p className="eyebrow">FINANCE SOLUTIONS · PERSONAL GUIDANCE</p>
            <h1>Let’s get you closer to <em>the keys.</em></h1>
            <p className="finance-hero-lead">
              Whether you’re buying from a dealership, a private seller or
              exploring finance on a vehicle you already own, we’ll help you
              understand the next step.
            </p>
            <div className="finance-hero-actions">
              <a className="button" href={whatsapp('Hi Call Me Finance Solutions, I’d like help choosing the right finance option.')}>
                Talk to our team <span aria-hidden="true">↗</span>
              </a>
              <a className="finance-text-link" href="#choose-a-solution">Explore finance options <span aria-hidden="true">↓</span></a>
            </div>
            <p className="finance-hero-reassurance">A conversation first. No pressure to proceed.</p>
          </div>
          <div className="finance-hero-aside" aria-label="Our approach">
            <span className="finance-aside-number">01 <i>/ 03</i></span>
            <p>Understand your options.</p>
            <span className="finance-aside-rule" />
            <p>Prepare with confidence.</p>
            <span className="finance-aside-rule" />
            <p>Move forward when you’re ready.</p>
          </div>
        </div>
      </section>

      <section className="finance-options section" id="choose-a-solution">
        <div className="wrap">
          <div className="finance-section-intro">
            <div>
              <p className="eyebrow">CHOOSE WHAT YOU NEED</p>
              <h2>Three ways we can <em>help.</em></h2>
            </div>
            <p>Start with the situation that sounds most like yours. If you’re unsure, simply speak to us and we’ll help you find the right place to begin.</p>
          </div>
          <div className="finance-solution-grid">
            {serviceDetails.map((item) => (
              <article className="finance-solution-card" id={item.id} key={item.id}>
                <div className="finance-solution-top">
                  <span>{item.number} <i>/ 03</i></span>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="finance-solution-fit">{item.bestFor}</p>
                <h3>{item.title}</h3>
                <p className="finance-solution-intro">{item.intro}</p>
                <p className="finance-solution-detail">{item.detail}</p>
                <a className="finance-card-cta" href={whatsapp(`Hi Call Me Finance Solutions, ${item.prompt}`)}>
                  Enquire about this option <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="finance-options-note">Not sure which option applies? <a href={whatsapp('Hi, I’m not sure which finance option I need. Could someone guide me?')}>Ask us and we’ll help you work it out.</a></p>
        </div>
      </section>

      <section className="finance-preparation section" id="what-you-need">
        <div className="wrap finance-preparation-grid">
          <div className="finance-preparation-copy">
            <p className="eyebrow">A LITTLE PREPARATION GOES A LONG WAY</p>
            <h2>What should you have <em>ready?</em></h2>
            <p>For an initial conversation, you don’t need to have everything figured out. If you’re preparing for a finance application, these are useful documents to start gathering:</p>
            <ul className="finance-document-list">
              {preparation.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
            <p className="finance-preparation-note">Self-employed or have a different income arrangement? Contact the team first so we can advise what proof of income may be needed. Lenders may request additional information depending on your circumstances.</p>
            <a className="finance-inline-link" href="/checklist/">View the full application checklist <span aria-hidden="true">→</span></a>
          </div>
          <aside className="finance-preparation-aside">
            <span className="finance-aside-label">GOOD TO KNOW</span>
            <h3>You can start with a question.</h3>
            <p>You don’t have to submit an application just to understand the process. Tell us what you’re looking to do and we’ll explain the next step.</p>
            <a className="button" href={whatsapp('Hi Call Me Finance Solutions, I have a question about what I need to prepare for vehicle finance.')}>
              Ask a question <span aria-hidden="true">↗</span>
            </a>
            <span className="finance-aside-contact">Prefer to call? <a href={`tel:+${primary.dial}`}>{primary.number}</a></span>
          </aside>
        </div>
      </section>

      <section className="finance-next-steps section">
        <div className="wrap">
          <div className="finance-section-intro">
            <div>
              <p className="eyebrow">HOW IT STARTS</p>
              <h2>A clear next step. <em>At your pace.</em></h2>
            </div>
            <p>We keep the first steps straightforward, so you know what to expect before making a decision.</p>
          </div>
          <ol className="finance-step-grid">
            <li><span>01</span><h3>Tell us what you’re looking for</h3><p>Share the vehicle or finance option you have in mind.</p></li>
            <li><span>02</span><h3>Talk it through</h3><p>We’ll discuss your situation and explain what information may be needed.</p></li>
            <li><span>03</span><h3>Decide how to proceed</h3><p>If you’re comfortable, we’ll guide you through the next stage of the enquiry.</p></li>
          </ol>
        </div>
      </section>

      <VehicleExplorer />
      <ContactBand />
    </>
  )
}
