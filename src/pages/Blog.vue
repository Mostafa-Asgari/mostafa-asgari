<template>
  <div class="mx-auto py-20 px-8 bg-gradient-to-br from-[#d4f3f7] via-[#f3e8ff] to-[#ffffff] relative overflow-hidden min-h-screen">
    <!-- دایره محو (پس‌زمینه) -->
    <div class="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 right-10 z-0"></div>
    <!-- شفق قطبی (پس‌زمینه) -->
    <div class="absolute inset-0 bg-gradient-radial from-cyan-200/20 via-transparent to-transparent blur-2xl z-0"></div>

    <!-- محتوا روی پس‌زمینه -->
    <div class="relative z-10">
      <h1 class="text-5xl text-cyan-700 font-bold mb-14 text-center">بلاگ</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="(post, index) in posts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
          class="group block bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg transition-transform duration-400 ease-in-out hover:-translate-y-3 hover:shadow-xl hover:border-orange-500 hover:border-dashed"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-44 object-cover"
            loading="lazy"
          />
          <div class="p-4">
            <h2 class="text-lg font-semibold transition-colors duration-300 group-hover:text-orange-500">
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-600 mt-2">{{ post.excerpt }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../data/posts.js'

export default {
  name: 'Blog',
  data() {
    return {
      posts
    }
  }
}
</script>

<style scoped>
/* در صورت نیاز استایل‌های اضافی اضافه کن */
</style>
