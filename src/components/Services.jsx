import React from 'react'
import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="26" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="4" y="26" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="35" cy="35" r="9" stroke="currentColor" strokeWidth="2.2"/>
        <line x1="35" y1="30" x2="35" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="30" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    number: '01',
    title: 'UI/UX Design',
    desc: 'We design interfaces people love to use — from wireframes to pixel-perfect, research-backed digital products that drive results.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="14,18 4,24 14,30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="34,18 44,24 34,30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="28" y1="10" x2="20" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    number: '02',
    title: 'Web Development',
    desc: 'We build fast, scalable web applications with modern tech stacks — from marketing sites to complex platforms, performance-first.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M24 8 C16 16 16 32 24 40 C32 32 32 16 24 8Z" stroke="currentColor" strokeWidth="2.2"/>
        <line x1="8" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="2.2"/>
        <line x1="7" y1="28" x2="41" y2="28" stroke="currentColor" strokeWidth="2.2"/>
      </svg>
    ),
    number: '03',
    title: 'Branding',
    desc: 'We craft brand identities that stand out — logos, systems, guidelines, and visual language that communicate who you are at a glance.',
    tags: ['Identity', 'Logo', 'Guidelines'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36 L16 24 L24 30 L32 16 L40 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    number: '04',
    title: 'Digital Marketing',
    desc: 'We grow your digital presence with data-driven campaigns — SEO, paid media, content strategy, and conversion optimisation.',
    tags: ['SEO', 'Paid Ads', 'Analytics'],
  },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            From concept to launch, we cover the full spectrum of digital design and development.
          </p>
        </div>

        <div className="services__grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.number}>
              <div className="service-card__top">
                <div className="service-card__icon">{svc.icon}</div>
                <span className="service-card__number">{svc.number}</span>
              </div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <div className="service-card__tags">
                {svc.tags.map(t => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
              <div className="service-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
