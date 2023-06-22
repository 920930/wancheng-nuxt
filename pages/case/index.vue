<template>
  <ul class="grid md:grid-cols-3 md:my-10 my-4 container mx-auto md:gap-6 gap-3 px-3 md:px-0">
    <li class="bg-slate-100 p-3 shadow-md" v-for="item of cases.data" :key="item.id">
      <NuxtLink :to="`/case/${item.id}`" class="md:h-80 h-40 w-full block overflow-hidden relative">
        <div class="w-full h-full bg-center bg-cover hover:scale-105 duration-150" :style="`background-image: url(${item.img});`"></div>
        <i v-if="item.type === 0" class="absolute bg-gray-700 top-5 right-5 text-center text-white px-3 bg-opacity-80">VR</i>
      </NuxtLink>
      <div class="relative">
        <div class="pt-2">
          <NuxtLink :to="`/case/${item.id}`" class="md:text-xl text-lg font-bold">{{item.title}}</NuxtLink>
          <p class="pt-1 text-sm text-gray-600">{{style[item.style]}} | {{huxing[item.huxing]}}</p>
        </div>
        <NuxtLink :to="`/team/${item.user.id}`" class="absolute md:right-4 right-1 top-2 -translate-y-1/2 flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow-md p-1.5 rounded-full mb-1">
            <div class="w-full h-full bg-cover rounded-full" :style="`background-image: url('${item.user.img}')`"></div>
          </div>
          <span>{{item.user.name}}</span>
        </NuxtLink>
      </div>
    </li>
  </ul>
  <Pagination :total="cases.total" v-model:page="info.page" @change="getCases($route.query.type)" class="md:mb-10 mb-4" v-if="cases.data.length" />
</template>

<script setup lang='ts'>
import { IWebSite, ICaseList } from '@/config/tyings'
const { web, style, huxing } = inject<IWebSite>('website') as IWebSite;

const appConfig = useAppConfig();
const route = useRoute();
const info = reactive({
  page: 1,
  size: 12,
});
const cases = reactive<ICaseList>({
  data: [],
  total: 0
});

const getCases = async (type: any) => {
  const query: {size: number; page: number; type?: string } = {
    size: info.size,
    page: info.page,
  }
  if(type != undefined) query.type = type;
  const { data } = await useFetch(appConfig.url + '/case', {
    query
  })
  const caseData = data.value as ICaseList;
    cases.data = caseData.data;
    cases.total = caseData.total;
}
getCases(route.query.type)
watch(() => route.query, (val) => {
  info.page = 1
  getCases(val.type)
})

useHead({
  title: '整装案例 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
</script>

<style scoped lang="less">

</style>