import React, { useState } from 'react'
import axios from 'axios'
import { validateField, validateForm, contactFormValidation } from '../utils/validation'

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
      <div className="container mx-auto px-6 lg:px-20">
        <div className="contact-content">
          <div className="bg-white inline-block px-4 py-2 mb-8">
            <span className="text-black text-sm tracking-wider">Get In Touch</span>
          </div>

          <h2 className="text-6xl lg:text-8xl tracking-tight leading-none mb-16">
            LET'S WORK<br />
            TOGETHER
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-500 mb-2">Email</h3>
                <a href="mailto:karganov.an@yandex.ru" className="contact-info-link">
                  karganov.an@yandex.ru
                </a>
              </div>

              <div>
                <h3 className="text-gray-500 mb-2">Location</h3>
                <p className="text-xl">
                  Москва, Россия
                </p>
              </div>

              <div>
                <h3 className="text-gray-500 mb-2">Follow</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/andrey-918" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
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
                    className="w-full bg-transparent border-b-2 border-black py-3 outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-500 text-sm">
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
                    className="w-full bg-transparent border-b-2 border-black py-3 outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-500 text-sm">
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
                    className="w-full bg-transparent border-b-2 border-black py-3 outline-none focus:border-gray-500 transition-colors"
                  />
                  {errors.company && (
                    <div className="mt-1 text-red-500 text-sm">
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
                    className="w-full bg-transparent border-b-2 border-black py-3 outline-none focus:border-gray-500 transition-colors"
                  />
                  {errors.subject && (
                    <div className="mt-1 text-red-500 text-sm">
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
                    className="w-full bg-transparent border-b-2 border-black py-3 outline-none focus:border-gray-500 transition-colors resize-none"
                    required
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-500 text-sm">
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
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">
                    ❌ Error sending message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              © 2025 Andrey Karganov. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
