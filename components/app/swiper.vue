<template>
  <swiper
    :modules="modules"
    :navigation="{
      hideOnClick: true,
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }"
    :pagination="{ clickable: true }"
    :autoplay="{ delay }"
    :breakpoints="breakpoints"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(value, index) in data" :key="index">
      <slot :value="value" :index="index">
        <div class="h-110 w-full bg-cover bg-center md:block hidden" :style="`background-image: url(${value.pc});`"></div>
        <div class="h-52 w-full bg-cover bg-center md:hidden" :style="`background-image: url(${value.m});`"></div>
      </slot>
    </swiper-slide>
    <template v-slot:container-start>
      <ul class="flex justify-center md:space-x-5 space-x-2" v-if="slotContainerStartBool">
        <li v-for="(val, i) in data" @click="chantBtn(i)">
          <slot name="swiper-container-start" :data="{index: i, val}"></slot>
        </li>
      </ul>
    </template>
    <template v-slot:container-end><slot name="swiper-wrapper-end">1231</slot></template>
  </swiper>
</template>
<script setup lang="ts">
  import { PropType, computed } from 'vue';
  // import Swiper core and required modules
  import ISwiper, { Navigation, Pagination, A11y, Autoplay, EffectCube, EffectFade } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const props = defineProps({
    data: {
      type: Array as PropType<any[]>,
      default: []
    },
    pagination: {
      type: Object as PropType<{width?: String, bgColor?: String, activeBgColor?: string}>,
      default: {width: '15px', bgColor: 'white', activeBgColor: 'red'}
    },
    delay: {
      type: Number,
      default: 5000
    },
    // 底部点是否显示
    hasPagination: {
      type: Boolean,
      default: true
    },
    isBreak: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    slotContainerStartBool: Boolean,
  })
  const emits = defineEmits(['update:activeIndex']);
  const modules = computed(() => {
  const ret = [Navigation, A11y, Autoplay, EffectCube, EffectFade]
  props.hasPagination && ret.push(Pagination)
  return ret
})
  const breakpoints = computed(() => {
    if(props.isBreak){
      return {
        320: { //当屏幕宽度大于等于320
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: { //当屏幕宽度大于等于768
          slidesPerView: 3,
          spaceBetween: 15
        },
        1280: {  //当屏幕宽度大于等于1280
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    } else {
      return undefined;
    }
  })
  const mySwiper = ref<ISwiper>();
  const onSwiper = (swiper: ISwiper) => mySwiper.value = swiper;
  const onSlideChange = (swiper: ISwiper) => emits('update:activeIndex', swiper.activeIndex);
  const chantBtn = (i: number) => mySwiper.value!.slideTo(i, 1000, false)
  watch(() => props.activeIndex, (i: number) => chantBtn(i))
</script>

<style scoped lang="less">
.swiper :deep(.swiper-pagination-bullet){
  width: v-bind('props.pagination.width');
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: v-bind('props.pagination.bgColor');
  &.swiper-pagination-bullet-active {
    background-color: v-bind('props.pagination.activeBgColor');
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
  }
}
</style>