<template>
  <article class="bg-slate-100 md:pb-12 pb-3">
    <section class="bg-[url('/images/index/footer-bg.jpg')] md:bg-[url('/images/index/product-bg.jpg')] md:py-12 py-3 pt-12">
      <section class="container mx-auto flex px-3 md:px-0">
        <section class="md:w-80 w-44 h-52 md:h-auto bg-cover bg-center border-4 border-white md:border-yellow-700" :style="`background-image: url('${user.img}')`"></section>
        <section class="flex-1 relative md:mt-6 mt-12 bg-white md:bg-opacity-0 md:pl-6 pl-2 pt-2 md:pt-0">
          <div class="md:text-6xl font-bold text-yellow-700 float-right mr-2 md:mr-0">
            <i class="md:hidden iconfont icon-hot text-red-500"></i>
            <span class="hidden md:inline-block opacity-10">DESIGNER</span>
          </div>
          <h2 class="md:text-4xl text-lg">
            <span class="font-bold md:text-red-600 drop-shadow-lg">{{user.name}}</span>
            <i class="md:text-sm md:ml-5 ml-2 text-xs">{{level[user.level]}}</i>
          </h2>
          <p class="mt-7 hidden md:block">毕业院校：{{user.info.edu}}</p>
          <p class="my-7 hidden md:block">设计经验：{{year[user.timer]}}</p>
          <div class="pb-7">
            <h4 class="md:inline-block border-b-2 text-xl border-red-500 text-red-600 hidden">设计理念</h4>
            <p class="border-t pt-3 md:mb-7 text-sm md:text-base text-gray-500 md:text-black hidden md:block">{{user.info.idea}}</p>
            <p class="border-t pt-3 md:mb-7 text-xs md:text-base text-gray-500 md:text-black md:hidden">{{user.info.idea.length > 80 ? user.info.idea.slice(0, 80) + '...' : user.info.idea}}</p>
            <h4 class="hidden md:inline-block border-b-2 text-xl border-red-500 text-red-600">擅长风格</h4>
            <p class="border-t pt-3 hidden md:block">
              <template v-for="(sy, i) in user.info.style">
                {{ i === user.info.style.length - 1 ? style[sy] : style[sy] + '、'}}
              </template>
            </p>
          </div>
        </section>
        <section class="w-96 border ml-10 bg-gray-700 bg-opacity-50 p-6 hidden md:block relative">
          <h4 class="text-center text-white text-2xl">免费申请设计初案</h4>
          <p class="text-center text-white text-sm mt-2">提交您的信息专业家装顾问1对1服务</p>
          <AppInput name="name" label="你的称呼" class="mt-4" />
          <AppInput name="tel" label="手机号" class="mt-7" />
          <AppInput name="area" label="房屋面积" class="my-7" />
          <button class="bg-red-600 text-white rounded w-full py-2.5 active:bg-red-500" @click="sendBtn">立即预约</button>
          <AppAlert :msg="info.msg" v-model:show="info.show" />
        </section>
      </section>
      <section class="md:hidden px-3">
        <section class="bg-white p-3 text-xs text-gray-500 flex justify-between">
          <div>设计经验：<span class="text-gray-900 font-bold">{{year[user.timer]}}</span></div>
          <div>毕业院校：<span class="text-gray-900 font-bold">{{user.info.edu}}</span></div>
        </section>
      </section>
    </section>

    <section class="container mx-auto md:p-5 p-3 md:pb-3 md:mt-12 mt-3 bg-white" v-if="user.cases.length">
      <h3><span class="md:text-xl text-lg font-bold border-b-4 pb-2 border-red-500">TA作品</span> <i class="text-gray-500 text-xs md:text-sm"> / REPRESENTATIVE  WORKS</i></h3>
      <p class="border-t pt-2 mt-2"></p>
      <ul class="grid md:grid-cols-4 gap-4 py-3">
        <li class="group border-b pb-2" v-for="anli in user.cases">
          <section class="w-full h-52 mb-3 md:h-56 overflow-hidden">
            <NuxtLink :to="`/case/${anli.id}`"><div class="w-full h-full bg-center bg-cover group-hover:scale-105 duration-200" :style="`background-image: url('${anli.img}')`"></div></NuxtLink>
          </section>
          <section>
            <NuxtLink :to="`/case/${anli.id}`" class="md:text-lg group-hover:text-red-500">{{anli.title}}</NuxtLink>
            <span class="text-sm text-gray-500 ml-5">{{style[anli.style]}} {{anli.area}}平 {{huxing[anli.huxing]}}</span>
            <i class="iconfont icon-search float-right" style="font-size: 16px;"></i>
          </section>
        </li>
      </ul>
    </section>

    <section class="container mx-auto md:p-5 p-3 md:pb-3 md:mt-12 mt-3 bg-white" v-if="user.rooms.length">
      <h3><span class="md:text-xl text-lg font-bold border-b-4 pb-2 border-red-500">TA工地</span> <i class="text-gray-500 text-xs md:text-sm"> / REPRESENTATIVE  SITE</i></h3>
      <p class="border-t pt-2 mt-2"></p>
      <ul class="grid md:grid-cols-4 gap-4 py-3">
        <li class="group border-b pb-2" v-for="room in user.rooms">
          <section class="w-full h-52 mb-3 md:h-56 overflow-hidden">
            <NuxtLink :to="`/room/${room.id}`"><div class="w-full h-full bg-center bg-cover group-hover:scale-105 duration-200" :style="`background-image: url('${room.img}')`"></div></NuxtLink>
          </section>
          <section>
            <NuxtLink :to="`/room/${room.id}`" class="md:text-lg group-hover:text-red-500">{{room.title}}</NuxtLink>
            <span class="text-sm text-gray-500 ml-5">{{state[room.state]}}</span>
            <i class="iconfont icon-more1 float-right" style="font-size: 20px;"></i>
          </section>
        </li>
      </ul>
    </section>
  </article>
</template>

<script lang='ts' setup>
import { IWebSite, IUser } from '@/config/tyings';
import { useForm } from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  tel: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
  area: yup.string().required("姓名必填"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const info = reactive({
  msg: '',
  show: false
})

const sendBtn = handleSubmit(async (value) => {
  const {data} = await useFetch(appConfig.url + '/message', {
    method: 'post',
    body: {...value, path: useRoute().fullPath}
  })
  const dataValue = data.value as {code: number; msg: string}
  info.show = true;
  info.msg = dataValue.msg
  if (dataValue.code == 200) {
    resetForm()
  }
})

const route = useRoute(),
      appConfig = useAppConfig();

const { data } = await useFetch(appConfig.url + '/user/' + route.params.id)
const user = data.value as IUser;
const { level, huxing, style, state, web, year } = inject<IWebSite>('website') as IWebSite;

useHead({
  title: `${user.name} - ${web.title}`,
  meta: [
    {name: 'keywords', content: `${user.name},${web.keywords}`},
    {name: 'description', content: user.info.idea},
  ]
})
</script>

<style lang='less' scoped>

</style>