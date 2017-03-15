<template>
  <section :id="item.Id" class="post d-flex flex-column px-4 py-4">
    <section class="post-head text-truncate w-100">
      <strong>{{ midia }}</strong><br>
      <span>{{item.Fonte}}</span>
      <div class="divisor"></div>
      <span class="post-date">{{ filters.date(item.DataHora).format('D/MM/YY H:mm:ss') }} |
        {{ filters.date(item.DataHoraCaptura).format('D/MM/YY H:mm:ss') }}</span>
    </section>

    <router-link @click.native="viewTransitionAnimationStart"
                  class="post-title d-flex align-items-center justify-content-center"
                  :to="{ name: 'view', params: { id: item.Id }}">{{item.Titulo}}</router-link>

    <section class="post-content">
      <span class="post-channels badge badge-pill badge-default" v-for="(canal, index) in item.Secoes.split(',')">
        <span class="post-channels-name">{{canal.split('|')[0]}}</span>
        <!--<span class="post-channels-aval"></span>-->
      </span>
    </section>

    <section class="post-actions d-flex align-content-left p-2">
      <a href class="mr-auto p-2"><i class="material-icons md-18">check</i></a>
      <a href class="p-2"><i class="material-icons md-18">file_download</i></a>
      <a href class="p-2"><i class="material-icons md-18">email</i></a>
      <a href class="p-2"><i class="material-icons md-18">delete</i></a>
      <a href class="p-2"><i class="material-icons md-18">more_vert</i></a>
    </section>

  </section>
</template>

<script lang="babel" type="text/javascript">
  import animations from '../mixins/animations'

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
