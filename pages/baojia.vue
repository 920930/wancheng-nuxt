<template>
  <section class="bg-[url('/images/baojia/banner.jpg')] bg-cover bg-center md:h-110 h-64"></section>
  <AppTitle title="算算我家装修要花多少钱" desc="5秒快速报价，装修预算早知道！" class="md:my-10 my-3" />
  <section class="container mx-auto md:flex md:mb-10 mb-3 md:space-x-10 px-3 md:px-0">
    <img src="/images/baojia/price_leftbg.jpg" class="hidden md:block">
    <section class="space-y-5 md:space-y-6 flex-1 relative">
      <div class="hidden md:flex items-end space-x-5"><h3 class="text-2xl">装修计算器</h3> <span>已有数万客户通过此功能获取报价</span></div>
      <AppInput label="姓名" name="name" />
      <AppInput label="电话" name="phone" />
      <div class="md:flex justify-between md:space-x-5 space-y-6 md:space-y-0">
        <AppInput label="楼盘名称" name="floor" class="flex-1" />
        <AppInput label="面积" name="area" class="flex-1" />
      </div>
      <AppInput label="户型" name="huxing" type="select" #select>
        <option v-for="(item, i) in huxing" :value="i">{{item}}</option>
      </AppInput>
      <button class="bg-red-600 w-full py-2 text-white" @click="fetchBtn">立即报价</button>
      <AppAlert :msg="info.msg" v-model:show="info.show" />
    </section>
    <aside class="md:w-80">
      <h3 class="text-2xl md:block hidden">您家的装修预算：</h3>
      <ul class="border p-4 text-sm overflow-y-auto space-y-3 md:h-52 h-20 mt-5 mb-4 text-gray-500 scroll" ref="userRef">
        <li class="flex justify-between"><span>赵**</span><span>153****6859</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>黄**</span><span>187****6656</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>188****6549</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>186****6245</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>夏**</span><span>139****5624</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>李**</span><span>132****8656</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>刘**</span><span>158****4897</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>言**</span><span>156****1545</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>武**</span><span>188****2543</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>138****8001</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>朱**</span><span>158****4897</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>杨**</span><span>188****6549</span><span>成功报价</span></li>
      </ul>
      <div class="bg-[url('/images/baojia/server_tel.jpg')] bg-cover bg-center h-20"></div>
    </aside>
  </section>
  <section class="bg-slate-100 md:py-12 py-3 px-3 md:px-0">
    <AppTitle title="成功网络报价即享4大超值福利" desc="线上报价智能预算，线下专享增值服务" />
    <ul class="container mx-auto grid grid-cols-2 md:grid-cols-4 md:mt-7 mt-3 md:gap-5 gap-3">
      <li class="bg-white text-center md:py-8 py-3">
        <h3 class="md:text-5xl text-3xl text-gray-500 font-bold border-b-4 inline-block">01</h3>
        <div class="iconfont icon-lianxishouhou mt-2 icon"></div>
        <div class="md:text-xl font-bold mb-2">专属家居顾问</div>
        <span class="text-gray-500 text-sm md:text-base">1对1专属顾问，全天即时回复</span>
        <AppTel class="md:block hidden" />
      </li>
      <li class="bg-white text-center md:py-8 py-3">
        <h3 class="md:text-5xl text-3xl text-gray-500 font-bold border-b-4 inline-block">02</h3>
        <div class="iconfont icon-thin-_pencil_rul mt-2 icon"></div>
        <div class="md:text-xl font-bold mb-2">免费上门量房</div>
        <span class="text-gray-500 text-sm md:text-base">专业团队上门，免费精准量房</span>
        <AppTel class="md:block hidden" />
      </li>
      <li class="bg-white text-center md:py-8 py-3">
        <h3 class="md:text-5xl text-3xl text-gray-500 font-bold border-b-4 inline-block">03</h3>
        <div class="iconfont icon-shejiguifan mt-2 icon"></div>
        <div class="md:text-xl font-bold mb-2">免费设计方案</div>
        <span class="text-gray-500 text-sm md:text-base">行业设计精英，引领时尚潮流</span>
        <AppTel class="md:block hidden" />
      </li>
      <li class="bg-white text-center md:py-8 py-3">
        <h3 class="md:text-5xl text-3xl text-gray-500 font-bold border-b-4 inline-block">04</h3>
        <div class="iconfont icon-liwulipin mt-2 icon"></div>
        <div class="md:text-xl font-bold mb-2">精美到店礼品</div>
        <span class="text-gray-500 text-sm md:text-base">赠送家装礼包，助力家居豪装</span>
        <AppTel class="md:block hidden" />
      </li>
    </ul>
  </section>
  <AppTitle title="我们的报价更受欢迎" desc="报价项目全面覆盖，预算明细一目了然！" class="md:my-10 my-3" />
  <ul class="container mx-auto md:mb-10 md:space-y-10 space-y-3 px-3 md:px-0">
    <li class="flex items-center md:space-x-10 space-x-3 border-b pb-3">
      <span class="md:text-5xl text-xl font-bold bg-teal-800 p-2 text-white rounded">01</span>
      <i class="iconfont icon-liwulipin mt-2 icon hidden md:block"></i>
      <div class="flex-1">
        <span class="md:text-2xl font-bold">最具参考价值</span>
        <p class="mt-2 text-gray-500 text-sm">以装饰行业多年实践经验为基础，行业资深专家研发系统，更具参考价值的报价。</p>
      </div>
      <span class="border px-5 py-2 rounded-md hidden md:block">更靠谱</span>
    </li>
    <li class="flex items-center md:space-x-10 space-x-3 border-b pb-3">
      <span class="md:text-5xl text-xl font-bold bg-teal-800 p-2 text-white rounded">02</span>
      <i class="iconfont icon-liwulipin mt-2 icon hidden md:block"></i>
      <div class="flex-1">
        <span class="md:text-2xl font-bold">类别更加全面</span>
        <p class="mt-2 text-gray-500 text-sm">施工项目分门别类，一应俱全，项目、人工、主材一清二楚，报价详细，价格透明。</p>
      </div>
      <span class="border px-5 py-2 rounded-md hidden md:block">更靠谱</span>
    </li>
    <li class="flex items-center md:space-x-10 space-x-3 border-b pb-3">
      <span class="md:text-5xl text-xl font-bold bg-teal-800 p-2 text-white rounded">03</span>
      <i class="iconfont icon-liwulipin mt-2 icon hidden md:block"></i>
      <div class="flex-1">
        <span class="md:text-2xl font-bold">步骤更加容易</span>
        <p class="mt-2 text-gray-500 text-sm">在线填写只需输入面积等房屋信息，5秒钟免费报价立即查看。</p>
      </div>
      <span class="border px-5 py-2 rounded-md hidden md:block">更靠谱</span>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { useForm } from "vee-validate";
import { IWebSite } from '@/config/tyings';
import * as yup from "yup";

const appConfig = useAppConfig();
const route = useRoute();
const { huxing, web } = inject<IWebSite>('website')!;
const userRef = ref<HTMLElement>();
const info = reactive({
  msg: '',
  show: false
})

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  phone: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
  floor: yup.string().required("楼盘必填"),
  area: yup.string().required("面积必填"),
  huxing: yup.string().required("户型必填"),
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

useHead({
  title: '在线报价 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
</script>

<style scoped lang="less">
.scroll::-webkit-scrollbar{
  display: none;
}
.icon{
  font-size: 30px;
}
@media(min-width: 768px){
  .icon{
    font-size: 60px;
  }
}
</style>