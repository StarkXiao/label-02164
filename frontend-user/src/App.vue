<template>
  <ErrorBoundary>
    <div class="app">
      <AppHeader />
      <main class="main-content">
        <router-view />
      </main>
      <AppFooter />
    </div>
  </ErrorBoundary>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'
import logger from '@/utils/logger'

onMounted(() => {
  logger.info('App mounted')
  if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
})

window.addEventListener('error', (event) => {
  logger.error('Global error', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled promise rejection', event.reason)
})
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
