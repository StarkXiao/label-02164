<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__container">
      <a href="#hero" class="header__logo" @click.prevent="scrollTo('hero')">
        <img src="/favicon.svg" alt="SkyLink" class="header__logo-icon" />
        <span class="header__logo-text">SkyLink VA</span>
      </a>

      <nav class="header__nav header__nav--desktop">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="'#' + item.id"
          class="header__nav-link"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
        <a href="#recruit" class="btn btn-accent header__cta" @click.prevent="scrollTo('recruit')">
          加入我们
        </a>
      </nav>

      <button 
        class="header__mobile-toggle"
        @click="toggleMobileMenu"
      >
        <span class="header__mobile-toggle-bar"></span>
        <span class="header__mobile-toggle-bar"></span>
        <span class="header__mobile-toggle-bar"></span>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="header__mobile-menu">
      <a 
        v-for="item in navItems" 
        :key="item.id"
        :href="'#' + item.id"
        class="header__mobile-link"
        @click.prevent="scrollTo(item.id)"
      >
        {{ item.label }}
      </a>
      <a href="#recruit" class="btn btn-accent header__mobile-cta" @click.prevent="scrollTo('recruit')">
        加入我们
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: '首页', id: 'hero' },
  { label: '关于我们', id: 'about' },
  { label: '联飞平台', id: 'platform' },
  { label: '机队展示', id: 'fleet' },
  { label: '航线网络', id: 'routes' },
  { label: '新闻动态', id: 'news' }
]

const scrollTo = (id) => {
  isMobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: $spacing-4 0;
  transition: all $transition-normal;

  &--scrolled {
    background: rgba(26, 54, 93, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: $shadow-lg;
    padding: $spacing-3 0;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: $spacing-3;
  }

  &__logo-icon {
    width: 40px;
    height: 40px;
  }

  &__logo-text {
    font-family: $font-family-heading;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: white;
  }

  &__nav--desktop {
    display: flex;
    align-items: center;
    gap: $spacing-6;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  &__nav-link {
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    color: rgba(255, 255, 255, 0.9);
    padding: $spacing-2 $spacing-3;
    border-radius: $radius-md;
    transition: all $transition-fast;

    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__cta {
    margin-left: $spacing-4;
  }

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: $spacing-2;

    @media (max-width: 1023px) {
      display: flex;
    }
  }

  &__mobile-toggle-bar {
    width: 24px;
    height: 2px;
    background: white;
    border-radius: 2px;
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1a365d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $spacing-6;
    z-index: 9999;
  }

  &__mobile-link {
    font-size: $font-size-2xl;
    font-weight: $font-weight-medium;
    color: white;
    padding: $spacing-3;
  }

  &__mobile-cta {
    margin-top: $spacing-4;
  }
}
</style>
