export const metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">PRIVACY POLICY</p>
          <h1>
            Your privacy.
            <br />
            <em>Handled with care.</em>
          </h1>
          <p className="lead">
            Information about how this website prototype handles your activity.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap legal">
          <h2>Checklist and enquiry choices</h2>
          <p>
            Your checklist and enquiry choices are held on the current page. The
            prototype has no document upload or enquiry database.
          </p>
          <h2>WhatsApp and phone links</h2>
          <p>
            WhatsApp opens with your selected vehicle and service in a draft
            message. You choose whether to send it. WhatsApp handles activity in
            its app under its own privacy policy.
          </p>
          <h2>External fonts and images</h2>
          <p>
            Your browser may request typefaces and images from third-party
            services when loading the site.
          </p>
          <h2>Privacy questions</h2>
          <p>
            Call <a href="tel:+27833032807">083 303 2807</a> to ask how the team
            handles information you share with them.
          </p>
        </div>
      </section>
    </>
  )
}
