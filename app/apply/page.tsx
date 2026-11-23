import { CreditHistoryHelp } from '../components/sections'
import {
  ApplicationChecklist,
  EnquiryForm,
} from '../components/finance-controls'

export const metadata = { title: 'Apply for Finance' }

export default function ApplyPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">APPLY FOR FINANCE</p>
          <h1>
            A confident start
            <br />
            begins <em>here.</em>
          </h1>
          <p className="lead">
            Prepare the basics, then reach out to the team. We’ll help you
            understand the next step.
          </p>
        </div>
      </section>
      <section className="section apply-section">
        <div className="wrap apply-grid">
          <div>
            <ApplicationChecklist />
            <CreditHistoryHelp />
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  )
}
