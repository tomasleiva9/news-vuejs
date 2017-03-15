<template>
  <div>
    <transition :name="transitionName" v-on:enter="onEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
  import store from './store/main'
  import router from './routes'

  export default {
    store,
    router,
    computed: {
      transitionName () {
        return this.$store.state.shared.transitionName || 'slide-left'
      }
    },
    methods: {
      onEnter (el) {
        if (this.$store.state.route.name === 'home' && this.$store.state.route.from.name === 'view') {
          setTimeout(() => {
            const id = this.$store.state.route.from.params.id.toString()
            document.querySelector('.content').scrollTop = document.getElementById(id).offsetTop
          }, 1000)
        }
      }
    }
  }

</script>
