<template>
  <section id="platform" class="platform section">
    <div class="container">
      <h2 class="section-title">联飞平台</h2>
      <p class="section-subtitle">
        我们支持多个主流联飞网络，为您提供最真实的空中交通管制体验
      </p>

      <div class="platform__grid">
        <div 
          class="platform__card card" 
          v-for="platform in platforms" 
          :key="platform.name"
        >
          <div class="platform__card-header" :style="{ background: platform.gradient }">
            <div class="platform__card-logo">
              <svg viewBox="0 0 60 60" class="platform__card-logo-svg">
                <circle cx="30" cy="30" r="28" fill="rgba(255,255,255,0.2)"/>
                <text x="30" y="38" text-anchor="middle" fill="white" font-size="24" font-weight="bold">{{ platform.abbr }}</text>
              </svg>
            </div>
            <h3 class="platform__card-name">{{ platform.name }}</h3>
            <div class="platform__card-stats">
              <span class="platform__card-stat">
                <span class="platform__card-stat-value">{{ platform.users }}</span>
                <span class="platform__card-stat-label">用户</span>
              </span>
              <span class="platform__card-stat">
                <span class="platform__card-stat-value">{{ platform.atc }}</span>
                <span class="platform__card-stat-label">管制员</span>
              </span>
            </div>
          </div>
          <div class="platform__card-body">
            <p class="platform__card-desc">{{ platform.desc }}</p>
            <ul class="platform__card-features">
              <li v-for="feature in platform.features" :key="feature">
                <el-icon><Check /></el-icon>
                {{ feature }}
              </li>
            </ul>
            <div class="platform__card-tech">
              <div class="platform__card-tech-item">
                <span class="platform__card-tech-label">客户端</span>
                <span class="platform__card-tech-value">{{ platform.client }}</span>
              </div>
              <div class="platform__card-tech-item">
                <span class="platform__card-tech-label">语音系统</span>
                <span class="platform__card-tech-value">{{ platform.voiceCodec }}</span>
              </div>
            </div>
            <div class="platform__card-steps">
              <h4 class="platform__card-steps-title">快速入门</h4>
              <ol class="platform__card-steps-list">
                <li v-for="(step, index) in platform.steps" :key="index">{{ step }}</li>
              </ol>
            </div>
            <a :href="platform.url" target="_blank" class="platform__card-link">
              访问官网
              <el-icon><Right /></el-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="platform__requirements">
        <h3 class="platform__requirements-title">软件环境要求</h3>
        <div class="platform__requirements-grid">
          <div class="platform__requirements-card" v-for="req in requirements" :key="req.title">
            <div class="platform__requirements-icon">
              <el-icon :size="28"><component :is="req.icon" /></el-icon>
            </div>
            <h4 class="platform__requirements-name">{{ req.title }}</h4>
            <ul class="platform__requirements-list">
              <li v-for="item in req.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="platform__operation">
        <h3 class="platform__operation-title">SkyLink VA 运营数据</h3>
        <div class="platform__operation-grid">
          <div class="platform__operation-card" v-for="op in operations" :key="op.platform">
            <div class="platform__operation-header">
              <span class="platform__operation-platform">{{ op.platform }}</span>
              <span class="platform__operation-status" :class="{ 'platform__operation-status--active': op.active }">
                {{ op.active ? '运营中' : '筹备中' }}
              </span>
            </div>
            <div class="platform__operation-stats">
              <div class="platform__operation-stat">
                <span class="platform__operation-stat-value">{{ op.flights }}</span>
                <span class="platform__operation-stat-label">累计航班</span>
              </div>
              <div class="platform__operation-stat">
                <span class="platform__operation-stat-value">{{ op.hours }}</span>
                <span class="platform__operation-stat-label">飞行小时</span>
              </div>
              <div class="platform__operation-stat">
                <span class="platform__operation-stat-value">{{ op.pilots }}</span>
                <span class="platform__operation-stat-label">活跃飞行员</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Monitor, Headset, Setting } from '@element-plus/icons-vue'

