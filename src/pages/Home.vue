<template>
  <div class="w-full"></div>
  <!-- Hero: تمام عرض + گرادینت + 100vh -->
  <section class="relative w-full min-h-screen flex items-center overflow-hidden" style="background: linear-gradient(135deg,
  #050914 0%,
  #0B1E3A 14%,
  #13284E 28%,
  #2A1B6D 43%,
  #5B1D8A 57%,
  #0B4F6C 71%,
  #0A2342 100%
);
">
    <ParticlesBackground />
    <div class="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-md:py-16 px-4 sm:px-6 lg:px-10">
      <div data-aos="fade-right" class="text-center md:text-right">
        <h1 class="text-2xl sm:text-4xl md:text-2xl lg:text-4xl font-bold mb-3 text-[#8cffdf] drop-shadow-[2px_2px_4px_rgba(1,1,30,0.8)] leading-snug">سلام، من <strong class="md:inline text-3xl sm:text-[36px] md:text-[28px] lg:text-[42px] bg-gradient-to-r from-[#d547ed] to-[#ffcd41] bg-clip-text text-transparent">{{ profile.name }}</strong> هستم</h1>
        <p class="mt-4 text-white text-base sm:text-lg leading-relaxed">{{ profile.aboutShort }}</p>

        <div class="flex flex-row gap-3 mt-10 justify-center md:justify-start">
          <router-link
            to="/portfolio"
            class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#c442db] to-[#a91dc2] text-white px-5 py-3 shadow-lg hover:bg-[rgb(212,71,236)] active:scale-[0.99] transition"
          >
            نمونه کارها
          </router-link>

          <a
            href="/Mostafa-Resume.pdf"
            download="Mostafa-Resume.pdf"
            class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-3 shadow-lg hover:from-cyan-500 hover:to-blue-500 active:scale-[0.99] transition"
            aria-label="دانلود رزومه"
          >
            <!-- آیکن دانلود -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
            </svg>
            دانلود رزومه
          </a>
        </div>


        <div class="flex flex-col items-center mt-10 md:mt-0 md:hidden">
            <div 
              class="my-image w-64 h-[28rem] sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-dashed border-orange-500 animate-float"
            >
              <img 
                src="/images/mostafa-asgari.webp" 
                alt="my-image"
                class="w-full h-full object-cover" 
              />
            </div>

            <p class="ui mt-6 text-xl sm:text-[1rem] text-[#f7ca39] drop-shadow-[0_0_10px_#80f9ff] font-bold text-center leading-snug px-2">
              توسعه‌دهنده وردپرس / فرانت اند / رابط کاربری
            </p>
        </div>
 
        <div class="mt-8" data-aos="fade-up">
          <!-- <h3 class="text-md text-white">فناوری‌هایی که بلدم :</h3> -->
          <div class="mt-3 space-y-3 progress">
            <TechBar v-for="t in profile.techs" :key="t.name" :label="t.name" :percent="t.percent" />
          </div>
        </div>
      </div>

      <div class="md:flex flex-col items-center mt-10 md:mt-0  hidden">
        <div 
          class="my-image w-64 h-[28rem] sm:w-56 sm:h-56 md:w-64 md:h-[28rem] rounded-full overflow-hidden shadow-lg border-4 border-dashed border-orange-500 animate-float"
        >
          <img 
            src="/images/mostafa-asgari.webp" 
            alt="my-image"
            class="w-full h-full object-cover bg-white"
          />
        </div>

        <p class="mt-6 text-xl sm:text-xl text-[#f7ca39] drop-shadow-[0_0_10px_#80f9ff] font-bold text-center leading-snug px-2">
          توسعه‌دهنده وردپرس / فرانت اند / رابط کاربری
        </p>
      </div>
    </div>
  </section>

    <AboutMe />
    <Skills />
    <PortfolioGallery />
    <ServicesNew2 />

    <MoreServices />
    <BlogSection />
    <ContactForm />

</template>

<script>
// import Hero from '../components/Hero.vue'
import { useProfileStore } from '../stores/profile'
import ParticlesBackground from '../components/ParticlesBackground.vue'
import TechBar from '../components/TechBar.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import Skills from '../components/Skills.vue'
import AboutMe from '../components/AboutMe.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
import WorkProcess from '../components/WorkProcess.vue'
import ServicesNew from '../components/ServicesNew.vue'
import ServicesNew2 from '../components/ServicesNew2.vue'
import BlogSection from '../components/BlogSection.vue'
import ContactForm from '../components/ContactForm.vue'
import MoreServices from '../components/MoreServices.vue'

export default {
  components: { TechBar, PortfolioCard, ContactForm, ParticlesBackground,
     Skills, AboutMe, PortfolioGallery, WorkProcess, ServicesNew, ServicesNew2, BlogSection, MoreServices },
  setup() {
    const store = useProfileStore()
    return { profile: store }
  }
}
</script>

<style>
.my-image{
  width: 20rem !important;
  height: 28rem !important;
}
@media(max-width: 768px){
  .my-image{
    width: 17rem !important;
    height: 25rem !important;
  }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}


</style>
