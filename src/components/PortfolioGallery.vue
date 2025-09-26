<template>
    <section
      ref="sectionEl"
      class="relative overflow-hidden w-full py-16 px-6 bg-gradient-to-br from-[#0b0f1a] via-[#1b1f2a] to-[#0b0f1a] text-white"
      style="--accent: #f97316"
    >
      <!-- بوم پس‌زمینه (ضربدر، پلاس، نقطه‌ها و خطوط) -->
      <div class="absolute inset-0 z-0">
        <canvas ref="bgCanvas" class="w-full h-full block pointer-events-none"></canvas>
      </div>
  
      <div class="relative z-10 pt-[40px] pb-[30px]">
        <div class="max-w-6xl mx-auto">
          <!-- عنوان -->
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#8cffdf]">نمونه کارها</h2>
  
          <!-- فیلتر دسته‌بندی -->
          <div class="flex justify-center gap-4 mb-10">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              class="px-4 py-2 rounded-full border transition-all duration-300"
              :class="selectedCategory === cat
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'border-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'"
            >
              {{ cat }}
            </button>
          </div>
  
          <!-- گرید تصاویر -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <transition-group name="fade-slide" tag="div" class="contents">
              <div
                v-for="item in filteredItems"
                :key="item.id"
                class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                />
                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500"
                  @click="openImage(item.image)"
                >
                  <span class="text-5xl text-white font-bold">+</span>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
  
      <!-- پاپ‌آپ نمایش تصویر -->
      <div
        v-if="showPopup"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        @click.self="showPopup = false"
      >
        <img :src="selectedImage" class="max-w-full max-h-full rounded-lg shadow-xl" />
        <button
          class="absolute top-6 right-6 text-white text-2xl font-bold"
          @click="showPopup = false"
        >
          ✕
        </button>
      </div>

      <!-- بخش نظرات مشتریان -->
    <div class="relative z-10 mt-20 max-w-6xl mx-auto pt-[50px] pb-[30px]">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8cffdf]">نظرات مشتریان</h2>

    <Swiper
      :modules="[Navigation, Autoplay]"
      :space-between="24"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      navigation
      
      class="pb-12"
    >
      <SwiperSlide
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <div
          class="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-between"
        >
          <img
            :src="testimonial.avatar"
            :alt="testimonial.name"
            class="w-24 h-24 mx-auto rounded-full border-2 border-amber-300 object-cover mb-4"
          >
          <h3 class="font-bold text-lg mb-1 italic">{{ testimonial.name }}</h3>
          <p class="text-amber-300 text-[12px] mb-4">{{ testimonial.job }}</p>
          <p class="text-gray-300 text-sm leading-6 italic">{{ testimonial.text }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  const sectionEl = ref(null)
  const bgCanvas = ref(null)
  
  // داده‌های اصلی
  const categories = ["همه", "شرکتی", "فروشگاهی", "کارهای تبلیغاتی"]
  
  const portfolioItems = ref([
    { id: 1, title: "نمونه ۱", category: "شرکتی", image: "/images/sample1.jpg" },
    { id: 2, title: "نمونه ۲", category: "فروشگاهی", image: "/images/sample2.jpg" },
    { id: 3, title: "نمونه ۳", category: "کارهای تبلیغاتی", image: "/images/sample3.jpg" },
    { id: 4, title: "نمونه ۴", category: "شرکتی", image: "/images/sample4.jpg" },
    { id: 5, title: "نمونه ۵", category: "فروشگاهی", image: "/images/sample5.jpg" },
    { id: 6, title: "نمونه ۶", category: "کارهای تبلیغاتی", image: "/images/sample6.jpg" },
    // { id: 7, title: "نمونه ۷", category: "شرکتی", image: "/images/sample7.jpg" },
    // { id: 8, title: "نمونه ۸", category: "فروشگاهی", image: "/images/sample8.jpg" },
    // { id: 9, title: "نمونه ۹", category: "کارهای تبلیغاتی", image: "/images/sample9.jpg" },
  ])
  
  const selectedCategory = ref("همه")
  
  const filteredItems = computed(() => {
    if (selectedCategory.value === "همه") return portfolioItems.value
    return portfolioItems.value.filter(
      (item) => item.category === selectedCategory.value
    )
  })
  
  // پاپ‌آپ
  const showPopup = ref(false)
  const selectedImage = ref("")
  const openImage = (image) => {
    selectedImage.value = image
    showPopup.value = true
  }
  
  // پس‌زمینه: ضربدر، پلاس، نقطه و خطوط (کمی پررنگ‌تر + پلاس همرنگ اکسنت)
  let resizeObs
  let ctx
  
  const config = {
    density: { lines: 42, dots: 140, crosses: 34, pluses: 15 },
    thickness: {
      lineWidth: 1.9,   // خطوط — پررنگ‌تر
      dotRadius: 2.6,   // نقطه‌ها — پررنگ‌تر
      crossWidth: 3.0,  // ضربدر — پررنگ‌تر
      plusWidth: 2.7    // پلاس — پررنگ‌تر
    },
    alpha: {
      lines: 0.1,
      dots: 0.15,
      crosses: 0.1
    }
  }
  
  const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
  
  function getAccent() {
    // رنگ اکسنت از CSS متغیر روی سکشن، در صورت نبود، نارنجی Tailwind
    const el = sectionEl.value
    if (!el) return '#f97316'
    const v = getComputedStyle(el).getPropertyValue('--accent').trim()
    return v || '#f97316'
  }
  
  function rand(min, max) { return Math.random() * (max - min) + min }
  
  function drawLine(x1, y1, x2, y2, color, width) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.globalCompositeOperation = 'lighter'
    ctx.stroke()
  }
  
  function drawDot(x, y, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.globalCompositeOperation = 'lighter'
    ctx.fill()
  }
  
  function drawCross(x, y, size, color, width, angle = 45) {
    const rad = angle * Math.PI / 180
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rad)
    ctx.beginPath()
    ctx.moveTo(-size, 0)
    ctx.lineTo(size, 0)
    ctx.moveTo(0, -size)
    ctx.lineTo(0, size)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineCap = 'round'
    ctx.globalCompositeOperation = 'lighter'
    ctx.stroke()
    ctx.restore()
  }
  
  function drawPlus(x, y, size, color, width) {
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath()
    ctx.moveTo(-size, 0)
    ctx.lineTo(size, 0)
    ctx.moveTo(0, -size)
    ctx.lineTo(0, size)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineCap = 'round'
    ctx.shadowColor = color
    ctx.shadowBlur = 8
    ctx.globalCompositeOperation = 'lighter'
    ctx.stroke()
    ctx.restore()
  }
  
  function drawAll() {
    const canvas = bgCanvas.value
    if (!canvas || !ctx) return
  
    const rect = sectionEl.value.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
  
    // تنظیم DPI
    canvas.width = Math.max(1, Math.floor(w * DPR))
    canvas.height = Math.max(1, Math.floor(h * DPR))
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  
    ctx.clearRect(0, 0, w, h)
  
    const baseLight = '255,255,255'
    const lineColor = o => `rgba(${baseLight}, ${o})`
    const dotColor = o => `rgba(${baseLight}, ${o})`
    const crossColor = o => `rgba(${baseLight}, ${o})`
    const accent = getAccent()
  
    // خطوط
    for (let i = 0; i < config.density.lines; i++) {
      const x1 = rand(-0.1 * w, 1.1 * w)
      const y1 = rand(-0.1 * h, 1.1 * h)
      const len = rand(80, 220)
      const ang = rand(-20, 20) * Math.PI / 180
      const x2 = x1 + Math.cos(ang) * len
      const y2 = y1 + Math.sin(ang) * len
      drawLine(x1, y1, x2, y2, lineColor(config.alpha.lines), config.thickness.lineWidth)
    }
  
    // نقطه‌ها
    for (let i = 0; i < config.density.dots; i++) {
      const x = rand(0, w)
      const y = rand(0, h)
      const r = rand(config.thickness.dotRadius * 0.8, config.thickness.dotRadius * 1.2)
      drawDot(x, y, r, dotColor(config.alpha.dots))
    }
  
    // ضربدرها
    for (let i = 0; i < config.density.crosses; i++) {
      const x = rand(0, w)
      const y = rand(0, h)
      const size = rand(6, 12)
      const angle = rand(35, 55)
      drawCross(x, y, size, crossColor(config.alpha.crosses), config.thickness.crossWidth, angle)
    }
  
    // پلاس‌ها — همرنگ اکسنت
    for (let i = 0; i < config.density.pluses; i++) {
      const x = rand(0, w)
      const y = rand(0, h)
      const size = rand(7, 13)
      drawPlus(x, y, size, accent, config.thickness.plusWidth)
    }
  }
  
  function scheduleRedraw() {
    // پس از تغییر DOM (مثلاً تغییر فیلتر و تغییر ارتفاع)، دوباره رسم کن
    requestAnimationFrame(() => drawAll())
  }
  
  onMounted(async () => {
    await nextTick()
    const canvas = bgCanvas.value
    if (!canvas) return
    ctx = canvas.getContext('2d')
  
    // ResizeObserver برای هماهنگی با ارتفاع/عرض سکشن
    if ('ResizeObserver' in window) {
      resizeObs = new ResizeObserver(() => drawAll())
      resizeObs.observe(sectionEl.value)
    } else {
      // fallback
      window.addEventListener('resize', drawAll)
    }
  
    drawAll()
  })
  
  // وقتی آیتم‌های فیلترشده تغییر کنند، پس از رندر، مجدد پس‌زمینه را رسم کن
  watch(filteredItems, async () => {
    await nextTick()
    scheduleRedraw()
  })
  
  onBeforeUnmount(() => {
    if (resizeObs) resizeObs.disconnect()
    else window.removeEventListener('resize', drawAll)
  })


