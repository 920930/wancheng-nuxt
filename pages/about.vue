<template>
  <section class="bg-[url('/images/about/banner.jpg')] bg-cover bg-center md:h-110 h-56"></section>
  <AppTitle title="品牌介绍" desc="做一次家装 做一生朋友" class="md:my-14 my-4" />
  <div class="container mx-auto md:flex md:mb-16 mb-3">
    <div class="w-1/2 bg-[url('/images/about/gs.png')] bg-cover bg-center"></div>
    <div class="md:py-10 px-5 md:w-1/2 space-y-3 md:space-y-8 w-full text-sm md:text-base">
      <p>成都万城龙邦装修工程有限公司（以下简称万城龙邦装饰），是一家集设计、施工为一体的整装装饰企业，连续多年荣获无投诉AAA级企业，也是西南数字化全案整装模式的领航者。</p>
      <p>万城龙邦装饰在全国范围内拥有30000多平米的主材展厅，汇集了上百种国际国内一线装饰材料高端品牌，目前已在多地成立分公司。</p>
      <p>以创新者的姿态打造健康品质的整装产品，精心设计A4、A6、A8等系列家装产品，同时引进业界先进 ERP管理系统，构建以客户为中心的产品与服务体系，打破行业无标准、不规范、不透明的现象，重新定义以标准化、规模化、透明化的整体家装模式。</p>
      <p>万城龙邦潜心研发推出数字化全案整装模式，全面实现线上搭配和个性化挑选，真正意义上做到让客户省时省心、实现拎包入住的装修全体验。</p>
    </div>
  </div>
  <section class="bg-[url('/images/index/product-bg.jpg')] md:py-16 py-3 bg-cover md:mb-16 mb-3">
    <AppTitle title="业务范围-新零售+整装" desc="一套设计全屋基装，全屋电器，风格样板，全套软式，整装+新零售均可满足" />
    <ul class="container mx-auto grid grid-cols-2 md:grid-cols-4 md:mt-10 mt-3">
      <li v-for="(item, i) in floor4" :key="i" class="border-l md:p-8 p-3 border-neutral-400">
        <i class="text-gray-500" :class="item.icon" style="font-size: 30px;"></i>
        <h3 class="text-xl font-bold mb-2 mt-4">{{item.title}}</h3>
        <span class="text-sm text-gray-500">{{item.desc}}</span>
        <aside class="grid grid-cols-2 mt-8 text-sm md:gap-4 gap-2 text-gray-600 mb-5">
          <span v-for="(arr, index) in item.arr" :key="index">{{arr}}</span>
        </aside>
        <i class="iconfont icon-add text-gray-500" style="font-size: 30px;"></i>
      </li>
    </ul> 
  </section>

  <AppTitle title="工厂直销" desc="F2C直采模式 直省30%" />
  <div class="flex justify-center container mx-auto">
    <img src="/images/about/zj.jpg" alt="">
  </div>

  <section class="bg-gray-100 md:py-16 py-3">
    <section class="container mx-auto px-3 md:px-0">
      <AppTitle title="服务保障" desc="我们做的足够重，客户才能足够轻" />

      <ul class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 text-gray-600 mt-7">
        <li v-for="item in floor5" class="bg-white md:px-5 md:py-5 py-1 px-3 flex items-center">
          <i class="iconfont icon" :class="item.icon"></i>
          <div class="ml-5">
            <h3 class="md:text-xl font-bold md:mb-2">{{item.title}}</h3>
            <p class="text-sm md:text-base">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script lang='ts' setup>
const floor4 = [
  {title: '全屋整装', icon: 'iconfont icon-circular', desc: 'WHOLE HOUSE HARDCOVER', arr: ['小户型空间', '大跃层空间',' 大平层空间']},
  {title: '个性化软装', icon: 'iconfont icon-triangle', desc: 'PERSONALIZED DRESS', arr: ['灯具配饰', '家居窗帘',' 壁纸摆件', '卫浴五金']},
  {title: '旧房改造', icon: 'iconfont icon-square', desc: 'OLD HOUSE RENOVATION', arr: ['小户型空间', '大跃层空间',' 大平层空间']},
  {title: '家居商城', icon: 'iconfont icon-polygon', desc: 'HOME SHOPPING MALL', arr: ['全网全覆盖', '智慧门店',' 主材辅材', '家具家电']},
]
const floor5 = [
  {title: '360°全方位保障', icon: 'icon-icon-test', desc: '基装质保2年，终身维护；水电隐蔽工程质保5年，终身维护；7X24H全天售后服务'},
  {title: '金锤子协议', icon: 'icon-hammer', desc: '不环保、砸！不合格、砸！不满意、砸！把主动权还给客户'},
  {title: '不恶意增项承诺', icon: 'icon-xinyongchengnuo', desc: '不漏项、不增项、不挖坑恶意增项，工程总监买单的承诺保障'},
  {title: '工程延期承诺', icon: 'icon-icon_xinyong_xianxing_jijin-198', desc: '工程延期一天自罚300元的承诺保障'},
  {title: '资金安全', icon: 'icon-anquan', desc: '注册资金2833万保障业主资金透明、安全'},
  {title: '假一赔十承诺', icon: 'icon-tubiao_jiayipeishi', desc: '材料以次充好，假一赔十的承诺保障'},
]
</script>

<style lang='less' scoped>
.icon{
  font-size: 60px;
}
@media(min-width: 768px) {
  .icon{
    font-size: 70px;
  }
}
</style>