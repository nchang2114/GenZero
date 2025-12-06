import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Taskwatch() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const addRef = (el: HTMLElement | null) => { if (el) sectionsRef.current.push(el) }

  useEffect(() => { document.title = 'Taskwatch — GenZero' }, [])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show'))
    }, { threshold: 0.12 })
    sectionsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="reveal" ref={addRef as any}>
            <div className="section-kicker">Taskwatch</div>
            <h1 className="section-title">Own your time. Build your life.</h1>
            <p className="muted">
              Taskwatch is a personal operating system that shows you where your time goes and helps you steer it. Built on
              a simple stack of Goals → Buckets → Tasks, it keeps big ambitions, daily routines, and creative work aligned.
            </p>
            <div className="hero-ctas">
              <a className="btn primary" href="https://nc-taskwatch.vercel.app" target="_blank" rel="noreferrer">
                Launch Taskwatch
              </a>
              <Link className="btn" to="/taskwatch/pricing">Pricing</Link>
              <Link className="btn" to="/taskwatch/release-notes">Release Notes</Link>
              <Link className="btn" to="/taskwatch/policies">Terms & Policies</Link>
              <Link className="btn" to="/taskwatch/privacy">Privacy Policy</Link>
              <Link className="btn" to="/taskwatch/terms">Terms of Service</Link>
            </div>
          </div>

          <div className="grid">
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M4 4h16v4H4z" opacity=".7"/><path fill="currentColor" d="M4 10h10v10H4z"/><path fill="#00e5ff" d="M16 10h4v10h-4z" opacity=".45"/></svg>
              <h3>Clear Life Structure</h3>
              <p className="meta">Break goals into buckets and tasks with subtasks and notes so everything stays organized and actionable.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 2a8 8 0 11-8 8 8 8 0 018-8z"/><path fill="#7c4dff" d="M12 6h1v6h-1z" opacity=".55"/><path fill="#ff1e9c" d="M12 12h5v1h-5z" opacity=".65"/></svg>
              <h3>Stopwatch + SnapBack</h3>
              <p className="meta">Track work sessions, log distractions instantly, and stay aware of where your hours really go.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M3 5h18v4H3z" opacity=".85"/><path fill="currentColor" d="M3 11h14v8H3z"/><path fill="#00e5ff" d="M18 11h3v8h-3z" opacity=".55"/></svg>
              <h3>Visual Reflections</h3>
              <p className="meta">Weekly and daily reviews turn into clear insights so you can spot patterns and build momentum.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M4 4h8v8H4z"/><path fill="currentColor" d="M12 12h8v8h-8z" opacity=".8"/><path fill="#00e5ff" d="M12 4h8v4h-8z" opacity=".5"/><path fill="#7c4dff" d="M4 12h8v4H4z" opacity=".45"/></svg>
              <h3>Sync Everywhere</h3>
              <p className="meta">Start as a guest and create an account when you’re ready to save progress across devices.</p>
            </article>
          </div>

          <section className="reveal" ref={addRef as any}>
            <h2 className="section-title">Designed for real life</h2>
            <p className="muted">
              Taskwatch adapts to your flow—whether you are studying, shipping features, or building habits. Plan with
              clarity, stay present with the stopwatch, and reflect with visuals that make sense.
            </p>
            <div className="stats">
              <div className="stat reveal" ref={addRef as any}>
                <strong>Goals → Buckets → Tasks</strong>
                <span className="muted">Structure that keeps ambition grounded in everyday action.</span>
              </div>
              <div className="stat reveal" ref={addRef as any}>
                <strong>SnapBack Awareness</strong>
                <span className="muted">Log distractions fast so you can refocus without losing the thread.</span>
              </div>
              <div className="stat reveal" ref={addRef as any}>
                <strong>Weekly & Daily Reviews</strong>
                <span className="muted">Lightweight reflections that highlight patterns and progress.</span>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
