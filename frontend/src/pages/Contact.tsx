import React, { useState } from 'react'
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

interface SocialLink {
  name: string
  url: string
  icon: string
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙',
      username: '@andrey-918'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
      username: 'yourname'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/yourusername',
      icon: '✈️',
      username: '@andrey_918'
    },
    {
      name: 'Email',
      url: 'mailto:karganov.an@yandex.ru',
      icon: '📧',
      username: 'karganov.an@yandex.ru'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('Отправка формы:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <h3>📍 Локация</h3>
              <p>Москва, Россия</p>
              
              <h3>⏰ Время ответа</h3>
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