const platforms = [
  {
    name: 'VATSIM',
    abbr: 'V',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    desc: '全球最大的模拟飞行联飞网络，拥有超过10万名注册用户',
    users: '100K+',
    atc: '5K+',
    features: [
      '全球覆盖的管制服务',
      '完善的飞行员培训体系',
      '活跃的中国分部 (VATPRC)'
    ],
    url: 'https://vatsim.net',
    client: 'vPilot / xPilot',
    voiceCodec: 'AFV (Audio for VATSIM)',
    steps: [
      '访问 vatsim.net 注册账号',
      '下载 vPilot (MSFS) 或 xPilot (X-Plane)',
      '配置模拟器插件连接',
      '加入 SkyLink VA 开始飞行'
    ]
  },
  {
    name: 'IVAO',
    abbr: 'I',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    desc: '国际虚拟航空组织，提供专业的联飞服务和培训',
    users: '80K+',
    atc: '4K+',
    features: [
      '严格的等级晋升系统',
      '丰富的特别活动',
      '专业的培训课程'
    ],
    url: 'https://ivao.aero',
    client: 'Altitude',
    voiceCodec: 'TeamSpeak 集成',
    steps: [
      '访问 ivao.aero 注册账号',
      '下载 Altitude 客户端',
      '完成新手培训考核',
      '申请加入 SkyLink VA'
    ]
  },
  {
    name: 'POSCON',
    abbr: 'P',
    gradient: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    desc: '新一代联飞网络，采用先进的技术架构',
    users: '10K+',
    atc: '500+',
    features: [
      '创新的技术平台',
      '真实的天气系统',
      '沉浸式飞行体验'
    ],
    url: 'https://poscon.net',
    client: 'POSCON Pilot Client',
    voiceCodec: '内置语音系统',
    steps: [
      '访问 poscon.net 注册账号',
      '下载 POSCON Pilot Client',
      '安装模拟器插件',
      '联系我们获取入门指导'
    ]
  }
]

const requirements = [
  {
    title: '模拟器',
    icon: Monitor,
    items: [
      'Microsoft Flight Simulator 2020/2024',
      'X-Plane 11/12',
      'Prepar3D v4/v5'
    ]
  },
  {
    title: '硬件配置',
    icon: Setting,
    items: [
      'CPU: Intel i5 / AMD Ryzen 5 以上',
      '内存: 16GB RAM 以上',
      '显卡: GTX 1060 / RX 580 以上'
    ]
  },
  {
    title: '通讯设备',
    icon: Headset,
    items: [
      '耳机麦克风 (联飞必备)',
      '稳定的网络连接',
      '推荐使用有线网络'
    ]
  }
]

const operations = [
  { platform: 'VATSIM', active: true, flights: '6,500+', hours: '18,000+', pilots: '850' },
  { platform: 'IVAO', active: true, flights: '1,800+', hours: '5,200+', pilots: '280' },
  { platform: 'POSCON', active: false, flights: '200+', hours: '800+', pilots: '70' }
]
</script>

