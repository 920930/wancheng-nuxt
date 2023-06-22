<template>
  <section>
    <section class="bg-[url('/images/house/new/banner.jpg')] bg-cover md:h-110 h-56 bg-center"></section>

    <section class="container hidden md:block mx-auto p-6 bg-white rounded-md shadow-md -translate-y-1/2 relative">
      <h2 class="mb-2 text-lg font-bold">获取装修方案</h2>
      <section class="flex space-x-10">
        <AppInput name="name" label="姓名" class="w-100" />
        <AppInput name="phone" label="手机号" class="flex-1" />
        <button class="bg-red-600 w-52 text-white rounded" @click="fetchBtn">提交</button>
      </section>
      <AppAlert :msg="info.msg" v-model:show="info.show" />
    </section>

    <section class="container mx-auto md:pb-10 pb-3 pt-3 md:pt-0">
      <AppTitle title="五大主材" desc="国内大牌 绝对实力派 你要想要的 我们都有" bgSize class="mb-7" />
      <AppSwiper :data="floor1" :breakpoints="null" v-model:activeIndex="activeIndex" slotContainerStartBool>
        <template #default="{value}">
          <section class="md:h-100 md:flex relative">
            <section class="md:h-full h-48 flex-1 bg-cover" :style="`background-image: url(${value.url})`"></section>
            <section class="md:w-100 h-44 md:h-auto bg-slate-200 md:p-8 p-3 text-center text-gray-800">
              <h2 class="md:text-7xl text-2xl font-bold md:my-10">{{value.title}}</h2>
              <h3 class="md:text-2xl mt-1">{{value.ftitle}}</h3>
              <p class="h-0.5 bg-gray-400 md:mt-10 md:mb-8 inline-block w-1/2"></p>
              <p class="text-sm md:text-base mt-1">{{value.desc}}</p>
            </section>
          </section>
        </template>
        <template v-slot:swiper-container-start="{data: {index, val}}">
          <span class="inline-block text-sm md:text-base w-14 md:w-32 text-center py-2 hover:cursor-pointer md:mb-8 mb-2" :class="activeIndex == index ? 'bg-red-500 text-white' : 'bg-gray-200'">{{val.title}}</span>
        </template>
      </AppSwiper>

      <AppTel />
    </section>

    <section class="bg-[url('/images/house/new/kitchen-bg.jpg')] bg-cover bg-center md:pt-16 pt-3">
      <section class="container mx-auto relative">
        <AppTitle title="厨房装修" desc="超强性能，收纳扩容，下厨更轻松" bgSize />
        <aside class="md:h-96 h-56"></aside>

        <ul class="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 md:p-10 p-3 relative" style="background-color: rgba(0,0,0,.4)">
          <li class="relative overflow-hidden group" v-for="item in flool2">
            <div class="md:h-56 h-28 bg-cover bg-center group-hover:scale-105 duration-300" :style="`background-image: url('${item.url}');`"></div>
            <div class="absolute bottom-0 left-0 w-full h-full md:h-auto py-5 bg-black bg-opacity-40 text-white text-center">
              <h4 class="md:text-2xl text-xl mb-2">{{item.title}}</h4>
              <p class="md:text-base text-sm">{{item.desc}}</p>
            </div>
          </li>
        </ul>
      </section>
    </section>

    <section class="bg-[url('/images/house/new/bathroom-bg.jpg')] bg-cover bg-center md:pt-16 pt-4">
      <section class="container mx-auto relative">
        <AppTitle title="卫浴装修" desc="星选卫浴品质，给家美好升级" bgSize />
        <aside class="md:h-96 h-36 md:py-10"></aside>

        <ul class="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 md:p-10 p-3 relative" style="background-color: rgba(0,0,0,.4)">
          <li class="relative overflow-hidden group" v-for="item in flool3">
            <div class="md:h-56 h-28 bg-cover bg-center group-hover:scale-105 duration-300" :style="`background-image: url('${item.url}');`"></div>
            <div class="absolute bottom-0 left-0 w-full h-full md:h-auto py-5 bg-black bg-opacity-40 text-white text-center">
              <h4 class="md:text-2xl text-xl mb-2">{{item.title}}</h4>
              <p class="md:text-base text-sm">{{item.desc}}</p>
            </div>
          </li>
        </ul>
      </section>
    </section>

    <section class="container mx-auto">
      <AppTitle title="个性主题" desc="按需定制设计个性化主题墙，空间重磅添彩" bgSize class="md:my-10 my-3" />

      <ul class="grid grid-cols-6 md:gap-5 gap-2 md:mb-12 mb-3 px-3 md:px-0">
        <li v-for="(item, i) in flool4" class="md:h-80 h-32 overflow-hidden group" :class=" i < 2 ? 'col-span-3' : 'col-span-2'">
          <aside class="w-full h-full group-hover:scale-105 duration-200 bg-cover bg-center" :style="`background-image: url('${item.url}');`"></aside>
        </li>
      </ul>
    </section>
    
    <section class="bg-gray-200 md:py-12 py-3 px-3 md:px-0">
      <section class="container mx-auto">
        <AppTitle title="良心辅材" desc="看不见的细节主义 高标细节，让新家更健康" bgSize class="mb-10" />
        <ul class="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-3 md:mb-16 relative">
          <li class="relative overflow-hidden group" v-for="item in flool5">
            <div class="md:h-100 h-56 bg-cover bg-center group-hover:scale-105 duration-300" :style="`background-image: url('${item.url}');`"></div>
            <div class="absolute bottom-0 left-0 w-full h-32 pt-4 bg-black bg-opacity-40 text-white text-center">
              <h4 class="md:text-2xl mb-2">{{item.title}}</h4>
              <p class="px-2 text-sm md:text-base">{{item.desc}}</p>
            </div>
          </li>
        </ul>
        <AppTel />
      </section>
    </section>
    
    <section class="container mx-auto md:px-0 px-3 md:pb-10 pb-3">
      <AppTitle title="品质心选" desc="在你忽略的地方，也关怀备至" bgSize class="md:my-10 my-3" />

      <ul class="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-3 md:mb-16 mb-3">
        <li v-for="item in flool6">
          <div class="md:h-60 h-32 bg-cover bg-center" :style="`background-image: url('${item.url}');`"></div>
          <h4 class="text-lg font-bold text-center md:my-3 my-2">{{item.title}}</h4>
          <p class="text-sm md:text-base">{{item.desc}}</p>
        </li>
      </ul>
      <AppTel />
    </section>

    <section class="md:py-14 py-3 bg-[url('/images/house/new/map-bg.jpg')] bg-cover">
      <section class="container mx-auto px-3 md:px-0">
        <AppTitle title="进口级品质" desc="你的生活，不可以将就" bgSize whiteColor />

        <div class="flex flex-col items-center text-white mt-10">
          <img src="/images/house/new/map.png" alt="">
          <p>齐家典尚装饰严选德/美/英/日等多国尖货</p>
          <p>从洁具、橱柜、地板、木门、瓷砖五大维度打造品质材料体系</p>
          <p>实现100%材料品牌化率、80%材料品类进口率</p>
        </div>

        <ul class="grid grid-cols-3 md:grid-cols-8 gap-3 md:mt-10 mt-3">
          <li v-for="img in flool7" class="bg-white p-1 flex justify-center"><img :src="img.url" alt=""></li>
        </ul>

        <AppTel isWhite />
      </section>
    </section>
  </section>
