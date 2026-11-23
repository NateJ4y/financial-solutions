import { CreditHistoryHelp } from '../components/sections'
import { ApplicationChecklist } from '../components/finance-controls'

export const metadata = { title: 'Application Checklist' }

export default function ChecklistPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">APPLICATION CHECKLIST</p>
          <h1>
            A little preparation.
            <br />
            <em>A clearer journey.</em>
          </h1>
          <p className="lead">
            Use this checklist to see what you have ready before you speak to
            the team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap checklist-layout">
          <ApplicationChecklist />
          <div>
            <CreditHistoryHelp />
            <div className="actions">
              <a className="button" href="/apply/">
                Start an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
