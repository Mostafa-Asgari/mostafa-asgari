<template>
  <div class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition" data-aos="flip-up">
    <div class="h-40 bg-gray-100 flex items-center justify-center">
      <img v-if="item.img" :src="item.img" alt="" class="object-cover h-full w-full" />
      <div v-else class="text-gray-400">تصویر</div>
    </div>
    <div class="p-4">
      <h3 class="font-semibold">{{ item.title }}</h3>
      <div class="text-xs text-gray-500 mt-2">{{ item.tags.join(' • ') }}</div>
      <div class="mt-3 flex justify-between items-center">
        <router-link :to="{ name: 'Portfolio' }" class="text-sm text-primary-500">مشاهده</router-link>
        <button class="text-sm border px-3 py-1 rounded">جزئیات</button>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ['item'] }
</script>
