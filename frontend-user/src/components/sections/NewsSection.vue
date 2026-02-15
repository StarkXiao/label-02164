<template>
  <section id="news" class="news section">
    <div class="container">
      <h2 class="section-title">新闻动态</h2>
      <p class="section-subtitle">
        了解 SkyLink VA 的最新活动和公告
      </p>

      <div class="news__grid">
        <article 
          class="news__card card" 
          v-for="item in newsItems" 
          :key="item.id"
        >
          <div class="news__card-image" :style="{ background: item.bgGradient }">
            <div class="news__card-visual">
              <component :is="item.icon" class="news__card-icon" />
            </div>
            <span class="news__card-tag" :class="`news__card-tag--${item.type}`">
              {{ tagLabels[item.type] }}
            </span>
          </div>
          <div class="news__card-body">
            <time class="news__card-date">
              <el-icon><Calendar /></el-icon>
              {{ item.date }}
            </time>
            <h3 class="news__card-title">{{ item.title }}</h3>
            <p class="news__card-excerpt">{{ item.excerpt }}</p>
          </div>
        </article>
      </div>

      <div class="news__upcoming">
        <div class="news__upcoming-header">
          <h3 class="news__upcoming-title">
            <el-icon><Bell /></el-icon>
            近期活动预告
          </h3>
        </div>
        <div class="news__upcoming-list">
          <div class="news__upcoming-item" v-for="event in upcomingEvents" :key="event.id">
            <div class="news__upcoming-date">
              <span class="news__upcoming-day">{{ event.day }}</span>
              <span class="news__upcoming-month">{{ event.month }}</span>
            </div>
            <div class="news__upcoming-content">
              <h4 class="news__upcoming-name">{{ event.name }}</h4>
              <p class="news__upcoming-desc">{{ event.desc }}</p>
            </div>
            <div class="news__upcoming-time">
              <el-icon><Clock /></el-icon>
              {{ event.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Calendar, Bell, Clock } from '@element-plus/icons-vue'
import { h } from 'vue'

const tagLabels = {
  event: '活动',
  announcement: '公告',
  update: '更新'
}

const PlaneIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', { d: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' })
    ])
  }
}

const TrophyIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', { d: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z' })
    ])
  }
}

const RocketIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', { d: 'M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.42 9.5c-.14.52-.34.98-.54 1.38-.08.16-.16.32-.24.46h8.4c-.08-.14-.16-.3-.24-.46-.2-.4-.4-.86-.54-1.38H8.58zM12 22c.55 0 1-.45 1-1h-2c0 .55.45 1 1 1z' })
    ])
  }
}

const StarIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' })
    ])
  }
}

const newsItems = [
  {
    id: 1,
    type: 'event',
    date: '2026-02-15',
    title: '春节特别联飞活动：回家的路',
    excerpt: '春节期间，我们将组织一场特别的联飞活动，模拟春运期间的繁忙航班，体验中国民航的壮观场景。',
    bgGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    icon: PlaneIcon
  },
  {
    id: 2,
    type: 'announcement',
    date: '2026-02-10',
    title: 'SkyLink VA 2026年度计划发布',
    excerpt: '新的一年，我们将推出更多精彩活动，包括新航线开通、培训课程升级、以及与其他虚航的联合活动。',
    bgGradient: 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
    icon: RocketIcon
  },
  {
    id: 3,
    type: 'update',
    date: '2026-02-05',
    title: '机队更新：A350-900 正式加入',
    excerpt: '我们的机队迎来新成员！空客 A350-900 将执飞北京至纽约、伦敦等远程航线，为飞行员带来全新体验。',
    bgGradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    icon: StarIcon
  },
  {
    id: 4,
    type: 'event',
    date: '2026-01-28',
    title: 'VATSIM Cross The Pond 活动回顾',
    excerpt: '感谢所有参与 CTP 活动的飞行员！本次活动我们共有 45 名飞行员参与，创下了 SkyLink VA 的新纪录。',
    bgGradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    icon: TrophyIcon
  }
]

