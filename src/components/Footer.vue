<!-- FooterAurora.vue -->
<template>
  <footer dir="rtl" class="relative overflow-hidden text-gray-100">
    <!-- پس‌زمینه: هاله سبز + ستاره‌ها -->
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
    >
      <!-- لایه ستاره‌ها -->
      <div class="stars absolute inset-0"></div>

      <!-- هاله اصلی -->
      <div
        class="w-[200%] h-[140%] rounded-full transform -translate-x-1/4 -translate-y-1/3 filter blur-3xl opacity-80 animate-aurora"
        :style="{
          background:
            'radial-gradient(closest-side at 30% 25%, rgba(0,255,128,0.32), rgba(0,180,90,0.2) 25%, rgba(0,100,50,0.1) 50%, transparent 70%)',
        }"
      ></div>

      <!-- هاله دوم -->
      <div
        class="w-[140%] h-[90%] rounded-full absolute transform translate-x-1/4 translate-y-1/5 filter blur-2xl opacity-70"
        :style="{
          background:
            'radial-gradient(closest-side at 70% 65%, rgba(0,255,150,0.25), rgba(0,140,90,0.12) 30%, transparent 60%)',
        }"
      ></div>
    </div>

    <!-- محتوای فوتر -->
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- ستون 1: لوگو و توضیح -->
        <div>
          <a href="#" class="inline-flex items-center gap-3">
            <svg class="w-10 h-10" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stop-color="#00FF88"/>
                  <stop offset="1" stop-color="#00CC66"/>
                </linearGradient>
              </defs>
              <rect width="48" height="48" rx="10" fill="url(#g1)"/>
              <path d="M14 32C18 28 30 28 34 24" stroke="#032" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <span class="text-xl font-semibold tracking-tight">مصطفی عسگری</span>
          </a>
          <p class="mt-4 text-sm text-green-50/90 leading-relaxed">
           سلام! من مصطفی عسگری طراح و توسعه‌دهندهٔ وب هستم. اینجا سایت هایی پویا، جذاب و کاربرپسند طراحی میکنیم.
          </p>
        </div>

        <!-- ستون 2: دسترسی سریع -->
        <nav aria-label="دسترسی سریع" class="text-sm">
          <h4 class="text-base font-semibold mb-2">دسترسی سریع</h4>
          <ul class="space-y-3 border-solid border-t-2 border-green-300 pt-4 w-[150px]">
            <li><a href="#" class="text-green-50/95 hover:text-green-300 transition">صفحه اصلی</a></li>
            <li><a href="#" class="text-green-50/95 hover:text-green-300 transition">درباره من</a></li>
            <li><a href="#" class="text-green-50/95 hover:text-green-300 transition">خدمات</a></li>
            <li><a href="#" class="text-green-50/95 hover:text-green-300 transition">نمونه‌کارها</a></li>
            <li><a href="#" class="text-green-50/95 hover:text-green-300 transition">تماس</a></li>
          </ul>
        </nav>

        <!-- ستون 3: مقالات اخیر -->
        <div>
          <h3 class="text-base font-semibold mb-2">مقالات اخیر</h3>
          <ul class="space-y-3 text-sm border-solid border-t-2 border-green-300 pt-4 w-[200px]">
            <li>
              <a href="#" class="flex flex-col hover:underline">
                <span class="font-medium text-green-50/95 hover:text-green-300">چطور یک وبسایت سریع بسازیم</span>
                <span class="text-xs text-green-50/70 mt-1">فروردین ۱۴۰۳ · ۵ دقیقه مطالعه</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-col hover:underline">
                <span class="font-medium text-green-50/95 hover:text-green-300">بهینه‌سازی تصاویر برای وب</span>
                <span class="text-xs text-green-50/70 mt-1">اسفند ۱۴۰۲ · ۷ دقیقه مطالعه</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-col hover:underline">
                <span class="font-medium text-green-50/95 hover:text-green-300">مبانی Tailwind CSS</span>
                <span class="text-xs text-green-50/70 mt-1">دی ۱۴۰۲ · ۸ دقیقه مطالعه</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- ستون 4: تماس با من -->
        <div>
          <h3 class="text-base font-semibold mb-2">تماس با من</h3>
          <div class="text-sm space-y-3 border-solid border-t-2 border-green-300 pt-4 w-[150px]">
            <div>
              <span class="block text-green-50/70 font-medium">ایمیل</span>
              <a href="mailto:you@example.com" class="text-sm text-white/90 hover:underline hover:text-green-300">asgarii1369@gmail.com</a>
            </div>
            <div>
              <span class="block text-green-50/70 font-medium">تلفن</span>
              <a href="tel:+989123456789" class="text-sm text-white/90 hover:underline hover:text-green-300">8105 630 0902</a>
            </div>
            <div>
              <span class="block text-green-50/70 font-medium">آدرس</span>
              <p class="text-sm text-white/80 hover:text-green-300">کرج، ایران</p>
            </div>
          </div>

          <!-- آیکن‌های اجتماعی -->
          <div class="mt-5 flex items-center gap-3">
            <!-- Telegram -->
            <a href="#" aria-label="Telegram" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-white" viewBox="0 0 24 24">
                <path d="M21.6 2.3L2.8 10.4c-1.2.5-1.2 1.2-.2 1.5l4.9 1.6 11.4-7.2c.5-.3.9-.1.5.2l-9.2 8.3-.3 4.9c.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.3.2 1.5-.8l2.6-16.1c.3-1.2-.5-1.8-1.1-1.3z"/>
              </svg>
            </a>
            <!-- WhatsApp -->
            <a href="#" aria-label="WhatsApp" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-white" viewBox="0 0 24 24">
                <path d="M20 4.4A11.8 11.8 0 0012.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L0 24l6.4-2c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6-3.4-8.2zM12.1 21c-1.7 0-3.3-.5-4.7-1.3l-.4-.2-3.8 1.2 1.2-3.7-.2-.4a9.6 9.6 0 01-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5 1 6.8 2.8a9.7 9.7 0 012.8 6.8c0 5.4-4.4 9.8-9.8 9.8zm5.5-7.3c-.3-.2-1.7-.8-1.9-.9s-.4-.2-.6.2-.7.9-.9 1-.3.2-.6 0c-.3-.2-1.2-.4-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.4.3-.5.1-.2 0-.4 0-.6-.1-.2-.6-1.5-.8-2.1-.2-.5-.4-.4-.6-.4h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.6 1.2 3 1.4 3.2c.2.2 2.3 3.5 5.6 4.9.8.3 1.5.5 2 .6.8.2 1.5.2 2.1.1.6-.1 1.7-.7 1.9-1.3s.2-1.2.2-1.3c-.1-.2-.3-.3-.6-.5z"/>
              </svg>
            </a>
            <!-- GitHub -->
            <a href="#" aria-label="GitHub" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.36 7.86 10.87.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.71.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.53.12-3.19 0 0 .98-.31 3.21 1.17a11.12 11.12 0 0 1 5.85 0c2.22-1.48 3.2-1.17 3.2-1.17.64 1.66.25 2.89.13 3.19.75.8 1.2 1.82 1.2 3.07 0 4.42-2.68 5.38-5.24 5.66.41.36.77 1.06.77 2.15v3.19c0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </a>
            <!-- LinkedIn -->
            <a href="#" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.51H9.48V9.75h3.41v1.46h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.19 2.33 4.19 5.36v5.73zM6.34 8.3a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM8.12 20.45H4.57V9.75h3.55v10.7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- بخش پایینی -->
      <div class="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {{ new Date().getFullYear() }} - تمام حقوق محفوظ است. طراحی و توسعه: مصطفی عسگری</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:underline">تابستان ۱۴۰۴</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// نیازی به اسکریپت خاصی نیست
