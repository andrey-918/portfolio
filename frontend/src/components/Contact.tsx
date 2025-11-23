import React, { useState } from 'react'
import axios from 'axios'
import { validateField, validateForm, contactFormValidation } from '../utils/validation'
import '../styles/contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      const validation = validateField(name, value, contactFormValidation)
      setErrors(prev => ({
        ...prev,
        [name]: validation.isValid ? [] : validation.errors
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationResults = validateForm(formData, contactFormValidation)
    const newErrors: Record<string, string[]> = {}
    let isFormValid = true

    Object.entries(validationResults).forEach(([fieldName, result]) => {
      if (!result.isValid) {
        newErrors[fieldName] = result.errors
        isFormValid = false
      }
    })

    setErrors(newErrors)

    if (!isFormValid) {
      const firstErrorField = Object.keys(newErrors)[0]
      document.getElementById(firstErrorField)?.focus()
      return
    }

    setIsSubmitting(true)
    try {
      await axios.post('/api/contact', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      setErrors({})
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="global-container">
        <div className="contact-inner">
          <div className="contact-badge">
            <span className="contact-badge-text">Get In Touch</span>
          </div>

          <h2 className="contact-title">
            LET'S WORK<br />
            TOGETHER
          </h2>

          <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <a href="mailto:karganov.an@yandex.ru" className="contact-info-link">
                karganov.an@yandex.ru
              </a>
            </div>

            <div className="contact-info-item">
              <h3>Location</h3>
              <p>
                Москва, Россия
              </p>
            </div>

            <div className="contact-info-item">
              <h3>Follow</h3>
              <div className="flex gap-4">
                <a href="https://github.com/andrey-918" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                <a href="https://t.me/andrey_918" target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                />
                {errors.name && (
                  <div className="contact-field-error">
                    {errors.name.map((error, index) => (
                      <div key={index}>• {error}</div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  required
                />
                {errors.email && (
                  <div className="contact-field-error">
                    {errors.email.map((error, index) => (
                      <div key={index}>• {error}</div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company (optional)"
                />
                {errors.company && (
                  <div className="contact-field-error">
                    {errors.company.map((error, index) => (
                      <div key={index}>• {error}</div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject (optional)"
                />
                {errors.subject && (
                  <div className="contact-field-error">
                    {errors.subject.map((error, index) => (
                      <div key={index}>• {error}</div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows={4}
                  required
                />
                {errors.message && (
                  <div className="contact-field-error">
                    {errors.message.map((error, index) => (
                      <div key={index}>• {error}</div>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="contact-success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact-error">
                  ❌ Error sending message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
        {/* Footer */}
        <div className="contact-footer">
          <p>
            © 2025 Andrey Karganov. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
