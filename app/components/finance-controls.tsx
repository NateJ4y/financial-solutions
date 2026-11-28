'use client'

import { useState, type FormEvent } from 'react'
import { documents, services, vehicles, whatsapp } from '../content'
import { vehicleImages } from '../vehicle-image-data'

export function VehicleExplorer() {
  const [vehicle, setVehicle] = useState<(typeof vehicles)[number]>(vehicles[0])

  return (
    <section className="section dark vehicle-section" id="vehicles" aria-labelledby="vehicle-title">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Find your direction</p>
            <h2 id="vehicle-title">What moves <em>you?</em></h2>
          </div>
          <p className="section-note">From everyday essentials to the freedom of the open road, let’s talk about the vehicle that fits your next chapter.</p>
        </div>
        <div className="vehicle-tabs" role="tablist" aria-label="Choose a vehicle category">
          {vehicles.map((item) => (
            <button
              key={item.name}
              id={`tab-${item.name.toLowerCase()}`}
              type="button"
              role="tab"
              aria-selected={item.name === vehicle.name}
              aria-controls="vehicle-panel"
              tabIndex={item.name === vehicle.name ? 0 : -1}
              onClick={() => setVehicle(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="vehicle-feature" id="vehicle-panel" role="tabpanel" aria-labelledby={`tab-${vehicle.name.toLowerCase()}`}>
          <div className="vehicle-image-wrap">
            <img
              key={vehicle.name}
              className="vehicle-feature-image"
              src={`https://images.unsplash.com/${vehicleImages[vehicle.name]}?auto=format&fit=crop&w=1200&q=85`}
              alt={`${vehicle.name} for a vehicle finance enquiry`}
              width={1200}
              height={780}
              loading="lazy"
              decoding="async"
            />
            <span className="vehicle-image-index">0{vehicles.findIndex((item) => item.name === vehicle.name) + 1} / 06</span>
          </div>
          <div className="vehicle-copy" aria-live="polite">
            <p className="eyebrow">Explore your options</p>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.copy}</p>
            <div className="actions">
              <a className="button" href={whatsapp(`Hi Call Me Finance Solutions, I’d like to enquire about ${vehicle.enquiry}.`)}>
                Ask about {vehicle.name.toLowerCase()} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ApplicationChecklist() {
  const [checked, setChecked] = useState<string[]>([])

  return (
    <section className="checklist" aria-labelledby="checklist-title">
      <div className="checklist-top">
        <h2 id="checklist-title">Your document checklist.</h2>
        <p>Tick off what you have ready. If you’re self-employed, ask the team what proof of income to prepare.</p>
      </div>
      <div className="progress-row">
        <progress value={checked.length} max={documents.length} aria-label="Checklist progress" />
        <span role="status">{checked.length} / {documents.length} ready</span>
      </div>
      {documents.map((document) => (
        <label key={document} className={checked.includes(document) ? 'check-row is-checked' : 'check-row'}>
          <input
            type="checkbox"
            checked={checked.includes(document)}
            onChange={(event) => {
              const selected = event.currentTarget.checked
              setChecked((previous) => selected ? [...previous, document] : previous.filter((item) => item !== document))
            }}
          />
          <span>{document}</span>
          <span className="check-indicator" aria-hidden="true">+</span>
        </label>
      ))}
    </section>
  )
}

export function EnquiryForm() {
  function openWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const service = services.find((item) => item.id === fields.get('service'))
    const vehicle = vehicles.find((item) => item.name === fields.get('vehicle'))
    if (service && vehicle) {
      window.location.assign(whatsapp(`Hi Call Me Finance Solutions, I’d like to enquire about ${service.name.toLowerCase()}. Vehicle type: ${vehicle.name}.`))
    }
  }

  return (
    <form className="form" onSubmit={openWhatsApp}>
      <h2>Let’s start a conversation.</h2>
      <p className="form-intro">Choose what you’re exploring. We’ll prepare a WhatsApp message for you to review before sending.</p>
      <label>What can we help with?
        <select name="service" required defaultValue="">
          <option value="">Choose a service</option>
          {services.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
      <label>What vehicle are you considering?
        <select name="vehicle" required defaultValue="">
          <option value="">Choose a vehicle type</option>
          {vehicles.map((item) => <option key={item.name}>{item.name}</option>)}
        </select>
      </label>
      <button className="button" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
      <p className="note">The team handles applications directly after your enquiry.</p>
    </form>
  )
}
