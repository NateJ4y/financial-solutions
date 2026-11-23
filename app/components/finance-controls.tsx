'use client'

import { useState, type FormEvent } from 'react'
import { documents, services, vehicles, whatsapp } from '../content'
import { vehicleImages } from '../vehicle-image-data'

export function VehicleExplorer() {
  const [vehicle, setVehicle] = useState<(typeof vehicles)[number]>(vehicles[0])

  return (
    <section className="section dark vehicle-section" id="vehicles">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Find your direction</p>
            <h2>
              What moves <em>you?</em>
            </h2>
          </div>
          <p className="section-note">
            From everyday essentials to the freedom of the open road, let’s talk
            about the vehicle that fits your next chapter.
          </p>
        </div>
        <div
          className="vehicle-tabs"
          role="group"
          aria-label="Vehicle category"
        >
          {vehicles.map((item) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={item === vehicle}
              aria-controls="vehicle-panel"
              onClick={() => setVehicle(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="vehicle-feature" id="vehicle-panel">
          <div className="vehicle-image-wrap">
            <img
              src={`https://images.unsplash.com/${vehicleImages[vehicle.name]}?auto=format&fit=crop&w=1100&q=82`}
              alt=""
              width={1100}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="vehicle-copy" aria-live="polite">
            <h3>{vehicle.name}</h3>
            <p>{vehicle.copy}</p>
            <div className="actions">
              <a
                className="button"
                href={whatsapp(
                  `Hi Call Me Finance Solutions, I’d like to enquire about ${vehicle.enquiry}.`,
                )}
              >
                Ask about {vehicle.name.toLowerCase()}
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
        <p>
          Tick off what you have ready. If you’re self-employed, ask the team
          what proof of income to prepare.
        </p>
      </div>
      <div className="progress-row">
        <progress
          value={checked.length}
          max={documents.length}
          aria-label="Checklist progress"
        />
        <span role="status">
          {checked.length} / {documents.length} ready
        </span>
      </div>
      {documents.map((document) => (
        <label
          key={document}
          className={
            checked.includes(document) ? 'check-row is-checked' : 'check-row'
          }
        >
          <input
            type="checkbox"
            checked={checked.includes(document)}
            onChange={(event) => {
              const selected = event.currentTarget.checked
              setChecked((previous) =>
                selected
                  ? [...previous, document]
                  : previous.filter((item) => item !== document),
              )
            }}
          />
          <span>{document}</span>
          <span className="check-indicator" aria-hidden="true">
            +
          </span>
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
      window.location.assign(
        whatsapp(
          `Hi Call Me Finance Solutions, I’d like to enquire about ${service.name.toLowerCase()}. Vehicle type: ${vehicle.name}.`,
        ),
      )
    }
  }

  return (
    <form className="form" onSubmit={openWhatsApp}>
      <h2>Let’s start a conversation.</h2>
      <p className="form-intro">
        Choose what you’re exploring. We’ll prepare a WhatsApp message for you
        to review before sending.
      </p>
      <label>
        What can we help with?
        <select name="service" required defaultValue="">
          <option value="">Choose a service</option>
          {services.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        What vehicle are you considering?
        <select name="vehicle" required defaultValue="">
          <option value="">Choose a vehicle type</option>
          {vehicles.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
      </label>
      <button className="button" type="submit">
        Continue to WhatsApp
      </button>
      <p className="note">
        The team handles applications directly after your enquiry.
      </p>
    </form>
  )
}
