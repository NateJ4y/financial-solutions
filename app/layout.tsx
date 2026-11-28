import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { SiteHeader } from './components/site-header'
import { SiteFooter } from './components/sections'
import { company } from './content'
import './globals.css'
import './launch-hero-mobile.css'
import './transformation.css'
import './flyer-brand.css'

export const metadata: Metadata = {
  title: { default: `Vehicle Finance | ${company}`, template: `%s | ${company}` },
  description: 'Personal guidance for vehicle finance, private-to-private finance and refinancing in South Africa.',
  openGraph: {
    type: 'website',
    title: 'Call Me Finance Solutions | Vehicle Finance South Africa',
    description: 'Personal guidance for vehicle finance, private sales and refinancing in South Africa.',
  },
}

export const viewport: Viewport = { themeColor: '#f8f5ee' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <SiteHeader />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
