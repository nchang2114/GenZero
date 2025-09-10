import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy — GenZero'
  }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Legal</div>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="spacer-40"/>

          <p>
            Your privacy matters to us. This policy explains what information we collect,
            how we use it, and your choices. We collect minimal analytics to improve our
            games and website, and we never sell your data.
          </p>
          <h3>Information we collect</h3>
          <p className="muted">Account details you share with us, playtest feedback, crash logs, and basic usage analytics.</p>

          <h3>How we use information</h3>
          <p className="muted">To operate and improve our games, provide support, and communicate updates you opt into.</p>

          <h3>Your choices</h3>
          <p className="muted">Opt out of analytics where available, request data export/deletion by contacting us at privacy@example.com.</p>
          {/* Extra content to lengthen page */}
          <div className="spacer-40" />
          <p className="muted">Questions about privacy? Reach us at privacy@example.com. We aim to respond within 72 hours.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
