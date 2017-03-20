<template src="./news.html"></template>
<style src="./news.styl" lang="stylus" scoped></style>
<script lang="babel" type="text/javascript">
  import animations from '../../mixins/animations'

  export default {
    mixins: [animations],
    props: ['postItem'],
    computed: {
      item () { return this.postItem },
      midia () {
        switch (this.item.IdMidia) {
          case 1: return 'Web'
          case 2: return 'Impresso'
          case 3: return 'Rádio'
          case 4: return 'TV'
          case 5: return 'Redes Sociais'
          default: return 'Outros'
        }
      }
    }
  }
</script>
