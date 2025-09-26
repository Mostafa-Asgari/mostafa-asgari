<template>
  <div class="min-h-screen text-gray-800 bg-white relative">
    <!-- اشکال پس‌زمینه -->
    <div class="background-shapes" aria-hidden="true">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
    </div>

    <!-- هدر -->
    <!-- <Header v-if="isHome" />
    <HeaderDark v-else /> -->
    <HeaderDark />

    <!-- محتوای اصلی -->
    <main class="pt-5 relative z-10">
      <router-view />
      <BacktoTop />
      <PhoneFloating />
    </main>

    <!-- فوتر -->
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import Header from './components/Header.vue'
import HeaderDark from './components/HeaderDark.vue'
import Footer from './components/Footer.vue'
import BacktoTop from './components/BacktoTop.vue'
import PhoneFloating from './components/PhoneFloating.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

</script>

<style>
:root {
  direction: rtl;
}

</style>
