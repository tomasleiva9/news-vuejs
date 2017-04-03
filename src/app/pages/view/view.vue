<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script lang="babel" type="text/javascript">
  import VLayoutView from '../../layout/lay-view/main'

  export default {
    components: {
      VLayoutView
    },
    mounted () {
      const state = this.$store.state
      const id = state.route.params.id
      if (state.shared.news.length) {
        const noticia = state.shared.news.filter(function (obj) {
          return obj.Id === id
        })[0]
        this.$store.dispatch('getNoticia', {noticia})
      } else {
        this.$store.dispatch('getNoticia', {id})
      }
    },
    computed: {
      item () {
        return this.$store.state.shared.noticia || []
      }
    }
  }
</script>
