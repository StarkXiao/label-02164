<template>
  <section id="about" class="about section">
    <div class="container">
      <h2 class="section-title">关于我们</h2>
      <p class="section-subtitle">
        SkyLink Virtual Airlines 成立于2020年，是一家专注于模拟飞行的虚拟航空公司
      </p>

      <div class="about__brand">
        <div class="about__brand-logo">
          <svg viewBox="0 0 120 120" class="about__brand-svg">
            <defs>
              <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1a365d"/>
                <stop offset="100%" style="stop-color:#2563eb"/>
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill="url(#brandGrad)"/>
            <path d="M30 65 L60 35 L90 65 L75 65 L60 50 L45 65 Z" fill="white"/>
            <path d="M40 75 L60 55 L80 75 L60 95 Z" fill="#ed8936"/>
            <circle cx="60" cy="60" r="55" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
          </svg>
        </div>
        <div class="about__brand-content">
          <h3 class="about__brand-name">SkyLink Virtual Airlines</h3>
          <p class="about__brand-slogan">翱翔云端，连接世界</p>
          <p class="about__brand-story">
            SkyLink VA 诞生于一群对蓝天充满热爱的模拟飞行爱好者之手。我们相信，每一次虚拟飞行都是一次真实的冒险。
            从北京到纽约，从上海到伦敦，我们用代码和热情搭建起连接世界的桥梁。在这里，你不仅是飞行员，更是梦想的追逐者。
          </p>
        </div>
      </div>

      <div class="about__grid">
        <div class="about__content">
          <div class="about__intro">
            <h3 class="about__intro-title">我们的使命</h3>
            <p class="about__intro-text">
              为全球模拟飞行爱好者提供专业、真实、有趣的飞行体验。我们致力于打造一个友好的飞行社区，
              让每一位飞行员都能在这里找到归属感，提升飞行技能，结交志同道合的朋友。
            </p>
          </div>

          <div class="about__features">
            <div class="about__feature" v-for="feature in features" :key="feature.title">
              <div class="about__feature-icon" :style="{ background: feature.gradient }">
                <span class="about__feature-emoji">{{ feature.emoji }}</span>
              </div>
              <div class="about__feature-content">
                <h4 class="about__feature-title">{{ feature.title }}</h4>
                <p class="about__feature-desc">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about__visual">
          <div class="about__card">
            <div class="about__card-header">
              <svg viewBox="0 0 40 40" class="about__card-logo">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ed8936"/>
                    <stop offset="100%" style="stop-color:#f6ad55"/>
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#logoGrad)"/>
                <path d="M12 22 L20 14 L28 22 L24 22 L20 18 L16 22 Z" fill="white"/>
                <path d="M14 24 L20 19 L26 24 L20 30 Z" fill="white" opacity="0.8"/>
              </svg>
              <span>SkyLink VA</span>
            </div>
            <div class="about__card-body">
              <div class="about__card-item">
                <span class="about__card-label">ICAO 代码</span>
                <span class="about__card-value">SKL</span>
              </div>
              <div class="about__card-item">
                <span class="about__card-label">呼号</span>
                <span class="about__card-value">SKYLINK</span>
              </div>
              <div class="about__card-item">
                <span class="about__card-label">总部</span>
                <span class="about__card-value">北京首都 (ZBAA)</span>
              </div>
              <div class="about__card-item">
                <span class="about__card-label">成立时间</span>
                <span class="about__card-value">2020年</span>
              </div>
              <div class="about__card-item">
                <span class="about__card-label">联飞网络</span>
                <span class="about__card-value">VATSIM / IVAO</span>
              </div>
            </div>
            <div class="about__card-footer">
              <div class="about__card-badge">
                <span class="about__card-badge-icon">✓</span>
                VATSIM 认证虚航
              </div>
            </div>
          </div>

          <div class="about__decoration">
            <svg viewBox="0 0 120 120" class="about__decoration-svg">
              <circle cx="60" cy="60" r="55" fill="none" stroke="#ed8936" stroke-width="2" stroke-dasharray="8,8" opacity="0.3">
                <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="30s" repeatCount="indefinite"/>
              </circle>
              <circle cx="60" cy="60" r="40" fill="none" stroke="#4299e1" stroke-width="1.5" stroke-dasharray="5,5" opacity="0.2">
                <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="25s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: '🎓',
    title: '专业培训体系',
    desc: '从新手到机长，完整的飞行员晋升体系和培训课程',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    emoji: '👥',
    title: '活跃社区',
    desc: '超过1200名注册飞行员，每日活跃的飞行讨论和经验分享',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    emoji: '🎧',
    title: '联飞支持',
    desc: '全面支持 VATSIM、IVAO 等主流联飞网络',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    emoji: '📅',
    title: '定期活动',
    desc: '每周组织联飞活动，每月举办特色航线飞行',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
]

