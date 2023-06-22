<template>
  <section class="container mx-auto flex items-center justify-center text-sm md:text-base">
    <button class="border py-1 px-2" :class="page === 1 ? 'bg-gray-100' : 'bg-white'" :disabled="page === 1" @click="prevBtn">上一页</button>
    <section class="mx-8 text-slate-600 text-sm">{{page}}/{{pages}}</section>
    <button class="border py-1 px-2" :class="page === pages ? 'bg-gray-100' : 'bg-white'" :disabled="pages === page" @click="nextBtn">下一页</button>
  </section>
</template>

<script lang='ts' setup>
const props = withDefaults(defineProps<{
  total: number
  page: number
  size?: number
}>(), {
  total: 10,
  page: 1,
  size: 10
})

const emits = defineEmits(['update:page', 'change'])

const pages = computed(() => props.total > props.size ? Math.ceil(props.total / props.size) : 1)

const prevBtn = () => {
  if(props.size < props.total){
    emits('update:page', props.page - 1)
    emits('change')
    nextTick(() => document.body.scrollTop = 0)
  
  }
}
const nextBtn = () => {
  if(props.size < props.total){
    emits('update:page', props.page + 1)
    emits('change');
    nextTick(() => document.body.scrollTop = 0)
  }
}
</script>

<style lang='less' scoped>

</style>