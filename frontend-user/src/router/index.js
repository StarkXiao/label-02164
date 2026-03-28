import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: { title: 'SkyLink Virtual Airlines' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: { title: '关于我们 - SkyLink VA' }
  },
  {
    path: '/fleet',
    name: 'Fleet',
    component: () => import('@/views/FleetPage.vue'),
    meta: { title: '机队展示 - SkyLink VA' }
  },
  {
    path: '/routes',
    name: 'Routes',
    component: () => import('@/views/RoutesPage.vue'),
    meta: { title: '航线网络 - SkyLink VA' }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/NewsPage.vue'),
    meta: { title: '新闻动态 - SkyLink VA' }
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/views/JoinPage.vue'),
    meta: { title: '加入我们 - SkyLink VA' }
  },
  {
    path: '/messageboard',
    name: 'MessageBoard',
    component: () => import('@/views/MessageBoardPage.vue'),
    meta: { title: '留言板 - SkyLink VA' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SkyLink Virtual Airlines'
  next()
})

export default router
