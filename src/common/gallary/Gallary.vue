<template>
  <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
          <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in imgs" :key=index.id>
    <img
        class="gallary-img" :src="item" />
    </swiper-slide>
  </swiper>
    <div class="swiper-pagination" slot="pagination"></div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
   display: flex
   flex-direction: column
   justify-content: center
   z-index: 99
   position: fixed
   left: 0
   right: 0
   top: 0
   bottom: 0
   background: #000
   .wrapper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 75%
    .gallary-img
     width: 100%
    .swiper-pagination
     position: relative;
     color: #fff
     bottom: -.5rem

</style>
