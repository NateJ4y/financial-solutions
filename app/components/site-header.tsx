'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { navigation, primary, secondary } from '../content'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menu = useRef<HTMLButtonElement>(null)
  const currentPath = pathname.replace(/\/$/, '')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topline">
        <div className="wrap topline-inner">
          <span>PERSONAL VEHICLE FINANCE GUIDANCE · SOUTH AFRICA</span>
          <div className="topline-contacts">
            <a href={`tel:+${primary.dial}}>{primary.number}</a>
            <span className="topline-divider" aria-hidden="true">/</span>
            <a href={`tel:+${secondary.dial}`}>{secondary.number}</a>
          </div>
        </div>
      </div>
      <header
        className={scrolled ? 'site-header is-scrolled' : 'site-header'}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false)
            menu.current?.focus()
          }
        }}
      >
        <div className="wrap header-inner">
          <a className="brand" href="/" aria-label="Call Me Finance Solutions home">
            <span className="brand-monogram" aria-hidden="true">CM</span>
            <span className="brand-name">Call Me<small>Finance Solutions</small></span>
          </a>
          <button
            ref={menu}
            className="menu"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((previous) => !previous)}
          >
            <span /><span />
          </button>
          <nav id="site-nav" className="nav" aria-label="Main navigation" data-open={open}>
            {navigation.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={currentPath === href.replace(/\/$/, '') ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            <a className="button nav-cta" href="/apply/" onClick={() => setOpen(false)}>
              Start an enquiry <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
      {open && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </>
  )
}
