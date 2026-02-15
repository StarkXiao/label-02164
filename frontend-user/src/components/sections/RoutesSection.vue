<template>
  <section id="routes" class="routes section">
    <div class="container">
      <h2 class="section-title">航线网络</h2>
      <p class="section-subtitle">
        覆盖国内主要城市及国际热门目的地，持续扩展中
      </p>

      <div class="routes__map">
        <div class="routes__map-container">
          <svg viewBox="0 0 900 450" class="routes__map-svg">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#ed8936"/>
                <stop offset="100%" style="stop-color:#f6ad55"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#0c1929"/>
                <stop offset="100%" style="stop-color:#1a365d"/>
              </linearGradient>
            </defs>
            
            <rect width="900" height="450" fill="url(#oceanGradient)" rx="16"/>
            
            <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
              <line v-for="i in 8" :key="'h'+i" x1="0" :y1="i*50" x2="900" :y2="i*50"/>
              <line v-for="i in 17" :key="'v'+i" :x1="i*50" y1="0" :x2="i*50" y2="450"/>
            </g>

            <g fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1">
              <path d="M480 80 Q550 60 620 80 Q680 100 700 150 Q720 200 700 250 Q680 300 620 320 Q560 340 500 320 Q450 300 420 250 Q400 200 420 150 Q440 100 480 80 Z"/>
              <path d="M280 80 Q320 70 360 80 Q400 100 400 140 Q400 180 360 200 Q320 220 280 200 Q240 180 240 140 Q240 100 280 80 Z"/>
              <path d="M80 100 Q140 80 200 100 Q260 130 260 180 Q260 230 200 260 Q140 290 80 260 Q20 230 20 180 Q20 130 80 100 Z"/>
              <path d="M700 320 Q750 300 800 320 Q840 350 840 390 Q840 420 800 430 Q750 440 700 420 Q660 400 660 360 Q660 330 700 320 Z"/>
            </g>

            <g fill="none" stroke-width="2" opacity="0.7">
              <path d="M580 195 Q590 210 600 215" stroke="#4299e1" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q570 240 560 270" stroke="#4299e1" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.2s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q540 210 510 230" stroke="#4299e1" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.1s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q620 180 670 185" stroke="#48bb78" stroke-dasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.5s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q600 175 620 175" stroke="#48bb78" stroke-dasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.3s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q560 280 540 340" stroke="#48bb78" stroke-dasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q650 300 760 380" stroke="#48bb78" stroke-dasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2.5s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q450 120 320 150" stroke="#f56565" stroke-dasharray="6,6">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q400 100 200 180" stroke="#f56565" stroke-dasharray="6,6">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="3.5s" repeatCount="indefinite"/>
              </path>
              <path d="M580 195 Q350 150 120 200" stroke="#f56565" stroke-dasharray="6,6">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="3.2s" repeatCount="indefinite"/>
              </path>
            </g>

            <g filter="url(#glow)">
              <circle cx="580" cy="195" r="16" fill="#ed8936" opacity="0.3">
                <animate attributeName="r" values="16;22;16" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="580" cy="195" r="10" fill="#ed8936"/>
              <circle cx="580" cy="195" r="5" fill="white"/>
              <text x="580" y="225" text-anchor="middle" fill="white" font-size="11" font-weight="bold">ZBAA 北京</text>
              
              <circle cx="600" cy="215" r="7" fill="#4299e1"/>
              <text x="620" y="220" text-anchor="start" fill="white" font-size="9">ZSPD</text>
              
              <circle cx="560" cy="270" r="7" fill="#4299e1"/>
              <text x="540" y="285" text-anchor="middle" fill="white" font-size="9">ZGGG</text>
              
              <circle cx="510" cy="230" r="6" fill="#4299e1"/>
              <text x="490" y="240" text-anchor="end" fill="white" font-size="9">ZUUU</text>
              
              <circle cx="670" cy="185" r="6" fill="#48bb78"/>
              <text x="685" y="190" text-anchor="start" fill="white" font-size="9">RJTT</text>
              
              <circle cx="620" cy="175" r="5" fill="#48bb78"/>
              <text x="620" y="165" text-anchor="middle" fill="white" font-size="9">RKSI</text>
              
              <circle cx="540" cy="340" r="6" fill="#48bb78"/>
              <text x="540" y="360" text-anchor="middle" fill="white" font-size="9">WSSS</text>
              
              <circle cx="760" cy="380" r="6" fill="#48bb78"/>
              <text x="760" y="400" text-anchor="middle" fill="white" font-size="9">YSSY</text>
              
              <circle cx="320" cy="150" r="6" fill="#f56565"/>
              <text x="320" y="140" text-anchor="middle" fill="white" font-size="9">EGLL</text>
              
              <circle cx="200" cy="180" r="6" fill="#f56565"/>
              <text x="200" y="170" text-anchor="middle" fill="white" font-size="9">KJFK</text>
              
              <circle cx="120" cy="200" r="6" fill="#f56565"/>
              <text x="120" y="220" text-anchor="middle" fill="white" font-size="9">KLAX</text>
            </g>

            <g fill="white" opacity="0.8">
              <g transform="translate(450, 160) rotate(-30)">
                <path d="M0 3 L8 0 L8 6 L0 3 Z" />
                <animateMotion dur="8s" repeatCount="indefinite" path="M0,0 Q50,-30 100,0"/>
              </g>
              <g transform="translate(300, 170) rotate(15)">
                <path d="M0 3 L8 0 L8 6 L0 3 Z" />
                <animateMotion dur="10s" repeatCount="indefinite" path="M0,0 Q-30,20 -60,0"/>
              </g>
            </g>
          </svg>
        </div>

        <div class="routes__legend">
          <div class="routes__legend-item">
            <span class="routes__legend-dot routes__legend-dot--hub"></span>
            <span>枢纽机场</span>
          </div>
          <div class="routes__legend-item">
            <span class="routes__legend-dot routes__legend-dot--domestic"></span>
            <span>国内航点</span>
          </div>
          <div class="routes__legend-item">
            <span class="routes__legend-dot routes__legend-dot--asia"></span>
            <span>亚太航点</span>
          </div>
          <div class="routes__legend-item">
            <span class="routes__legend-dot routes__legend-dot--intl"></span>
            <span>欧美航点</span>
          </div>
        </div>
      </div>

      <div class="routes__popular">
        <h3 class="routes__popular-title">热门航线</h3>
        <div class="routes__popular-grid">
          <div class="routes__popular-item" v-for="route in popularRoutes" :key="route.code">
            <div class="routes__popular-airports">
              <span class="routes__popular-from">{{ route.from }}</span>
              <span class="routes__popular-arrow">
                <svg viewBox="0 0 24 8" class="routes__popular-plane">
                  <path d="M0 4 L20 4 M16 0 L22 4 L16 8" fill="none" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </span>
              <span class="routes__popular-to">{{ route.to }}</span>
            </div>
            <div class="routes__popular-details">
              <span class="routes__popular-aircraft">{{ route.aircraft }}</span>
              <span class="routes__popular-freq">{{ route.freq }}</span>
            </div>
            <div class="routes__popular-info">
              <span class="routes__popular-code">{{ route.code }}</span>
              <span class="routes__popular-time">{{ route.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const popularRoutes = [
  { from: '北京', to: '上海', code: 'SKL101', time: '2h 10m', aircraft: 'A320neo', freq: '每日8班' },
  { from: '北京', to: '广州', code: 'SKL201', time: '3h 05m', aircraft: 'A320neo', freq: '每日6班' },
  { from: '上海', to: '东京', code: 'SKL501', time: '2h 45m', aircraft: 'B737-800', freq: '每日4班' }
]
</script>

<style lang="scss" scoped>
.routes {
  background: $color-bg-secondary;

  &__map {
    margin-bottom: $spacing-10;
  }

  &__map-container {
    background: $color-primary;
    border-radius: $radius-xl;
    overflow: hidden;
    box-shadow: $shadow-2xl;
  }

  &__map-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  &__legend {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing-6;
    margin-top: $spacing-6;
  }

  &__legend-item {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }

  &__legend-dot {
    width: 12px;
    height: 12px;
    border-radius: $radius-full;

    &--hub {
      background: #ed8936;
      box-shadow: 0 0 8px rgba(237, 137, 54, 0.5);
    }

    &--domestic {
      background: #4299e1;
    }

    &--asia {
      background: #48bb78;
    }

    &--intl {
      background: #f56565;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-6;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__stat {
    text-align: center;
    padding: $spacing-6;
    background: white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
    transition: all $transition-normal;

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-lg;
    }
  }

  &__stat-icon {
    font-size: 32px;
    margin-bottom: $spacing-2;
  }

  &__stat-value {
    display: block;
    font-family: $font-family-heading;
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-1;
  }

  &__stat-label {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }

  &__popular {
    margin-top: $spacing-12;
  }

  &__popular-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    text-align: center;
    margin-bottom: $spacing-8;
  }

  &__popular-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-4;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__popular-item {
    display: flex;
    flex-direction: column;
    gap: $spacing-3;
    padding: $spacing-5;
    background: white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
    cursor: pointer;
    transition: all $transition-normal;

    &:hover {
      box-shadow: $shadow-md;
      transform: translateY(-4px);
    }
    
    &:active {
      transform: translateY(-2px) scale(0.98);
      box-shadow: $shadow-sm;
    }
  }

  &__popular-airports {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-3;
  }

  &__popular-details {
    display: flex;
    justify-content: center;
    gap: $spacing-4;
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }

  &__popular-aircraft {
    padding: $spacing-1 $spacing-2;
    background: $color-bg-secondary;
    border-radius: $radius-sm;
  }

  &__popular-freq {
    color: $color-success;
  }

  &__popular-from,
  &__popular-to {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
  }

  &__popular-arrow {
    color: $color-accent;
  }

  &__popular-plane {
    width: 32px;
    height: 10px;
  }

  &__popular-info {
    display: flex;
    justify-content: center;
    gap: $spacing-4;
  }

  &__popular-code {
    font-family: $font-family-heading;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-primary;
  }

  &__popular-time {
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }
}
</style>
