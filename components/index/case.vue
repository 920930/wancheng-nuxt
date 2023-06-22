<template>
  <AppTitle title="家装案例·精品制造" desc="美家养成记，格调美学的灵感提案" class="md:mt-16" />
  <ul class="container mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 md:my-12 my-3 px-3 md:px-0">
    <li class="relative overflow-hidden w-full h-48 md:h-80 rounded-md group border" v-for="item in data" :key="item.id">
      <NuxtLink :to="`/case/${item.id}`">
        <div class="w-full h-full bg-cover duration-200 bg-center group-hover:scale-105" :style="`background-image: url('${item.img}')`"></div>
      </NuxtLink>
      <div class="text-white absolute bottom-2 w-60 h-6 leading-6 group-hover:bg-opacity-60 text-center left-1/2 rounded-md -translate-x-1/2 bg-opacity-40 text-sm bg-black">
        {{item.title}} <span class="hidden md:inline-block"> | {{huxing[item.huxing]}} | {{style[item.style]}}</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { ICase, IWebSite } from '@/config/tyings'
import { PropType } from 'vue';

defineProps({
  data: {
    type: Array as PropType<Pick<ICase, 'id' | 'title' | 'style' | 'huxing' | 'type' | 'img'>[]>,
    default: []
  }
})

const { huxing, style } = inject<IWebSite>('website') as IWebSite;
</script>

<style scoped lang="scss">

</style>