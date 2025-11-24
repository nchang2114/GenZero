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

          <p className="muted"><strong>Developer:</strong> Gen Zero Studios</p>
          <p className="muted"><strong>Contact:</strong> <a href="mailto:support@taskwatch.app">support@taskwatch.app</a></p>

          <h3>1. Introduction</h3>
          <p className="muted">
            Taskwatch (“we”, “our”, or “us”) is a productivity and time-tracking application designed to help users
            organize goals, tasks, session logs, and daily routines. This Privacy Policy explains how we collect, use,
            store, and protect your data when you use the Taskwatch website or associated mobile apps. By using
            Taskwatch, you agree to the practices described here.
          </p>

          <h3>2. Information We Collect</h3>
          <h4>2.1 Authentication Information</h4>
          <p className="muted">When you sign in using Google or Microsoft OAuth, we receive:</p>
          <ul>
            <li>Email address</li>
            <li>First and last name (or display name)</li>
          </ul>
          <p className="muted">We do not collect profile photos, phone numbers, addresses, or sensitive personal information.</p>

          <h4>2.2 User-Generated Content</h4>
          <p className="muted">We store the information you create while using Taskwatch, including:</p>
          <ul>
            <li>Goals, buckets, tasks, subtasks, and notes</li>
            <li>Session logs and SnapBack logs</li>
          </ul>
          <p className="muted">This data belongs to you, and you control it through your account.</p>

          <h4>2.3 Automatically Collected Technical Data</h4>
          <p className="muted">Through our hosting (Vercel) and database provider (Supabase), we may collect:</p>
          <ul>
            <li>IP address (for security logs)</li>
            <li>Device/browser type</li>
            <li>Usage timestamps</li>
            <li>Authentication status logs</li>
          </ul>
          <p className="muted">These logs are used only for security, fraud prevention, error debugging, and performance monitoring. We do not use analytics tools, ad tracking, or behavioral profiling.</p>

          <h3>3. How We Use Your Information</h3>
          <h4>3.1 To Provide and Operate the Service</h4>
          <ul>
            <li>Sync your goals, tasks, notes, and history</li>
            <li>Manage your account and authentication</li>
            <li>Enable cloud storage and cross-device use</li>
          </ul>
          <h4>3.2 To Improve Taskwatch</h4>
          <ul>
            <li>Debug issues</li>
            <li>Enhance performance</li>
            <li>Fix bugs</li>
          </ul>
          <h4>3.3 For Safety and Legal Compliance</h4>
          <ul>
            <li>Prevent abuse or unauthorized access</li>
            <li>Detect suspicious login attempts</li>
            <li>Comply with applicable laws</li>
          </ul>
          <p className="muted">We do not sell, rent, or trade your personal information.</p>

          <h3>4. Developer Access to Data</h3>
          <p className="muted">Gen Zero Studios may access your data only when necessary to fix bugs, provide support, maintain stability, or investigate security issues. Access is limited and used strictly for operational purposes.</p>

          <h3>5. How Your Information Is Stored</h3>
          <h4>5.1 Supabase (Database & Authentication)</h4>
          <ul>
            <li>Your data is encrypted in transit (TLS) and at rest.</li>
            <li>Row-Level Security (RLS) ensures you can only access your own data.</li>
          </ul>
          <h4>5.2 Vercel (Hosting)</h4>
          <ul>
            <li>The front-end is hosted on Vercel, which stores server logs for operational and security purposes.</li>
            <li>No personal analytics or tracking is performed.</li>
          </ul>

          <h3>6. Data Sharing</h3>
          <p className="muted">We share information only with trusted service providers required to operate the app:</p>
          <ul>
            <li>Supabase — authentication and database storage</li>
            <li>Vercel — hosting</li>
            <li>OAuth Providers (Google, Microsoft, Apple when enabled) — login services</li>
          </ul>
          <p className="muted">We do not share your information with advertisers or unrelated third parties.</p>

          <h3>7. International Data Transfers</h3>
          <p className="muted">Service providers may process and store data in regions outside your country. All transfers comply with applicable data protection laws and security standards.</p>

          <h3>8. Children’s Privacy</h3>
          <p className="muted">Taskwatch is not intended for children under 13. We do not knowingly collect information from children under 13. If you believe a child has created an account, contact <a href="mailto:support@taskwatch.app">support@taskwatch.app</a> to request deletion.</p>

          <h3>9. Data Retention</h3>
          <p className="muted">We retain your information for as long as your account remains active. If you delete your account, we delete your authentication record and all user-generated data. Some security logs may be retained temporarily for fraud prevention.</p>

          <h3>10. Your Rights</h3>
          <p className="muted">Depending on your region, you may have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Request a copy of your data (export)</li>
            <li>Withdraw consent to data processing</li>
          </ul>
          <p className="muted">For any request, contact <a href="mailto:support@taskwatch.app">support@taskwatch.app</a>.</p>

          <h3>11. Account Deletion</h3>
          <p className="muted">You may delete your Taskwatch account at any time through the app’s settings. Upon deletion, all associated data stored in Supabase is permanently removed.</p>

          <h3>12. Security</h3>
          <p className="muted">
            We use encrypted communications, Row-Level Security, secure API access, and strict separation of user data.
            No system is 100% secure, but we maintain industry-standard protections.
          </p>

          <h3>13. Changes to This Policy</h3>
          <p className="muted">We may update this Privacy Policy to reflect improvements or legal requirements. We will update the “Last updated” date above. Continued use of Taskwatch after changes indicates acceptance of the updated policy.</p>

          <h3>14. Contact Us</h3>
          <p className="muted">
            If you have questions or privacy concerns, contact Gen Zero Studios at <a href="mailto:support@taskwatch.app">support@taskwatch.app</a>.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