</template>

<script lang='ts' setup>
import { IWebSite } from '@/config/tyings'
import { useForm } from "vee-validate";
import * as yup from "yup";
const info = reactive({
  msg: '',
  show: false
})
const appConfig = useAppConfig();
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
const { web } = inject<IWebSite>('website') as IWebSite;
// inject<(str: string) => void>('changeTitle')('新房整装')
useHead({
  title: '新房整装 - ' + web.name,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
const activeIndex = ref(0)
const floor1 = [
  {title: '瓷砖', ftitle: '意大利TOP品牌，1.6m大板', desc: '意大利原厂进口，40+年历史沉淀，前沿设计', url: '/images/house/new/main1.jpg'},
  {title: '地板', ftitle: '葡萄牙进口，更长、更厚、更环保', desc: '葡萄牙进口Castro多层实木地板，表层厚度2.5mm，单板最长2.4米，欧标环保更安心。', url: '/images/house/new/main2.jpg'},
  {title: '木门', ftitle: '意大利CLEAF进口面板，高级纹理感', desc: '进口饰面门/烤漆门——高颜值进口表层，超强静音防撞磁吸锁，门楣到顶更美观', url: '/images/house/new/main3.jpg'},
  {title: '卫浴', ftitle: '一线大牌，品质和颜值双保障', desc: '潮牌尖货，随心搭配，样式丰富，风格多样', url: '/images/house/new/main4.jpg'},
  {title: '橱柜', ftitle: '收纳扩容，按需定制完美空间', desc: '环保基材，进口膜皮，品质五金，和将就说拜拜', url: '/images/house/new/main5.jpg'},
];
const flool2 = [
  {title: '手工水槽', desc: '超大宽盆，并排放下两口锅', url: '/images/house/new/kit1.jpg'},
  {title: '感应手扫灯', desc: '一扫即亮，科技感满分', url: '/images/house/new/kit2.jpg'},
  {title: '定制橱柜', desc: '低区全拉出设计，低区取物不用掏', url: '/images/house/new/kit3.jpg'},
  {title: '石英石台面', desc: '加宽5cm，操作不拥挤', url: '/images/house/new/kit4.jpg'}
]
const flool3 = [
  {title: '马桶', desc: '智能马桶&马桶盖，完美如厕体验', url: '/images/house/new/bathroom1.jpg'},
  {title: '面盆', desc: '防溢水设计，材质易洁更耐用', url: '/images/house/new/bathroom2.jpg'},
  {title: '水龙头', desc: '气泡水流，出水不飞溅', url: '/images/house/new/bathroom3.jpg'},
  {title: '卫浴柜', desc: 'U型槽设计，抽屉深度不受限', url: '/images/house/new/bathroom4.jpg'}
]
const flool4 = [
  {url: '/images/house/new/wall1.jpg'},
  {url: '/images/house/new/wall2.jpg'},
  {url: '/images/house/new/wall3.jpg'},
  {url: '/images/house/new/wall4.jpg'},
  {url: '/images/house/new/wall5.jpg'}
]
const flool5 = [
  {title: '水管电线，久经考验', desc: '抗菌内壁水管，寿命长达50+年；欧标环保电线，阻燃外层', url: '/images/house/new/aux1.jpg'},
  {title: '开关插座，品质大牌', desc: '欧普面板，品质过硬，安全省心', url: '/images/house/new/aux2.jpg'},
  {title: '天然石材，温润角落', desc: '窗台石、门槛石精选天然大理石，强度升级，纹理自然', url: '/images/house/new/aux3.jpg'},
  {title: '进口地板，环保可靠/入墙龙头', desc: '欧标环保，防溅防水，不开裂、不发霉', url: '/images/house/new/aux4.jpg'}
]
const flool6 = [
  {title: '防雾镜', desc: '无极调光，镜面触摸开关即可调节灯光颜色，低温快速除雾，梳妆不用等', url: '/images/house/new/quality1.jpg'},
  {title: '抽拉水龙头', desc: '万向调整，清洗范围广；内置铜芯，陶瓷阀芯加厚密封，三层电镀，整体亮丽如镜，不止时尚更省心', url: '/images/house/new/quality2.jpg'},
  {title: '定制陶瓷台盆', desc: '高温煅烧，釉质细腻，触感温润高端定制，时尚个性，与全屋风格超强契合', url: '/images/house/new/quality3.jpg'},
  {title: '网红万向旋转面盆龙头/入墙龙头', desc: '冷热水双控，角度随心转;高度自由，可洗头、漱口入墙设计，展现极致空间美学', url: '/images/house/new/quality4.jpg'}
]
const flool7 = [
  {url: '/images/house/new/import1.jpg'},
  {url: '/images/house/new/import2.jpg'},
  {url: '/images/house/new/import3.jpg'},
  {url: '/images/house/new/import4.jpg'},
  {url: '/images/house/new/import5.jpg'},
  {url: '/images/house/new/import6.jpg'},
  {url: '/images/house/new/import7.jpg'},
  {url: '/images/house/new/import8.jpg'},
  {url: '/images/house/new/import9.jpg'},
  {url: '/images/house/new/import10.jpg'},
  {url: '/images/house/new/import11.jpg'},
  {url: '/images/house/new/import12.jpg'},
  {url: '/images/house/new/import13.jpg'},
  {url: '/images/house/new/import14.jpg'},
  {url: '/images/house/new/import15.jpg'},
  {url: '/images/house/new/import16.jpg'},
]
</script>