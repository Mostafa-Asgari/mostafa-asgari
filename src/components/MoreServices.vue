<template>
    <section
      dir="rtl"
      class="relative py-20 px-6 bg-gradient-to-br from-green-100 via-cyan-100 to-indigo-100 overflow-hidden"
    >
      <!-- دایره های محو شناور -->
      <div
        class="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-300/40 rounded-full blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-float"
      ></div>
  
      <!-- شفق قطبی متحرک -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-cyan-400/40 blur-3xl rounded-full animate-aurora"
        ></div>
      </div>
  
      <!-- عنوان -->
      <div class="relative text-center mb-14">
        <h3 class="text-3xl md:text-4xl font-extrabold text-gray-800 leading-relaxed">
            نگاهی به برخی از 
            <span class="text-cyan-600">پروژه‌ها</span> و 
            <span class="text-purple-600">وب‌سایت‌های</span> طراحی شده
        </h3>
        <p class="mt-4 text-gray-600 text-base md:text-lg leading-relaxed px-28">
            در این بخش می‌توانید مجموعه‌ای از پروژه‌های انجام شده را مشاهده کنید. 
            هر کدام با توجه به نیاز کارفرما و با بهره‌گیری از جدیدترین تکنولوژی‌ها طراحی و پیاده‌سازی شده‌اند تا تجربه‌ای کاربرپسند، مدرن و حرفه‌ای ارائه دهند.
        </p>
      </div>
  
      <!-- کارت‌ها -->
      <div
        class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform duration-300"
        >
          <!-- تصویر -->
          <img
            :src="service.image"
            alt=""
            class="h-44 w-full object-cover"
          />
  
          <!-- متن + دکمه -->
          <div class="p-5 flex flex-col flex-grow">
            <!-- عنوان با لینک -->
            <router-link
              :to="service.link"
              class="text-lg font-semibold text-gray-800 mb-2 hover:text-cyan-600 transition-colors duration-300"
            >
              {{ service.title }}
            </router-link>
  
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-600">{{ service.description }}</p>
  
              <!-- دکمه با لینک -->
              <router-link
                :to="service.link"
                class="px-4 py-1.5 text-sm rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:glow"
              >
                مشاهده
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: "رفیق وب",
      description: "Wordpress • Elementor",
      image: "/images/sample5.jpg",
      link: "/projects/rafighweb",
    },
    {
      title: "وب سایت فروشگاهی",
      description: "Vue • Tailwind",
      image: "/images/sample6.jpg",
      link: "/projects/ecommerce",
    },
    {
      title: "صفحه لندینگ دندانپزشکی",
      description: "Wordpress",
      image: "/images/sample4.jpg",
      link: "/projects/dental-landing",
    },
    {
      title: "پلاگین مدیریت کارها",
      description: "PHP • Wordpress",
      image: "/images/sample5.jpg",
      link: "/projects/task-manager", // مسیر SPA
    },
  ];
  </script>
  
  <style scoped>
  /* انیمیشن‌ها */
  /* @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes float-slow {
    0% {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      transform: translateY(25px) translateX(15px);
    }
    100% {
      transform: translateY(0px) translateX(0px);
    }
  }
  
  @keyframes aurora {
    0% {
      transform: translate(-50%, 0) scale(1);
    }
    50% {
      transform: translate(-50%, -20px) scale(1.05);
    }
    100% {
      transform: translate(-50%, 0) scale(1);
    }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 12s ease-in-out infinite;
  }
  
  .animate-aurora {
    animation: aurora 10s ease-in-out infinite;
  } */
  
  /* Glow روی دکمه */
  .hover\:glow:hover {
    box-shadow: 0 0 12px 3px rgba(6, 182, 212, 0.6),
                0 0 20px 6px rgba(37, 99, 235, 0.5);
  }
  
  /* Glow روی کارت */
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 6px rgba(6, 182, 212, 0.25),
                0 0 35px 12px rgba(139, 92, 246, 0.25);
  }
  </style>
  