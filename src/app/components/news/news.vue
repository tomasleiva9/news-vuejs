<template src="./news.html"></template>
<style src="./news.styl" lang="stylus" scoped></style>
<script lang="babel" type="text/javascript">
  import Vue from 'Vue'
  import animations from '../../mixins/animations'

  export default {
    mixins: [animations],
    props: ['postItem', 'postIndex'],
    computed: {
      item () { return this.postItem }
    },
    methods: {
      toggleCanal (canal, index) {
        canal.ativo = !canal.ativo
        Vue.set(this.item.Secoes, index, canal)
        this.toogleItem()
      },
      toogleItem () {
        const ativos = this.item.Secoes.filter(item => item.ativo)
        Vue.set(this.item, 'ativo', ativos.length)
        this.updateItem()
      },
      updateItem () {
        const item = this.item; const index = this.postIndex
        this.$store.commit('UPDATE_NEWS_ITEM', {item, index})
      }
    }
  }
</script>
