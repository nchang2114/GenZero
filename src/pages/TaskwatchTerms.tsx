import { useEffect } from 'react'
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
            <a className="btn" href="https://genzero.vercel.app/taskwatch" target="_blank" rel="noreferrer">Back to Taskwatch</a>
          </div>
          <div className="spacer-40" />

          <p className="muted"><strong>Developer / Operator:</strong> Gen Zero Studios</p>
          <p className="muted"><strong>Contact:</strong> <a href="mailto:support@taskwatch.app">support@taskwatch.app</a></p>
          <p className="muted"><strong>Website:</strong> <a href="https://taskwatch.app" target="_blank" rel="noreferrer">nc-taskwatch.app</a></p>

          <h3>1. Acceptance of Terms</h3>
          <p className="muted">
            By creating an account, accessing, or using Taskwatch (“the Service”), you agree to be bound by these Terms of Service.
            If you do not agree, do not use the Service. Taskwatch is intended for users aged 13 or older.
          </p>

          <h3>2. Description of the Service</h3>
          <p className="muted">
            Taskwatch is a productivity, time-tracking, and organization platform. Features include goal creation, task management,
            session logging, SnapBack logs, and cross-device syncing. Some features require a paid subscription.
          </p>

          <h3>3. Accounts and Registration</h3>
          <p className="muted">
            You must create an account through Google, Microsoft, Apple (when available), or other supported OAuth providers. You
            agree to provide accurate information, keep credentials secure, and are responsible for activity on your account. We may
            suspend or terminate accounts that violate these Terms.
          </p>

          <h3>4. Free Trial</h3>
          <p className="muted">
            New users receive a 14-day free trial with full access; no payment method is required. After the trial, your data remains
            stored but the account becomes view-only. Subscribe to regain editing and creation abilities.
          </p>

          <h3>5. Subscriptions & Billing</h3>
          <h4>5.1 Auto-Renewal</h4>
          <p className="muted">Paid subscriptions automatically renew unless cancelled.</p>
          <h4>5.2 Cancellation</h4>
          <p className="muted">
            You may cancel anytime via the App Store (iOS) or Google Play (Android). Premium access remains until the end of the billing
            cycle. No refunds are issued by Gen Zero Studios; refund requests must go through the App Store or Google Play per their policies.
          </p>
          <h4>5.3 Pricing Changes</h4>
          <p className="muted">We may change subscription pricing with notice. Price changes apply to the next billing cycle.</p>

          <h3>6. Access After Expiration</h3>
          <p className="muted">
            When a subscription expires, you retain view-only access. You cannot add, edit, or modify data but you may export your data.
            Your data remains intact unless you delete it.
          </p>

          <h3>7. Data Retention & Inactive Accounts</h3>
          <p className="muted">
            We retain user data while your account is active. For inactive non-paying accounts, if no login occurs for 24 consecutive
            months, we may permanently delete the account and all stored data. A warning email will be sent before deletion when feasible.
            If you delete your account manually, all data is permanently erased and cannot be undone.
          </p>

          <h3>8. User Conduct</h3>
          <p className="muted">You agree not to:</p>
          <ul>
            <li>Use the Service for illegal, harmful, or abusive purposes</li>
            <li>Attempt to hack, reverse engineer, or disrupt the Service</li>
            <li>Upload malicious code or use automated systems (bots, scrapers) without permission</li>
            <li>Harass, impersonate, or endanger other users</li>
            <li>Interfere with servers or infrastructure</li>
          </ul>
          <p className="muted">Violation may result in account termination.</p>

          <h3>9. Intellectual Property</h3>
          <h4>9.1 Our Rights</h4>
          <p className="muted">
            Taskwatch, its design, branding, software code, and related IP are owned by Gen Zero Studios. You may not copy, reproduce,
            modify, redistribute, or resell the Service, nor use our trademarks without permission.
          </p>
          <h4>9.2 Your Content</h4>
          <p className="muted">
            You retain ownership of your user-generated content (goals, tasks, notes, session logs, SnapBack logs, and related data). You
            grant us a limited license to store, process, and display your content solely to operate the Service.
          </p>

          <h3>10. Availability and Modifications</h3>
          <p className="muted">
            We may modify features, add or remove functionality, introduce updates, or suspend the Service for maintenance or unforeseen
            issues. Uninterrupted access is not guaranteed.
          </p>

          <h3>11. Third-Party Services</h3>
          <p className="muted">
            Taskwatch uses Supabase (database, authentication), Vercel (hosting), OAuth providers (Google, Microsoft, Apple when enabled),
            and App Store / Google Play (billing). By using Taskwatch, you also agree to their respective terms and policies.
          </p>

          <h3>12. Limitation of Liability</h3>
          <p className="muted">
            To the fullest extent permitted by law, Taskwatch is provided “as is” and “as available.” We do not guarantee uninterrupted or
            error-free service and are not responsible for data loss, though we take reasonable precautions. We do not provide legal, medical,
            or professional advice. Our total liability for any claim is limited to the amount you paid in the last billing cycle (or $0 for
            free users). You use the Service at your own risk.
          </p>

          <h3>13. Indemnification</h3>
          <p className="muted">
            You agree to indemnify and hold harmless Gen Zero Studios from claims arising out of your misuse of the Service, your violation
            of these Terms, or your violation of applicable laws.
          </p>

          <h3>14. Account Termination</h3>
          <p className="muted">
            We may suspend or terminate accounts that violate these Terms, pose a security risk, abuse the Service, or attempt to harm the
            platform or other users. Suspended users lose access and may not be entitled to refunds.
          </p>

          <h3>15. Governing Law</h3>
          <p className="muted">
            These Terms are governed by the laws of New South Wales, Australia. Disputes shall be resolved under NSW jurisdiction.
          </p>

          <h3>16. Changes to Terms</h3>
          <p className="muted">
            We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance of the revised
            Terms.
          </p>

          <h3>17. Contact</h3>
          <p className="muted">
            For questions about these Terms, contact Gen Zero Studios at <a href="mailto:support@taskwatch.app">support@taskwatch.app</a>.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
