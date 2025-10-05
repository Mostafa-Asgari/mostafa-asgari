<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 py-20">
    <!-- پس‌زمینه -->
    <div class="absolute inset-0 z-0">
      <img src="/images/seo-impact.webp" alt="Aurora background" class="h-full w-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>
    </div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 text-center">
      <!-- تیتر وسط چین با انیمیشن -->
      <div class="mb-[90px] flex justify-center">
        <h3 class="text-5xl md:text-6xl font-extrabold tracking-wider text-[#8cffdf] border-b-2 border-purple-500 pb-2">بلاگ</h3>
      </div>
      
      <!-- کارت‌ها -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <router-link
        v-for="(post, index) in blogPosts.slice(0, 3)"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="blog-card group relative aspect-[4/3] w-full transform cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 scale-95 hover:scale-105"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <img :src="post.image" :alt="post.title"
               class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
          
          <!-- گرادینت فسفری -->
          <div class="absolute inset-x-0 bottom-0 z-10 h-5/6 bg-gradient-to-t from-[#050b2f] via-cyan-600/50 to-transparent"></div>
          <!-- Glow -->
          <div class="absolute inset-x-0 bottom-0 z-0 h-2/3 bg-emerald-400/20 blur-2xl animate-glow"></div>
          
          <div class="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
            <div class="mb-3 flex items-center gap-2 text-sm font-medium text-gray-200">
              <span class="rounded-full bg-orange-600 px-3 py-1 text-white">{{ post.category }}</span>
              <span>| {{ post.date }} |</span>
              <span>{{ post.author }}</span>
            </div>
            <h4 class="text-xl text-right font-semibold leading-tight text-white">
              {{ post.title }}
            </h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import posts from '../data/posts.js'   // اگر posts.js named export بود: import { posts } from '../data/posts.js'

const blogPosts = ref(posts || [])

// اگر می‌خوای برای دیباگ چک کنی که داده‌ها لود شدن:
console.log('blogPosts:', blogPosts.value)

onMounted(() => {
  // گرفتن کارت‌ها با سلکتور (مطمئن و ساده)
  const cards = Array.from(document.querySelectorAll('.blog-card'))
  if (!cards.length) {
    console.warn('هیچ کارتی پیدا نشد (selector: .blog-card). اگر کارت‌ها وجود دارن ولی hidden هستن، بررسی کن که کلاس‌ها درست باشن.')
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // حذف کلاس‌های مخفی اولیه تا کارت نمایش داده بشه
        entry.target.classList.remove('opacity-0', 'translate-y-6', 'scale-95')
        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '100px' })

  cards.forEach(el => io.observe(el))
})
</script>

<style scoped>
@keyframes glowPulse {
  0%, 100% {
    opacity: 0.2;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.4;
    transform: scaleX(1.05);
  }
}
.animate-glow {
  animation: glowPulse 4s ease-in-out infinite;
}
</style>
