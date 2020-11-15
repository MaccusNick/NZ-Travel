<template>
    <div>
        <div class="title">Weekend Events</div>
     <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1347609-597085-34.jpg',
        title: 'SeePort Sunset Symphony & Fireworks',
        desc: 'Ports of Auckland’s SeePort Festival is a three-day celebration of Auckland City’s beautiful waterfront and rich maritime heritage. '
      }, {
        id: '0002',
        imgUrl: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/848765-391682-34.jpg?v=2',
        title: 'Great Kiwi Beer Festival',
        desc: 'The Great Kiwi Beer Festival is a celebration of the brewing industry in New Zealand, hosted by industry experts, and featuring a range of more than 300 local, national and international brews.'
      }, {
        id: '0003',
        imgUrl: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1401829-617470-7.jpg?v=3',
        title: 'Street Food at Point Chev',
        desc: 'The prefect way to kick start the weekend with great food, great music and great vibes with your local community.'
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
