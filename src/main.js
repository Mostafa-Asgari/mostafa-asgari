import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import 'tailwindcss/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/main.css'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.mount('#app')

setTimeout(() => AOS.init({ duration: 800, once: true }), 100)
