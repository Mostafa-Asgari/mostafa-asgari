<template>
  <div>
    <button @click="open = !open" class="p-2 rounded-md border">
      <span v-if="!open">منو</span>
      <span v-else>بستن</span>
    </button>
    <transition name="slide-fade">
      <div v-if="open" class="absolute top-16 inset-x-4 bg-white/95 p-4 rounded-lg shadow-lg">
        <router-link class="block py-2" to="/">خانه</router-link>
        <router-link class="block py-2" to="/about">درباره من</router-link>
        <router-link class="block py-2" to="/portfolio">نمونه کارها</router-link>
        <router-link class="block py-2" to="/services">خدمات</router-link>
        <router-link class="block py-2" to="/contact">تماس با من</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default { data() { return { open: false } } }
</script>

<style>
.slide-fade-enter-active { transition: all .25s ease }
.slide-fade-leave-active { transition: all .15s ease }
.slide-fade-enter-from { transform: translateY(-6px); opacity: 0 }
.slide-fade-enter-to { transform: translateY(0); opacity: 1 }
</style>
