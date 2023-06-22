<template>
  <aside class="mt-10 flex justify-center">
    <section class="border-2 animate-bounce border-red-500 rounded-full">
      <NuxtLink
        :to="`tel:${web['tel']}`"
        class="inline-block mx-4"
        :class="isWhite? 'text-white' : 'text-gray-600'">
        咨询热线：<span class="text-xl text-red-500 font-bold">{{web['tel']}}</span>
      </NuxtLink>
      <NuxtLink :to="`${web['kefu'] || '/'}`" class="inline-block bg-red-500 -mx-1 rounded-full px-3 py-2 text-white">在线咨询</NuxtLink>
    </section>
  </aside>
</template>

<script setup lang='ts'>
import { IWebSite } from '@/config/tyings';
withDefaults(defineProps<{
  isWhite?: boolean
}>(), {
  isWhite: false
})
const { web } = inject<IWebSite>('website') as IWebSite;
</script>