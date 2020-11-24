<template>
    <div class="header">
    <div class="header-left">
       <div class="iconfont back-icon">&#xe609;</div>
    </div>

    <div class="header-input">
      <span class="iconfont">&#xe6a4;</span>
      City/Tourist spots/Events
      </div>
    <router-link to='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe877;</span>
    </div>
    </router-link>

   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display flex
  line-height: .86rem
  background-color: $bgColor
  color: #fff
.header-left
  width: .64rem
  float: left
  .back-icon
    text-align: center
    font-size: .4rem
.header-input
 flex:1
 height: .64rem
 line-height: .64rem
 margin-top: .12rem
 margin-left: .02rem
 padding-left: .2rem
 background: #fff
 border-radius: .1rem
 color: #ccc
.header-right
  min-width: 1.04rem
  padding-left:0.2rem
  padding-right:0.1rem
  float: right
  text-align: center
  color: #fff
  .arrow-icon
    margin-left: -.08rem
    font-size: .35rem
</style>
