export default function NotFound() {
  return (
    <>
      <section className="inner-hero dark">
        <div className="wrap inner-hero-content">
          <p className="eyebrow">PAGE NOT FOUND</p>
          <h1>
            Looks like this
            <br />
            road <em>ends here.</em>
          </h1>
          <p className="lead">
            This address may have changed. Let’s get you back on the road.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <a className="button" href="/">
            Back to home
          </a>
        </div>
      </section>
    </>
  )
}
