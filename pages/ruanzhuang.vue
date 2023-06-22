<template>
  <section>
    <section class="md:h-110 h-56 bg-cover bg-center bg-[url('/images/house/quanwu/banner.jpg')]"></section>
    <section class="container hidden md:block mx-auto p-6 bg-white rounded-md shadow-md -translate-y-1/2 relative">
      <h2 class="mb-2 text-lg font-bold">获取装修方案</h2>
      <section class="flex space-x-10">
        <AppInput name="name" label="姓名" class="w-100" />
        <AppInput name="phone" label="手机号" class="flex-1" />
        <button class="bg-red-600 w-52 text-white rounded" @click="fetchBtn">提交</button>
      </section>
      <AppAlert :msg="info.msg" v-model:show="info.show" />
    </section>

    <section class="container mx-auto flex">
      <img class="hidden md:block" src="/images/house/quanwu/expan1.jpg" alt="">
      <div class="pt-2 md:pt-8 md:pl-10 pl-2 relative">
        <h3 class="md:text-4xl text-2xl font-bold text-gray-700">扩容<span class="md:text-6xl text-2xl text-red-600 inline-block">30%</span>的整体空间</h3>
        <p class="md:text-2xl my-4 text-gray-700">不止24种美学定制选择</p>
        <p class="text-gray-300 md:text-3xl text-xl my-4">WHOLE HOUSE</p>
        <p class="text-gray-400 md:text-4xl text-2xl">CUSTOMIZATION</p>
        <p class="md:text-xl mt-4 text-gray-600 md:leading-9">洞察45W+客户需求与偏好，满足用户储物、收纳功能的同事，更能满足多细致个性化需求，真正实现“美学生活”。</p>
        <ul class="flex justify-evenly md:absolute bottom-5 left-10 md:text-2xl md:space-x-10 mt-4 md:mt-0">
          <li class="cursor-pointer" @click="toucheBtn(key)" v-for="(item, key) in floor1" :key="key" :class="{'text-red-500 font-bold': index === key}">{{item.title}}</li>
        </ul>
      </div>
    </section>

    <ul class="container mx-auto md:my-6 my-2">
      <template v-for="(item, key) in floor1" :key="key">
        <li v-show="index === key" class="flex justify-center"><img :src="item.url" :alt="item.title"></li>
      </template>
    </ul>

    <AppSwiper :data="floor2" v-model:activeIndex="activeIndex">
      <template #default="{value}">
        <section class="md:h-105 h-52 flex">
          <aside class="h-full w-1/2 bg-cover bg-center" :style="`background-image: url(${value.url})`"></aside>
          <div class="flex-1 bg-slate-800 md:pt-14 md:px-20 px-2 text-gray-300">
            <h3 class="md:text-5xl text-xl mt-4 md:mt-0 uppercase">appearance</h3>
            <h3 class="md:text-3xl text-xs md:pt-5">聚焦高颜值  定制全屋美学空间</h3>
            <div class="flex md:mt-16 mt-4">
              <div class="md:w-14 mr-2 md:mr-0 text-yellow-700 font-bold md:text-3xl italic">{{value.id}}</div>
              <section class="flex-1">
                <h4 class="md:text-2xl text-sm">{{value.title}}</h4>
                <p class="md:mt-6 md:leading-7 hidden md:block">{{value.desc}}</p>
              </section>
            </div>
            <AppTel isWhite class="mt-16 hidden md:block" />
          </div>
        </section>
      </template>
    </AppSwiper>

    <section class="md:my-14 my-6 container mx-auto">
      <AppTitle title="全球严选好材料" desc="有颜有品带来舒适体验" bgSize />
      <ul class="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-5 px-2 md:px-0 mt-6">
        <li v-for="item in floor3" class="text-center bg-gray-100">
          <i :class="`text-gray-800 iconfont ${item.icon} icon`"></i>
          <h3 class="md:text-3xl font-bold text-gray-700">{{item.title}}</h3>
          <p class="text-gray-400 my-2 text-sm md:text-base">{{item.desc1}}</p>
          <p class="text-gray-400 mb-2 text-sm md:text-base">{{item.desc2}}</p>
        </li>
      </ul>
    </section>

    <section class="md:h-105 h-64 bg-cover bg-center bg-[url('/images/house/quanwu/quality-bg.jpg')]">
      <section class="container mx-auto text-gray-300 text-lg px-2">
        <h3 class="md:text-6xl text-2xl md:pt-28 pt-8">QUALITY</h3>
        <h4 class="md:text-4xl md:mt-10 mt-4">铸造细节品质 德系精工制造</h4>
        <p class="md:mt-16 mt-4 text-sm md:text-base">选择用户需求驱动的oem大厂定制生产，德系精工，引进德国豪迈电子开料锯、</p>
        <p class="text-sm md:text-base">重型封边机、威力四面刨等原装进口先进高精机器，包覆&膜压、一体式无痕封</p>
        <p class="text-sm md:text-base">边等工艺，令表面色泽与纹理更细腻，匠心细节让颜值与品质更有保证。</p>
      </section>
    </section>

    <section class="container mx-auto flex md:my-14 my-6">
      <div class="md:h-100 w-1/2 md:bg-center bg-right bg-cover bg-[url('/images/house/quanwu/t1.jpg')]"></div>
      <div class="md:pt-8 pt-2 md:pl-12 px-2 text-gray-700 flex-1">
        <h3 class="md:text-5xl text-2xl">DELIVERY</h3>
        <h4 class="md:text-4xl font-bold md:mt-8 mt-2">实现高标准交付</h4>
        <h4 class="md:text-4xl text-sm md:mt-5 mt-2">自有行业高技术安装工人</h4>
        <ul class="md:mt-10 mt-2 space-y-5 md:text-xl text-sm">
          <li><span class="text-red-600 italic md:mr-4 mr-1 text-2xl">01</span>无缝接入美学整配服务流程，递进式分段交付，一站式服务体验</li>
          <li><span class="text-red-600 italic md:mr-4 mr-1 text-2xl">02</span>摒弃外包不靠谱，无售后安装服务</li>
          <li><span class="text-red-600 italic md:mr-4 mr-1 text-2xl">03</span>本地集散仓储，及时高效解决补件、差件、售后等问题</li>
          <li class="hidden md:block"><span class="text-red-600 italic md:mr-4 mr-1 text-2xl">04</span>精确到毫厘的高超技艺，贴心到家的售后服务</li>
        </ul>
      </div>
    </section>
    
    <section class="container mx-auto flex justify-center md:my-14 my-6">
      <AppTel />
    </section>

    <section class="md:py-14 py-4 bg-cover bg-center bg-[url('/images/house/quanwu/luxury-bg.jpg')]">
      <section class="container mx-auto">
        <AppTitle title="PK定制" desc="95%精装房业主选择齐家典尚装饰" bgSize whiteColor />

        <section class="md:flex md:px-48 px-2 mt-6">
          <AppSwiper :data="floor4" v-model:activeIndex="acIndex" :showPagination="false" class="flex-1">
            <template #default="{value}">
              <section class="md:h-100 h-52 w-full bg-cover bg-center" :style="`background-image: url(${value.url})`"></section>
            </template>
          </AppSwiper>
          <ul class="md:w-32 ml-10 pt-7 space-y-10 hidden md:block">
            <li v-for="(item, i) in floor4" :key="i" :class="acIndex == i ? 'text-gray-100' : 'text-gray-400'" class="cursor-pointer" @click="acCheck(i)">
              <span class="md:text-2xl">{{item.title}}</span>
              <p>{{item.desc}}</p>
            </li>
          </ul>
        </section>
      </section>
    </section>

  </section>
