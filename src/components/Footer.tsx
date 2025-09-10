import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer role="contentinfo" aria-label="Site footer">
      <div className="container footer-inner">
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/genzero.svg" width={20} height={20} alt="GenZero" />
          <span>© {year} GenZero</span>
        </div>
        <div className="social">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">TOS</Link>
          <Link to="/press">Press</Link>
          <Link to="/brand">Brand</Link>
        </div>
      </div>
    </footer>
  )
}
