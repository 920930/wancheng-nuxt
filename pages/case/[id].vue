<template>
  <section class="bg-gray-100 md:p-6 p-3 md:flex w-full">
    <div class="md:w-80 hidden md:block">
      <div class="bg-white p-3">
        <h3 class="text-center font-bold mb-3">免费申请户型规划</h3>
        <AppInput name="name" label="姓名" class="mb-5" />
        <AppInput name="tel" label="手机号" class="mb-5" />
        <AppInput name="area" label="房屋面积" class="mb-5" />
        <button class="text-center w-full py-2 bg-red-600 text-white" @click="fetchBtn">提交</button>
        <p class="text-red-600 mt-2 text-sm text-center">*您的信息将被严格保密，请放心填写</p>
        <AppAlert :msg="info.msg" v-model:show="info.show" />
      </div>
      <section class="text-sm bg-white p-3 md:mt-5 mt-3">
        <NuxtLink :to="`/case/${item.id}`" class="flex group cursor-pointer" v-for="(item, i) in dataValue.anli" :class="{' border-b mb-2 pb-2': i !== dataValue.anli.length - 1}">
          <img class="w-28 h-20 mr-6" :src="item.img" :alt="item.title">
          <div class="flex flex-col flex-1 justify-between">
            <span class="group-hover:text-yellow-600">{{item.title}}</span>
            <p class="text-right"><span class="bg-green-600 group-hover:bg-green-700 px-2 py-1 text-white rounded">查看更多</span></p>
          </div>
        </NuxtLink>
      </section>
      <div class="bg-[url('/images/baojia/server_tel.jpg')] bg-cover bg-center h-20 my-5"></div>
    </div>
    <div class="md:w-1/2 flex-1 md:mx-5">
      <section class="bg-white p-3">
        <h1 class="text-center font-bold text-2xl">{{dataValue.title}}</h1>
        <p class="space-x-5 text-gray-600 border-b my-2 pb-1 text-sm">
          <span>风格：{{style[dataValue.style]}}</span>
          <span>户型：{{huxing[dataValue.huxing]}}</span>
          <span>面积：{{dataValue.area}}㎡</span>
          <span class="hidden md:inline-block">造价：{{dataValue.price}}万元</span>
        </p>
        <iframe v-if="dataValue.vr" class="w-full md:h-105 h-52" :src="dataValue.vr"></iframe>
        <AppSwiper :data="dataValue.content" v-else>
          <template #default="{value}">
            <div class="w-full md:h-105 h-52 bg-center bg-cover" :style="`background-image: url('${value}')`"></div>
          </template>
          <template #swiper-wrapper-end>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </template>
        </AppSwiper>
        <p class="bg-gray-100 my-3 p-4 text-sm md:text-base">{{dataValue.description}}</p>
        <div class="text-sm" v-if="dataValue.prev">上一篇：<NuxtLink :to="`/case/${dataValue.prev.id}`">{{dataValue.prev.title}}</NuxtLink></div>
        <div class="mt-2 text-sm" v-if="dataValue.next">下一篇：<NuxtLink :to="`/case/${dataValue.next.id}`">{{dataValue.next.title}}</NuxtLink></div>
      </section>
    </div>
    <div class="md:w-80 mt-3 md:mt-0">
      <section class="bg-white p-3">
        <section class="flex">
          <NuxtLink
            class="w-16 h-16 bg-cover rounded-md"
            :to="`/team/${dataValue.user.id}`"
            :style="`background-image: url('${dataValue.user.img}')`">
          </NuxtLink>
          <div class="ml-3 flex flex-col justify-evenly">
            <h3>设计师：<NuxtLink :to="`/team/${dataValue.user.id}`">{{dataValue.user.name}}</NuxtLink></h3>
            <span class="text-sm text-gray-500">从业经验：{{year[dataValue.user.timer]}}</span>
          </div>
        </section>
        <aside class="text-sm mt-3 text-gray-600">设计理念：{{dataValue.user.info.idea}}</aside>
        <p class="space-x-4 text-sm text-gray-600">
          <span v-for="item in dataValue.user.info.style" class="border mt-2 inline-block px-2 rounded-xl">{{style[item]}}</span>
        </p>
      </section>
      <section class="md:mt-5 mt-3 bg-white p-3">
        <h3 class="text-center font-bold text-lg">{{dataValue.user.name}}最新作品</h3>
        <ul class="mt-2 space-y-3">
          <li v-for="(item, i) in dataValue.user.cases" :key="item.id" class="group" :class="{'border-b pb-2': dataValue.user.cases.length - 1 != i}">
            <NuxtLink :to="`/case/${item.id}`" class="block h-44 md:h-52 bg-cover bg-center mb-2" :style="`background-image: url('${item.img}')`"></NuxtLink>
            <NuxtLink :to="`/case/${item.id}`" class="group-hover:text-red-600">{{item.title}}</NuxtLink>
            <p class="text-sm text-gray-600">{{style[item.style]}} | {{huxing[item.huxing]}}</p>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script lang='ts' setup>
import { ICase, IWebSite } from '@/config/tyings'
import { useForm } from "vee-validate";
import * as yup from "yup";

const { style, huxing, year } = inject<IWebSite>('website') as IWebSite;
const appConfig = useAppConfig();
const route = useRoute();
const info = reactive({
  msg: '',
  show: false
})

const { data } = await useFetch(appConfig.url + '/case/' + route.params.id);
const dataValue = data.value as ICase;
useHead({
  title: dataValue.title,
  meta: [
    {name: 'keywords', content: dataValue.keywords},
    {name: 'description', content: dataValue.description},
  ]
})

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  tel: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const fetchBtn = handleSubmit(async (value) => {
  const { data } = await useFetch(appConfig.url+'/message', {
    method: 'post',
    body: {...value, path: route.fullPath}
  })
  const dataValue = data.value as {code: number; msg: string}
  info.show = true;
  info.msg = dataValue.msg
  if (dataValue.code == 200) {
    resetForm()
  }
});

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