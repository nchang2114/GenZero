import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function TaskwatchPricing() {
  useEffect(() => { document.title = 'Taskwatch — Pricing' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Taskwatch</div>
          <h1 className="section-title">Pricing</h1>
          <p className="muted">Choose the plan that keeps your time, goals, and history intact.</p>
          <p className="muted">Updated: December 2024</p>
          <div className="hero-ctas" style={{marginTop: 'var(--space-4)'}}>
            <a className="btn" href="https://genzero.vercel.app/taskwatch" target="_blank" rel="noreferrer">Back to Taskwatch</a>
            <a className="btn primary" href="https://nc-taskwatch.vercel.app" target="_blank" rel="noreferrer">Launch Taskwatch</a>
          </div>
          <div className="spacer-40" />

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-header">
                <h3>Free</h3>
                <p className="muted">Get started and track on-device.</p>
              </div>
              <div className="pricing-price">
                <span className="amount">$0</span>
                <span className="term">/ month</span>
              </div>
              <Link className="btn" to="/taskwatch">Use Free</Link>
              <ul className="feature-list">
                <li>Stopwatch and SnapBack logging on-device</li>
                <li>Goals, buckets, and tasks saved locally</li>
                <li>Weekly and daily reviews on this device</li>
                <li>Export data anytime from your device</li>
              </ul>
            </article>

            <article className="pricing-card highlight">
              <div className="pricing-header">
                <h3>Basic</h3>
                <p className="muted">Sync, back up, and restore across devices.</p>
              </div>
              <div className="pricing-price">
                <span className="amount">$4.99</span>
                <span className="term">/ month</span>
              </div>
              <Link className="btn primary" to="/taskwatch">Get Basic</Link>
              <ul className="feature-list">
                <li>Data saved securely to the Taskwatch database</li>
                <li>Sync across devices</li>
                <li>Back up your goals & sessions</li>
                <li>Restore your history anytime</li>
                <li>Cross-device reviews with consistent history</li>
                <li>Priority support during beta</li>
              </ul>
            </article>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
