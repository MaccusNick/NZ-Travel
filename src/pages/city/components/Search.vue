<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="Type city or province">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li  class="search-item border-top" v-for="item of list" :key=item.id>{{item.name}}</li>
        <li  class="search-item border-top" v-show="hadNoData">Can't find any match</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hadNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: .72rem
  padding: 0.1rem
  background: $bgColor
  .search-input
     width: 100%
     height: .62rem
     line-height: .62rem
     text-align: center
     border-radius .06rem
     color: #666
.search-content
  position absolute
  top: 1.68rem
  z-index :1
  left: 0
  right: 0
  bottom:0
  background: #fff
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background: #fff
</style>
