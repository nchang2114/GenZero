import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Press from './pages/Press'
import Brand from './pages/Brand'

function App() {
  // Cursor glow follows pointer across all pages
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mx', e.clientX + 'px')
      document.body.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="GenZero Home">
            <svg viewBox="0 0 128 128" aria-hidden width="28" height="28">
              <defs>
                <linearGradient id="navg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="50%" stopColor="#7c4dff" />
                  <stop offset="100%" stopColor="#ff1e9c" />
                </linearGradient>
              </defs>
              <path d="M64 8l48 28v56L64 120 16 92V36z" fill="none" stroke="url(#navg)" strokeWidth="6" />
            </svg>
            <span className="brand-title">GenZero</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          {/* Removed standalone Contact CTA to keep only nav tabs */}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/press" element={<Press />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
