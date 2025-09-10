import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])

  const addRef = (el: HTMLElement | null) => { if (el) sectionsRef.current.push(el) }

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 })
    sectionsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => { document.title = 'Contact — GenZero' }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="reveal" ref={addRef as any}>
            <div className="section-kicker">Contact</div>
            <h1 className="section-title">Let’s talk</h1>
            <p className="muted">Press, publishing, or playtesting? Drop us a line below. We typically respond within 2–3 business days.</p>
          </div>

          <div className="contact">
            <form className="contact-card reveal" ref={addRef as any} onSubmit={onSubmit} aria-label="Contact form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your project or question…" required />
              </div>
              <button className="btn primary" type="submit"><span className="dot"/> Send message</button>
              {submitted && (
                <p className="meta" role="status" aria-live="polite" style={{marginTop:12}}>
                  Thanks — your message is ready to send. Hook this form to your backend or email provider.
                </p>
              )}
            </form>
            <aside className="contact-side reveal" ref={addRef as any}>
              <h3>Direct</h3>
              <p className="meta">Prefer email? Reach us at <strong>hello@example.com</strong> and we’ll route you to the right person.</p>
              <div className="spacer-40"/>
              <h3>Social</h3>
              <p className="meta">Follow development updates and playtest calls.</p>
              <div className="social">
                <a href="#" aria-label="X / Twitter">X</a>
                <a href="#" aria-label="Discord">Discord</a>
                <a href="#" aria-label="Steam">Steam</a>
                <a href="#" aria-label="YouTube">YouTube</a>
              </div>
            </aside>
          </div>
          {/* Extra content to lengthen page */}
          <div className="spacer-40" />
          <p className="muted">We read every message. For business inquiries, include timelines and platforms to help us route your note.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
