<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script lang="babel" type="text/javascript">
  import VLayoutView from '../../layout/view/main'

  export default {
    components: {
      VLayoutView
    },
    computed: {
      post () {
        let state = this.$store.state
        return state.shared.news.filter(function (obj) {
          return obj.id === state.route.params.id
        })[0] || []
      }
    }
  }
</script>
