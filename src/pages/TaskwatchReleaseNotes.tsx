import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function TaskwatchReleaseNotes() {
  useEffect(() => { document.title = 'Taskwatch — Release Notes' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Taskwatch</div>
          <h1 className="section-title">Release Notes</h1>
          <p className="muted">A changelog of the latest updates for Taskwatch.</p>
          <p className="muted">Updated: December 5, 2024</p>
          <div className="hero-ctas" style={{marginTop: 'var(--space-4)'}}>
            <a className="btn" href="https://genzero.vercel.app/taskwatch" target="_blank" rel="noreferrer">Back to Taskwatch</a>
            <a className="btn primary" href="https://nc-taskwatch.vercel.app" target="_blank" rel="noreferrer">Launch Taskwatch</a>
          </div>
          <div className="spacer-40" />

          <section className="release-notes">
            <article className="release-note">
              <p className="release-date">December 5, 2024</p>
              <h2>First beta: Taskwatch is live for early adopters</h2>
              <p className="muted">
                The first public beta of Taskwatch is here. It’s built to help you see where your time goes, keep goals connected
                to everyday work, and make reviewing your week feel effortless.
              </p>
              <ul className="release-list">
                <li><strong>Goals → Buckets → Tasks:</strong> Structure your ambitions into actionable stacks with subtasks and notes.</li>
                <li><strong>Stopwatch with SnapBack:</strong> Track sessions, log distractions instantly, and stay aware of focus breaks.</li>
                <li><strong>Visual reviews:</strong> Weekly and daily reflections that surface patterns without heavy setup.</li>
                <li><strong>Cross-device sync:</strong> Start as a guest, sign in when ready, and keep data synced via Supabase.</li>
                <li><strong>Privacy-first defaults:</strong> No ads or trackers; data encrypted in transit and at rest.</li>
              </ul>
              <p className="muted">Try the beta, send feedback, and help shape the roadmap.</p>
            </article>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
