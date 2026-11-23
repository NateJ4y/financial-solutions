import { ContactBand, FinanceFaq } from '../components/sections'

export const metadata = { title: 'Finance FAQ' }

export default function FaqPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">FINANCE FAQ</p>
          <h1>
            The details matter.
            <br />
            <em>We make them clearer.</em>
          </h1>
          <p className="lead">A few useful answers before you get started.</p>
        </div>
      </section>
      <FinanceFaq />
      <ContactBand />
    </>
  )
}
