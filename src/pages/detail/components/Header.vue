<template>
  <div>
   <router-link tag="div" to="/" class= "iconfont header-abs" v-show="showAbs">
    <div class="iconfont header-abs-back"> &#xe609;</div>
   </router-link>
   <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        MIT Naguruhoe
        <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe609;</div>
        </router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop ||
      document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        this.opacityStyle = { opacity }
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-abs
     position: absolute
     left: .2rem
     top: .2rem
     width: .8rem
     height: .8rem
     border-radius  .4rem
     text-align: center
     line-height: .8rem
     background:rgba(0, 0, 0, .8)
     .header-abs-back
      color: #fff
      font-size: .4rem
    .header-fixed
     z-index: 2
     position: fixed
     top:0
     left:0
     right:0
     overflow: hidden
     height: $headerHeight
     line-height: $headerHeight
     text-align: center
     color: #fff
     background: $bgColor
     font-size: .32rem
     .header-back
      position: absolute
      left:0
      top:0
      color: #fff
      width: .64rem
      text-align: center
      font-size: .4rem
</style>
