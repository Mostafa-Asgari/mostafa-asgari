<template>
  <div>
    <div class="flex justify-between mb-1">
      <div class="text-sm font-medium" style="color: rgb(59 255 246);">{{ label }}</div>
      <div class="text-sm text-white font-bold drop-shadow-[0_0_6px_#80f9ff]" style="color: rgb(30 3 35);">{{ percent }}%</div>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="h-2 rounded-full" :style="barStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { label: String, percent: Number },
  computed: {
    barStyle() {
      return {
        width: this.percent + '%',
        background: 'linear-gradient(90deg, rgb(30 3 35), rgb(59 255 246))'
      }
    }
  }
}
</script>
