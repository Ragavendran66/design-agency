import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work<br/>Together.</h2>
          <p className="contact__desc">
            Have a project in mind? Tell us about it. We'll get back to you within 24 hours.
          </p>

          <div className="contact__info">
            {[
              { label: 'Email', val: 'hello@axiomstudio.com' },
              { label: 'Phone', val: '+91 74747-47474' },
              { label: 'Based In', val: 'TamilNadu' },
            ].map(item => (
              <div className="contact__info-item" key={item.label}>
                <span className="contact__info-label">{item.label}</span>
                <span className="contact__info-val">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__right">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>We'll be in touch within 24 hours. Talk soon.</p>
              <button
                className="btn btn--ghost"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${errors.name ? 'form-group--error' : ''}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ragavendran"
                  autoComplete="name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ragavendran2021@company.com"
                  autoComplete="email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.message ? 'form-group--error' : ''}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`btn btn--primary contact__submit ${loading ? 'contact__submit--loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="contact__spinner" />
                ) : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
