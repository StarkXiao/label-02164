<template>
  <div class="page routes-page">
    <div class="page__hero">
      <div class="container">
        <h1 class="page__title">航线网络</h1>
        <p class="page__subtitle">连接世界各地的航线</p>
      </div>
    </div>
    <RoutesSection />
  </div>
</template>

<script setup>
import RoutesSection from '@/components/sections/RoutesSection.vue'
</script>

<style lang="scss" scoped>
.routes-page {
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
