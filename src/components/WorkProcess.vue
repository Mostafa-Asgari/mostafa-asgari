<template>
  <div class="relative flex flex-col items-center py-[50px] px-6 rounded-lg overflow-hidden bg-gradient-to-br from-teal-200 to-blue-700">
    <!-- دایره نورانی محو -->
    <div class="absolute w-[500px] h-[500px] bg-white opacity-20 rounded-full blur-[150px] top-[-150px] right-[-150px] pointer-events-none"></div>

    <!-- عنوان -->
    <h2 
      ref="animatedItems" 
      class="text-3xl md:text-5xl font-extrabold text-teal-900 mb-[100px] opacity-1 translate-y-8 scale-95 transition-all duration-700 ease-out relative z-10"
    >
      فرایند کاری من
    </h2>

    <!-- تایم‌لاین -->
    <div class="relative flex flex-col items-center w-full max-w-xl z-10">
      <!-- خط عمودی اصلی -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-teal-900"></div>

      <!-- مرحله‌ها -->
      <div 
        v-for="(step, index) in steps" 
        :key="index"
        ref="animatedItems"
        class="mb-16 last:mb-0 flex items-center w-full relative opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out"
        :class="step.reverse ? 'flex-row-reverse text-left' : 'text-right'"
      >
        <!-- آیکن -->
        <div class="w-1/2 flex justify-center relative">
          <div class="bg-white p-4 md:p-6 rounded-full shadow-md relative z-10">
            <img :src="step.icon" class="w-[70px]" :alt="step.title">
          </div>
        </div>

        <!-- اتصال خطی -->
        <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center z-10">
          <div v-if="!step.reverse" class="w-[6rem] mr-[110px] h-1 bg-teal-900"></div>
          <div class="w-4 h-4 bg-teal-900 rounded-full"></div>
          <div v-if="step.reverse" class="w-[6rem] ml-[110px] h-1 bg-teal-900"></div>
        </div>

        <!-- متن -->
        <div class="w-1/2 px-6" :class="step.reverse ? 'text-left ml-[250px]' : 'text-right mr-[250px]'">
          <h3 class="mb-4 text-[0.8rem] sm:text-[1.7rem] font-bold text-yellow-400 drop-shadow-[0_0_7px_#134e4a]">{{ step.title }}</h3>
          <p class="text-gray-200 text-md f !mportant">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const animatedItems = ref([])

const steps = [
  { title: 'ایده پردازی', text: 'جمع‌آوری ایده‌ها و نیازسنجی پروژه', icon: '/images/bulb.gif', reverse: false },
  { title: 'طراحی', text: 'طراحی رابط‌ کاربری و تجربه کاربری پروژه', icon: '/images/design.gif', reverse: true },
  { title: 'توسعه', text: 'کدنویسی و پیاده‌سازی کامل پروژه', icon: '/images/coding.gif', reverse: false },
  { title: 'تحویل', text: 'ارائه و تحویل نهایی پروژه', icon: '/images/delivery.gif', reverse: true }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = animatedItems.value.indexOf(entry.target)
        entry.target.style.transitionDelay = `${index * 0.25}s`
        entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95')
        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  animatedItems.value.forEach(el => el && observer.observe(el))
})
</script>
<style>

</style>