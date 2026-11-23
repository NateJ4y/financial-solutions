export const metadata = { title: 'Terms and Disclaimers' }

export default function TermsPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">TERMS AND DISCLAIMERS</p>
          <h1>
            Clear information.
            <br />
            <em>Clear expectations.</em>
          </h1>
          <p className="lead">
            Please read these notes before using the information on this
            website.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap legal">
          <h2>Finance enquiries</h2>
          <p>
            Website information is general. Any offer, rate or repayment terms
            depend on the lender’s assessment and the details of your
            application.
          </p>
          <h2>Application guidance</h2>
          <p>
            The checklist helps you prepare. The team can confirm which
            documents apply to your circumstances.
          </p>
          <h2>No guarantee of approval</h2>
          <p>
            Submitting an enquiry or speaking with the team does not guarantee
            finance approval.
          </p>
          <h2>Contact</h2>
          <p>
            Call <a href="tel:+27833032807">083 303 2807</a> with questions
            about a finance enquiry.
          </p>
        </div>
      </section>
    </>
  )
}