const upcomingEvents = [
  {
    id: 1,
    day: '22',
    month: '二月',
    name: '周末联飞：京沪快线',
    desc: 'ZBAA - ZSPD 往返联飞',
    time: '20:00 CST'
  },
  {
    id: 2,
    day: '01',
    month: '三月',
    name: '新手培训：联飞入门',
    desc: 'VATSIM 基础通讯教学',
    time: '19:00 CST'
  },
  {
    id: 3,
    day: '08',
    month: '三月',
    name: '远程航线：北京-纽约',
    desc: 'ZBAA - KJFK 跨太平洋飞行',
    time: '10:00 CST'
  }
]
</script>

<style lang="scss" scoped>
.news {
  background: $color-bg-primary;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-6;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
    &:active {
      transform: translateY(-2px) scale(0.98);
    }
  }

  &__card-image {
    position: relative;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &__card-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: $radius-full;
    backdrop-filter: blur(10px);
  }

  &__card-icon {
    width: 40px;
    height: 40px;
    color: white;
  }

  &__card-tag {
    position: absolute;
    top: $spacing-3;
    left: $spacing-3;
    padding: $spacing-1 $spacing-3;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    border-radius: $radius-sm;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);

    &--event {
      background: rgba($color-accent, 0.9);
    }

    &--announcement {
      background: rgba($color-primary, 0.9);
    }

    &--update {
      background: rgba($color-success, 0.9);
    }
  }

  &__card-body {
    flex: 1;
    padding: $spacing-5;
    display: flex;
    flex-direction: column;
  }

  &__card-date {
    display: flex;
    align-items: center;
    gap: $spacing-1;
    font-size: $font-size-xs;
    color: $color-text-light;
    margin-bottom: $spacing-2;

    .el-icon {
      font-size: 12px;
    }
  }

  &__card-title {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-3;
    line-height: $line-height-tight;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__card-excerpt {
    flex: 1;
    font-size: $font-size-sm;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
    margin-bottom: $spacing-4;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__card-link {
    display: inline-flex;
    align-items: center;
    gap: $spacing-1;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-primary;
    transition: color $transition-fast;

    &:hover {
      color: $color-accent;
    }
  }

  &__upcoming {
    margin-top: $spacing-12;
    background: white;
    border-radius: $radius-xl;
    box-shadow: $shadow-lg;
    overflow: hidden;
  }

  &__upcoming-header {
    padding: $spacing-6;
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
  }

  &__upcoming-title {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: white;
    margin: 0;

    .el-icon {
      font-size: 20px;
    }
  }

  &__upcoming-list {
    padding: $spacing-4;
  }

  &__upcoming-item {
    display: flex;
    align-items: center;
    gap: $spacing-4;
    padding: $spacing-4;
    border-radius: $radius-lg;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      background: $color-bg-secondary;
    }
    
    &:active {
      transform: scale(0.99);
      background: darken($color-bg-secondary, 3%);
    }

    &:not(:last-child) {
      border-bottom: 1px solid $color-border-light;
    }
  }

  &__upcoming-date {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $color-bg-secondary;
    border-radius: $radius-md;
  }

  &__upcoming-day {
    font-family: $font-family-heading;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
    line-height: 1;
  }

  &__upcoming-month {
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }

  &__upcoming-content {
    flex: 1;
  }

  &__upcoming-name {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__upcoming-desc {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }

  &__upcoming-time {
    display: flex;
    align-items: center;
    gap: $spacing-1;
    font-size: $font-size-sm;
    color: $color-accent;
    font-weight: $font-weight-medium;

    .el-icon {
      font-size: 14px;
    }
  }

  &__more {
    text-align: center;
    margin-top: $spacing-10;
  }
}
</style>
