<template>
  <section class="bg-slate-100 md:py-12">
    <section class="container mx-auto box-border" v-if="room">

      <section class="bg-white md:p-6 flex flex-col md:flex-row">
        <div class="md:flex-1 bg-cover bg-center md:mr-8 h-48 md:h-auto" :style="`background-image: url('${room.img}')`"></div>
        <div class="md:w-100 md:py-7 p-3 md:p-0">
          <h2 class="md:text-2xl text-lg font-bold">{{room.title}} | {{room.area}}平米</h2>
          <p class="md:my-8 my-3 text-sm">{{room.description}}</p>
          <div class="border-b pb-3">
            <span class="text-yellow-600 text-sm md:text-base"><i class="iconfont icon-time mr-1 text-black"> 开工时间：</i>{{room.time}}</span>
            <span @click="openGd = true" class="float-right cursor-pointer text-red-500 font-bold text-sm md:text-base">预约看工地</span>
          </div>
          <ul class="grid grid-cols-2 md:gap-7 gap-3 md:h-60 h-40 md:mt-10 mt-3 md:text-sm">
            <li class="bg-cover bg-top relative" :style="`background-image: url('${room.member.img}')`">
              <span class="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-slate-200 py-1">工长：{{room.member.name}}</span>
            </li>
            <li class="bg-cover bg-top relative" :style="`background-image: url('${room.user.img}')`">
              <span class="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-slate-200 py-1">设计师：{{room.user.name}}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-white md:mt-8 mt-3 md:grid grid-cols-4" v-for="item in room.content">
        <section class="md:border-r flex md:justify-center items-center pl-2 md:pl-0 pt-2 md:pt-0 -mb-3 md:-mb-0">
          <i class="iconfont icon-xiangmu icon"></i>
          <div class="md:ml-3 ml-1">
            <p class="md:mb-2.5 md:text-2xl font-bold text-green-600">项目进度：</p>
            <span class="md:text-2xl text-sm">{{state[item.state]}}</span>
          </div>
        </section>
        <section class="w-full col-span-3 md:p-5 p-3">
          <AppSwiper :data="item.images" isBreak v-slot="{value}">
            <div class="md:h-72 h-44 w-full bg-cover bg-center" :style="`background-image: url(${value});`"></div>
          </AppSwiper>
          <p class="md:mt-5 mt-2 text-sm leading-6">{{item.text}}</p>
        </section>
      </section>

    </section>

    <Dialog v-model:open="openGd" meidaWidth height="h-100" top-img="/images/baojia/floor-gd.jpg">
      <AppInput name="name" label="姓名" />
      <AppInput name="phone" label="手机号" class="mt-5" />
      <AppInput name="note" label="参观时间" class="mt-5" />
      <button class="w-full bg-red-600 text-white py-2 mt-5" @click="sendBtn">预约参观工地</button>
    </Dialog>

    <div v-if="successData.isShow" class="absolute z-50 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-2 text-white rounded-md text-sm">{{successData.msg}}</div>
  </section>
</template>

<script lang='ts' setup>
// import { getContent } from '@/api'
import { IWebSite, IRoom } from '@/config/tyings';
import { useForm } from "vee-validate";
import * as yup from "yup";

const appConfig = useAppConfig()
const openGd = ref(false),
      successData = reactive({
        isShow: false,
        msg: ''
      })

const route = useRoute();
const { data } = await useFetch(appConfig.url + '/room/' + route.params.id);
const room = data.value as IRoom;
const { state } = inject<IWebSite>('website') as IWebSite;

useHead({
  title: room.title + room.area + '平米' + state[room.state],
  meta: [
    {name: 'keywords', content: `${room.title},${state[room.state]}`},
    {name: 'description', content: room.description},
  ]
})

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  tel: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const info = reactive({
  msg: '',
  show: false
})

const sendBtn = handleSubmit(async (value) => {
  const { data } = await useFetch(appConfig.url + '/message', {
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
</script>

<style lang='less' scoped>
.icon{
  font-size: 50px;
}
@media(min-width: 768px){
  .icon{
    font-size: 80px;
  }
}
</style>