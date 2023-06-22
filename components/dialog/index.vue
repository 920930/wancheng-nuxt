<template>
  <section class="fixed left-0 top-0 w-full h-full z-50" v-if="open">
    <div class="absolute left-1/2 border -translate-x-1/2 top-1/3 -translate-y-1/3 z-20 bg-white rounded-md shadow-2xl bg-cover bg-center bg-no-repeat"
      :class="[width, height, meidaWidth && 'dialog']"
    >
      <aside class="w-full h-32 bg-cover bg-center rounded-t-md bg-no-repeat" v-if="topImg" :style="`background-image: url('${topImg}');`"></aside>
      <section class="px-8" :class="topImg ? 'mt-6' : 'mt-8'">
        <slot />
        <p class="text-xs text-center mt-2 text-gray-400"><span class="hidden md:inline-block">为了您的权益，</span>您的一切信息将被严格保密</p>
      </section>
      <button @click="closeBtn" class="absolute right-3 top-1">
        <i class="iconfont icon-close-circle close rounded-full" :class="[closeColor]"></i>
      </button>
    </div>
    <div class="absolute z-10 left-0 top-0 w-full h-full bg-black bg-opacity-60" @click="emits('update:open', false)"></div>
  </section>
</template>

<script lang='ts' setup>
defineProps({
  open: Boolean,
  pc: Boolean,
  width: {
    type: String,
    default: 'w-96'
  },
  meidaWidth: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: 'h-72'
  },
  topImg: {
    type: String
  },
  closeColor: {
    type: String,
    default: 'text-gray-700'
  }
})
const emits = defineEmits(['update:open'])

const closeBtn = () => {
  emits('update:open', false)
}
</script>

<style lang='less' scoped>
.dialog{
  width: 86%;
}
.close{
  font-size: 20px;
}
@media(min-width: 768px){
  .dialog{
    width: 24rem;
  }
  .close{
    font-size: 26px;
  }
}
</style>