<template>
  <div v-if="error" class="error-boundary">
    <div class="error-boundary__content">
      <div class="error-boundary__icon">⚠️</div>
      <h3 class="error-boundary__title">页面出现问题</h3>
      <p class="error-boundary__message">{{ error.message || '发生未知错误' }}</p>
      <button class="error-boundary__btn" @click="reset">重新加载</button>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'
import logger from '@/utils/logger'

const error = ref(null)

onErrorCaptured((err, instance, info) => {
  error.value = err
  logger.error('Component error captured', { error: err, info })
  return false
})

const reset = () => {
  error.value = null
  window.location.reload()
}
</script>

<style lang="scss" scoped>
.error-boundary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 40px;

  &__content {
    text-align: center;
    max-width: 400px;
  }

  &__icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #1a365d;
    margin-bottom: 8px;
  }

  &__message {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 24px;
  }

  &__btn {
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, #1a365d 0%, #2563eb 100%);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    }
  }
}
</style>
