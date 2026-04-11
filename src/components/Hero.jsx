import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 48
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) +
            Math.pow(y - canvas.height / 2, 2)
          )
          const wave = Math.sin(dist / 60 - time * 0.03) * 0.5 + 0.5
          const opacity = wave * 0.25 + 0.03
          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200, 240, 0, ${opacity})`
          ctx.fill()
        }
      }
      time++
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__noise" />

      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for projects — 2026
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">We Build</span>
          <span className="hero__title-line hero__title-line--accent">Iconic</span>
          <span className="hero__title-line">Digital<br/>Experiences.</span>
        </h1>

        <p className="hero__tagline">
          AXIOM is a full-service design studio crafting brands, interfaces,<br />
          and digital products that leave a lasting mark.
        </p>

        <div className="hero__cta">
          <a href="#portfolio" className="btn btn--primary">View Our Work</a>
          <a href="#contact" className="btn btn--ghost">Start a Project →</a>
        </div>

        <div className="hero__stats">
          {[
            { num: '120+', label: 'Projects' },
            { num: '8 yrs', label: 'Experience' },
            { num: '40+', label: 'Clients' },
          ].map(s => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__marquee-wrap">
        <div className="hero__marquee">
          {Array(2).fill(['UI/UX DESIGN', 'BRANDING', 'WEB DEVELOPMENT', 'DIGITAL MARKETING', 'MOTION DESIGN', 'STRATEGY']).flat().map((t, i) => (
            <span key={i}>{t} <em>✦</em></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
