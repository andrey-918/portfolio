import React from 'react'

interface PugFormProps {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
  className?: string
}

export const PugForm: React.FC<PugFormProps> = ({ 
  children, 
  onSubmit, 
  className = '' 
}) => {
  return (
    <form onSubmit={onSubmit} className={`pug-form ${className}`}>
      {children}
    </form>
  )
}

interface FormGroupProps {
  children: React.ReactNode
  className?: string
}

export const FormGroup: React.FC<FormGroupProps> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`form-group ${className}`}>{children}</div>
}

interface FormRowProps {
  children: React.ReactNode
  className?: string
}

export const FormRow: React.FC<FormRowProps> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`form-row ${className}`}>{children}</div>
}

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export const Label: React.FC<LabelProps> = ({ 
  htmlFor, 
  children, 
  className = '' 
}) => {
  return (
    <label htmlFor={htmlFor} className={`pug-label ${className}`}>
      {children}
    </label>
  )
}

interface InputProps {
  type: string
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
}

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = ''
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`pug-input ${className}`}
    />
  )
}

interface TextAreaProps {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  rows?: number
  className?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  rows = 5,
  className = ''
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`pug-textarea ${className}`}
    />
  )
}

interface ButtonProps {
  type: 'submit' | 'button'
  children: React.ReactNode
  disabled?: boolean
  className?: string
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled = false,
  className = '',
  loading = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`pug-button ${className} ${loading ? 'loading' : ''}`}
    >
      {loading ? 'Отправка...' : children}
    </button>
  )
}