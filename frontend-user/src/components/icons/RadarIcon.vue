<template>
  <svg :width="size" :height="size" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="28" fill="rgba(255,255,255,0.2)"/>
    <text x="30" y="38" text-anchor="middle" :fill="textColor" font-size="24" font-weight="bold">
      <slot>{{ text }}</slot>
    </text>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 60 },
  text: { type: String, default: '' },
  textColor: { type: String, default: 'white' }
})
</script>
