const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
}

const currentLevel = import.meta.env.DEV ? LOG_LEVELS.DEBUG : LOG_LEVELS.WARN

const formatMessage = (level, message, data) => {
  const timestamp = new Date().toISOString()
  return { timestamp, level, message, data }
}

export const logger = {
  debug(message, data = null) {
    if (currentLevel <= LOG_LEVELS.DEBUG) {
      console.log('[DEBUG]', formatMessage('DEBUG', message, data))
    }
  },

  info(message, data = null) {
    if (currentLevel <= LOG_LEVELS.INFO) {
      console.info('[INFO]', formatMessage('INFO', message, data))
    }
  },

  warn(message, data = null) {
    if (currentLevel <= LOG_LEVELS.WARN) {
      console.warn('[WARN]', formatMessage('WARN', message, data))
    }
  },

  error(message, error = null) {
    if (currentLevel <= LOG_LEVELS.ERROR) {
      console.error('[ERROR]', formatMessage('ERROR', message, {
        error: error?.message,
        stack: error?.stack
      }))
    }
  }
}

export default logger
