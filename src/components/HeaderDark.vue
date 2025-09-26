<template>
  <!-- روت کانتینر (یک ریشه) -->
  <div>
    <!-- هدر (همان ساختار اصلی شما) -->
    <header :class="['navbar-dark', { 'navbar-hidden': isHidden }]">
      <!-- دسکتاپ و تبلت -->
      <div class="hidden md:flex w-full items-center justify-between">
        <!-- لوگو -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="/RafighWeb-Main-Logo.webp" alt="logo" class="logo-img" />
        </router-link>

        <!-- منو -->
        <nav class="flex gap-6">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.link"
            class="nav-link-dark"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- راست: تلفن + جستجو -->
        <div class="flex items-center gap-6">
          <!-- تلفن در دسکتاپ: همیشه نمایش -->
          <div class="hidden lg:flex items-center gap-2 text-white font-semibold">
            <!-- svg تلفن -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.5 9a16 16 0 006.6 6.6l1.67-1.67a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"/>
            </svg>
            <span>0902-6308105</span>
          </div>

          <!-- تلفن در تبلت: وقتی فیلد جستجو باز است مخفی -->
          <div
            class="hidden md:flex lg:hidden items-center gap-2 text-white font-semibold"
            v-show="!tabletSearchOpen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.5 9a16 16 0 006.6 6.6l1.67-1.67a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"/>
            </svg>
            <span>0902-6308105</span>
          </div>

          <!-- جستجو دسکتاپ -->
          <div class="relative hidden lg:flex items-center" ref="desktopSearchRef">
            <div class="desktop-search" :class="{ open: desktopSearchOpen }">
              <button @click="toggleDesktopSearch" aria-label="جستجو" class="icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <input
                v-show="desktopSearchOpen"
                ref="desktopInput"
                v-model="desktopSearchQuery"
                type="text"
                placeholder="...جستجو"
                class="search-input-dark desktop-input"
                @keydown.esc="closeDesktopSearch"
              />
              <button
                v-show="desktopSearchOpen"
                class="clear-btn"
                @click="desktopSearchQuery=''; closeDesktopSearch()"
                aria-label="پاک کردن و بستن"
              >✕</button>
            </div>
          </div>

          <!-- جستجو تبلت -->
          <div class="relative hidden md:block lg:hidden" ref="tabletSearchRef">
            <div class="desktop-search" :class="{ open: tabletSearchOpen }">
              <button @click="toggleTabletSearch" aria-label="جستجو" class="icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <input
                v-show="tabletSearchOpen"
                ref="tabletInput"
                v-model="tabletSearchQuery"
                type="text"
                placeholder="...جستجو"
                class="search-input-dark desktop-input"
                @keydown.esc="tabletSearchOpen=false"
              />
              <button
                v-show="tabletSearchOpen"
                class="clear-btn"
                @click="tabletSearchQuery=''; tabletSearchOpen=false"
                aria-label="پاک کردن و بستن"
              >✕</button>
            </div>
          </div>
        </div>
      </div>

      <!-- موبایل -->
      <div class="flex md:hidden w-full items-center justify-between">
        <!-- همبرگر -->
        <button @click="openMobileMenu" aria-label="باز کردن منو" class="p-1 rounded hover:bg-white/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- لوگو -->
        <router-link to="/" class="flex items-center">
          <img src="/RafighWeb-Main-Logo.webp" alt="logo" class="w-16 h-7 rounded-full" />
        </router-link>

        <!-- تلفن -->
        <div class="flex items-center gap-2 text-white font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.5 9a16 16 0 006.6 6.6l1.67-1.67a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"/>
          </svg>
          <span class="text-sm">0902-6308105</span>
        </div>
      </div>
    </header>

    <!-- ---------- Overlay کامل صفحه (مستقل از هدر) ---------- -->
    <transition name="fade">
      <div
        v-if="openMenu"
        class="fixed inset-0 bg-black/60 z-[60]"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- ---------- منوی موبایل (همان ساختار mobile-menu خودت) ---------- -->
    <aside class="mobile-menu" :class="{ open: openMenu }" @click.stop>
      <div class="flex items-center justify-between">
        <span class="text-white/70 text-sm">منو</span>
        <button class="close-btn" @click="closeMobileMenu" aria-label="بستن منو">✕</button>
      </div>

      <nav class="flex flex-col gap-6 mt-8">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.link"
          class="nav-link-dark text-lg"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <div class="mt-auto pt-6">
        <input type="text" placeholder="جستجو..." class="search-input-dark w-full" />
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const menuItems = [
  { name: 'خانه', link: '/' },
  { name: 'درباره من/سوابق', link: '/about' },
  { name: 'خدمات', link: '/services' },
  { name: 'نمونه‌کارها', link: '/portfolio' },
  { name: 'نوشته‌ها', link: '/blog' },
  { name: 'تماس با من', link: '/contact' },
]

const isHidden = ref(false)
let lastScroll = 0

// وضعیت منوی موبایل
const openMenu = ref(false)

// توابع باز/بستن منو
const openMobileMenu = () => { openMenu.value = true }
const closeMobileMenu = () => { openMenu.value = false }

