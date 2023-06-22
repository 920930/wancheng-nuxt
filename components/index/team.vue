<template>
  <section class="md:pt-16 pt-4 hidden md:block bg-[url('/images/index/team-bg.jpg')] md:pb-24 bg-center">
    <AppTitle title="万城龙邦·至尊整装" desc="让大宅大有不同，缔造您的专属完美装修方案" whiteColor />
    <ul class="container mx-auto px-32 grid md:grid-cols-2 md:gap-x-96 md:gap-y-16 text-gray-400 md:mt-40 text-sm">
      <li class="text-right pr-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500">擅长多元化风格诠释 <span class="text-xl">更专业</span></div>
        <p>精英设计团队平均从业经验8-18年专</p>
        <span>注解决户型结构问题</span>
      </li>
      <li class="pl-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500"><span class="text-xl">更严格</span> 全程节点验收质量把控</div>
        <p>129项严格验收节点，所有细节符合</p>
        <span>国家、行业标准及严格的企业标准</span>
      </li>
      <li class="text-right pr-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500">一个团队服务一个家 <span class="text-xl">更用心</span></div>
        <p>每一个家都有一个团队全程服务每个</p>
        <span>环节无缝对接，为您完美着想</span>
      </li>
      <li class="pl-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500"><span class="text-xl">更个性</span> 专属个性化独案订制</div>
        <p>根据客户要求和户型条件，订制打造</p>
        <span>每房屋追求功能与美学的极致生活</span>
      </li>
    </ul>
  </section>

  <section class="bg-gray-100">
    <section class="container mx-auto relative bg-white md:px-14 px-3 md:py-10 py-3 md:-top-10 shadow-lg">
      <h3 class="text-xl font-bold">100+线上搭配规划师</h3>
      <p class="mt-2 text-sm md:text-base">基装设计师 + 软装设计师 + 家电和智能规划师 = 万城龙邦家装规划师</p>
      <i class="w-14 border-b-2 inline-block md:my-3 my-1"></i>
      <AppSwiper :data="data" isBreak :hasPagination="false">
        <template #default="{value}">
          <NuxtLink :to="`/team/${value.id}`" class="h-40 md:h-96 block bg-cover bg-center" :style="`background-image: url('${value.img}')`"></NuxtLink>
          <section class="bg-gray-100 h-48 md:h-52 pt-3 px-2 md:px-3 relative">
            <section class="flex items-center justify-between">
              <h3 class="md:text-2xl text-lg font-bold">{{value.name}}</h3>
              <p class="inline-block text-xs md:text-base md:ml-4 ml-2 text-yellow-600 rounded-md bg-yellow-500 bg-opacity-30 md:px-2 px-1 py-1">首席设计师</p>
            </section>
            <section class="mt-2 md:mt-3 text-sm md:text-base">从业经验：<span class="text-gray-600">{{value.timer}}年</span></section>
            <section class="mt-2 md:mt-3 text-sm md:text-base">设计理念：<span class="text-gray-600">{{value.info.idea.length > 24 ? value.info.idea.slice(0, 24)+'...' : value.info.idea}}</span></section>
            <section class="absolute text-sm md:text-base bottom-3 left-3 right-3 flex justify-between">
              <NuxtLink :to="`/team/${value.id}`" class="md:px-3 px-2 md:py-2 py-1 block bg-red-500 text-white">立即咨询</NuxtLink>
              <NuxtLink :to="`/team/${value.id}`" class="md:px-3 px-2 md:py-2 py-1 block bg-gray-200">预约TA</NuxtLink>
            </section>
          </section>
        </template>
        <template #swiper-wrapper-end>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </template>
      </AppSwiper>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { IUser, IWebSite } from '@/config/tyings'
import { PropType } from 'vue';

defineProps({
  data: {
    type: Array as PropType<Omit<IUser, 'rooms' | 'cases'>[]>,
    default: []
  }
})

const { web } = inject('website') as IWebSite;
</script>

<style lang='less' scoped>
.swiper-button-prev, .swiper-button-next{
  position: absolute;
  top: 46%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, .7);
  background-color: rgba(0, 0, 0, .7);
}
.swiper-button-prev, .swiper-button-next{
  padding: 20px 16px;
}
.swiper-button-prev:after, .swiper-button-next:after, .swiper-button-next-banner {
  font-size: 26px;
}
@media(min-width: 768px){
  .swiper-button-prev{
    padding: 35px 26px 35px 20px;
  }
  .swiper-button-next{
    padding: 35px 20px 35px 26px;
  }
  .swiper-button-prev:after, .swiper-button-next-banner {
    font-size: 36px;
  }
}
</style>