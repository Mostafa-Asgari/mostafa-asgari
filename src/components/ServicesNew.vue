<!-- ServicesAurora.vue -->
<template>
    <section class="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#0b1220] to-[#0a0f1a] text-slate-100">
      <!-- aurora layers -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="aurora aurora-1"></div>
        <div class="aurora aurora-2"></div>
        <div class="aurora aurora-3"></div>
      </div>
  
      <!-- starfield + meteors -->
      <div aria-hidden="true" class="stars"></div>
      <div aria-hidden="true" class="meteor meteor-1"></div>
      <div aria-hidden="true" class="meteor meteor-2"></div>
      <div aria-hidden="true" class="meteor meteor-3"></div>
      <div aria-hidden="true" class="meteor meteor-4"></div>
  
      <!-- heading -->
      <div class="relative z-10 max-w-5xl mx-auto text-center mb-12 sm:mb-16">
        <h2
          ref="animated"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight opacity-1 translate-y-6 scale-95 transition-all duration-700 ease-out"
        >
          خدمات من
        </h2>
        <p
          ref="animated"
          class="mt-4 sm:mt-5 text-slate-300 opacity-1 translate-y-6 scale-95 transition-all duration-700 ease-out"
        >
          ترکیبی از طراحی عاطفی، توسعه مقیاس‌پذیر و راهبرد رشد — دقیق، تمیز و کاربرمحور.
        </p>
      </div>
  
      <!-- cards -->
      <div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <!-- card -->
        <div
          v-for="(s, i) in services"
          :key="s.title"
          ref="animated"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-7 lg:p-8 opacity-0 translate-y-6 scale-95 transition-all duration-700 ease-out"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <!-- subtle radial glow -->
          <div class="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
               :style="{ background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), ${s.glow} 0, transparent 60%)` }">
          </div>
  
          <!-- icon -->
          <div class="relative z-10 mb-4 sm:mb-6">
            <div
              class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg"
              :style="{
                background: `linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]})`,
                boxShadow: `0 10px 30px -10px ${s.shadow}`
              }"
            >
              <!-- inline SVGs -->
              <svg v-if="s.icon==='uiux'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   class="w-8 h-8 text-white"><path fill="currentColor" d="M4 5h16v10H4z" opacity=".2"/><path fill="currentColor" d="M20 3H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 8H6l-2 2V5h16Z"/><circle cx="8" cy="8" r="1.25" fill="currentColor"/><circle cx="11" cy="8" r="1.25" fill="currentColor"/><circle cx="14" cy="8" r="1.25" fill="currentColor"/></svg>
  
              <svg v-else-if="s.icon==='dev'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   class="w-8 h-8 text-white"><path fill="currentColor" d="M4 5h16v14H4z" opacity=".2"/><path fill="currentColor" d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H4V5h16ZM8.5 15.5L6 13l2.5-2.5l1.5 1.5L9 13l1 1Zm7 0l2.5-2.5L15.5 10l-1.5 1.5L16 13l-2 2Zm-6.2 2.2l2.4-11l1.96.43l-2.4 11Z"/></svg>
  
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   class="w-8 h-8 text-white"><path fill="currentColor" d="M4 5h10v6H4z" opacity=".2"/><path fill="currentColor" d="M20 13h-2V5a2 2 0 0 0-2-2H4C2.9 3 2 3.9 2 5v6c0 1.1.9 2 2 2h6v2H8v2h2v2h2v-2h2v-2h-2v-2h6c1.1 0 2-.9 2-2Zm-8 0H4V5h12v8Z"/><path fill="currentColor" d="M6 7h8v2H6z" opacity=".6"/></svg>
            </div>
          </div>
  
          <!-- title -->
          <h3 class="relative z-10 text-xl sm:text-2xl font-bold mb-2" :style="{ color: s.accent }">
            {{ s.title }}
          </h3>
  
          <!-- desc -->
          <p class="relative z-10 text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            {{ s.desc }}
          </p>
  
          <!-- highlights -->
          <ul class="relative z-10 space-y-2 text-slate-300 text-sm sm:text-[0.95rem]">
            <li v-for="(pt, idx) in s.points" :key="idx" class="flex items-start gap-2">
              <span class="mt-1 inline-block w-2 h-2 rounded-full" :style="{ background: s.accent }"></span>
              <span>{{ pt }}</span>
            </li>
          </ul>
  
          <!-- hover cursor spotlight -->
          <div
            class="absolute inset-0"
            @mousemove="setMouse($event)"
            @mouseleave="clearMouse"
          ></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const animated = ref([])
  
  const services = [
    {
      icon: 'uiux',
      title: 'طراحی UI/UX',
      desc: 'طراحی رابط‌های زیبا و شهودی با جریان‌های کار ساده و حس برند منحصربه‌فرد.',
      points: ['وایرفریم تا های‌فیدلیتی', 'طراحی سیستم و کامپوننت‌های مقیاس‌پذیر', 'پروتوتایپ تعاملی و تست کاربری'],
      grad: ['#f59e0b', '#ef4444'],
      glow: 'rgba(245,158,11,0.25)',
      shadow: 'rgba(239,68,68,0.45)',
      accent: '#fbbf24'
    },
    {
      icon: 'dev',
      title: 'توسعه وب',
      desc: 'پیاده‌سازی سریع و تمیز با Vue/Tailwind، بهینه و ریسپانسیو با معماری ماژولار.',
      points: ['SPA/SSR با عملکرد بالا', 'انیمیشن‌های نرم و دسترس‌پذیر', 'اتصال API و استیت مدیریت‌شده'],
      grad: ['#06b6d4', '#3b82f6'],
      glow: 'rgba(59,130,246,0.28)',
      shadow: 'rgba(6,182,212,0.45)',
      accent: '#38bdf8'
    },
    {
      icon: 'strategy',
      title: 'استراتژی دیجیتال',
      desc: 'هم‌تراز کردن محصول با اهداف کسب‌وکار از طریق تحلیل، اولویت‌بندی و نقشه راه رشد.',
      points: ['پایش KPI و بهینه‌سازی تجربه', 'A/B تست و بهبود نرخ تبدیل', 'نقشه راه تحویل تکرارشونده'],
      grad: ['#22c55e', '#a855f7'],
      glow: 'rgba(168,85,247,0.28)',
      shadow: 'rgba(34,197,94,0.45)',
      accent: '#a78bfa'
    }
  ]
  
  // hover spotlight vector per card
  function setMouse(e) {
    const el = e.currentTarget.parentElement
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }
  function clearMouse(e) {
    const el = e.currentTarget.parentElement
    el.style.removeProperty('--mx')
    el.style.removeProperty('--my')
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6', 'scale-95')
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
  
    animated.value.forEach((el, i) => {
      if (!el) return
      el.style.transitionDelay = `${i * 120}ms`
      observer.observe(el)
    })
  })
  </script>
  
  <style scoped>
  /* Aurora layers */
  .aurora {
    position: absolute;
    filter: blur(90px);
    opacity: 0.5;
    mix-blend-mode: screen;
  }
  .aurora-1 {
    width: 55vw; height: 55vw;
    top: -20vw; right: -25vw;
    background: radial-gradient(circle at 30% 30%, rgba(56,189,248,0.45), transparent 60%),
                radial-gradient(circle at 70% 70%, rgba(59,130,246,0.35), transparent 60%);
    animation: aFloat1 14s ease-in-out infinite;
  }
  .aurora-2 {
    width: 50vw; height: 50vw;
    bottom: -18vw; left: -20vw;
    background: radial-gradient(circle at 60% 40%, rgba(34,197,94,0.35), transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(168,85,247,0.35), transparent 60%);
    animation: aFloat2 18s ease-in-out infinite;
  }
  .aurora-3 {
    width: 35vw; height: 35vw;
    top: 30%; left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle at 50% 50%, rgba(236,72,153,0.28), transparent 60%),
                radial-gradient(circle at 40% 60%, rgba(20,184,166,0.28), transparent 60%);
    animation: aFloat3 16s ease-in-out infinite;
  }
  
  @keyframes aFloat1 {
    0%,100% { transform: translate(0,0) scale(1); opacity: .45; }
    50% { transform: translate(-2vw, 1.5vw) scale(1.06); opacity: .55; }
  }
  @keyframes aFloat2 {
    0%,100% { transform: translate(0,0) scale(1); opacity: .45; }
    50% { transform: translate(1.5vw, -1.5vw) scale(1.05); opacity: .55; }
  }
  @keyframes aFloat3 {
    0%,100% { transform: translate(-50%,0) scale(1); opacity: .35; }
    50% { transform: translate(calc(-50% - 1vw), 1vw) scale(1.07); opacity: .5; }
  }
  
  /* Starfield */
  .stars {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.7) 50%, transparent 51%),
      radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,.6) 50%, transparent 51%),
      radial-gradient(1.2px 1.2px at 40% 80%, rgba(255,255,255,.6) 50%, transparent 51%),
      radial-gradient(0.8px 0.8px at 85% 60%, rgba(255,255,255,.6) 50%, transparent 51%),
      radial-gradient(0.9px 0.9px at 15% 70%, rgba(255,255,255,.6) 50%, transparent 51%);
    background-repeat: no-repeat;
    animation: twinkle 6s ease-in-out infinite;
    opacity: .7;
  }
  @keyframes twinkle {
    0%,100% { opacity: .7; }
    50% { opacity: .45; }
  }
  
  /* Shooting stars (meteors) */
  .meteor {
    position: absolute; width: 2px; height: 2px; background: linear-gradient(90deg, white, rgba(255,255,255,0));
    filter: drop-shadow(0 0 6px rgba(255,255,255,.8));
    border-radius: 9999px;
    transform: rotate(315deg);
    animation: shoot 8s linear infinite;
    opacity: .8;
  }
  .meteor::after {
    content: ''; position: absolute; left: -140px; top: 0; height: 2px; width: 140px;
    background: linear-gradient(90deg, rgba(255,255,255,.9), rgba(255,255,255,0));
    border-radius: 9999px;
  }
  .meteor-1 { top: 10%; left: 80%; animation-delay: 1s; }
  .meteor-2 { top: 35%; left: 65%; animation-delay: 3.2s; }
  .meteor-3 { top: 60%; left: 85%; animation-delay: 5.8s; }
  .meteor-4 { top: 25%; left: 40%; animation-delay: 7.1s; }
  
  @keyframes shoot {
    0% { transform: translate3d(0,0,0) rotate(315deg); opacity: 0; }
    5% { opacity: .9; }
    50% { transform: translate3d(-50vw, 50vh, 0) rotate(315deg); opacity: .6; }
    100% { transform: translate3d(-60vw, 60vh, 0) rotate(315deg); opacity: 0; }
  }
  
  /* Responsive tune-ups */
  @media (max-width: 768px) {
    .aurora { filter: blur(70px); }
    .aurora-1 { width: 80vw; height: 80vw; top: -35vw; right: -35vw; }
    .aurora-2 { width: 75vw; height: 75vw; bottom: -35vw; left: -35vw; }
    .aurora-3 { width: 55vw; height: 55vw; top: 38%; }
    .meteor { opacity: .6; }
  }
  </style>
  