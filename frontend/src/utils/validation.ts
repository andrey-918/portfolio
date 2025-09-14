export interface ValidationRule {
  validator: (value: string) => boolean
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export interface FieldValidation {
  [fieldName: string]: ValidationRule[]
}

export const validators = {
  required: (value: string): boolean => value.trim().length > 0,
  minLength: (min: number) => (value: string): boolean => value.length >= min,
  maxLength: (max: number) => (value: string): boolean => value.length <= max,
  email: (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  noSpecialChars: (value: string): boolean => /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(value),
}

export const contactFormValidation: FieldValidation = {
  name: [
    {
      validator: validators.required,
      message: 'Имя обязательно для заполнения'
    },
    {
      validator: validators.minLength(2),
      message: 'Имя должно содержать минимум 2 символа'
    },
    {
      validator: validators.maxLength(50),
      message: 'Имя должно содержать максимум 50 символов'
    },
    {
      validator: validators.noSpecialChars,
      message: 'Имя не должно содержать специальные символы'
    }
  ],
  email: [
    {
      validator: validators.required,
      message: 'Email обязателен для заполнения'
    },
    {
      validator: validators.maxLength(50),
      message: 'Слишком длинный email, допустимо максимум 50 символов'
    },
    {
      validator: validators.email,
      message: 'Введите корректный email адрес (формата: your.email@example.com)'
    }
  ],
  company: [
    {
      validator: validators.maxLength(30),
      message: 'Слишком длинное название, максимум 30 символов'
    }
  ],
  subject: [
    {
      validator: validators.maxLength(30),
      message: 'Слишком длинная тема, лучше напишите всю информацию в сообщении (тут максимум 30 символов)'
    }
  ],
  message: [
    {
      validator: validators.required,
      message: 'Сообщение не может быть пустым'
    },
    {
      validator: validators.maxLength(1000),
      message: 'Сообщение не должно превышать 1000 символов'
    }
  ]
}


// Основная функция валидации
export const validateField = (
  fieldName: string,
  value: string,
  validationRules: FieldValidation
): ValidationResult => {
  const rules = validationRules[fieldName] || []
  const errors: string[] = []

  rules.forEach(rule => {
    if (!rule.validator(value)) {
      errors.push(rule.message)
    }
  })

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Валидация всей формы
export const validateForm = (
  formData: Record<string, string>,
  validationRules: FieldValidation
): Record<string, ValidationResult> => {
  const results: Record<string, ValidationResult> = {}

  Object.keys(validationRules).forEach(fieldName => {
    results[fieldName] = validateField(
      fieldName,
      formData[fieldName] || '',
      validationRules
    )
  })

  return results
}