// داده‌های نمونه (می‌تونی از API یا props بگیری)
const testimonials = [
  {
    name: 'علی رضاوند',
    text: 'این بهترین تجربه‌ای بود که داشتم! طراحی فوق‌العاده و پشتیبانی عالی.',
    job: 'مدیر فروشگاه آنلاین',
    avatar: '/images/customer1.webp'
  },
  {
    name: 'احمد نیک سرشت',
    text: 'واقعا از کیفیت کار راضی هستم، همه چیز دقیق و حرفه‌ای انجام شد.',
    job: 'دانشجوی مدیریت کسب و کار',
    avatar: '/images/customer2.webp'
  },
  {
    name: 'مهدی کریمی',
    text: 'طراحی زیبا و تجربه کاربری عالی بود و خیلی خوب راهنمایی میکردن. حتما پیشنهاد می‌کنم.',
    job: 'مشتری',
    avatar: '/images/customer3.webp'
  },
  {
    name: 'فرناز محمدی',
    text: 'طراحی زیبا و تجربه کاربری عالی بود و خیلی خوب راهنمایی میکردن. حتما پیشنهاد می‌کنم.',
    job: 'مدیر وب سایت شرکتی',
    avatar: '/images/customer4.webp'
  }
];

  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
  .fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(25px) scale(0.95);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(25px) scale(0.95);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  transition: background-color 0.4s;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 14px;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover{
  background-color: #f97316;
  transition: background-color 0.4s;
}

.swiper-slide{
  cursor: pointer;
}


  </style>
  