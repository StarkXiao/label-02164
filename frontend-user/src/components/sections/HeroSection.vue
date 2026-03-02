<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <div class="hero__bg-image"></div>
      <div class="hero__bg-overlay"></div>
    </div>

    <div class="hero__aircraft">
      <svg viewBox="0 0 200 60" class="hero__aircraft-svg">
        <ellipse cx="100" cy="30" rx="70" ry="12" fill="white"/>
        <path d="M170 30 Q185 30 190 30 Q185 28 170 26 Z" fill="white"/>
        <ellipse cx="175" cy="30" rx="8" ry="6" fill="#e2e8f0"/>
        <path d="M30 30 L15 15 L25 30 L15 45 L30 30 Z" fill="white"/>
        <path d="M30 18 L20 5 L35 18 Z" fill="#1a365d"/>
        <path d="M80 30 L60 55 L130 55 L110 30 Z" fill="#f7fafc" opacity="0.9"/>
        <path d="M80 30 L60 5 L130 5 L110 30 Z" fill="white"/>
        <ellipse cx="75" cy="42" rx="8" ry="5" fill="#718096"/>
        <ellipse cx="125" cy="42" rx="8" ry="5" fill="#718096"/>
        <g fill="#4299e1">
          <circle cx="160" cy="28" r="3"/>
          <circle cx="150" cy="28" r="2"/>
          <circle cx="142" cy="28" r="2"/>
          <circle cx="134" cy="28" r="2"/>
          <circle cx="126" cy="28" r="2"/>
          <circle cx="118" cy="28" r="2"/>
          <circle cx="110" cy="28" r="2"/>
          <circle cx="102" cy="28" r="2"/>
          <circle cx="94" cy="28" r="2"/>
          <circle cx="86" cy="28" r="2"/>
          <circle cx="78" cy="28" r="2"/>
        </g>
        <path d="M35 24 L170 24 L175 26 L170 28 L35 28 Z" fill="#ed8936"/>
        <circle cx="55" cy="30" r="6" fill="#1a365d"/>
        <text x="55" y="33" text-anchor="middle" fill="white" font-size="6" font-weight="bold">S</text>
      </svg>
    </div>

    <div class="hero__clouds">
      <svg class="hero__cloud hero__cloud--1" viewBox="0 0 200 80">
        <ellipse cx="60" cy="50" rx="50" ry="25" fill="white" opacity="0.15"/>
        <ellipse cx="100" cy="40" rx="60" ry="30" fill="white" opacity="0.2"/>
        <ellipse cx="150" cy="50" rx="45" ry="22" fill="white" opacity="0.15"/>
      </svg>
      <svg class="hero__cloud hero__cloud--2" viewBox="0 0 180 70">
        <ellipse cx="50" cy="40" rx="40" ry="20" fill="white" opacity="0.1"/>
        <ellipse cx="100" cy="35" rx="55" ry="28" fill="white" opacity="0.15"/>
        <ellipse cx="140" cy="42" rx="35" ry="18" fill="white" opacity="0.1"/>
      </svg>
      <svg class="hero__cloud hero__cloud--3" viewBox="0 0 160 60">
        <ellipse cx="45" cy="35" rx="35" ry="18" fill="white" opacity="0.12"/>
        <ellipse cx="90" cy="30" rx="50" ry="25" fill="white" opacity="0.18"/>
        <ellipse cx="130" cy="38" rx="30" ry="15" fill="white" opacity="0.1"/>
      </svg>
    </div>

    <div class="container hero__content">
      <div class="hero__text animate-fade-in-up">
        <h1 class="hero__title">
          翱翔云端
          <span class="hero__title-accent">连接世界</span>
        </h1>
        <p class="hero__subtitle">
          SkyLink Virtual Airlines — 专业的模拟飞行联飞平台与虚拟航空公司
        </p>
        <p class="hero__desc">
          加入全球 1200+ 飞行员的大家庭，体验最真实的联飞模拟<br/>
          从北京到纽约，从上海到伦敦，与真人管制员一起飞行
        </p>
        <div class="hero__simulators">
          <span class="hero__simulators-label">支持模拟器：</span>
          <div class="hero__simulators-list">
            <span class="hero__simulator">MSFS 2020</span>
            <span class="hero__simulator">X-Plane 12</span>
            <span class="hero__simulator">P3D v5</span>
          </div>
        </div>
      </div>

      <div class="hero__stats animate-fade-in-up delay-3">
        <div class="hero__stat">
          <span class="hero__stat-icon">👨‍✈️</span>
          <span class="hero__stat-value">{{ animatedStats.pilots }}+</span>
          <span class="hero__stat-label">注册飞行员</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-icon">✈️</span>
          <span class="hero__stat-value">{{ animatedStats.flights }}+</span>
          <span class="hero__stat-label">累计航班</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-icon">⏱️</span>
          <span class="hero__stat-value">{{ animatedStats.hours }}+</span>
          <span class="hero__stat-label">飞行小时</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-icon">🌍</span>
          <span class="hero__stat-value">{{ animatedStats.routes }}+</span>
          <span class="hero__stat-label">航线数量</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const animatedStats = ref({
  pilots: 0,
  flights: 0,
  hours: 0,
  routes: 0
})

