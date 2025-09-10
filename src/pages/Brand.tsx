import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Brand() {
  useEffect(() => { document.title = 'Brand — GenZero' }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Media</div>
          <h1 className="section-title">Brand Guidelines</h1>
          <p className="muted">Downloadable assets and usage rules.</p>
          <div className="spacer-40"/>
          <p>Use the GenZero logo and colors with care. Don’t alter proportions or apply outlines that reduce contrast.</p>
          {/* Extra content to lengthen page */}
          <div className="spacer-40" />
          <p className="muted">Need vector assets or alternate lockups? Contact brand@example.com for access.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
