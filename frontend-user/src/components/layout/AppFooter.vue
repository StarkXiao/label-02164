<template>
  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__copyright">
        Copyright © 2014 - 2026 SKYLINK-VA.COM All Rights Reserved
      </p>
      <span class="footer__icp">京ICP备xxxxxxxx号</span>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  background: $color-primary;
  padding: $spacing-4 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: $spacing-4;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }

  &__copyright {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  &__icp {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
