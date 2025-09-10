import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show')
        })
      },
      { threshold: 0.12 }
    )
    sectionsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (!el) return
    sectionsRef.current.push(el)
  }


  return (
    <>
      <main className="page">
        <div className="container">
          <div className="reveal" ref={addRef as any}>
            <div className="eyebrow">Future‑Forward Game Studio</div>
            <h1 className="headline">
              We build worlds for the <span className="gradient-text">next generation</span> of players.
            </h1>
            <p className="subhead">
              GenZero crafts high‑impact, systems‑driven games that blend cinematic feel with competitive depth. We obsess over performance, polish, and community.
            </p>
            <div className="hero-ctas">
              <Link className="btn primary" to="/games"><span className="dot"/> Explore our games</Link>
              <Link className="btn" to="/about">About us</Link>
            </div>
          </div>
          <div className="grid">
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 2l3 7h7l-5.5 4 2.1 7L12 16l-6.6 4 2.1-7L2 9h7z" opacity=".9"/></svg>
              <h3>Engineered Performance</h3>
              <p className="meta">Low‑latency input, high frame stability, and build‑to‑fit optimizations across platforms.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 3l8 4v10l-8 4-8-4V7z"/><path fill="#7c4dff" d="M8 9h8v6H8z" opacity=".4"/></svg>
              <h3>Cinematic Feel</h3>
              <p className="meta">Striking visuals and audio designed to create memorable, sharable moments.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M3 11h18v2H3zM11 3h2v18h-2z"/></svg>
              <h3>Systems‑Driven</h3>
              <p className="meta">Depth and mastery through clean core loops and emergent mechanics.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 12a5 5 0 110-10 5 5 0 010 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>
              <h3>Player‑First</h3>
              <p className="meta">Community‑backed development, seasonal updates, and transparent roadmaps.</p>
            </article>
          </div>
          <div className="hero-extra reveal" ref={addRef as any}>
            <h2 className="section-title">What we’re building</h2>
            <p className="muted">We iterate in the open and share progress as soon as it’s playable. Expect frequent playtests, detailed patch notes, and community‑driven balance updates.</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
