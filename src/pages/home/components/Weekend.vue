<template>
    <div>
        <div class="title">Weekend Events</div>
     <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <div class="item-img-wrapper">
               <img class="item-img" :src='item.imgUrl' />
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">
                    {{item.desc}}
                </p>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/mixins.styl'
 .title
     line-height .8rem
     background: #eee
     text-indent: .29rem
     margin-top: .2rem
     color: #00bcd4
    .item-img-wrapper
        overflow hidden
        padding-bottom: 36.9%
        height:0
    .item-img
        width:100%
    .item-info
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color #ccc
            ellipsis()
</style>
