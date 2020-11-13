<template>
 <div class="wrapper">
<swiper :options="swiperOption">

    <swiper-slide v-for="item of swiperList" :key="item.id">

    <img
        class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '../static/view1.jpg'
      }, {
        id: '0002',
        imgUrl: '../static/view2.jpg'
      }, {
        id: '0003',
        imgUrl: '../static/view3.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #eee !important
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
.swiper-img
    width: 100%

</style>
