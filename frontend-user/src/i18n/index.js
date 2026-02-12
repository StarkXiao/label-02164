import { ref, computed } from 'vue'

const currentLocale = ref('zh-CN')

const messages = {
  'zh-CN': {
    nav: {
      home: '首页',
      about: '关于我们',
      platform: '联飞平台',
      fleet: '机队展示',
      routes: '航线网络',
      news: '新闻动态',
      join: '加入我们'
    },
    hero: {
      badge: 'VATSIM & IVAO 认证虚拟航空',
      title: '翱翔云端',
      titleAccent: '连接世界',
      subtitle: 'SkyLink Virtual Airlines — 专业的模拟飞行联飞平台与虚拟航空公司',
      desc: '加入全球 1200+ 飞行员的大家庭，体验最真实的联飞模拟',
      simulators: '支持模拟器：'
    },
    about: {
      title: '关于我们',
      subtitle: 'SkyLink Virtual Airlines 成立于2020年，是一家专注于模拟飞行的虚拟航空公司',
      mission: '我们的使命',
      missionText: '为全球模拟飞行爱好者提供专业、真实、有趣的飞行体验'
    },
    footer: {
      copyright: 'Copyright © 2014 - 2026 SKYLINK-VA.COM All Rights Reserved'
    }
  },
  'en-US': {
    nav: {
      home: 'Home',
      about: 'About',
      platform: 'Platforms',
      fleet: 'Fleet',
      routes: 'Routes',
      news: 'News',
      join: 'Join Us'
    },
    hero: {
      badge: 'VATSIM & IVAO Certified Virtual Airline',
      title: 'Soar Above',
      titleAccent: 'Connect the World',
      subtitle: 'SkyLink Virtual Airlines — Professional Flight Simulation & Virtual Airline',
      desc: 'Join 1200+ pilots worldwide, experience the most realistic online flying',
      simulators: 'Supported Simulators:'
    },
    about: {
      title: 'About Us',
      subtitle: 'SkyLink Virtual Airlines was founded in 2020, dedicated to flight simulation',
      mission: 'Our Mission',
      missionText: 'Provide professional, realistic, and enjoyable flight experience for flight sim enthusiasts'
    },
    footer: {
      copyright: 'Copyright © 2014 - 2026 SKYLINK-VA.COM All Rights Reserved'
    }
  }
}

export function useI18n() {
  const locale = computed(() => currentLocale.value)
  
  const t = (key) => {
    const keys = key.split('.')
    let value = messages[currentLocale.value]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const setLocale = (newLocale) => {
    if (messages[newLocale]) {
      currentLocale.value = newLocale
    }
  }

  const availableLocales = Object.keys(messages)

  return {
    locale,
    t,
    setLocale,
    availableLocales
  }
}

export default { useI18n }
