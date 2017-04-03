<template src="./news.html"></template>
<style src="./news.styl" lang="stylus" scoped></style>
<script lang="babel" type="text/javascript">
  import Vue from 'Vue'
  import animations from '../../mixins/animations'

  export default {
    mixins: [animations],
    props: ['postItem', 'postIndex'],
    data () {
      return {
        actionMenuOpen: false
      }
    },
    computed: {
      item () { return this.postItem }
    },
    methods: {
      toggleCanais (canais, index) {
        const item = this.item
        if (index !== undefined) {
          canais.ativo = !canais.ativo
          Vue.set(item.Secoes, index, canais)
        } else {
          const ativos = item.Secoes.filter(i => i.ativo)
          canais.forEach(function (canal, i) {
            canal.ativo = !ativos.length
            Vue.set(item.Secoes, i, canal)
          })
        }

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
