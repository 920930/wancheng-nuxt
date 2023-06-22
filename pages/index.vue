<template>
  <IndexBanner :data="banner" />
  <IndexProduct />
  <IndexCase :data="value.cases" />
  <IndexComm />
  <IndexTeam :data="value.designer" />
  <IndexHall />
  <IndexNews :data="value.articles" :top="value.articleTop" />
</template>

<script setup lang='ts'>
import { IWebSite, IIndex } from '@/config/tyings';
const { web, banner } = inject<IWebSite>('website')!;
const appConfig = useAppConfig();
const { data } = await useFetch(appConfig.url + '/index');
const value = data.value as IIndex;

useHead({
  title: web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
</script>

<style scoped>

</style>