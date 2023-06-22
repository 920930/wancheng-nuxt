<template>
  <AppTitle title="192家一线国内外品牌建材展厅" desc="知名建材企业，保证装修材料品质，真材实料，不给环保生活方式留隐患！" class="md:mt-10 mt-6 px-3" />
  <section class="container mx-auto md:mt-10 mt-3 px-3 md:px-0">
    <AppSwiper :data="floor1" slotContainerStartBool v-model:activeIndex="activeIndex">
      <template #default="{value}">
        <section class="md:h-100 md:flex relative">
          <section class="md:h-full h-48 flex-1 bg-cover" :style="`background-image: url(${value.url})`"></section>
          <section class="md:w-100 h-44 md:h-auto bg-slate-200 md:p-8 p-3 text-center text-gray-800">
            <h2 class="md:text-7xl text-2xl font-bold md:my-10">{{value.title}}</h2>
            <h3 class="md:text-2xl mt-1">{{value.ftitle}}</h3>
            <p class="h-0.5 bg-gray-400 md:mt-10 md:mb-8 inline-block w-1/2"></p>
            <p class="text-sm md:text-base mt-1">{{value.desc}}</p>
          </section>
        </section>
      </template>
      <template #swiper-container-start="{data}">
        <span class="inline-block text-sm md:text-base w-14 md:w-32 text-center py-2 hover:cursor-pointer md:mb-8 mb-2" :class="activeIndex == data.index ? 'bg-red-500 text-white' : 'bg-gray-200'">{{data.val.title}}</span>
      </template>
    </AppSwiper>
  </section>
</template>

<script setup lang='ts'>
  const activeIndex = ref(0)
  const floor1 = [
    {title: '瓷砖', ftitle: '意大利TOP品牌，1.6m大板', desc: '意大利原厂进口，40+年历史沉淀，前沿设计', url: '/images/house/new/main1.jpg'},
    {title: '地板', ftitle: '葡萄牙进口，更长、更厚、更环保', desc: '葡萄牙进口Castro多层实木地板，表层厚度2.5mm，单板最长2.4米，欧标环保更安心。', url: '/images/house/new/main2.jpg'},
    {title: '木门', ftitle: '意大利CLEAF进口面板，高级纹理感', desc: '进口饰面门/烤漆门——高颜值进口表层，超强静音防撞磁吸锁，门楣到顶更美观', url: '/images/house/new/main3.jpg'},
    {title: '卫浴', ftitle: '一线大牌，品质和颜值双保障', desc: '潮牌尖货，随心搭配，样式丰富，风格多样', url: '/images/house/new/main4.jpg'},
    {title: '橱柜', ftitle: '收纳扩容，按需定制完美空间', desc: '环保基材，进口膜皮，品质五金，和将就说拜拜', url: '/images/house/new/main5.jpg'},
  ];
</script>

<style scoped lang="less">

</style>