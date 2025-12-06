import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function TaskwatchPolicies() {
  useEffect(() => { document.title = 'Taskwatch Terms & Policies — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Taskwatch</div>
          <h1 className="section-title">Terms & Policies</h1>
          <p className="muted">Last updated: February 2025</p>
          <div className="hero-ctas" style={{marginTop: 'var(--space-4)'}}>
            <a className="btn" href="https://genzero.vercel.app/taskwatch" target="_blank" rel="noreferrer">Back to Taskwatch</a>
            <Link className="btn" to="/taskwatch/terms">Terms of Service</Link>
            <Link className="btn" to="/taskwatch/privacy">Privacy Policy</Link>
          </div>
          <div className="spacer-40" />

          <p className="muted">
            Taskwatch is a focused time and productivity companion. This page summarizes the commitments that keep your data safe,
            the way we expect the product to be used, and where to find the full legal detail.
          </p>

          <div className="policy-grid">
            <div className="policy-group">
              <h3>Legal</h3>
              <ul className="policy-list">
                <li>
                  <strong>Terms of Service:</strong> Accounts, billing, and acceptable use are covered in our full{' '}
                  <Link to="/taskwatch/terms">Terms of Service</Link>.
                </li>
                <li>
                  <strong>Privacy Policy:</strong> How we collect, store, and protect your data is described in the{' '}
                  <Link to="/taskwatch/privacy">Privacy Policy</Link>.
                </li>
                <li>
                  <strong>Payments & trials:</strong> Subscriptions auto-renew unless cancelled through the App Store or Google Play.
                  Free trials end with view-only access; no surprise charges.
                </li>
                <li>
                  <strong>Governing law:</strong> Taskwatch is operated by Gen Zero Studios under New South Wales, Australia law.
                </li>
              </ul>
            </div>

            <div className="policy-group">
              <h3>Product use</h3>
              <ul className="policy-list">
                <li>Taskwatch is built for personal productivity: goal tracking, task management, and time awareness.</li>
                <li>Keep data respectful and lawful. No harassment, abuse, or attempts to disrupt or reverse engineer the service.</li>
                <li>Security matters: do not share credentials or use automated scripts that bypass normal product flows.</li>
                <li>Reports of misuse can lead to suspension to protect the community and platform stability.</li>
              </ul>
            </div>

            <div className="policy-group">
              <h3>Data & security</h3>
              <ul className="policy-list">
                <li>Data is stored in Supabase with encryption in transit and at rest, and Row-Level Security to keep accounts isolated.</li>
                <li>Operational logs from Vercel and authentication providers are used only for reliability, fraud prevention, and support.</li>
                <li>You can export or delete your Taskwatch data anytime from within the app; deletion removes your account and stored content.</li>
                <li>We do not sell or share your information with advertisers or data brokers.</li>
              </ul>
            </div>

            <div className="policy-group">
              <h3>Contact</h3>
              <ul className="policy-list">
                <li>Questions about terms, privacy, or security: <a href="mailto:support@taskwatch.app">support@taskwatch.app</a></li>
                <li>Responsible party: Gen Zero Studios (Taskwatch)</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
