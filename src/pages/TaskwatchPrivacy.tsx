import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function TaskwatchPrivacy() {
  useEffect(() => { document.title = 'Taskwatch Privacy Policy — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Taskwatch</div>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="muted">Last updated: February 2025</p>
          <div className="hero-ctas" style={{marginTop: 'var(--space-4)'}}>
            <Link className="btn" to="/taskwatch">Back to Taskwatch</Link>
          </div>
          <div className="spacer-40" />

          <p className="muted">
            This brief notice covers how Taskwatch will handle data while we finalize the full policy. We prioritize clear
            consent, minimal collection, and portability so you stay in control of your information.
          </p>

          <h3>What to expect</h3>
          <ul>
            <li>We collect only what’s needed to run your account, sync entries, and improve stability.</li>
            <li>You can use Taskwatch as a guest; accounts enable cloud sync across devices.</li>
            <li>Metrics and diagnostics are aggregated whenever possible to reduce personal identifiers.</li>
            <li>We honor deletion requests and will offer export tools so you can take your data with you.</li>
            <li>Questions? <Link to="/contact">Contact us</Link> and we’ll get back quickly.</li>
          </ul>

          <p className="muted">
            A detailed Taskwatch privacy policy with region-specific rights and data retention details is on the way.
            Until then, the principles above guide how we operate.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