const milestones = [
  {
    year: '2020',
    title: 'SkyLink VA 成立',
    desc: '由一群热爱模拟飞行的爱好者创立'
  },
  {
    year: '2021',
    title: '获得 VATSIM 认证',
    desc: '正式成为 VATSIM 认证虚拟航空公司'
  },
  {
    year: '2022',
    title: '会员突破 500 人',
    desc: '社区快速发展，开通首条洲际航线'
  },
  {
    year: '2023',
    title: '机队扩展',
    desc: '引入宽体机队，开通更多远程航线'
  },
  {
    year: '2024',
    title: '会员突破 1000 人',
    desc: '成为国内最活跃的虚拟航空之一'
  }
]
</script>

<style lang="scss" scoped>
.about {
  background: $color-bg-primary;

  &__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-6;
    margin-bottom: $spacing-12;
    padding: $spacing-8;
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%);
    border-radius: $radius-xl;
    text-align: center;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      text-align: left;
    }
  }

  &__brand-logo {
    flex-shrink: 0;
  }

  &__brand-svg {
    width: 100px;
    height: 100px;
  }

  &__brand-name {
    font-family: $font-family-heading;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-1;
  }

  &__brand-slogan {
    font-size: $font-size-lg;
    color: $color-accent;
    font-weight: $font-weight-medium;
    margin-bottom: $spacing-3;
  }

  &__brand-story {
    font-size: $font-size-base;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
    max-width: 600px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-12;
    align-items: start;

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  &__intro {
    margin-bottom: $spacing-10;
  }

  &__intro-title {
    font-size: $font-size-2xl;
    color: $color-primary;
    margin-bottom: $spacing-4;
  }

  &__intro-text {
    font-size: $font-size-base;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
  }

  &__features {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-6;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__feature {
    display: flex;
    gap: $spacing-4;
    padding: $spacing-5;
    background: white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
    cursor: pointer;
    transition: all $transition-normal;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-4px);
    }
    
    &:active {
      transform: translateY(-2px) scale(0.98);
      box-shadow: $shadow-md;
    }
  }

  &__feature-icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $radius-md;
  }

  &__feature-emoji {
    font-size: 28px;
  }

  &__feature-title {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__feature-desc {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }

  &__visual {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__card {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 360px;
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
    border-radius: $radius-xl;
    padding: $spacing-8;
    color: white;
    box-shadow: $shadow-2xl;
  }

  &__card-header {
    display: flex;
    align-items: center;
    gap: $spacing-3;
    font-family: $font-family-heading;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-6;
    padding-bottom: $spacing-6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  &__card-logo {
    width: 40px;
    height: 40px;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: $spacing-4;
  }

  &__card-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card-label {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.7);
  }

  &__card-value {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
  }

  &__card-footer {
    margin-top: $spacing-6;
    padding-top: $spacing-6;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  &__card-badge {
    display: inline-flex;
    align-items: center;
    gap: $spacing-2;
    padding: $spacing-2 $spacing-4;
    background: rgba(255, 255, 255, 0.15);
    border-radius: $radius-full;
    font-size: $font-size-sm;
  }

  &__card-badge-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: #48bb78;
    border-radius: $radius-full;
    font-size: 12px;
  }

  &__decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
    z-index: 0;

    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }

  &__decoration-svg {
    width: 100%;
    height: 100%;
  }

  &__milestones {
    margin-top: $spacing-16;
  }

  &__milestones-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    text-align: center;
    margin-bottom: $spacing-10;
  }

  &__timeline {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-4;

    @media (min-width: $breakpoint-lg) {
      flex-wrap: nowrap;
    }
  }

  &__timeline-item {
    position: relative;
    flex: 1;
    min-width: 160px;
    max-width: 200px;
    text-align: center;
    padding: $spacing-6;
    background: white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -$spacing-2;
      width: $spacing-4;
      height: 2px;
      background: $color-border;

      @media (max-width: $breakpoint-lg) {
        display: none;
      }
    }

    &:last-child::before {
      display: none;
    }
  }

  &__timeline-dot {
    width: 12px;
    height: 12px;
    background: $color-accent;
    border-radius: $radius-full;
    margin: 0 auto $spacing-3;
  }

  &__timeline-year {
    display: block;
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-2;
  }

  &__timeline-title {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__timeline-desc {
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }
}
</style>
