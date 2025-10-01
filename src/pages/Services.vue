<template>
  <section id="services" class="relative py-20 px-6 md:px-12 overflow-hidden">
    <!-- پس‌زمینه گرادینت روشن با هاله بنفش -->
    <!-- پس‌زمینه گرادینت روشن -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-100 via-cyan-100 to-indigo-100"></div>
    <div class="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-300/40 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
    <div class="absolute inset-0">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-cyan-400/40 blur-3xl rounded-full animate-aurora"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- هدر -->
      <div class="text-center mb-14">
        <div class="mx-auto mb-4 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800">خدمات من</h2>
        <p class="mt-3 text-gray-700 max-w-3xl mx-auto">
          از ایده تا اجرا همراه شما در طراحی سایت‌های وردپرسی و فروشگاهی، گرافیک اختصاصی و خلاق، توسعه تبلیغات هدفمند و بهبود عملکرد محصولات شما.
        </p>
      </div>

      <!-- محتوای دو ستونه -->
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <!-- ستون متن -->
        <div class="space-y-8">
          <!-- کارت 1 -->
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <!-- آیکن توسعه وب -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 4h18v16H3z"/>
                  <path d="M8 4v16M16 4v16"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">طراحی وب سایت های ریسپانسیو و جذاب</h3>
                <ul class="text-gray-600 list-disc list-inside space-y-1 text-sm">
                  <li>توسعه سایت با وردپرس، المنتور و ووکامرس</li>
                  <li>توسعه قالب و افزونه اختصاصی وردپرس</li>
                  <li>توسعه با فریم‌ورک‌های Vue و Tailwind CSS</li>
                  <li>توسعه با زبان‌های PHP، JS</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- کارت 2 -->
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center text-white">
                <!-- آیکن SEO -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">سئو و بهینه‌سازی سرعت</h3>
                <ul class="text-gray-600 list-disc list-inside space-y-1 text-sm">
                  <li>افزایش سرعت سایت با ابزارهای حرفه‌ای - Google Page Speed - GTMetrix</li>
                  <li>بهینه‌سازی تصاویر، فونت‌ها و فایل‌ها</li>
                  <li>بهینه‌سازی ساختار صفحات برای موتورهای جستجو</li>
                  <li>بررسی و رفع خطاهای سرچ کنسول گوگل</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- کارت 3 -->
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white">
                <!-- آیکن UI/UX -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">UI/UX</h3>
                <ul class="text-gray-600 list-disc list-inside space-y-1 text-sm">
                  <li>طراحی بر اساس رابط کاربری اختصاصی و خلاقانه</li>
                  <li>طراحی بر اساس تجربه کاربری صحیح با هدف رضایت کاربران</li>
                  <li>طراحی صفحات واکنش گرا برای موبایل و تبلت</li>
                  <li>طراحی صفحات فرود و کمپین‌های تبلیغاتی</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- ستون تصویر -->
        <div class="flex justify-center lg:justify-end">
          <img src="/images/web-design-tips.webp" alt="خدمات من" class="max-w-full lg:max-w-md rounded-2xl shadow-2xl border border-white/40">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// اینجا نیازی به اسکریپت خاصی نیست مگر بخوایم انیمیشن اسکرول یا افکت اضافه کنیم
</script>

<style scoped>
/* می‌توانیم افکت‌های ظریف اضافه کنیم */
</style>
