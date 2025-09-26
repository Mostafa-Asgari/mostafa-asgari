<template>
  <section class="relative flex items-center justify-center bg-gray-900 px-4 py-16">
    <div class="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
      <div class="md:hidden">
        <div class="flex justify-center md:justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 1.5a9 9 0 00-9 9v4.5A4.5 4.5 0 007.5 19.5h1.5v-6H6v-3a6 6 0 1112 0v3h-3v6h1.5a4.5 4.5 0 004.5-4.5V10.5a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-white text-center mb-4">تماس با من</h3>
        <p class="text-lg text-gray-300 text-center">
          برای همکاری و سفارشات خود با من در ارتباط باشید.
        </p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-4 rounded-2xl bg-gray-800 p-6 shadow-lg">
        <input
          type="text"
          placeholder="نام شما"
          v-model="form.name"
          class="w-full rounded-lg bg-gray-900 px-4 py-3 text-white border border-gray-700 transition focus:border-emerald-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="شماره همراه یا ایمیل"
          v-model="form.contact"
          class="w-full rounded-lg bg-gray-900 px-4 py-3 text-white border border-gray-700 transition focus:border-emerald-400 focus:outline-none"
        />
        <textarea
          rows="4"
          placeholder="پیام شما"
          v-model="form.message"
          class="w-full resize-none rounded-lg bg-gray-900 px-4 py-3 text-white border border-gray-700 transition focus:border-emerald-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          class="w-full rounded-lg bg-emerald-400 py-3 font-semibold text-gray-900 transition hover:bg-emerald-500"
        >
          ارسال
        </button>
      </form>
      <div class="space-y-4 text-center md:text-right">
        <div class="flex justify-center md:justify-center max-md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 1.5a9 9 0 00-9 9v4.5A4.5 4.5 0 007.5 19.5h1.5v-6H6v-3a6 6 0 1112 0v3h-3v6h1.5a4.5 4.5 0 004.5-4.5V10.5a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-white text-center max-md:hidden">تماس با من</h3>
        <p class="text-lg text-gray-300 text-center max-md:hidden">
          برای همکاری و سفارشات خود با من در ارتباط باشید.
        </p>

        <div class="space-y-4 border-t border-gray-700/50 pt-10 text-center md:text-right">
          <div class="flex items-center justify-center gap-2 text-emerald-400 md:justify-center">
            <a href="tel:+989026308105"><span class="font-medium text-3xl md:text-4xl text-white">۰۹۰۲۶۳۰۸۱۰۵</span></a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a12.036 12.036 0 01-5.385-5.385l1.293-.97a1.125 1.125 0 00.417-1.173L8.962 3.102A1.125 1.125 0 007.872 2.25H6.75A2.25 2.25 0 004.5 4.5v2.25z" />
            </svg>
          </div>

          <div class="flex items-center justify-center gap-6 md:justify-center">
            <div class="mt-6 flex gap-4">
                <!-- Telegram -->
                <a href="https://t.me/+989026308105" class="group grid place-items-center w-12 h-12 rounded-full bg-white/95 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:scale-110 transition" aria-label="Telegram">
                  <img src="/images/telegram.svg" alt="Telegram" class="w-7 h-7" width="28" height="28" />
                </a>

                <!-- WhatsApp -->
                <a href="https://wa.me/989026308105" class="group grid place-items-center w-12 h-12 rounded-full bg-white/95 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:scale-110 transition" aria-label="WhatsApp">
                  <img src="/images/whatsapp.svg" alt="WhatsApp" class="w-7 h-7" width="28" height="28" />
                </a>

                <!-- Eitaa -->
                <a href="https://eitaa.com/+989026308105" class="group grid place-items-center w-12 h-12 rounded-full bg-white/95 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:scale-110 transition" aria-label="Eitaa">
                  <img src="/images/eitaa.svg" alt="Eitaa" class="w-7 h-7" width="28" height="28" />
                </a>
              </div>
          </div>
        </div>
      </div>

 
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  contact: '',
  message: ''
})

function submitForm() {
  console.log('فرم ارسال شد:', form)
}
</script>