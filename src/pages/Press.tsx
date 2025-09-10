import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Press() {
  useEffect(() => { document.title = 'Press — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Media</div>
          <h1 className="section-title">Press</h1>
          <p className="muted">Logos, screenshots, trailers, and contact for coverage.</p>
          <div className="spacer-40"/>
          <p>Request our press kit at <strong>press@example.com</strong>. Embargo details available on request.</p>
          {/* Extra content to lengthen page */}
          <div className="spacer-40" />
          <p className="muted">Looking for assets not listed here? Email us and we’ll get you what you need.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
