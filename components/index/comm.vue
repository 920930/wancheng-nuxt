<template>
  <section class="md:py-16 bg-[url('/images/index/comm-bg.jpg')] bg-cover bg-center mb-3">
    <section class="container mx-auto md:bg-white md:bg-opacity-70 md:py-16 py-3">
      <AppTitle title="F2C供应链，全系正品" desc="轻颜家具、全新家电，实用耐用是家的最终归属。 魅力软装，好设计是家的灵魂" class="px-3 hidden md:block" />
      <AppTitle whiteColor title="F2C供应链，全系正品" desc="轻颜家具、全新家电，实用耐用是家的最终归属。 魅力软装，好设计是家的灵魂" class="px-3 md:hidden" />
      
      <ul class="grid grid-cols-2 md:grid-cols-4 md:mt-20 mt-4 text-gray-300 md:text-gray-600">
        <li class="text-center">
          <i class="iconfont icon-quanqiu text-gray-300 md:text-lime-700 icon"></i>
          <h4 class="md:text-2xl font-bold mb-1 md:mt-3">全球集采</h4>
          <span class="text-sm md:text-base">甄选全球192家集采</span>
        </li>
        <li class="text-center">
          <i class="iconfont icon-yuancailiaojiagong text-gray-300 md:text-lime-700 icon"></i>
          <h4 class="md:text-2xl font-bold mb-1 md:mt-3">真材实料</h4>
          <span class="text-sm md:text-base">1000+材料厂商直供 <span class="hidden md:inline-block">假一罚十</span></span>
        </li>
        <li class="text-center">
          <i class="iconfont icon-kewozhucai text-gray-300 md:text-lime-700 icon"></i>
          <h4 class="md:text-2xl font-bold mb-1 md:mt-3">品质主材</h4>
          <span class="text-sm md:text-base">好基装是新家的基础</span>
        </li>
        <li class="text-center">
          <i class="iconfont icon-fucai text-gray-300 md:text-lime-700 icon"></i>
          <h4 class="md:text-2xl font-bold mb-1 md:mt-3">进口辅材</h4>
          <span class="text-sm md:text-base">好材料是新家活力的脉搏</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="less">
.icon{
  font-size: 35px;
}
@media(min-width: 768px){
  .icon{
    font-size: 60px;
  }
}
</style>