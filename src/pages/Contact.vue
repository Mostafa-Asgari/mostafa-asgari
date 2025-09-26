<template>
  <section dir="rtl" id="contact" class="relative py-20 px-6 md:px-12 overflow-hidden">
    <!-- پس‌زمینه کلی صفحه -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-100 via-cyan-100 to-indigo-100"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- هدر -->
      <div class="text-center mb-12">
        <div class="mx-auto mb-4 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800">تماس با من</h1>
        <p class="mt-3 text-gray-700 max-w-2xl mx-auto">
         سوال، همکاری یا پیشنهادی دارید خوشحال می‌شوم بشنوم. فرم زیر را پر کنید یا از طریق شبکه‌های اجتماعی پیام بدهید.
        </p>
      </div>

      <!-- گرید -->
      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <!-- باکس اطلاعات -->
        <aside ref="infoBox" class="card-fade-up galaxy-card rounded-2xl overflow-hidden shadow-xl">
          <div class="galaxy-inner p-6 md:p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="text-cyan-200 shrink-0">
                <svg viewBox="0 0 256 256" class="w-14 h-14 fill-none stroke-current" aria-hidden="true">
                  <g class="opacity-90">
                    <path d="M40 136a88 88 0 0 1 176 0v28" stroke-width="12" stroke-linecap="round"/>
                    <rect x="24" y="120" width="48" height="72" rx="14" stroke-width="10"/>
                    <rect x="184" y="120" width="48" height="72" rx="14" stroke-width="10"/>
                    <path d="M84 188a44 32 0 0 0 88 0" stroke-width="10" stroke-linecap="round"/>
                    <path d="M128 220v14" stroke-width="10" stroke-linecap="round"/>
                  </g>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">در دسترس هستم</h3>
                <p class="text-cyan-100 text-sm">معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهم.</p>
              </div>
            </div>

            <div class="space-y-4 text-white">
              <div class="flex items-center justify-between gap-3">
                <span class="font-semibold">شماره تماس:</span>
                <a href="tel:09026308105" class="font-bold hover:text-cyan-300">۰۹۰۲-۶۳۰۸۱۰۵</a>
              </div>
              <div class="flex items-center justify-between gap-3">
                <span class="font-semibold">ایمیل:</span>
                <a href="mailto:asgarii1369@gmail.com" class="font-bold hover:text-cyan-300">asgarii1369@gmail.com</a>
              </div>
              <div class="flex items-center justify-between gap-3">
                <span class="font-semibold">آدرس:</span>
                <span>کرج - شاهین ویلا</span>
              </div>
            </div>

            <div class="mt-6 flex gap-4">
              <!-- شبکه‌های اجتماعی: جایگزین همین بلاک با کد زیر -->
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
        </aside>

        <!-- باکس فرم -->
        <div ref="formBox" class="card-fade-up galaxy-card rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
          <form @submit.prevent="handleSubmit" class="galaxy-inner p-6 md:p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-white/90 mb-1">نام و نام‌خانوادگی</label>
                <input v-model.trim="form.name" type="text" placeholder="مثال: مصطفی عسگری"
                  class="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
                <p v-if="errors.name" class="mt-1 text-xs text-rose-200">{{ errors.name }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium text-white/90 mb-1">ایمیل</label>
                <input v-model.trim="form.email" type="email" placeholder="example@mail.com"
                  class="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
                <p v-if="errors.email" class="mt-1 text-xs text-rose-200">{{ errors.email }}</p>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-white/90 mb-1">موضوع</label>
                <input v-model.trim="form.subject" type="text" placeholder="در چه زمینه‌ای پیام می‌فرستید؟"
                  class="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-white/90 mb-1">پیام</label>
                <textarea v-model.trim="form.message" rows="5" placeholder="متن پیام شما..."
                  class="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
                <p v-if="errors.message" class="mt-1 text-xs text-rose-200">{{ errors.message }}</p>
              </div>

              <!-- <div class="md:col-span-2 flex items-center gap-2">
                <input id="agree" v-model="form.agree" type="checkbox" class="h-4 w-4 rounded border-white/30 text-cyan-400 focus:ring-cyan-400">
                <label for="agree" class="text-sm text-white/90">با ذخیره و پردازش اطلاعات برای پاسخگویی موافقم.</label>
              </div> -->

              <div class="md:col-span-2">
                <button :disabled="submitting" type="submit"
                  class="w-full h-12 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md">
                  {{ submitting ? 'در حال ارسال...' : 'ارسال پیام' }}
                </button>
                <p v-if="status" :class="status.type === 'success' ? 'text-emerald-200' : 'text-rose-200'" class="mt-3 text-sm">
                  {{ status.message }}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  agree: false
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const submitting = ref(false)
const status = ref(null)

const validate = () => {
  errors.name = form.name ? '' : 'لطفاً نام خود را وارد کنید.'
  errors.email = form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'ایمیل معتبر وارد کنید.'
  errors.message = form.message.length >= 10 ? '' : 'پیام حداقل باید ۱۰ کاراکتر باشد.'
  if (!form.agree) {
    status.value = { type: 'error', message: 'برای ارسال پیام لازم است با شرایط موافقت کنید.' }
  } else if (status.value?.type === 'error') {
    status.value = null
  }
  return !errors.name && !errors.email && !errors.message && form.agree
}

const handleSubmit = async () => {
  status.value = null
  if (!validate()) return
  submitting.value = true
  await new Promise(r => setTimeout(r, 1000))
  submitting.value = false
  status.value = { type: 'success', message: 'پیام شما با موفقیت ارسال شد. متشکرم!' }
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  form.agree = false
}

/* انیمیشن ورود از پایین */
const infoBox = ref(null)
const formBox = ref(null)
let observer

onMounted(() => {
  const targets = [infoBox.value, formBox.value].filter(Boolean)
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  targets.forEach((el, i) => {
    el.style.transitionDelay = `${i * 140}ms`
    observer.observe(el)
  })
})

onBeforeUnmount(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
/* انیمیشن ورود کارت‌ها */
.card-fade-up { opacity: 0; transform: translateY(32px); transition: opacity .7s cubic-bezier(.2,.8,.2,1), transform .7s cubic-bezier(.2,.8,.2,1); }
.card-fade-up.show { opacity: 1; transform: translateY(0); }

/* کارت کهکشانی + شفق قطبی */
.galaxy-card {
  position: relative;
  background: radial-gradient(1200px 600px at 80% 0%, rgba(59,130,246,.25), transparent 60%),
              radial-gradient(900px 500px at 10% 100%, rgba(236,72,153,.22), transparent 60%),
              linear-gradient(145deg, #0b1020 0%, #101a33 60%, #0b1224 100%);
  border: 1px solid rgba(255,255,255,.12);
}
.galaxy-card::before {
  /* شفق قطبی نرم */
  content: "";
  position: absolute; inset: -20%;
  background: conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,.18), rgba(168,85,247,.16), rgba(59,130,246,.18), rgba(34,211,238,.18));
  filter: blur(38px); opacity: .9; transform: translateY(0);
  animation: aurora 10s ease-in-out infinite;
  pointer-events: none;
}
.galaxy-card::after {
  /* ستاره‌ها */
  content: "";
  position: absolute; inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.9) 40%, transparent 41%),
    radial-gradient(1.5px 1.5px at 60% 70%, rgba(255,255,255,.7) 40%, transparent 41%),
    radial-gradient(1.8px 1.8px at 80% 40%, rgba(255,255,255,.8) 40%, transparent 41%),
    radial-gradient(1.2px 1.2px at 35% 80%, rgba(255,255,255,.6) 40%, transparent 41%);
  opacity: .7; pointer-events: none;
}
.galaxy-inner {
  position: relative; z-index: 1;
  backdrop-filter: blur(6px);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
}

/* انیمیشن شفق */
@keyframes aurora {
  0%,100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-10px) rotate(2deg) scale(1.03); }
}

/* ریسپانسیو */
@media (max-width: 640px) {
  #contact { padding-left: 1rem; padding-right: 1rem; }
}
</style>
