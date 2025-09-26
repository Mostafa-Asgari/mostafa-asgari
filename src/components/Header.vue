<template>
  <header 
    :class="['navbar', { 'navbar-hidden': isHidden }]"
  >
    <!-- Logo -->
    <router-link to="/" class="flex items-center gap-2 logo-link">
      <img src="/RafighWeb-Main-Logo.webp" alt="main logo" class="w-17 h-7 rounded-full" />
    </router-link>

    <!-- Navigation -->
    <nav class="hidden md:flex gap-6">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.link"
        class="nav-link"
      >
        {{ item.name }}
      </router-link>
    </nav>

    <!-- Right side: Search + Phone -->
    <div class="flex items-center gap-6">
      <!-- Phone -->
      <div class="flex items-center gap-2 text-gray-800 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05l-1.7 1.7a16 16 0 006.6 6.6l1.7-1.7a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"/>
        </svg>
        <span>0902-6308105</span>
      </div>

      <!-- Search -->
      <div class="search-container">
        <input
          type="text"
          placeholder="...جستجو"
          class="search-input"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { name: "خانه", link: "/" },
  { name: "درباره من", link: "/about" },
  { name: "خدمات", link: "/services" },
  { name: "نمونه‌کارها", link: "/portfolio" },
  { name: "نوشته‌ها", link: "/blog" },
  { name: "تماس با من", link: "/contact" },
]

const isHidden = ref(false)
let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  if (currentScroll > lastScroll && currentScroll > 80) {
    isHidden.value = true // اسکرول به پایین → مخفی
  } else {
    isHidden.value = false // اسکرول به بالا → ظاهر
  }
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navbar Glassmorphism + Gradient Halo */
.navbar {
  @apply fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 transition-transform duration-500 z-50;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
}
.navbar::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,0,255,0.25), rgba(138,43,226,0.25), rgba(0,255,255,0.25));
  opacity: 0.7;
  z-index: -1;
  border-radius: inherit;
}
.navbar-hidden {
  transform: translateY(-100%);
}

/* Search */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  transition: width 0.4s ease;
  width: 150px;
}
.search-container:focus-within {
  width: 220px;
}
.search-icon {
  position: absolute;
  left: 10px;
  width: 18px;
  height: 18px;
  color: #aaa;
  pointer-events: none;
}
.search-input {
  width: 100%;
  padding: 8px 32px 8px 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
  direction: rtl;
}
.search-input:focus {
  border-color: orange;
}

/* Links */
.nav-link {
  position: relative;
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: orange;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: orange;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
