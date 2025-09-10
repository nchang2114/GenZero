import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service — GenZero'
  }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Legal</div>
          <h1 className="section-title">Terms of Service</h1>
          <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="spacer-40"/>

          <h3>Acceptance</h3>
          <p className="muted">By accessing our games or website, you agree to these terms and any posted policies.</p>

          <h3>Licenses & Restrictions</h3>
          <p className="muted">Don’t exploit, reverse engineer, or misuse our services. Community guidelines apply.</p>

          <h3>Liability</h3>
          <p className="muted">Services are provided “as is”. To the maximum extent permitted by law, we limit liability.</p>
          {/* Extra content to lengthen page */}
          <div className="spacer-40" />
          <p className="muted">For legal requests, contact legal@example.com. We’ll route appropriately.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
