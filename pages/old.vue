<template>
  <section>
    <section class="bg-[url('/images/house/old/banner.jpg')] bg-cover md:h-110 h-52 bg-center"></section>

    <section class="container hidden md:block mx-auto p-6 bg-white rounded-md shadow-md -translate-y-1/2 relative">
      <h2 class="mb-2 text-lg font-bold">改造师免费上门量房</h2>
      <section class="flex space-x-10">
        <AppInput name="name" label="姓名" class="w-100" />
        <AppInput name="phone" label="手机号" class="flex-1" />
        <button class="bg-red-600 w-52 text-white rounded" @click="fetchBtn">提交</button>
      </section>
      <AppAlert :msg="info.msg" v-model:show="info.show" />
    </section>

    <section class="container mx-auto">
      <AppTitle title="四维一体" desc="一键美颜 居住体验全面升级" bgSize class="mb-7" />

      <AppSwiper isBreak :data="floor1" v-model:activeIndex="activeIndex" slotContainerStartBool>
        <template #default="{value}">
          <section class="md:h-105 h-52 bg-cover bg-center" :style="`background-image: url(${value.url})`"></section>
        </template>
        <template v-slot:swiper-container-start="{data: {index, val}}">
            <span class="inline-block md:w-36 md:py-2 py-1 px-1 text-center hover:cursor-pointer mb-3 md:mb-8" :class="activeIndex == index ? 'bg-red-500 text-white' : 'bg-gray-200'">{{val.title}}</span>
        </template>
      </AppSwiper>

      <AppTel class="mb-6" />
    </section>

    <section class="md:pt-14 pt-6 md:pb-10 pb-3 bg-[url('/images/house/old/solution-bg.jpg')] bg-cover bg-center">
      <section class="container mx-auto">
        <AppTitle title="四维一体" desc="一键美颜 居住体验全面升级" bgSize class="mb-7" />
        <ul class="grid grid-cols-2 md:gap-x-96 md:gap-y-32 gap-x-3 gap-y-3">
          <li v-for="(item, i) in floor2" class="md:w-96 bg-black p-2 md:p-3 bg-opacity-40 text-gray-100" :class="i % 2 == 0 ? 'text-right justify-self-end md:mr-14' : 'md:ml-16'">
            <h4 class="md:text-2xl font-bold border-b-4 border-red-500 inline-block mb-2 pb-1">{{item.title}}</h4>
            <p class="text-sm md:text-base">{{item.desc}}</p>
          </li>
        </ul>
        <AppTel />
      </section>
    </section>

    <section class="container mx-auto md:pt-12 pt-6">
      <AppTitle title="改造实景" desc="唤醒舒适生活的温度" bgSize class="mb-7" />
      <AppSwiper :data="floor3" v-model:activeIndex="activeIndex" slotContainerStartBool>
        <template #default="{value}">
          <section class=" md:h-105 h-40 bg-center bg-cover" :style="`background-image: url(${value.url})`"></section>
        </template>
        <template v-slot:swiper-container-start="{data: {index, val}}">
          <span class="inline-block md:w-36 w-14 md:py-2 py-1 text-sm md:text-base text-center hover:cursor-pointer md:mb-8 mb-3" :class="activeIndex == index ? 'bg-red-500 text-white' : 'bg-gray-200'">{{val.title}}</span>
        </template>
      </AppSwiper>
    </section>

    <section class="md:pt-16 pt-6 px-3 md:px-0">
      <section class="container mx-auto">
        <AppTitle title="旧房六步换新家" desc="理享生活 无需等待" bgSize class="mb-7" />

        <ul class="grid grid-cols-2 gap-3 md:flex flex-wrap justify-between items-center">
          <template v-for="item in floor4">
            <li class="md:w-44 md:h-36 border md:pt-5 pb-3 pt-3 md:pb-3  text-center" v-if="item.title">
              <i class="iconfont" :class="item.icon" style="font-size: 40px"></i>
              <p class="md:mt-2 text-sm md:text-base">{{item.title}}</p>
            </li>
            <i v-else class="iconfont hidden md:inline-block" :class="item.icon" style="font-size: 25px"></i>
          </template>
        </ul>
      </section>
    </section>
    <AppTel class="mb-6" />
  </section>
</template>

<script lang='ts' setup>
import { IWebSite } from '@/config/tyings'
import { useForm } from "vee-validate";
import * as yup from "yup";

const { web } = inject<IWebSite>('website') as IWebSite;
const appConfig = useAppConfig();
const info = reactive({
  msg: '',
  show: false
})
const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  phone: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const fetchBtn = handleSubmit(async (value) => {
  const { data } = await useFetch(appConfig.url + '/message', {
    method: 'post',
    body: { ...value, path: useRoute().fullPath}
  })
  const dataValue = data.value as {code: number; msg: string}
  info.show = true;
  info.msg = dataValue.msg
  if (dataValue.code == 200) {
    resetForm()
  }
});

const activeIndex = ref(0)
useHead({
  title: '旧房翻新 - ' + web.name,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
const floor1 = [
  {title: '墙面',  url: '/images/house/old/pain1.jpg'},
  {title: '空间',  url: '/images/house/old/pain2.jpg'},
  {title: '风格',  url: '/images/house/old/pain3.jpg'},
  {title: '地板',  url: '/images/house/old/pain4.jpg'},
  {title: '电路',  url: '/images/house/old/pain5.jpg'},
  {title: '布局',  url: '/images/house/old/pain6.jpg'},
  {title: '安全',  url: '/images/house/old/pain7.jpg'},
  {title: '厨房',  url: '/images/house/old/pain8.jpg'},
  {title: '卫生',  url: '/images/house/old/pain9.jpg'},
];

const floor2 = [
  {title: '安全性提升', desc: '结合日常功能需求，科学全面的规划电路、水路和气道，对各终端产品提供专业防护和更替，让家0隐患。'},
  {title: '颜值感提升', desc: '从国际审美视角出发，结合时下潮流风尚，进行色彩搭配和产品配置，让家与众不同。'},
  {title: '舒适感提升', desc: '贴合家人的使用习惯和行为动线，全面合理规划居家动线，让居家更舒适。'},
  {title: '功能性提升', desc: '从日常居住需求出发，对整体空间进行功能布局，充分考虑收纳需求。'}
]

const floor3 = [
  {title: '客厅',  url: '/images/house/old/jfhx-case1.png'},
  {title: '厨房',  url: '/images/house/old/jfhx-case2.png'},
  {title: '卧室',  url: '/images/house/old/jfhx-case3.png'},
  {title: '卫生间',  url: '/images/house/old/jfhx-case4.png'},
];

const floor4 = [
  {title: '量房沟通 采集意见',  icon: 'icon-thin-_pencil_rul'},
  {icon: 'icon-youjiantou'},
  {title: '改造师 提供改造方案',  icon: 'icon-book'},
  {icon: 'icon-youjiantou'},
  {title: '成功签约 材料下单',  icon: 'icon-shangpinjiagexinxi'},
  {icon: 'icon-youjiantou'},
  {title: '施工团队 即刻改造',  icon: 'icon-icon1'},
  {icon: 'icon-youjiantou'},
  {title: '收荒保洁 合格验收',  icon: 'icon-jindu'},
  {icon: 'icon-youjiantou'},
  {title: '成功焕新',  icon: 'icon-mubiao'},
];

</script>

<style lang='less' scoped>

</style>