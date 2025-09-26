<template>
    <div class="fixed bottom-6 right-6 z-50 group">
      <!-- دکمه تلفن -->
      <a
        href="tel:09026308105"
        class="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:outline-none animate-pulse-glow relative"
        aria-label="تماس تلفنی"
      >
        <!-- آیکن تلفن -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.554a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.554 1.518a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/>
        </svg>
      </a>
  
      <!-- تولتیپ شماره تلفن -->
      <div
        class="absolute bottom-14 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div class="px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          0902-6308105
        </div>
        <!-- فلش کوچک زیر تولتیپ -->
        <div class="w-3 h-3 bg-gray-800 rotate-45 mx-auto -mt-1"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  // هیچ اسکریپتی لازم نیست، همه چیز با CSS و HTML کنترل میشه
  </script>
  
  <style scoped>
  /* افکت Pulse Glow */
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.6); /* بنفش */
    }
    50% {
      box-shadow: 0 0 20px 8px rgba(147, 51, 234, 0.3);
    }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2.5s infinite ease-in-out;
  }
  </style>
  