<template>
   <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="https://lovetotravel.fi/wp-content/uploads/2019/04/ClACcfbVAAAA1wJ-1-370x206.jpg"/>
        <div class="banner-info">
            <div class="banner-tittle">MT Ngauruhoe</div>
            <div class="banner-number"><span class="iconfont banner-icon">&#xe61b;</span>123</div>
        </div>

    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
   </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://lovetotravel.fi/wp-content/uploads/2019/04/ClACcfbVAAAA1wJ-1-370x206.jpg',
        'https://lovetotravel.fi/wp-content/uploads/2019/04/ClACcfbVAAAA1wJ-1-370x206.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
    .banner
      position: relative;
      overflow: hidden
      height :0
      padding-bottom: 55%
      .banner-img
       width: 100%
      .banner-info
       display: flex;
       position: absolute;
       left: 0
       right: 0
       bottom: 0
       line-height: .6rem
       background-image : linear-gradient(top, rgba(0, 0, 0 , 0), rgba(0, 0, 0, 0.8))
       color: #fff
       .banner-tittle
        flex: 1
        padding: 0 .2rem
        font-size: .32rem
       .banner-number
        padding: 0 .4rem
        margin-top: .14rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0, .8)
        font-size: .24rem
        .banner-icon
         font-size: .24rem

</style>
