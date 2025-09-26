<template>
  <div class="relative mx-auto py-20 px-6 bg-gradient-to-br from-[#d4f3f7] via-[#f3e8ff] to-[#ffffff] min-h-screen overflow-hidden">
    <!-- پس‌زمینه -->
    <div class="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 right-10 z-0"></div>
    <div class="absolute inset-0 bg-gradient-radial from-cyan-200/20 via-transparent to-transparent blur-2xl z-0"></div>

    <!-- محتوای اصلی -->
    <div class="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
      <!-- بخش پست -->
      <div class="lg:col-span-3">
        <div v-if="post">
          <!-- تصویر با ارتفاع کمتر -->
          <h1 class="text-3xl font-bold mb-4 text-cyan-800">{{ post.title }}</h1>
          <p class="text-sm text-gray-500 mb-6 flex flex-wrap gap-2">
            <span>{{ post.date }}</span> |
            <span>{{ post.author }}</span> |
            <!-- دسته‌بندی به صورت router-link -->
            <router-link
              :to="`/blog/category/${post.categorySlug}`"
              class="text-cyan-700 hover:text-orange-500 transition"
            >
              {{ post.category }}
            </router-link>
          </p>
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full max-h-[400px] object-cover rounded-xl mb-8 shadow-lg"
          />

          <div
            class="prose prose-lg max-w-none leading-8 text-gray-800 mb-12"
            v-html="formattedContent"
          ></div>

          <!-- بخش نظرات -->
          <div class="bg-white shadow-md rounded-xl p-6 mt-10">
            <h2 class="text-2xl font-bold mb-6 text-cyan-700">نظرات کاربران</h2>

            <!-- لیست نظرات -->
            <div v-if="comments.length" class="space-y-4 mb-8">
              <div
                v-for="(comment, idx) in comments"
                :key="idx"
                class="border-b border-gray-200 pb-4"
              >
                <p class="font-semibold text-gray-800">{{ comment.name }}</p>
                <p class="text-gray-600 mt-1">{{ comment.text }}</p>
              </div>
            </div>
            <p v-else class="text-gray-500 mb-8">هنوز نظری ثبت نشده است.</p>

            <!-- فرم ارسال نظر -->
            <form @submit.prevent="addComment" class="space-y-4">
              <input
                v-model="newComment.name"
                type="text"
                placeholder="نام شما"
                class="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <textarea
                v-model="newComment.text"
                rows="4"
                placeholder="نظر خود را بنویسید..."
                class="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
              <button
                type="submit"
                class="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
              >
                ارسال نظر
              </button>
            </form>
          </div>
        </div>

        <div v-else>
          <p class="text-red-600 font-semibold">پست مورد نظر پیدا نشد!</p>
        </div>
      </div>

      <!-- سایدبار -->
      <aside class="lg:col-span-1 bg-white shadow-md rounded-xl p-6">
        <!-- آخرین مطالب -->
        <h3 class="text-xl font-semibold mb-4 text-cyan-700">آخرین مطالب</h3>
        <ul class="space-y-4 mb-6">
          <li
            v-for="related in latestPosts"
            :key="related.id"
            class="flex items-center gap-3 border-b border-gray-100 pb-3"
          >
            <img
              :src="related.image"
              alt=""
              class="w-16 h-12 object-cover rounded"
            />
            <div class="flex flex-col">
              <!-- عنوان به صورت router-link -->
              <router-link
                :to="`/blog/${related.slug}`"
                class="text-gray-700 hover:text-orange-500 transition text-sm font-medium"
              >
                {{ related.title }}
              </router-link>
              <span class="text-xs text-gray-500 mt-1">{{ related.date }}</span>
            </div>
          </li>
        </ul>

        <!-- خط جداکننده -->
        <hr class="my-6 border-gray-300" />

        <!-- دسته بندی -->
        <h3 class="text-xl font-semibold mb-4 text-cyan-700">دسته‌بندی نوشته‌ها</h3>
        <ul class="space-y-2">
          <li>
            <router-link to="/blog/category/seo" class="text-gray-700 hover:text-orange-500">
              سئو
            </router-link>
          </li>
          <li>
            <router-link to="/blog/category/design" class="text-gray-700 hover:text-orange-500">
              طراحی سایت
            </router-link>
          </li>
          <li>
            <router-link to="/blog/category/wordpress" class="text-gray-700 hover:text-orange-500">
              وردپرس
            </router-link>
          </li>
          <li>
            <router-link to="/blog/category/ai" class="text-gray-700 hover:text-orange-500">
              هوش مصنوعی
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import posts from '../data/posts.js'

const route = useRoute()
const slug = route.params.slug || null

const post = computed(() => posts.find((p) => p.slug === slug) || null)

const formattedContent = computed(() => {
  return post.value && post.value.content
    ? post.value.content.replace(/\n/g, '<br/>')
    : ''
})

// آخرین ۳ مطلب
const latestPosts = computed(() => posts.slice(-3).reverse())

// بخش نظرات
const comments = ref([])
const newComment = ref({ name: '', text: '' })

const addComment = () => {
  if (newComment.value.name && newComment.value.text) {
    comments.value.push({
      name: newComment.value.name,
      text: newComment.value.text,
    })
    newComment.value = { name: '', text: '' }
  }
}
</script>

<style scoped>
.prose p {
  margin-bottom: 1rem;
}
</style>
