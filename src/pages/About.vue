<template>
  <section id="about" class="relative py-20 px-6 md:px-20 overflow-hidden" v-stagger>
    <!-- پس‌زمینه روشن -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-100 via-cyan-100 to-indigo-100"></div>
    <div class="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-300/40 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
    <div class="absolute inset-0">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-cyan-400/40 blur-3xl rounded-full animate-aurora"></div>
    </div>

    <!-- محتوای اصلی -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- تصویر -->
      <div class="flex justify-center">
        <img
          :src="aboutImg"
          alt="مصطفی عسگری"
          class="fade-up rounded-2xl shadow-2xl w-80 h-96 object-cover"
        />
      </div>

      <!-- متن -->
      <div class="space-y-6 text-gray-800">
        <h2 class="fade-up text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
          درباره من
        </h2>

        <p class="fade-up leading-relaxed">
          من یک توسعه‌دهنده فرانت‌اند هستم که به طراحی زیبا و کدنویسی تمیز علاقه دارم.
          عاشق یادگیری تکنولوژی‌های جدیدم و همیشه دنبال چالش‌های تازه هستم.
        </p>

        <ul class="space-y-3">
          <li class="fade-up"><strong class="text-purple-700">نام:</strong> مصطفی عسگری</li>
          <li class="fade-up"><strong class="text-purple-700">تاریخ تولد:</strong> ۲۰ / ۲ / ۱۳۶۹</li>
          <li class="fade-up"><strong class="text-purple-700">آدرس:</strong> کرج - شاهین ویلا</li>
          <li class="fade-up"><strong class="text-purple-700">ایمیل:</strong> asgarii1369@gmail.com</li>
          <li class="fade-up"><strong class="text-purple-700">شماره تماس:</strong> ۶۳۰۸۱۰۵-۰۹۰۲</li>
        </ul>

        <!-- علایق -->
        <div class="flex flex-wrap gap-4">
          <div
            v-for="(item, index) in interests"
            :key="index"
            class="fade-up flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full shadow-md"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول سابقه کاری -->
    <div class="relative z-10 mt-16">
      <h3 class="text-3xl font-bold text-center text-gray-800 mb-6">سوابق کاری</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
          <thead>
            <tr class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <th class="py-3 px-4 text-right">سال</th>
              <th class="py-3 px-4 text-right">سابقه</th>
              <th class="py-3 px-4 text-right">نام شرکت</th>
              <th class="py-3 px-4 text-right">سمت</th>
              <th class="py-3 px-4 text-right">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(job, index) in workHistory" :key="index" class="border-b border-gray-200 hover:bg-cyan-50 transition">
              <td class="py-3 px-4 text-[15px]">{{ job.year }}</td>
              <td class="py-3 px-4 text-[15px]">{{ job.history }}</td>
              <td class="py-3 px-4 text-[15px]">{{ job.company }}</td>
              <td class="py-3 px-4 text-[15px]">{{ job.role }}</td>
              <td class="py-3 px-4 text-[15px]">{{ job.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutImg = "/images/imageMM110.webp";
const interests = [
  { label: "طراحی سایت", icon: "🎨" },
  { label: "ورزش", icon: "⚽" },
  { label: "یادگیری", icon: "📚" },
  { label: "فیلم", icon: "🎬" },
  { label: "سفر", icon: "✈️" },
  { label: "آموزش", icon: "📚" },
];

const workHistory = [
  { year: "1402-1404", history: " 2 سال و نیم", role: "Wordpress Developer", company: "شرکت وب هما", description: "پیاده‌سازی وب‌سایت‌های شرکتی و فروشگاهی با وردپرس و المنتور و ... بهبود سرعت سایت و کار با پلاگین ها" },
  { year: "1400-1402", history: "2 سال", role: "Front-end Developer", company: "ثمین گسترش", description: "طراحی وب‌سایت‌های مدرن با HTML, CSS, Tailwind, Vue.js" },
  { year: "1399-1400", history: "1 سال", role: "Web Developer", company: "شرکت برنامه نویسی", description: "پیاده‌سازی وب سایت ها" },
  { year: "1399-...", history: "شش ماه", role: "UX", company: "شرکت طراحی", description: "امور گرافیکی با فتوشاپ و ..." }
];
</script>

<script>
export default {
  directives: {
    stagger: {
      mounted(el) {
        const children = el.querySelectorAll(".fade-up");
        children.forEach((child, i) => {
          child.classList.add("opacity-0", "translate-y-10");
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  child.style.transitionDelay = `${i * 150}ms`;
                  child.classList.add("animate-fadeInUp");
                  child.classList.remove("opacity-0", "translate-y-10");
                }
              });
            },
            { threshold: 0.2 }
          );
          observer.observe(child);
        });
      },
    },
  },
};
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }

@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
@keyframes float-slow { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,25px)} }
@keyframes aurora { 0%,100%{transform:translate(-50%,0) scale(1)} 50%{transform:translate(-50%,-20px) scale(1.05)} }

.animate-float { animation: float 8s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
.animate-aurora { animation: aurora 10s ease-in-out infinite; }
</style>
