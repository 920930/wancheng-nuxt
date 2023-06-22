<template>
  <section class="bg-gray-100 md:mt-16 mt-3 md:py-10 py-3">
    <AppTitle title="最新资讯" desc="实时分享品牌新闻资讯及最新优惠活动" />
    <section class="container mx-auto md:flex mt-6 px-3 md:px-0">
      <section class="md:w-5/12 group" v-if="top">
        <div class="md:h-96 h-48 overflow-hidden relative">
          <NuxtLink :to="`/news/${top.id}`">
            <div class="bg-cover bg-center group-hover:scale-105 duration-150 w-full h-full" :style="`background-image: url(${top.img})`"></div>
          </NuxtLink>
          <aside class="absolute left-0 top-0 md:w-24 w-20 md:h-16 h-12 bg-red-600 text-gray-200 flex flex-col justify-center items-center font-bold">
            <p class="md:text-xl">{{top.created_at.split('-')[2]}}</p>
            <p class="text-sm md:text-base">{{top.created_at.split('-').slice(0, 2).join('-')}}</p>
          </aside>
        </div>
        <div class="bg-white md:py-6 py-2 md:pl-4 px-2">
          <NuxtLink :to="`/news/${top.id}`" class="md:text-2xl font-bold text-gray-800 group-hover:text-red-600">{{top.title.slice(0, 22)}}...</NuxtLink>
          <p class="md:mt-3 mt-2 text-gray-500 text-sm md:text-base">{{top.description.slice(0, 30)}}...</p>
        </div>
      </section>
      <ul class="flex-1 md:ml-8 md:space-y-5 space-y-3 mt-3 pr-2 md:mt-0">
        <li class="bg-white py-3 flex group" v-for="item in data">
          <div class="order-1 md:ml-6 ml-3 flex-1">
            <NuxtLink :to="`/news/${item.id}`" class="md:text-xl md:font-semibold text-gray-800 group-hover:text-red-600">{{item.title.slice(0, 32)}}...</NuxtLink>
            <p class="hidden md:block mt-2 text-gray-500 text-xs md:text-base">{{item.description.slice(0, 40)}}...</p>
          </div>
          <aside class="md:w-24 w-20 font-bold border-r border-slate-300 text-gray-700 text-center">
            <p class="md:text-xl text-sm">{{item.created_at.split('-')[2]}}</p>
            <p class="md:text-base text-sm">{{item.created_at.split('-').slice(0, 2).join('-')}}</p>
          </aside>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import { TArticle } from '@/config/tyings'
defineProps({
  data: {
    type: Array as PropType<TArticle[]>,
    default: []
  },
  top: {
    type: Object as PropType<TArticle>,
  }
})
</script>

<style scoped lang="less">

</style>