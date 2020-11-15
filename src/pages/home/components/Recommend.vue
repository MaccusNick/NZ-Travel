<template>
    <div>
        <div class="title">Recommend Viewpoints</div>
     <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
               <img class="item-img" :src='item.imgUrl' />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">
                    {{item.desc}}
                </p>
                <button class="item-button">More information</button>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://www.rankers.co.nz/system/experience_images/12191/default.jpg?1364274083',
        title: 'Mt Ngauruhoe',
        desc: 'Mt Ngauruhoe has been active for at least 2,500 years. It has produced more than 70 eruptive episodes since 1839.There have been no eruptions since 19th February 1975and the temperature of fumaroles in the crater floor'
      }, {
        id: '0002',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0SaAkiMckOlByfDVzpQ-XRCqum86V2y4clA&usqp=CAU',
        title: 'Rangitoto Island',
        desc: 'This volcanic island, which last erupted 600 years ago, offers bird-watching, swimming, fishing, walking trails, colorful flora and spectacular views from the summit of its cone-shaped mountain.'
      }, {
        id: '0003',
        imgUrl: 'https://www.nzhotpools.co.nz/wp-content/uploads/2015/05/104-hot-tubs-omarama-beside-pond-250x250.jpg',
        title: 'The Lost Spring',
        desc: 'Mt Ngauru preen no eruptions since 19th February 1975and the temperature of fumaroles in the crater floo'
      }
      ]
    }
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
  .item
      overflow hidden
      display: flex
      height: 1.9rem
    .item-img
        width: 1.7rem
        height : 1.7rem
        padding: .1rem
    .item-info
        flex: 1
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
        .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .1rem
            border-radius: .06rem
            color: #fff
</style>
