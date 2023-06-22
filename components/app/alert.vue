<template>
  <section
    v-if="show"
    class="absolute px-1.5 py-1 text-sm bg-black bg-opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
  >
    {{msg}}
  </section>
</template>

<script lang='ts' setup>
const props = defineProps({
  msg: {
    type: String,
    default: '123123',
  },
  show: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:show']);

watch(() => props.show, (val) => {
  if(val) {
    setTimeout(() => emits('update:show', false), 3000)
  }
})
</script>

<style lang='less' scoped>

</style>