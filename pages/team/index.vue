<template>
  <section class="bg-gray-100 md:py-10 py-3">
    <section class="md:flex container mx-auto px-3 md:px-0">
      <ul v-if="teams.data.length" class="flex-1">
        <li v-for="user in teams.data" :key="user.id" class="group bg-white flex shadow hover:shadow-lg md:mb-5 mb-3 p-3">
          <NuxtLink :to="`/team/${user.id}`">
            <section class="md:w-72 w-32 md:h-96 h-40 bg-top bg-cover" :style="`background-image: url('${user.img}')`"></section>
          </NuxtLink>
          <section class="flex-1 text-sm md:px-5 pl-2 py-2 flex flex-col">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <NuxtLink :to="`/team/${user.id}`"><h3 class="md:mr-3 mr-2 md:text-2xl text-base group-hover:text-red-500">{{user.name}}</h3></NuxtLink>
                <span class="text-sm text-gray-500">{{level[user.level]}}</span>
              </div>
              <NuxtLink :to="`/team/${user.id}`" class="group-hover:text-red-500"><span class="md:mr-2 hidden md:block border px-3 py-1.5">查看详情</span><i class="iconfont icon-more1"></i></NuxtLink>
            </div>
            <div class="mt-3 text-gray-500 hidden md:block">
              擅长风格：<span v-for="(sty, i) in user.info.style">{{style[sty]}} <i v-if="user.info.style.length - 1 != i">、</i></span>
            </div>
            <div class="md:py-4 py-2 pl-2 md:px-5 bg-[url('/images/team/info.jpg')] md:mt-5 mt-2">
              <span class="md:text-base text-sm md:mr-3">从业经验</span><span class="md:text-2xl md:mr-8">{{year[user.timer]}}</span>
              <span> / </span>
              <span class="md:text-base text-sm md:ml-8 hidden md:inline-block">设计</span>
              <span class="md:text-base text-sm md:mr-3">作品</span>
              <span class="md:text-2xl md:mr-3">{{user.cases_count}}</span>
              <span class="md:text-base">例</span> 
            </div>
            <div class="md:mt-5 md:mb-3 my-1 text-gray-500">最新作品：
              <NuxtLink v-if="user.cases.length" :to="`/case/${user.cases[0].id}`" class="hidden md:inline-block">{{user.cases[0].title}}</NuxtLink>
            </div>
            <div class="flex-1 grid grid-cols-3 md:gap-4 gap-2">
              <NuxtLink v-for="item in user.cases" :key="item.id" :to="`/case/${item.id}`">
                <div class="bg-cover bg-center w-full h-full" :style="`background-image: url('${item.img}')`"></div>
              </NuxtLink>
            </div>
          </section>
        </li>
        <Pagination v-model:page="info.page" :total="teams.total" @change="getTeams" />
      </ul>
      <section class="md:w-96 mt-5 md:mt-0 md:ml-5">
        <section class="bg-white p-3">
          <h2 class="text-lg font-bold">最新案例</h2>
          <ul class="mt-3">
            <li v-for="(item, i) of cases" :key="item.id" :class="{'border-b pb-4 mb-4': i !== cases.length - 1}">
              <NuxtLink :to="`/case/${item.id}`" class="block md:h-56 h-40 bg-cover bg-center" :style="`background-image: url('${item.img}')`"></NuxtLink>
              <div class="flex mt-3 space-x-3">
                <NuxtLink :to="`/team/${item.user.id}`">
                  <aside class="w-14 h-14 bg-cover rounded-md" :style="`background-image: url('${item.user.img}')`"></aside>
                </NuxtLink>
                <div class="flex flex-col justify-evenly">
                  <NuxtLink :to="`/case/${item.id}`">{{item.title}}</NuxtLink>
                  <span class="text-gray-500">{{style[item.style]}} | {{huxing[item.huxing]}}</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { IUserList, IWebSite, TCases } from '@/config/tyings'
const appConfig = useAppConfig();
const { web, level, year, style, huxing } = inject('website') as IWebSite;
const info = reactive({
  page: 1,
  size: 6
});
const teams = reactive<IUserList>({
  data: [],
  total: 0,
});
const cases = ref<TCases[]>([])
const getTeams = async () => {
  const { data } = await useFetch(appConfig.url + '/user', {
    query: {
      page: info.page,
      size: info.size
    }
  })
  const dataValue = data.value as { users: IUserList, cases: TCases[] }
  teams.data = dataValue.users.data;
  teams.total = dataValue.users.total;
  cases.value = dataValue.cases;
}
getTeams()

useHead({
  title: '设计团队 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
</script>

<style scoped lang="less">

</style>