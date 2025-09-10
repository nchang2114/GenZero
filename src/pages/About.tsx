import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'

export default function About() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const addRef = (el: HTMLElement | null) => { if (el) sectionsRef.current.push(el) }

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 })
    sectionsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => { document.title = 'About Us — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="reveal" ref={addRef as any}>
            <div className="section-kicker">The Studio</div>
            <h1 className="section-title">Independent, technical, and relentlessly polished</h1>
            <p className="muted">GenZero is a distributed team of engineers, artists, and designers building games with long‑term support in mind. We ship fast, iterate in public, and treat craft as a competitive edge.</p>
          </div>
          <div className="grid">
            <article className="card reveal" ref={addRef as any}>
              <h3>Our Focus</h3>
              <p className="meta">Systems‑driven design, competitive depth, and feel‑good controls.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <h3>Our Process</h3>
              <p className="meta">Tight iteration loops, frequent playtests, data‑informed decisions.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <h3>Our Promise</h3>
              <p className="meta">No crunch, clear roadmaps, and long‑term support.</p>
            </article>
            <article className="card reveal" ref={addRef as any}>
              <h3>Tech</h3>
              <p className="meta">Unreal/Unity expertise, console & PC performance, custom tooling.</p>
            </article>
          </div>
          <div className="stats">
            <div className="stat reveal" ref={addRef as any}><strong>60 fps</strong><span className="muted">Target across platforms</span></div>
            <div className="stat reveal" ref={addRef as any}><strong>5+</strong><span className="muted">Platforms & inputs</span></div>
            <div className="stat reveal" ref={addRef as any}><strong>Community</strong><span className="muted">Roadmaps & playtests</span></div>
          </div>
          {/* Extra content to lengthen page */}
          <section>
            <h2 className="section-title">Our Values</h2>
            <p className="muted">Clarity, craft, and respect for players’ time. We prototype quickly, test broadly, and polish relentlessly.</p>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