const targetStats = {
  pilots: 1200,
  flights: 8500,
  hours: 25000,
  routes: 150
}

const animateValue = (key, target, duration = 2000) => {
  const start = 0
  const startTime = performance.now()
  
  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    animatedStats.value[key] = Math.floor(start + (target - start) * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

onMounted(() => {
  setTimeout(() => {
    Object.keys(targetStats).forEach((key, index) => {
      setTimeout(() => {
        animateValue(key, targetStats[key])
      }, index * 200)
    })
  }, 500)
})
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
  }

  &__bg-image {
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(180deg, 
        rgba(26, 54, 93, 0.3) 0%, 
        rgba(26, 54, 93, 0.6) 50%,
        rgba(26, 54, 93, 0.9) 100%
      ),
      linear-gradient(135deg, #0c1929 0%, #1a365d 30%, #2b6cb0 60%, #4299e1 80%, #63b3ed 100%);
    background-size: cover;
  }

  &__bg-overlay {
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E");
  }

  &__aircraft {
    position: absolute;
    right: -5%;
    top: 25%;
    width: 400px;
    z-index: 2;
    animation: flyAcross 25s linear infinite;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));

    @media (min-width: $breakpoint-lg) {
      width: 500px;
      right: 5%;
    }

    @media (max-width: $breakpoint-md) {
      width: 250px;
      top: 15%;
      opacity: 0.6;
    }
  }

  &__aircraft-svg {
    width: 100%;
  }

  &__clouds {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  &__cloud {
    position: absolute;

    &--1 {
      width: 350px;
      top: 5%;
      left: -50px;
      animation: cloudDrift 30s ease-in-out infinite;
    }

    &--2 {
      width: 280px;
      top: 50%;
      right: 10%;
      animation: cloudDrift 35s ease-in-out infinite reverse;
    }

    &--3 {
      width: 320px;
      bottom: 15%;
      left: 20%;
      animation: cloudDrift 28s ease-in-out infinite;
    }
  }

  &__content {
    position: relative;
    z-index: 3;
    padding-top: 120px;
    padding-bottom: $spacing-16;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: $spacing-2;
    padding: $spacing-2 $spacing-4;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: $radius-full;
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: $spacing-6;
    backdrop-filter: blur(10px);
  }

  &__badge-dot {
    width: 8px;
    height: 8px;
    background: #48bb78;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  &__text {
    max-width: 700px;
  }

  &__title {
    font-size: $font-size-4xl;
    font-weight: $font-weight-extrabold;
    color: white;
    line-height: 1.1;
    margin-bottom: $spacing-6;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-5xl;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: $font-size-6xl;
    }
  }

  &__title-accent {
    display: block;
    color: $color-accent;
    margin-top: $spacing-2;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: rgba(255, 255, 255, 0.95);
    font-weight: $font-weight-medium;
    margin-bottom: $spacing-4;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-xl;
    }
  }

  &__desc {
    font-size: $font-size-base;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: $spacing-8;
    line-height: 1.8;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-lg;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-4;
    margin-bottom: $spacing-8;
  }

  &__simulators {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: $spacing-3;
  }

  &__simulators-label {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.5);
  }

  &__simulators-list {
    display: flex;
    gap: $spacing-2;
  }

  &__simulator {
    padding: $spacing-1 $spacing-3;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-sm;
    font-size: $font-size-xs;
    color: rgba(255, 255, 255, 0.8);
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-4;
    margin-top: $spacing-12;
    padding: $spacing-6;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border-radius: $radius-xl;
    border: 1px solid rgba(255, 255, 255, 0.15);

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
      max-width: 800px;
      padding: $spacing-8;
    }
  }

  &__stat {
    text-align: center;
    padding: $spacing-3;
  }

  &__stat-icon {
    display: block;
    font-size: 28px;
    margin-bottom: $spacing-2;
  }

  &__stat-value {
    display: block;
    font-family: $font-family-heading;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: white;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-3xl;
    }
  }

  &__stat-label {
    font-size: $font-size-xs;
    color: rgba(255, 255, 255, 0.6);

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-sm;
    }
  }
}

@keyframes flyAcross {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-20px) translateY(-10px);
  }
  50% {
    transform: translateX(0) translateY(-5px);
  }
  75% {
    transform: translateX(20px) translateY(-15px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes cloudDrift {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(50px) translateY(-20px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}
</style>
