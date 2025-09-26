<template>
    <div class="mx-auto py-20 px-8 bg-gradient-to-br from-[#d4f3f7] via-[#f3e8ff] to-[#ffffff] relative overflow-hidden min-h-screen">
      <!-- پس‌زمینه -->
      <div class="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 right-10 z-0"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-200/20 via-transparent to-transparent blur-2xl z-0"></div>
  
      <!-- محتوا -->
      <div class="relative z-10 max-w-7xl mx-auto">
        <h1 class="text-4xl text-cyan-700 font-bold mb-14 text-center">
          دسته‌بندی: {{ categoryTitle }}
        </h1>
  
        <!-- کارت‌های پست -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group block bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                {{ post.title }}
              </h2>
              <p class="text-sm text-gray-500 mt-2">{{ post.date }}</p>
              <p class="text-sm text-gray-600 mt-2 line-clamp-2">{{ post.excerpt }}</p>
            </div>
          </router-link>
        </div>
  
        <!-- اگر پست نبود -->
        <div v-if="filteredPosts.length === 0" class="text-center mt-12 text-gray-500">
          هیچ نوشته‌ای در این دسته یافت نشد.
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import posts from '../data/posts.js'
  
  const route = useRoute()
  const slug = route.params.slug
  
  // فیلتر پست‌ها بر اساس دسته
  const filteredPosts = computed(() => {
    return posts.filter(p => p.categorySlug === slug)
  })
  
  // عنوان دسته برای نمایش
  const categoryTitle = computed(() => {
    switch (slug) {
      case 'seo':
        return 'سئو'
      case 'design':
        return 'طراحی سایت'
      case 'wordpress':
        return 'وردپرس'
      case 'ai':
        return 'هوش مصنوعی'
      default:
        return 'نامشخص'
    }
  })
  </script>
  
  <style scoped>
  /* خطاهای متن طولانی */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  