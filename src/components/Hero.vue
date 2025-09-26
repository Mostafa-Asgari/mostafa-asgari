<template>
    <section class="relative bg-[#0c0f16] text-white py-20">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <!-- --- سمت چپ: متن‌ها --- -->
        <div
          v-motion="{
            initial: { opacity: 0, x: -50 },
            enter: { opacity: 1, x: 0, transition: { duration: 800 } }
          }"
          class="space-y-6"
        >
          <p class="text-orange-500 font-semibold tracking-wide">
            Work with IT-Soft
          </p>
          <h1 class="text-4xl md:text-5xl font-bold leading-snug">
            Create the Impactful Digital
            <span class="text-orange-500">Services</span>
          </h1>
          <p class="text-gray-300 max-w-lg">
            Quickly parallel task bleeding-edge mindshare vis-a-vis best-of-breed
            testing procedures. Globally myocardi­nate world
          </p>
  
          <div class="flex items-center gap-6">
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
            >
              Work Together
            </button>
            <button
              class="flex items-center gap-2 text-white hover:text-orange-400 transition"
            >
              <span
                class="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full"
              >
                ▶
              </span>
              Watch Video
            </button>
          </div>
        </div>
  
        <!-- --- سمت راست: عکس --- -->
        <div
          v-motion="{
            initial: { opacity: 0, x: 50 },
            enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 300 } }
          }"
          class="relative"
        >
          <div class="relative z-10 rounded-lg overflow-hidden">
            <img
              src="/images/telegram.png"
              alt="Hero"
              class="rounded-lg shadow-lg"
            />
          </div>
          <div
            class="absolute -top-5 -right-5 w-full h-full border-2 border-orange-500 rounded-lg z-0"
          ></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  