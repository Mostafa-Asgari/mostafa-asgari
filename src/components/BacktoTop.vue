<template>
    <transition name="fade-slide">
      <button
        v-if="visible"
        @click="scrollToTop"
        class="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-700 focus:outline-none"
        aria-label="رفتن به بالا"
      >
        <!-- آیکن فلش بالا -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const visible = ref(false)
  
  const toggleVisibility = () => {
    visible.value = window.scrollY > 150
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility)
  })
  </script>
  
  <style scoped>
  /* انیمیشن نرم ظاهر شدن و محو شدن */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(100%);
  }
  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  </style>
  