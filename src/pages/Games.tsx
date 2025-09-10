import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'

export default function Games() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 })
    sectionsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => { if (el) sectionsRef.current.push(el) }

  useEffect(() => { document.title = 'Games — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="reveal" ref={addRef as any}>
            <div className="section-kicker">Our Games</div>
            <h1 className="section-title">Play something that pushes the envelope</h1>
            <p className="muted">From neon‑streaked arcades to meditative sci‑fi, each title focuses on crisp mechanics and replayability.</p>
          </div>
          <div className="games">
            <article className="game reveal" ref={addRef as any}>
              <div className="game-media" aria-hidden />
              <h3>Project Aurora</h3>
              <p className="meta">Synth‑driven action roguelite. Tight combat. Infinite builds.</p>
              <a className="pill" href="#">Request press kit</a>
            </article>
            <article className="game reveal" ref={addRef as any}>
              <div className="game-media" aria-hidden />
              <h3>Neon Drift</h3>
              <p className="meta">Anti‑gravity racing with modular crafts and ranked circuits.</p>
              <a className="pill" href="#">Get notified</a>
            </article>
            <article className="game reveal" ref={addRef as any}>
              <div className="game-media" aria-hidden />
              <h3>Echo Nexus</h3>
              <p className="meta">Atmospheric exploration where every signal has a story.</p>
              <a className="pill" href="#">Learn more</a>
            </article>
          </div>
          {/* Extra content to lengthen page */}
          <div className="stats">
            <div className="stat reveal" ref={addRef as any}><strong>3</strong><span className="muted">Projects in active dev</span></div>
            <div className="stat reveal" ref={addRef as any}><strong>Weekly</strong><span className="muted">Playtest cadence</span></div>
            <div className="stat reveal" ref={addRef as any}><strong>Early</strong><span className="muted">Community feedback</span></div>
          </div>
          
          
        </div>
        <Footer />
      </main>
    </>
  )
}
