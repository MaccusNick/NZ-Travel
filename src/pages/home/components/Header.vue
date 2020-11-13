<template>
    <div class="header">
    <div class="header-left">
       <div class="iconfont back-icon">&#xe609;</div>
    </div>

    <div class="header-input">
      <span class="iconfont">&#xe6a4;</span>
      City/Tourist spots/Events
      </div>

    <div class="header-right">
      City
      <span class="iconfont arrow-icon">&#xe877;</span>
    </div>

   </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
 margin-left: .2rem
 padding-left: .2rem
 background: #fff
 border-radius: .1rem
 color: #ccc
.header-right
  width: 1.24rem
  float: right
  text-align: center
  .arrow-icon
    margin-left: -.08rem
    font-size: .35rem
</style>
