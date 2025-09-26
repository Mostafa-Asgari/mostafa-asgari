import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'مصطفی عسگری',
    title: 'توسعه‌وردپرس / فرانت اند / طراح رابط کاربری',
    aboutShort: ' توسعه‌دهنده‌ وب سایت های مدرن و کاربرپسند. عاشق وردپرس، کدنویسی و طراحی های جذاب.',
    techs: [
      { name: 'Wordpress & Elementor', percent: 98 },
      { name: 'HTML & CSS', percent: 98 },
      { name: 'Vue 3', percent: 85 },
      { name: 'JavaScript', percent: 87 },
      { name: 'Tailwind', percent: 93 },
      { name: 'PHP', percent: 80 },
      { name: 'UI/UX Design', percent: 78 }
    ],
    services: [
      { title: 'طراحی رابط کاربری', desc: 'طراحی زیبا و مدرن مخصوص وب و موبایل' },
      { title: 'توسعه فرانت‌اند', desc: 'توسعه SPA با Vue 3 و بهترین عملکرد' },
      { title: 'مشاوره فنی', desc: 'راهنمایی برای ساختار پروژه و استراتژی فنی' }
    ],
    portfolio: [
      { id: 1, title: 'رفیق وب', tags: ['Wordpress. Elementor'], img: '/images/sample5.jpg' },
      { id: 2, title: 'وب سایت فروشگاهی', tags: ['Vue', 'Tailwind'], img: '/images/sample6.jpg' },
      { id: 3, title: 'صفحه لندینگ دندانپزشکی', tags: ['Wordpress'], img: '/images/sample4.jpg' },
      { id: 4, title: 'پلاگین مدیریت کارها', tags: ['PHP', 'Wordpress'], img: '/images/sample5.jpg' }
    ]
  })
})
