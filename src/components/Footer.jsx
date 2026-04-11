import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">AXIOM<span>.</span></div>
        <p className="footer__copy">© 2025 AXIOM Studio. All rights reserved.</p>
        <div className="footer__links">
          {['X', 'Instagram', 'Facebook'].map(s => (
            <a key={s} href="#" className="footer__link">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