</script>

<style scoped>
footer {
  background: linear-gradient(180deg, rgb(0 0 0), rgb(24 24 24 / 92%));
}

/* انیمیشن شفق */
@keyframes auroraDrift {
  0%   { transform: translate(-20%, -30%) scale(1) rotate(0deg);   opacity: 0.85; }
  50%  { transform: translate(-15%, -32%) scale(1.05) rotate(3deg); opacity: 0.95; }
  100% { transform: translate(-22%, -31%) scale(1) rotate(-2deg);  opacity: 0.85; }
}
.animate-aurora {
  animation: auroraDrift 14s ease-in-out infinite;
}

/* ستاره‌های چشمک‌زن */
.stars {
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 50%, transparent 51%),
    radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.7) 50%, transparent 51%),
    radial-gradient(1.2px 1.2px at 40% 80%, rgba(255,255,255,0.6) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 85% 60%, rgba(255,255,255,0.6) 50%, transparent 51%),
    radial-gradient(0.9px 0.9px at 15% 70%, rgba(255,255,255,0.6) 50%, transparent 51%),
    radial-gradient(1px 1px at 55% 50%, rgba(255,255,255,0.7) 50%, transparent 51%),
    radial-gradient(1px 1px at 30% 10%, rgba(255,255,255,0.65) 50%, transparent 51%),
    radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.6) 50%, transparent 51%);
  background-repeat: no-repeat;
  opacity: 0.6;
  animation: twinkle 6s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 0.3; }
}

/* بهینه‌سازی ریسپانسیو */
@media (max-width: 768px) {
  .stars { opacity: 0.45; }
}
</style>
