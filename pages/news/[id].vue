<template>
  <section class="bg-slate-100 py-5">
    <article class="container mx-auto md:px-0 px-3">
      <div class="text-sm hidden md:block">
        <NuxtLink to="/">首页</NuxtLink> / 
        <NuxtLink :to="`/news?cate=${article.category.id}`">{{article.category.title}}</NuxtLink> / 
        <span class="text-yellow-600">{{article.title}}</span>
      </div>
      <section class="md:flex justify-between md:mt-5">
        <section class="bg-white flex-1 md:mr-5 pt-4 md:pt-8 md:pb-5 pb-3">
          <h1 class="text-center md:text-2xl font-bold px-2">{{article.title}}</h1>
          <p class="md:text-sm text-xs border-b-gray-300 border-b border-dotted pb-2 text-gray-600 text-center mt-4 md:mb-6 mb-3"><span class="md:mr-5 mr-2">发布时间：2022-03-03 11:21:48</span>  查看人数：89</p>
          <div class="article px-3 md:px-10 text-sm md:text-base iframe" v-html="article.content">
          </div>
          <ul class="md:pt-5 pt-3 px-3 md:px-10 border-t text-sm space-y-3">
            <li v-if="article.prev">上一篇：<NuxtLink :to="`/news/${article.prev.id}`" class="hover:text-red-500">{{article.prev.title}}</NuxtLink></li>
            <li v-if="article.next">下一篇：<NuxtLink :to="`/news/${article.next.id}`" class="hover:text-red-500">{{article.next.title}}</NuxtLink></li>
          </ul>
        </section>
        <aside class="md:w-96 relative">
          <div class="bg-white md:p-5 p-3 mt-3 md:mt-0">
            <h4 class="border-b-2 border-gray-400 mb-4 pb-1 inline-block">推荐案例</h4>
            <section class="space-y-5 text-sm">
              <template v-for="item in article.cases">
                <NuxtLink :to="`/case/${item.id}`" class="flex group cursor-pointer">
                  <img class="w-28 h-20 mr-6" :src="item.img" :alt="item.title">
                  <div class="flex flex-col flex-1 justify-between">
                    <span class="group-hover:text-yellow-600">{{item.title}}</span>
                    <p class="text-right"><span class="bg-green-600 group-hover:bg-green-700 px-2 py-1 text-white rounded text-xs">查看更多</span></p>
                  </div>
                </NuxtLink>
              </template>
            </section>
          </div>

          <!-- <div class="md:sticky top-24 bg-white md:p-5 p-3 mt-3 md:mt-5">
            <h4 class="border-b-2 border-gray-400 mb-4 pb-1 inline-block">立即报价</h4>
          </div> -->
        </aside>
      </section>
    </article>
  </section>
</template>

<script lang='ts' setup>
import { IArticle } from '@/config/tyings'

const route = useRoute(),
      appConfig = useAppConfig();
const { data } = await useFetch(appConfig.url + '/article/' + route.params.id);
const article = data.value as IArticle;

useHead({
  title: article.ftitle ? article.ftitle : article.title ,
  meta: [
    {name: 'keywords', content: article.keys ? article.keys : article.title},
    {name: 'description', content: article.description ? article.description : article.title}
  ]
})
</script>

<style lang='less'>
.article{
  p{
    padding-bottom: 18px;
    text-indent: 1.8rem;
  }
}
.article iframe{
  width: 100%;
  height: 260px;
}
@media (min-width: 768px){
  .article{
    p{
      padding-bottom: 28px;
      text-indent: 2rem;
    }
  }
  .article iframe{
    width: 100%;
    height: 600px;
  }
}
</style>