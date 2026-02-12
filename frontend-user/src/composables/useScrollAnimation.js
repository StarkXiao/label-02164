import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initObserver
  }
}
