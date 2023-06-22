<template>
  <section class="bg-slate-100">
    <section class="container mx-auto md:flex md:py-10 py-3 px-3 md:px-0">
      <ul class="flex-1">
        <li class="group bg-white flex p-3 md:p-5 shadow hover:shadow-lg md:mb-5 mb-3" v-for="item in article.data" :key="item.id">
          <NuxtLink :to="`/news/${item.id}`" class="w-28 md:w-72 inline-block overflow-hidden">
            <div class="w-full h-full bg-center bg-cover group-hover:scale-105 duration-200" :style="`background-image: url(${item.img});`"></div>
          </NuxtLink>
          <section class="flex-1 ml-4 md:ml-10 flex">
            <article class="py-1 md:py-5">
              <h3 class="md:text-2xl text-sm font-bold group-hover:text-red-600 mb-4 md:mb-0"><NuxtLink :to="`/news/${item.id}`">{{item.title}}</NuxtLink></h3>
              <p class="text-sm my-5 text-gray-600 hidden md:block">{{item.description.slice(0, 140)}}</p>
              <NuxtLink :to="`/news/${item.id}`" class="inline-block text-sm border px-2 py-1 group-hover:border-red-400 group-hover:text-red-400">了解详情</NuxtLink>
            </article>
            <aside class="w-44 ml-5 md:flex flex-col items-center justify-center hidden">
              <p class="text-5xl border-b-2 pb-1 mb-2">{{item.created_at.split('-')[2]}}</p>
              <p>{{item.created_at.slice(0, 7)}}</p>
            </aside>
          </section>
        </li>
        <Pagination v-model:page="info.page" :total="article.total" @change="getNews" />
      </ul>
      <aside class="md:w-96 md:ml-8 mt-5 md:mt-0">
        <section class="bg-white p-3">
          <h2 class="text-lg font-bold">最新案例</h2>
          <ul class="mt-3">
            <li v-for="(item, i) in cases" :key="item.id" :class="{'border-b pb-4 mb-4': i !== cases.length - 1}">
              <NuxtLink :to="`/case/${item.id}`" class="block md:h-56 h-40 bg-center bg-cover" :style="`background-image: url('${item.img}')`"></NuxtLink>
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
      </aside>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { IArticleList, IWebSite, TCases } from '@/config/tyings'
import { number } from 'yup';
const { web, style, huxing } = inject<IWebSite>('website') as IWebSite;
const appConfig = useAppConfig(),
      route = useRoute();
const info = reactive({
  page: 1,
  size: 10
});
const article = reactive<IArticleList>({
  data: [],
  total: 0
});
const cases = ref<TCases[]>([])
useHead({
  title: '家装攻略 - ' + web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})

const getNews = async () => {
  const cateId = route.query.cate;
  const query: { page: number; size: number; cateId?: string} = {
    page: info.page,
    size: info.size
  }
  if(cateId) {
    query.cateId = cateId as string;
  }
  const { data } = await useFetch(appConfig.url + '/article', {
    query
  });
  const value = data.value as {news: IArticleList, cases: TCases[]};
  article.data = value.news.data;
  article.total = value.news.total;
  cases.value = value.cases;
}
getNews()

watch(()=>route.query.cate, () => getNews())
</script>

<style scoped lang="less">

</style>