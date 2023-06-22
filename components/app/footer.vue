<template>
  <footer class="bg-[url('/images/index/footer-bg.jpg')] text-gray-400 flex flex-col justify-between pt-3 md:pt-10">
    <section class="container mx-auto px-3 md:px-0">
      <div class="flex border-b mb-3 px-3 md:px-0 md:mb-7 text-sm md:text-base md:space-x-10 pb-3 md:pb-5 justify-between md:justify-start border-gray-700">
        <NuxtLink to="/" class="hidden md:inline-block">网站首页</NuxtLink>
        <NuxtLink to="/team">设计团队</NuxtLink>
        <NuxtLink to="/case">精品案例</NuxtLink>
        <NuxtLink to="/house">整装产品</NuxtLink>
        <NuxtLink to="/room">在建工地</NuxtLink>
        <NuxtLink to="/baojia" class="hidden md:inline-block">装修报价</NuxtLink>
      </div>
      <div class="md:flex">
        <div class="md:hidden flex justify-center space-x-3">
          <img class="w-28 mb-2" src="/images/wechat.png" alt="" />
          <img class="w-28 mb-2" src="/images/wechat.png" alt="" />
        </div>
        <ul class="flex-1 space-y-1 md:space-y-5 md:text-sm text-xs mt-3 md:mt-0 text-center md:text-left">
          <li>服务热线：{{web.tel}}</li>
          <li>地址：{{web.address}}</li>
        </ul>
        <aside class="md:flex flex-col items-center ml-2 md:ml-0 hidden">
          <img class="w-24 md:w-28 mb-2" src="/images/wechat.png" alt="">
          <span class="text-sm">加好友了解更多</span>
        </aside>
      </div>
    </section>
    <section class="md:mt-16 mt-2 h-10 md:h-14 flex flex-col md:flex-row items-center justify-center text-sm bg-black bg-opacity-40">
      <span class="md:mr-2">{{web.name}}</span>
      <NuxtLink to="http://beian.miit.gov.cn" v-if="web.beian" class="hidden md:inline-block">{{web.beian}}</NuxtLink>
    </section>
  </footer>
  <aside class="md:hidden fixed z-50 bottom-0 text-sm w-full h-14 flex justify-around bg-gray-900 text-gray-300 shadow-current">
    <NuxtLink to="/" class="flex flex-col items-center justify-center space-y-1">
      <i class="iconfont icon-home" style="font-size: 20px;"></i>
      <span>首页</span>
    </NuxtLink>
    <NuxtLink :to="`tel:${web.tel}`" class="flex flex-col items-center justify-center space-y-1">
      <i class="iconfont icon-lianxi" style="font-size: 20px;"></i>
      <span>电话咨询</span>
    </NuxtLink>
    <NuxtLink :to="web.kefu" class="flex flex-col items-center justify-center space-y-1">
      <i class="iconfont icon-lianxishouhou" style="font-size: 23px;"></i>
      <span>人工客服</span>
    </NuxtLink>
    <NuxtLink to="/baojia" class="flex flex-col items-center justify-center space-y-1">
      <i class="iconfont icon-shangpinjiagexinxi" style="font-size: 18px;"></i>
      <span>智能报价</span>
    </NuxtLink>
  </aside>
  <div class="h-14 md:hidden"></div>
</template>

<script lang='ts' setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { IWebSite } from '@/config/tyings'

const { web } = inject<IWebSite>('website')!;

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  tel: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
});

const { handleSubmit } = useForm({
  validationSchema,
});

const fetchBtn = handleSubmit(async (value) => {
  console.log(value)
});


</script>

<style lang='less' scoped>

</style>