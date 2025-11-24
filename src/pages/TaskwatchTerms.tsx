import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function TaskwatchTerms() {
  useEffect(() => { document.title = 'Taskwatch Terms of Service — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Taskwatch</div>
          <h1 className="section-title">Terms of Service</h1>
          <p className="muted">Last updated: February 2025</p>
          <div className="hero-ctas" style={{marginTop: 'var(--space-4)'}}>
            <Link className="btn" to="/taskwatch">Back to Taskwatch</Link>
          </div>
          <div className="spacer-40" />

          <p className="muted">
            These Taskwatch terms outline how you can use the app while we publish the full agreement. By accessing
            Taskwatch you agree to respectful use, no abuse of the platform, and adherence to applicable laws.
          </p>

          <h3>Core points</h3>
          <ul>
            <li>Taskwatch is provided “as is” while we evolve the product; availability may change.</li>
            <li>Accounts are for individual use; keep credentials secure and do not share unauthorized access.</li>
            <li>Please avoid harmful behavior, including spam, exploits, or misuse of data that isn’t yours.</li>
            <li>We may update features and these terms; we’ll signal material changes in the app.</li>
            <li>Need help or see an issue? <Link to="/contact">Contact us</Link> so we can address it.</li>
          </ul>

          <p className="muted">
            A comprehensive Taskwatch Terms of Service with full definitions, dispute language, and region-specific
            details will be added soon. These interim points keep expectations clear while we finalize the legal text.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
