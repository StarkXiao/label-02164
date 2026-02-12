import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyLoad(options = {}) {
  const isVisible = ref(false)
  const elementRef = ref(null)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px',
    ...options
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
    elementRef
  }
}