</template>

<script setup lang="ts">
import { IWebSite } from '@/config/tyings';
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
useHead({
  title: '全屋定制 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description}
  ]
})

const index = ref(0),
      activeIndex = ref(0),
      acIndex = ref(0);

const floor1 = [
  {title: '空间扩容', url: '/images/house/quanwu/expan2.jpg'},
  {title: '功能收纳', url: '/images/house/quanwu/expan3.png'},
  {title: '板材配置', url: '/images/house/quanwu/expan4.png'},
]

const floor2 = [
  {id: '01', title: '洞察用户需求，聚焦风格 满足不同美学生活', url: '/images/house/quanwu/appearance1.jpg', desc: '关注前沿全屋定制家居时尚趋势与高新技术，定期迭代更新板材/饰面与工艺等，提供不止60种板材/54种门型/超36种同价可选板材花色'},
  {id: '02', title: '落地还原的 美学全屋定制方案', url: '/images/house/quanwu/appearance2.jpg', desc: '从材料、颜色到纹理等真实细节3D建模，720°全方位呈现全屋定制方案，100%落地还原方案'},
  {id: '03', title: '不止美学定制 更是能融入整体空间的全案设计', url: '/images/house/quanwu/appearance3.jpg', desc: '专业定制设计师联合美居规划师、改造规划师提供全案设计服务，结合软硬装修进行整体规划与设计，让定制产品融入整体美学整配效果'},
  {id: '04', title: '细节极致要求 让整体空间美学效果更出众', url: '/images/house/quanwu/appearance4.jpg', desc: '行业独家——门、柜、踢脚线同质同色高端一体无痕封边技术，让细节处也尽显完美本色'},
]

const floor3 = [
  {title: '进口板材', icon: 'icon-yuancailiaojiagong', desc1: '密度更均匀，稳定性更强', desc2: '美国carb-p2认证/达日本F4星环保标准'},
  {title: '五金器材', icon: 'icon-wujin', desc1: '一线大牌', desc2: '品质保证、持久耐用'},
  {title: '进口饰面纸', icon: 'icon-layer', desc1: '抗紫外线高达8级', desc2: '高颜值、不变形、不变色'},
  {title: '精选进口膜皮', icon: 'icon-leipigepijux', desc1: '纹理自然', desc2: '触感细腻、风格百搭'},
  {title: '环保涂装', icon: 'icon-leiyanliaoyouqix', desc1: '无溶剂uv漆/水性漆为主', desc2: 'PU漆为辅'},
  {title: '拉手配件', icon: 'icon-zhuangxiushangjia-', desc1: '高颜值、多材质、多造型', desc2: '拉手配件，风格强匹配'},
]

const floor4 = [
  {title: '花色', desc: 'colour', url: '/images/house/quanwu/compare1.jpg'},
  {title: '融合度', desc: 'blend', url: '/images/house/quanwu/compare2.jpg'},
  {title: '设计', desc: 'design', url: '/images/house/quanwu/compare3.jpg'},
  {title: '安装', desc: 'install', url: '/images/house/quanwu/compare4.jpg'},
  {title: '服务', desc: 'service', url: '/images/house/quanwu/compare5.jpg'},
]

const toucheBtn = (i: number) => index.value = i
const acCheck =  (i: number) => acIndex.value = i
onMounted(() => {
  setInterval(() => index.value >= 2 ? index.value = 0 : index.value += 1, 6000)
})
</script>

<style scoped>
.icon{
  font-size: 60px;
}
@media(max-width: 768px){
  .icon{
    font-size: 40px;
  }
}
</style>