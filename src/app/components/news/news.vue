<template src="./news.html"></template>
<style src="./news.styl" lang="stylus" scoped></style>
<script lang="babel" type="text/javascript">
  import animations from '../../mixins/animations'

  export default {
    mixins: [animations],
    props: ['postItem'],
    computed: {
      item () { return this.postItem }
    }
  }
</script>
