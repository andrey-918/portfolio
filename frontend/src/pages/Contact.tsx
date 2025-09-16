import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import {
  PugForm,
  FormGroup,
  FormRow,
  Label,
  Input,
  TextArea,
  Button
} from '../components/UI/PugForm'
import '../styles/Contact.css'

import { 
  validateField, 
  validateForm, 
  contactFormValidation,
} from '../utils/validation'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  username: string
}

export const Contact: React.FC = () => {
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
      console.log('Отправка формы:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
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

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/andrey-918',
      icon: <FaGithub size={20} color='#333' />,
      username: '@andrey-918'
    },
    {
      name: 'LinkedIn',
      url: '',
      icon: <FaLinkedin size={20} color='#0077B5'/>,
      username: 'andrey'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/andrey_918',
      icon: <FaTelegram size={20} color='#0088cc' />,
      username: '@andrey_918'
    },
    {
      name: 'Email',
      url: 'mailto:karganov.an@yandex.ru',
      icon: <FaEnvelope size={20} color=''/>,
      username: 'karganov.an@yandex.ru'
    }
  ]

  return (
    <div className="contact-page">
      <div className="container">
        
        <div className="contact-header">
          <h1>Свяжитесь со мной</h1>
          <p>Готов к новым проектам и сотрудничеству. Отвечаю быстро! ⚡</p>
        </div>

        <div className="contact-content">
          
          {/* Соцсети и контакты */}
          <div className="contact-info">
            <h2>Мои контакты</h2>
            <div className="social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon">{social.icon}</div>
                  <div className="social-info">
                    <h3>{social.name}</h3>
                    <p>{social.username}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="additional-info">
              <h3><FaMapMarkerAlt style={{ marginRight: '8px', color: '#ff4444'}} /> Локация</h3>
              <p>Москва, Россия</p>
              
              <h3><FaClock style={{ marginRight: '8px', color: 'grey'}} /> Время ответа</h3>
              <p>Обычно отвечаю в течение 24 часов</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Написать сообщение</h2>
            
            <PugForm onSubmit={handleSubmit} className="contact-form">
              
              <FormRow className="form-row">
                <FormGroup className="form-group">
                  <Label htmlFor="name" className="form-label">
                    Имя *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={true}
                    placeholder="Ваше имя"
                    className="form-input"
                  />
                  {errors.name && (
                    <div className="error-messages">
                      {errors.name.map((error, index) => (
                        <span key={index} className="error-message">• {error}</span>
                      ))}
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup className="form-group">
                  <Label htmlFor="email" className="form-label">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required={true}
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                  {errors.email && (
                    <div className="error-messages">
                      {errors.email.map((error, index) => (
                        <span key={index} className="error-message">• {error}</span>
                      ))}
                    </div>
                  )}
                </FormGroup>
              </FormRow>

              <FormGroup className="form-group">
                <Label htmlFor="subject" className="form-label">
                  Компания
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Укажите, кого представляете"
                  className="form-input"
                />
                {errors.company && (
                  <div className="error-messages">
                    {errors.company.map((error, index) => (
                      <span key={index} className="error-message">• {error}</span>
                    ))}
                  </div>
                )}
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="subject" className="form-label">
                  Тема
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="О чем хотите поговорить?"
                  className="form-input"
                />
                {errors.subject && (
                  <div className="error-messages">
                    {errors.subject.map((error, index) => (
                      <span key={index} className="error-message">• {error}</span>
                    ))}
                  </div>
                )}
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="message" className="form-label">
                  Сообщение *
                </Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required={true}
                  rows={5}
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                  className="form-textarea"
                />
                {errors.message && (
                  <div className="error-messages">
                    {errors.message.map((error, index) => (
                      <span key={index} className="error-message">• {error}</span>
                    ))}
                  </div>
                )}
              </FormGroup>

              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="submit-btn"
              >
                Отправить сообщение
              </Button>

              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ Сообщение отправлено! Свяжусь с вами скоро.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ Ошибка отправки. Попробуйте еще раз или напишите напрямую на email.
                </div>
              )}
              
            </PugForm>
          </div>
        </div>
      </div>
    </div>
  )
}