import React, { useState } from 'react'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Forma – Finance App',
    category: 'UI/UX Design',
    year: '2024',
    color: '#1a1a2e',
    accent: '#C8F000',
    emoji: '💳',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  {
    id: 2,
    title: 'Verde – Eco Brand',
    category: 'Branding',
    year: '2024',
    color: '#0d1f0d',
    accent: '#5dde72',
    emoji: '🌿',
    gradient: 'linear-gradient(135deg, #0d1f0d 0%, #162b16 100%)',
  },
  {
    id: 3,
    title: 'Pulse – Health Platform',
    category: 'Web Development',
    year: '2024',
    color: '#1f0d1a',
    accent: '#ff6b9d',
    emoji: '❤️',
    gradient: 'linear-gradient(135deg, #1f0d1a 0%, #2d1228 100%)',
  },
  {
    id: 4,
    title: 'Lumen – SaaS Dashboard',
    category: 'UI/UX + Dev',
    year: '2023',
    color: '#0d1520',
    accent: '#60b0ff',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #0d1520 0%, #0a1628 100%)',
  },
  {
    id: 5,
    title: 'Nox – Nightlife App',
    category: 'Digital Marketing',
    year: '2023',
    color: '#130d1f',
    accent: '#b06bff',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #130d1f 0%, #1c1030 100%)',
  },
  {
    id: 6,
    title: 'Arc – Architecture Firm',
    category: 'Branding + Web',
    year: '2023',
    color: '#1a1510',
    accent: '#f0b860',
    emoji: '🏛️',
    gradient: 'linear-gradient(135deg, #1a1510 0%, #261f14 100%)',
  },
]

const Portfolio = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-sub">
            A collection of projects we're proud of — spanning brands, products, and platforms.
          </p>
        </div>

        <div className="portfolio__grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`portfolio-card ${hovered === p.id ? 'portfolio-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--card-accent': p.accent }}
            >
              <div
                className="portfolio-card__thumb"
                style={{ background: p.gradient }}
              >
                <span className="portfolio-card__emoji">{p.emoji}</span>
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__cta">View Project →</span>
                </div>

                {/* Decorative elements */}
                <div className="portfolio-card__deco" style={{ borderColor: p.accent }} />
                <div className="portfolio-card__corner" style={{ background: p.accent }} />
              </div>

              <div className="portfolio-card__info">
                <div className="portfolio-card__meta">
                  <span className="portfolio-card__category">{p.category}</span>
                  <span className="portfolio-card__year">{p.year}</span>
                </div>
                <h3 className="portfolio-card__title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__footer">
          <a href="#contact" className="btn btn--ghost">Let's build something together →</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