<style lang="scss" scoped>
.platform {
  background: $color-bg-secondary;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-6;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
  }

  &__card-header {
    padding: $spacing-8;
    text-align: center;
    color: white;
  }

  &__card-logo {
    width: 80px;
    height: 80px;
    margin: 0 auto $spacing-4;
  }

  &__card-logo-svg {
    width: 100%;
    height: 100%;
  }

  &__card-name {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-4;
  }

  &__card-stats {
    display: flex;
    justify-content: center;
    gap: $spacing-8;
  }

  &__card-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__card-stat-value {
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }

  &__card-stat-label {
    font-size: $font-size-xs;
    opacity: 0.8;
  }

  &__card-body {
    flex: 1;
    padding: $spacing-6;
    display: flex;
    flex-direction: column;
  }

  &__card-desc {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    margin-bottom: $spacing-4;
  }

  &__card-features {
    flex: 1;
    margin-bottom: $spacing-4;

    li {
      display: flex;
      align-items: center;
      gap: $spacing-2;
      font-size: $font-size-sm;
      color: $color-text-primary;
      padding: $spacing-2 0;

      .el-icon {
        color: $color-success;
      }
    }
  }

  &__card-tech {
    padding: $spacing-4;
    background: $color-bg-secondary;
    border-radius: $radius-md;
    margin-bottom: $spacing-4;
  }

  &__card-tech-item {
    display: flex;
    justify-content: space-between;
    font-size: $font-size-sm;
    padding: $spacing-1 0;
  }

  &__card-tech-label {
    color: $color-text-light;
  }

  &__card-tech-value {
    color: $color-text-primary;
    font-weight: $font-weight-medium;
  }

  &__card-link {
    display: inline-flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    padding: $spacing-2 $spacing-3;
    margin: -#{$spacing-2} -#{$spacing-3};
    border-radius: $radius-md;
    transition: all $transition-fast;

    &:hover {
      color: $color-accent;
      background: rgba(237, 137, 54, 0.1);
    }
    
    &:active {
      transform: scale(0.95);
      background: rgba(237, 137, 54, 0.15);
    }
  }

  &__card-steps {
    margin-bottom: $spacing-4;
    padding: $spacing-4;
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%);
    border-radius: $radius-md;
    border-left: 3px solid $color-primary;
  }

  &__card-steps-title {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    margin-bottom: $spacing-3;
  }

  &__card-steps-list {
    padding-left: $spacing-4;
    margin: 0;

    li {
      font-size: $font-size-xs;
      color: $color-text-secondary;
      padding: $spacing-1 0;
      line-height: $line-height-relaxed;
    }
  }

  &__requirements {
    margin-top: $spacing-12;
    padding: $spacing-10;
    background: white;
    border-radius: $radius-xl;
    box-shadow: $shadow-md;
  }

  &__requirements-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    text-align: center;
    margin-bottom: $spacing-8;
  }

  &__requirements-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-6;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__requirements-card {
    text-align: center;
    padding: $spacing-6;
    background: $color-bg-secondary;
    border-radius: $radius-lg;
    transition: transform $transition-fast, box-shadow $transition-fast;

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-md;
    }
  }

  &__requirements-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto $spacing-4;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, $color-primary 0%, $color-accent 100%);
    border-radius: $radius-full;
    color: white;
  }

  &__requirements-name {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-4;
  }

  &__requirements-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: $font-size-sm;
      color: $color-text-secondary;
      padding: $spacing-2 0;
      border-bottom: 1px solid $color-border-light;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__info {
    margin-top: $spacing-12;
  }

  &__info-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-8;
    max-width: 900px;
    margin: 0 auto;
    padding: $spacing-10;
    background: white;
    border-radius: $radius-xl;
    box-shadow: $shadow-lg;
    align-items: center;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 200px 1fr;
    }
  }

  &__info-visual {
    display: flex;
    justify-content: center;
  }

  &__info-svg {
    width: 200px;
    height: 120px;
  }

  &__info-content {
    text-align: center;

    @media (min-width: $breakpoint-md) {
      text-align: left;
    }
  }

  &__info-title {
    font-size: $font-size-2xl;
    color: $color-primary;
    margin-bottom: $spacing-4;
  }

  &__info-text {
    font-size: $font-size-base;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
    margin-bottom: $spacing-6;
  }

  &__info-features {
    display: flex;
    justify-content: center;
    gap: $spacing-6;

    @media (min-width: $breakpoint-md) {
      justify-content: flex-start;
    }
  }

  &__info-feature {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $font-size-sm;
    color: $color-text-primary;
  }

  &__info-feature-icon {
    font-size: 20px;
  }

  &__operation {
    margin-top: $spacing-12;
  }

  &__operation-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    text-align: center;
    margin-bottom: $spacing-8;
  }

  &__operation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-4;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__operation-card {
    padding: $spacing-6;
    background: white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
  }

  &__operation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-4;
    padding-bottom: $spacing-4;
    border-bottom: 1px solid $color-border-light;
  }

  &__operation-platform {
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-primary;
  }

  &__operation-status {
    padding: $spacing-1 $spacing-3;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    border-radius: $radius-full;
    background: $color-bg-secondary;
    color: $color-text-secondary;

    &--active {
      background: rgba(72, 187, 120, 0.1);
      color: $color-success;
    }
  }

  &__operation-stats {
    display: flex;
    justify-content: space-between;
  }

  &__operation-stat {
    text-align: center;
  }

  &__operation-stat-value {
    display: block;
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-text-primary;
  }

  &__operation-stat-label {
    font-size: $font-size-xs;
    color: $color-text-light;
  }
}
</style>
