<template src="./home.html"></template>
<style src="./home.styl" lang="stylus"></style>

<script lang="babel" type="text/javascript">
  import LDefault from '../../layout/lay-default/main'
  import CNews from '../../components/news/news'

  export default {
    components: {
      LDefault,
      CNews
    },
    mounted () {
      this.$store.dispatch('getNews')
    },
    computed: {
      news () {
        return this.$store.state.shared.news
      },
      countMidias () {
        return this.$store.state.shared.countMidias
      },
      countNews () {
        return this.$store.state.shared.countNews
      },
      transitionName () {
        return this.$store.state.shared.transitionName || 'slide-left'
      }
    }

  }
</script>
