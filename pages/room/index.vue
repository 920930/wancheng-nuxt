<template>
  <section class="bg-slate-100 md:pb-12 pb-5">
    <aside class="bg-[url('/images/room/bg.jpg')] md:h-100 h-52 bg-center bg-cover"></aside>
    <ul class="container mx-auto md:my-12 my-5 space-y-8 px-3">
      <li class="flex group bg-white shadow hover:shadow-md" v-for="room in rooms.data">
        <NuxtLink :to="`/room/${room.id}`" class="md:w-96 w-36 inline-block overflow-hidden md:mr-10 mr-3">
          <section class="w-full h-full bg-center bg-cover group-hover:scale-105 duration-200" :style="`background-image: url('${room.img}');`"></section>
        </NuxtLink>
        <section class="flex-1 md:py-7 py-2 md:pr-10 pr-3">
          <NuxtLink :to="`/room/${room.id}`" class="md:text-2xl font-bold group-hover:text-red-600">工地：{{room.title}}</NuxtLink>
          <p class="md:mt-12 mt-1 md:space-x-10 space-y-1 md:space-y-0 flex md:block flex-col text-sm md:text-base text-gray-600">
            <span>业主：{{room.name}}</span>
            <span>户型：{{huxing[room.huxing]}}</span>
            <span>面积：{{room.area}}㎡</span>
            <span class="md:hidden">阶段：{{state[room.state]}}</span>
            <span class="hidden md:inline-block">开工时间：{{room.time}}</span>
            <NuxtLink :to="`/room/${room.id}`" class="float-right hidden md:inline-block bg-red-600 group-hover:bg-red-700 text-white px-3 py-2">查看详情</NuxtLink>
          </p>
          <ul class="hidden md:flex mt-14">
            <li class="border-t w-32 text-center pt-6 relative" :class="{'border-t-red-500': index <= room.state }" v-for="(item, index) in state">
              <em class="border rounded-full absolute p-2.5 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" :class="index <= room.state ? 'border-red-500 bg-red-300' : 'bg-white'"></em>{{item}}
            </li>
          </ul>
        </section>
      </li>
    </ul>
    <Pagination v-model:page="info.page" :total="rooms.total" :size="info.size" @change="getRooms"></Pagination>
  </section>
</template>

<script lang='ts' setup>
import { IWebSite, IRoomList } from '@/config/tyings';
// inject<(str: string) => void>('changeTitle')('在建工地');
const appConfig = useAppConfig();
const { huxing, state, web } = inject<IWebSite>('website') as IWebSite;
const info = reactive({
  page: 1,
  size: 10
})
const rooms = ref<IRoomList>({
  data: [],
  total: 0
})
const getRooms = async () => {
  const { data } = await useFetch(appConfig.url + '/room', {
    query: {
      page: info.page,
      size: info.size
    }
  })
  const dataValue = data.value as IRoomList;
  rooms.value.data = dataValue.data;
  rooms.value.total = dataValue.total;
}
getRooms()

useHead({
  title: '在建工地 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})

</script>

<style lang='less' scoped>

</style>