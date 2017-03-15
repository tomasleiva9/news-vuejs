<template src="./home.html"></template>
<style src="./home.styl" lang="stylus"></style>

<script lang="babel" type="text/javascript">
  import LDefault from '../../layout/default/main'
  import CNews from '../../components/news'

  export default {
    components: {
      LDefault,
      CNews
    },
    mounted () {
      this.$store.dispatch('getNews')
    },
    computed: {
      posts () {
        console.log(this.$store.state.shared.news)
        return this.$store.state.shared.news
      },
      transitionName () {
        return this.$store.state.shared.transitionName || 'slide-left'
      }
    }

  }
</script>
