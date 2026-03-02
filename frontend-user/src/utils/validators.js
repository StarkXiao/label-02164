export const validators = {
  required: (value, message = '此项为必填') => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return message
    }
    return null
  },

  email: (value, message = '请输入有效的邮箱地址') => {
    if (!value) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return message
    }
    return null
  },

  minLength: (min) => (value, message = `最少需要${min}个字符`) => {
    if (!value) return null
    if (value.length < min) {
      return message
    }
    return null
  },

  maxLength: (max) => (value, message = `最多允许${max}个字符`) => {
    if (!value) return null
    if (value.length > max) {
      return message
    }
    return null
  },

  pattern: (regex, message = '格式不正确') => (value) => {
    if (!value) return null
    if (!regex.test(value)) {
      return message
    }
    return null
  },

  vatsimCid: (value, message = 'VATSIM CID 应为纯数字') => {
    if (!value) return null
    if (!/^\d+$/.test(value)) {
      return message
    }
    return null
  }
}

export const validateForm = (data, rules) => {
  const errors = {}
  let isValid = true

  for (const [field, fieldRules] of Object.entries(rules)) {
    for (const rule of fieldRules) {
      const error = rule(data[field])
      if (error) {
        errors[field] = error
        isValid = false
        break
      }
    }
  }

  return { isValid, errors }
}

export default validators
