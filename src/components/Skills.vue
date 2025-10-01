<template>
  <section id="skills" class="relative py-20 text-white overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]"></div>

    <!-- Stars -->
    <div class="absolute inset-0 pointer-events-none">
      <span class="star" style="top:10%;left:15%;width:3px;height:3px;"></span>
      <span class="star" style="top:10%;left:20%;width:4px;height:4px;"></span>
      <span class="star" style="top:25%;left:40%;width:2px;height:2px;"></span>
      <span class="star" style="top:50%;left:70%;width:4px;height:4px;"></span>
      <span class="star" style="top:80%;left:20%;width:2px;height:2px;"></span>
      <span class="star" style="top:15%;left:80%;width:2px;height:2px;"></span>
      <span class="star" style="top:35%;left:60%;width:3px;height:3px;"></span>
      <span class="star" style="top:55%;left:10%;width:4px;height:4px;"></span>
      <span class="star" style="top:70%;left:90%;width:2px;height:2px;"></span>
      <span class="star" style="top:45%;left:30%;width:3px;height:3px;"></span>
      <span class="star" style="top:85%;left:75%;width:2px;height:2px;"></span>
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 text-[#8cffdf]">مهارت های من</h2>
      <p class="text-center text-gray-200 mb-12">مهارت ها و تکنولوژی های من را این قسمت میتوانید ببینید</p>
      <!-- فاصله ستون‌ها کم شده -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        <div
          v-for="(s, i) in skills"
          :key="i"
          class="flex flex-col items-center bg-white/5 rounded-2xl p-6 w-full max-w-[240px] backdrop-blur-sm"
        >
          <svg class="w-28 h-28" viewBox="0 0 36 36" aria-hidden="true">
            <!-- background ring -->
            <path
              class="text-white/15"
              stroke="currentColor"
              stroke-width="3"
              fill="none"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- percentage ring -->
            <path
              class="skill-circle text-[#f4aa1e]"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-dasharray="100"
              stroke-dashoffset="100"
              :data-percent="s.percent"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- percentage text -->
            <text
              x="18"
              y="20.5"
              text-anchor="middle"
              class="fill-white text-[6px] font-bold percent-text"
            >
              {{ s.percent }}%
            </text>
          </svg>

          <p class="mt-3 text-base font-semibold text-center leading-6 percent-text">{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const skills = [
  { label: 'WordPress & Elementor', percent: 98 },
  { label: 'HTML & CSS', percent: 98 },
  { label: 'Plugins', percent: 95 },
  { label: 'WebPages Speed', percent: 87 },
  { label: 'JavaScript', percent: 87 },
  { label: 'Vue js', percent: 85 },
  { label: 'Tailwind', percent: 93 },
  { label: 'PHP', percent: 80 },
  { label: 'Photoshop', percent: 90 },
  { label: 'UI/UX Design', percent: 78 },
]

onMounted(() => {
  const circles = document.querySelectorAll('.skill-circle')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target
      const percent = Number(el.getAttribute('data-percent') || '0')
      const offset = 100 - Math.max(0, Math.min(100, percent))

      if (entry.isIntersecting) {
        el.style.transition = 'stroke-dashoffset 0.6s ease-out'
        el.style.strokeDashoffset = String(offset)
      } else {
        el.style.transition = 'none'
        el.style.strokeDashoffset = '100'
      }
    })
  }, { threshold: 0.3 })

  circles.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  opacity: .9;
}

.skill-circle {
  will-change: stroke-dashoffset;
}

/* golden shadow for percentage text */
.percent-text {
  text-shadow: 0 0 4px #f4aa1e, 0 0 8px #f4aa1e;
}
</style>
