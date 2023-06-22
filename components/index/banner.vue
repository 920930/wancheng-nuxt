<template>
  <AppSwiper :data="data">
    <template #swiper-wrapper-end>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </AppSwiper>
  <section class="md:py-10 py-3">
    <ul class="container mx-auto flex md:grid md:grid-cols-4 md:gap-16 gap-3 px-3 md:px-0 overflow-hidden md:overflow-auto overflow-x-scroll whitespace-nowrap scro">
      <li class="bg-slate-100 flex items-center justify-between md:px-5 px-3 py-1 shadow-md cursor-pointer group hover:text-red-600">
        <div class="mr-5">
          <h2 class="text-xl font-bold mb-1">专属顾问</h2>
          <span class="text-sm text-slate-500 group-hover:text-red-600">1对1专属顾问即时回复</span>
        </div>
        <i class="iconfont icon-lianxishouhou icon"></i>
      </li>
      <li class="bg-slate-100 flex items-center justify-between md:px-5 px-3 py-1 shadow-md cursor-pointer group hover:text-red-600">
        <div class="mr-5">
          <h2 class="text-xl font-bold mb-1">免费测量</h2>
          <span class="text-sm text-slate-500 group-hover:text-red-600">专业团队上门测量</span>
        </div>
        <i class="iconfont icon-thin-_pencil_rul icon"></i>
      </li>
      <li class="bg-slate-100 flex items-center justify-between md:px-5 px-3 py-1 shadow-md cursor-pointer group hover:text-red-600">
        <div class="mr-5">
          <h2 class="text-xl font-bold mb-1">免费设计</h2>
          <span class="text-sm text-slate-500 group-hover:text-red-600">获取专业设计方案</span>
        </div>
        <i class="iconfont icon-shejiguifan icon"></i>
      </li>
      <li class="bg-slate-100 flex items-center justify-between md:px-5 px-3 py-1 shadow-md cursor-pointer group hover:text-red-600">
        <div class="mr-5">
          <h2 class="text-xl font-bold mb-1">免费报价</h2>
          <span class="text-sm text-slate-500 group-hover:text-red-600">免费预算定制报价</span>
        </div>
        <i class="iconfont icon-shangpinjiagexinxi icon"></i>
      </li>
    </ul>
  </section>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

type TData = {
  url: null | string;
  pc: string;
  m: string;
}
defineProps({
  data: Array as PropType<TData[]>,
  default: []
})
</script>

<style scoped lang="less">
.icon{
  font-size: 36px;
}
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
  .icon{
    font-size: 50px;
  }
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
.scro::-webkit-scrollbar{
  display: none; /* Chrome Safari */
}
</style>