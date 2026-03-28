<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <PlatformSection />
    <FleetSection />
    <RoutesSection />
    <NewsSection />
    <ContactSection />
    <MessageBoard />
    <RecruitSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import PlatformSection from '@/components/sections/PlatformSection.vue'
import FleetSection from '@/components/sections/FleetSection.vue'
import RoutesSection from '@/components/sections/RoutesSection.vue'
import NewsSection from '@/components/sections/NewsSection.vue'
import RecruitSection from '@/components/sections/RecruitSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MessageBoard from '@/components/sections/MessageBoard.vue'
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
}
</style>