// وضعیت جستجو و متن‌ها (بدون تغییر)
const desktopSearchOpen = ref(false)
const tabletSearchOpen = ref(false)
const desktopSearchQuery = ref('')
const tabletSearchQuery = ref('')

// ارجاعات Inputها
const desktopInput = ref(null)
const tabletInput = ref(null)
const desktopSearchRef = ref(null)
const tabletSearchRef = ref(null)

// تاگل‌ها
const toggleDesktopSearch = async () => {
  desktopSearchOpen.value = !desktopSearchOpen.value
  if (desktopSearchOpen.value) {
    await nextTick()
    desktopInput.value?.focus()
  }
}
const closeDesktopSearch = () => { desktopSearchOpen.value = false }
const toggleTabletSearch = async () => {
  tabletSearchOpen.value = !tabletSearchOpen.value
  if (tabletSearchOpen.value) {
    await nextTick()
    tabletInput.value?.focus()
  }
}

// بستن با کلیک بیرون از input ها (برای search)
const onClickOutside = (e) => {
  if (desktopSearchRef.value && !desktopSearchRef.value.contains(e.target)) {
    desktopSearchOpen.value = false
  }
  if (tabletSearchRef.value && !tabletSearchRef.value.contains(e.target)) {
    tabletSearchOpen.value = false
  }
}

// اسکرول: مخفی/نمایش هدر (بدون تغییر)
const onScroll = () => {
  const y = window.scrollY
  isHidden.value = y > lastScroll && y > 80
  lastScroll = y
}

// تغییر اندازه: هماهنگی وضعیت‌ها (بدون تغییر)
const onResize = () => {
  const w = window.innerWidth
  if (w < 1024) desktopSearchOpen.value = false
  if (w >= 1024 || w < 768) tabletSearchOpen.value = false
}

// وقتی منو باز/بسته بشه اسکرول بدنه قفل/باز بشه
watch(openMenu, (val) => {
  if (val) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('click', onClickOutside)
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('click', onClickOutside)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* --- همان CSS اصلی شما (بدون تغییر) --- */
.navbar-dark {
  position: fixed; top: 0; left: 0; width: 100%;
  z-index: 50; padding: 0.75rem 1rem;
  transition: transform 0.5s ease;
  background: rgba(15, 15, 30, 0.7);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
@media (min-width: 768px) { .navbar-dark { padding: 1rem 1.5rem; } }
.navbar-dark::before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(circle at 30% 50%, rgba(0,255,200,0.22), transparent 70%),
    radial-gradient(circle at 70% 30%, rgba(255,0,255,0.18), transparent 70%);
  opacity: 0.85; z-index: -1;
}
.navbar-hidden { transform: translateY(-100%); }

.logo-img { width: 5rem; height: 2rem; border-radius: 9999px; }
@media (max-width: 1024px) { .logo-img { width: 4rem; height: 1.75rem; } }

.nav-link-dark {
  position: relative; text-decoration: none; color: #fff;
  transition: color 0.25s ease; font-size: 1rem;
}
.nav-link-dark:hover { color: #FFD700; }
.nav-link-dark::after {
  content: ''; position: absolute; bottom: -6px; left: 0;
  width: 0; height: 2px; background-color: #FFD700;
  transition: width 0.25s ease;
}
.nav-link-dark:hover::after { width: 100%; }
@media (max-width: 1024px) { .nav-link-dark { font-size: 0.95rem; } }

.desktop-search {
  display: flex; align-items: center;
  width: 40px; height: 36px;
  background: rgba(255,255,255,0.08);
  border: 2px solid #555; border-radius: 8px;
  transition: width 260ms cubic-bezier(.22,.61,.36,1), border-color 0.2s, background-color 0.2s;
  overflow: hidden;
}
.desktop-search.open {
  width: 220px; border-color: #555;
  background: rgba(255,255,255,0.1);
}
.desktop-search.open:focus-within { border-color: #FFD700; }

.icon-btn {
  width: 36px; height: 100%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; background: transparent;
}
.desktop-input {
  flex: 1 1 auto; min-width: 0;
  background: transparent; border: none; outline: none;
  color: #fff; padding: 0 8px; height: 100%; direction: rtl;
}

.clear-btn {
  width: 28px; height: 28px; border-radius: 6px;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff;
}
.search-input-dark {
  width: 100%;
  padding: 8px 32px 8px 12px;
  border-radius: 8px; outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  background: rgba(255,255,255,0.08); color: #fff; direction: rtl;
}

.fade-enter-active, .fade-leave-active { transition: opacity 200ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* منوی موبایل */
.mobile-menu {
  position: fixed; top: 0; right: -100%;
  width: 82%; max-width: 340px; height: 100vh;
  background: rgba(15, 15, 30, 0.97);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  z-index: 70; padding: 16px;
  display: flex; flex-direction: column;
  transition: right 0.7s cubic-bezier(.22,.61,.36,1);
  border-left: 1px solid rgba(255,255,255,0.08);
}
.mobile-menu.open { right: 0; }
.close-btn {
  width: 36px; height: 36px; border-radius: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff;
}
aside .search-input-dark:focus{
  border: 2px solid #FFD700 !important;
}
</style>
