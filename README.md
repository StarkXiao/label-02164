# SkyLink Virtual Airlines 官网

## How to Run

### 开发环境

```bash
cd frontend-user
npm install
npm run dev
```

### Docker 部署

```bash
docker-compose up -d --build
```

访问地址：http://localhost:8082

## Services

| 服务名称 | 端口 | 说明 |
|---------|------|------|
| frontend-user | 8082 | 用户端前端服务 |

## 测试账号

本项目为纯前端展示网站，无需登录账号。

## 题目内容

设计一个官网，与模拟飞行联飞平台以及虚拟航空公司相关元素，使用VUE框架

## 项目结构

```
label-02164/
├── .gitignore
├── docker-compose.yml
├── README.md
└── frontend-user/
    ├── Dockerfile
    ├── index.html
    ├── nginx.conf
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── public/
    │   └── favicon.svg
    └── src/
        ├── App.vue
        ├── main.js
        ├── components/
        │   ├── layout/
        │   │   ├── AppFooter.vue
        │   │   └── AppHeader.vue
        │   └── sections/
        │       ├── AboutSection.vue
        │       ├── ContactSection.vue
        │       ├── FleetSection.vue
        │       ├── HeroSection.vue
        │       ├── NewsSection.vue
        │       ├── PlatformSection.vue
        │       ├── RecruitSection.vue
        │       └── RoutesSection.vue
        ├── composables/
        │   ├── useLazyLoad.js
        │   └── useScrollAnimation.js
        ├── i18n/
        │   └── index.js
        ├── router/
        │   └── index.js
        ├── styles/
        │   ├── index.scss
        │   └── variables.scss
        └── views/
            ├── AboutPage.vue
            ├── FleetPage.vue
            ├── HomePage.vue
            ├── JoinPage.vue
            ├── NewsPage.vue
            └── RoutesPage.vue
```

## 技术栈

- Vue 3 + Composition API
- Vite
- Element Plus
- Vue Router
- SCSS
- Docker + Nginx
