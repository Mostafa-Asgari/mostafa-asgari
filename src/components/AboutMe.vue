<template>
  <section
    id="about"
    class="relative py-20 px-6 md:px-20 overflow-hidden"
    v-stagger
  >
    <!-- پس‌زمینه -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]"></div>
    <div class="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-20"></div>
    <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-20"></div>

    <!-- ستاره‌ها -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <span
        v-for="n in 40"
        :key="n"
        class="star"
        :style="randomStarStyle()"
      ></span>
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
      <div class="text-gray-200 space-y-6">
        <h2 class="fade-up text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#8cffdf]">
          درباره من
        </h2>

        <p class="fade-up text-gray-300 leading-relaxed">
          من یک توسعه‌دهنده فرانت‌اند هستم که به طراحی زیبا و کدنویسی تمیز علاقه دارم.
          عاشق یادگیری تکنولوژی‌های جدیدم و همیشه دنبال چالش‌های تازه هستم.
        </p>

        <ul class="space-y-3">
          <li class="fade-up">
            <strong class="text-yellow-400">نام:</strong> مصطفی عسگری
          </li>
          <li class="fade-up">
            <strong class="text-yellow-400">تاریخ تولد:</strong> ۲۰ / ۲ / ۱۳۶۹
          </li>
          <li class="fade-up">
            <strong class="text-yellow-400">آدرس:</strong> کرج - شاهین ویلا
          </li>
          <li class="fade-up">
            <strong class="text-yellow-400">ایمیل:</strong> asgarii1369@gmail.com
          </li>
          <li class="fade-up">
            <strong class="text-yellow-400">شماره تماس:</strong> ۶۳۰۸۱۰۵-۰۹۰۲
          </li>
        </ul>

        <!-- علایق -->
        <div class="flex flex-wrap gap-4">
          <div
            v-for="(item, index) in interests"
            :key="index"
            class="fade-up flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </div>
        </div>
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

const randomStarStyle = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const size = Math.random() * 3 + 1;
  const delay = Math.random() * 5;
  return `
    top: ${top}%;
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation-delay: ${delay}s;
  `;
};
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
                  child.style.transitionDelay = `${i * 200}ms`;
                  child.classList.add("animate-fadeInUp");
                  child.classList.remove("opacity-0", "translate-y-10");
                } else {
                  child.classList.remove("animate-fadeInUp");
                  child.classList.add("opacity-0", "translate-y-10");
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

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle 3s infinite ease-in-out;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}
</style>
