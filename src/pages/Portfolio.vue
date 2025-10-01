<template>
  <section id="portfolio" class="relative py-16 px-6 md:px-12 overflow-hidden">
    <!-- پس‌زمینه گرادینت روشن -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-100 via-cyan-100 to-indigo-100"></div>
    <div class="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-300/40 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
    <div class="absolute inset-0">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-cyan-400/40 blur-3xl rounded-full animate-aurora"></div>
    </div>

    <div class="relative z-10">
      <!-- هدر بخش -->
      <div class="text-center mb-10">
        <div class="mx-auto mb-3 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800">نمونه کارها</h2>
        <p class="text-gray-600 mt-2">
          وب‌سایت‌های طراحی‌شده با تمرکز بر سرعت، تجربه کاربری و جزئیات.
        </p>
      </div>

      <!-- گرید نمونه کارها -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="item in items" :key="item.url" class="group">
          <a :href="item.url" target="_blank" rel="noopener" class="block">
            <!-- کارت موکاپ -->
            <div class="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 bg-[#0b1020]">
              <!-- نوار بالای موکاپ -->
              <div class="absolute top-0 left-0 right-0 h-8 bg-neutral-900/80 backdrop-blur-sm flex items-center gap-2 px-3 z-10">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span class="ml-auto text-[10px] text-white/50 font-mono">{{ item.domain }}</span>
              </div>

              <!-- پیش‌نمایش -->
              <div
                class="preview h-[220px] sm:h-[260px] md:h-[280px]"
                :style="{ backgroundImage: `url(${item.preview})` }"
                aria-hidden="true"
              ></div>

              <!-- شید روی Hover -->
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <!-- عنوان زیر کارت -->
            <div class="mt-3">
              <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500">{{ item.domain }}</p>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'وب‌سایت شرکتی رفیق وب',
    domain: 'test-asgari.ir',
    url: 'https://test-asgari.ir/',
    preview: '/images/refighweb.webp'
  },
  {
    title: 'وب‌سایت فروشگاهی علی بلکا',
    domain: 'alibelka.com',
    url: 'https://alibelka.com/',
    preview: '/images/alibelka.webp'
  },
  {
    title: 'وب‌سایت خدماتی واردات-صادرات',
    domain: 'bknco.ir',
    url: 'https://bknco.ir/',
    preview: '/images/bknco.webp'
  },
  {
    title: 'وب‌سایت لوازم تحریر ریرا',
    domain: 'riratahrir.ir',
    url: 'https://riratahrir.ir/',
    preview: '/images/riratahrir.webp'
  },
  {
    title: 'لندینگ دندانپزشکی سرو',
    domain: 'sarvbeauteeth.com/dental-composite-lnd-1',
    url: 'https://sarvbeauteeth.com/dental-composite-lnd-1/',
    preview: '/images/sarvbeauteeth.jpeg'
  }
]
</script>

<style scoped>
/* پیش‌نمایش با تصویر بلند و اسکرول روی Hover */
.preview {
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top center;
  transition: background-position 10s linear;
}

@media (hover: hover) and (pointer: fine) {
  .group:hover .preview {
    background-position: bottom center;
    transition-duration: 8s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .preview {
    transition: none !important;
  }
}
</style>
