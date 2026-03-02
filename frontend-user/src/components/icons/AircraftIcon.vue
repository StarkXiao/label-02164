<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" :class="['aircraft-icon', { 'aircraft-icon--animated': animated }]">
    <path 
      d="M50 15 L55 35 L80 45 L80 50 L55 48 L55 70 L65 78 L65 82 L50 77 L35 82 L35 78 L45 70 L45 48 L20 50 L20 45 L45 35 Z" 
      :fill="color"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' },
  animated: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.aircraft-icon {
  &--animated {
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
