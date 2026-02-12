<template>
  <section id="fleet" class="fleet section section--full">
    <div class="container">
      <h2 class="section-title">机队展示</h2>
      <p class="section-subtitle">
        我们运营多种机型，覆盖支线到远程航线的全部需求
      </p>

      <div class="fleet__grid">
        <div 
          class="fleet__card card" 
          v-for="aircraft in filteredAircraft" 
          :key="aircraft.type"
        >
          <div class="fleet__card-image">
            <svg :viewBox="aircraft.svgViewBox" class="fleet__card-aircraft">
              <g v-html="aircraft.svgContent"></g>
            </svg>
            <div class="fleet__card-badge">{{ aircraft.count }} 架</div>
          </div>
          <div class="fleet__card-body">
            <h3 class="fleet__card-type">{{ aircraft.type }}</h3>
            <p class="fleet__card-name">{{ aircraft.name }}</p>
            <div class="fleet__card-specs">
              <div class="fleet__card-spec">
                <span class="fleet__card-spec-label">航程</span>
                <span class="fleet__card-spec-value">{{ aircraft.range }}</span>
              </div>
              <div class="fleet__card-spec">
                <span class="fleet__card-spec-label">座位</span>
                <span class="fleet__card-spec-value">{{ aircraft.seats }}</span>
              </div>
              <div class="fleet__card-spec">
                <span class="fleet__card-spec-label">巡航速度</span>
                <span class="fleet__card-spec-value">{{ aircraft.cruiseSpeed }}</span>
              </div>
              <div class="fleet__card-spec">
                <span class="fleet__card-spec-label">升限</span>
                <span class="fleet__card-spec-value">{{ aircraft.ceiling }}</span>
              </div>
            </div>
            <div class="fleet__card-engine">
              <span class="fleet__card-engine-label">发动机：</span>
              <span class="fleet__card-engine-value">{{ aircraft.engine }}</span>
            </div>
            <div class="fleet__card-routes">
              <span class="fleet__card-routes-label">典型航线：</span>
              <span class="fleet__card-routes-value">{{ aircraft.routes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { key: 'all', label: '全部机型' }
]

const aircraft = [
  {
    type: 'A320neo',
    name: '空客 A320neo',
    category: 'narrowbody',
    count: 12,
    range: '6,300 km',
    seats: '150-180',
    routes: 'ZBAA-ZSPD, ZGGG-ZSSS',
    cruiseSpeed: 'M0.78',
    ceiling: '39,800 ft',
    engine: 'CFM LEAP-1A',
    svgViewBox: '0 0 300 80',
    svgContent: `
      <ellipse cx="150" cy="40" rx="110" ry="18" fill="white"/>
      <path d="M260 40 Q280 40 285 40 Q280 37 260 35 Z" fill="white"/>
      <ellipse cx="268" cy="40" rx="12" ry="9" fill="#e2e8f0"/>
      <path d="M40 40 L20 20 L50 40 L20 60 L40 40 Z" fill="white"/>
      <path d="M50 25 L35 8 L65 25 Z" fill="#1a365d"/>
      <path d="M110 40 L80 70 L200 70 L170 40 Z" fill="#f0f4f8"/>
      <path d="M110 40 L80 10 L200 10 L170 40 Z" fill="white"/>
      <ellipse cx="100" cy="58" rx="12" ry="7" fill="#64748b"/>
      <ellipse cx="200" cy="58" rx="12" ry="7" fill="#64748b"/>
      <g fill="#4299e1"><circle cx="250" cy="37" r="4"/><circle cx="238" cy="37" r="3"/><circle cx="228" cy="37" r="3"/><circle cx="218" cy="37" r="3"/><circle cx="208" cy="37" r="3"/><circle cx="198" cy="37" r="3"/><circle cx="188" cy="37" r="3"/><circle cx="178" cy="37" r="3"/><circle cx="168" cy="37" r="3"/><circle cx="158" cy="37" r="3"/><circle cx="148" cy="37" r="3"/><circle cx="138" cy="37" r="3"/><circle cx="128" cy="37" r="3"/></g>
      <path d="M55 32 L260 32 L268 35 L260 38 L55 38 Z" fill="#ed8936"/>
      <circle cx="80" cy="40" r="10" fill="#1a365d"/><text x="80" y="44" text-anchor="middle" fill="white" font-size="10" font-weight="bold">S</text>
    `
  },
  {
    type: 'B737-800',
    name: '波音 737-800',
    category: 'narrowbody',
    count: 8,
    range: '5,765 km',
    seats: '162-189',
    routes: 'ZBAA-ZUUU, ZSPD-VHHH',
    cruiseSpeed: 'M0.785',
    ceiling: '41,000 ft',
    engine: 'CFM56-7B',
    svgViewBox: '0 0 300 80',
    svgContent: `
      <ellipse cx="150" cy="40" rx="105" ry="17" fill="white"/>
      <path d="M255 40 Q275 40 282 38 Q275 36 255 35 Z" fill="white"/>
      <ellipse cx="262" cy="38" rx="10" ry="8" fill="#e2e8f0"/>
      <path d="M45 40 L25 22 L55 40 L25 58 L45 40 Z" fill="white"/>
      <path d="M52 26 L40 10 L68 26 Z" fill="#2563eb"/>
      <path d="M115 40 L90 68 L195 68 L165 40 Z" fill="#f0f4f8"/>
      <path d="M115 40 L90 12 L195 12 L165 40 Z" fill="white"/>
      <ellipse cx="105" cy="56" rx="11" ry="6" fill="#64748b"/>
      <ellipse cx="195" cy="56" rx="11" ry="6" fill="#64748b"/>
      <g fill="#60a5fa"><circle cx="245" cy="37" r="3.5"/><circle cx="234" cy="37" r="2.5"/><circle cx="224" cy="37" r="2.5"/><circle cx="214" cy="37" r="2.5"/><circle cx="204" cy="37" r="2.5"/><circle cx="194" cy="37" r="2.5"/><circle cx="184" cy="37" r="2.5"/><circle cx="174" cy="37" r="2.5"/><circle cx="164" cy="37" r="2.5"/><circle cx="154" cy="37" r="2.5"/><circle cx="144" cy="37" r="2.5"/><circle cx="134" cy="37" r="2.5"/></g>
      <path d="M58 33 L255 33 L262 35 L255 37 L58 37 Z" fill="#2563eb"/>
      <circle cx="82" cy="40" r="9" fill="#2563eb"/><text x="82" y="44" text-anchor="middle" fill="white" font-size="9" font-weight="bold">S</text>
    `
  },
  {
    type: 'A350-900',
    name: '空客 A350-900',
    category: 'widebody',
    count: 6,
    range: '15,000 km',
    seats: '300-350',
    routes: 'ZBAA-KJFK, ZSPD-EGLL',
    cruiseSpeed: 'M0.85',
    ceiling: '43,100 ft',
    engine: 'RR Trent XWB',
    svgViewBox: '0 0 320 90',
    svgContent: `
      <ellipse cx="160" cy="45" rx="130" ry="22" fill="white"/>
      <path d="M290 45 Q315 45 320 43 Q315 40 290 38 Z" fill="white"/>
      <ellipse cx="300" cy="43" rx="14" ry="11" fill="#1e293b"/>
      <path d="M30 45 L5 20 L45 45 L5 70 L30 45 Z" fill="white"/>
      <path d="M42 28 L25 5 L60 28 Z" fill="#1a365d"/>
      <path d="M100 45 L55 82 L230 82 L185 45 Z" fill="#f0f4f8"/>
      <path d="M100 45 L55 8 L230 8 L185 45 Z" fill="white"/>
      <ellipse cx="85" cy="65" rx="14" ry="8" fill="#475569"/>
      <ellipse cx="235" cy="65" rx="14" ry="8" fill="#475569"/>
      <g fill="#0ea5e9"><circle cx="280" cy="41" r="4"/><circle cx="266" cy="41" r="3"/><circle cx="254" cy="41" r="3"/><circle cx="242" cy="41" r="3"/><circle cx="230" cy="41" r="3"/><circle cx="218" cy="41" r="3"/><circle cx="206" cy="41" r="3"/><circle cx="194" cy="41" r="3"/><circle cx="182" cy="41" r="3"/><circle cx="170" cy="41" r="3"/><circle cx="158" cy="41" r="3"/><circle cx="146" cy="41" r="3"/><circle cx="134" cy="41" r="3"/><circle cx="122" cy="41" r="3"/><circle cx="110" cy="41" r="3"/></g>
      <path d="M48 36 L290 36 L300 39 L290 42 L48 42 Z" fill="#ed8936"/>
      <circle cx="75" cy="45" r="12" fill="#1a365d"/><text x="75" y="50" text-anchor="middle" fill="white" font-size="12" font-weight="bold">S</text>
    `
  }
]

const filteredAircraft = computed(() => {
  if (activeCategory.value === 'all') {
    return aircraft
  }
  return aircraft.filter(a => a.category === activeCategory.value)
})
</script>

<style lang="scss" scoped>
.fleet {
  background: $color-bg-primary;

  &__tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing-3;
    margin-bottom: $spacing-10;
  }

  &__tab {
    padding: $spacing-3 $spacing-6;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-text-secondary;
    background: white;
    border: 1px solid $color-border;
    border-radius: $radius-full;
    transition: all $transition-fast;

    &:hover {
      color: $color-primary;
      border-color: $color-primary;
    }

    &--active {
      color: white;
      background: $color-primary;
      border-color: $color-primary;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-6;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card-image {
    position: relative;
    height: 200px;
    background: linear-gradient(135deg, #e8f4fc 0%, #d1e9f6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(to top, rgba(26, 54, 93, 0.1), transparent);
    }
  }

  &__card-aircraft {
    width: 85%;
    max-width: 280px;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
    transition: transform $transition-normal;

    .fleet__card:hover & {
      transform: scale(1.05) translateY(-5px);
    }
  }

  &__card-badge {
    position: absolute;
    top: $spacing-4;
    right: $spacing-4;
    padding: $spacing-1 $spacing-3;
    background: $color-accent;
    color: white;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    border-radius: $radius-full;
  }

  &__card-body {
    padding: $spacing-6;
  }

  &__card-type {
    font-family: $font-family-heading;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-1;
  }

  &__card-name {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    margin-bottom: $spacing-4;
  }

  &__card-specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-3;
    margin-bottom: $spacing-4;
    padding-bottom: $spacing-4;
    border-bottom: 1px solid $color-border-light;
  }

  &__card-engine {
    margin-bottom: $spacing-3;
    font-size: $font-size-sm;
  }

  &__card-engine-label {
    color: $color-text-light;
  }

  &__card-engine-value {
    color: $color-primary;
    font-weight: $font-weight-medium;
  }

  &__card-spec {
    display: flex;
    flex-direction: column;
  }

  &__card-spec-label {
    font-size: $font-size-xs;
    color: $color-text-light;
  }

  &__card-spec-value {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
  }

  &__card-routes-label {
    font-size: $font-size-xs;
    color: $color-text-light;
  }

  &__card-routes-value {
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }
}
</style>
