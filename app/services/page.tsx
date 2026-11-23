import { ContactBand, Journey, ServiceCards } from '../components/sections'
import { VehicleExplorer } from '../components/finance-controls'

export const metadata = { title: 'Finance Solutions' }

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">FINANCE SOLUTIONS</p>
          <h1>
            Find the right place
            <br />
            to <em>start.</em>
          </h1>
          <p className="lead">
            Explore vehicle finance, private-to-private finance and vehicle
            refinancing. We’ll help you understand the process and what to
            prepare.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ServiceCards />
        </div>
      </section>
      <VehicleExplorer />
      <Journey />
      <ContactBand />
    </>
  )
}
