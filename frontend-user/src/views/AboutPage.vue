<template>
  <div class="page about-page">
    <div class="page__hero">
      <div class="container">
        <h1 class="page__title">关于我们</h1>
        <p class="page__subtitle">了解 SkyLink Virtual Airlines 的故事</p>
      </div>
    </div>
    <AboutSection />
  </div>
</template>

<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<style lang="scss" scoped>
.about-page {
  padding-top: 80px;
}

.page__hero {
  background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
  padding: $spacing-16 0;
  text-align: center;
  color: white;
}

.page__title {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-4;
}

.page__subtitle {
  font-size: $font-size-lg;
  opacity: 0.8;
}
</style>
