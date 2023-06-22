<template>
  <h3
    class="text-center text-xl font-bold relative"
    :class="[whiteColor ? 'text-gray-300' : 'text-gray-700', bgSize ? 'md:text-5xl' : 'md:text-4xl']"
  >
    <span>{{title}}</span>
    <p
      class="uppercase text-xs md:text-4xl absolute left-1/2 -translate-x-1/2 opacity-10"
      :class="[whiteColor ? 'text-gray-400' : 'text-gray-500', bgSize ? 'top-6' : 'top-4']"
    >{{english}}</p>
    <p class="text-center text-sm mt-2 md:mt-4 font-medium" :class="bgSize ? 'md:text-lg' : 'md:text-base'">{{desc}}</p>
  </h3>
</template>

<script setup lang='ts'>
  withDefaults(defineProps<{
    title: string;
    desc: string;
    whiteColor?: boolean;
    english?: string;
    bgSize?: boolean;
  }>(), {
    english: 'WANCHENG LONGBANG',
    whiteColor: false,
    bgSize: false,
  })
</script>
