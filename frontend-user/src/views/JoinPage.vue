<template>
  <div class="page join-page">
    <div class="page__hero">
      <div class="container">
        <h1 class="page__title">加入我们</h1>
        <p class="page__subtitle">开启您的虚拟飞行生涯</p>
      </div>
    </div>
    <RecruitSection />
  </div>
</template>

<script setup>
import RecruitSection from '@/components/sections/RecruitSection.vue'
</script>

<style lang="scss" scoped>
.join-page {
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
