<template>
  <div>
    <transition :name="transitionName" v-on:after-enter="afterEnter">
      <router-view class="full-content"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
  import store from './store/main'
  import router from './routes'
  import VueScrollTo from 'vue-scrollto'

  export default {
    store,
    router,
    computed: {
      transitionName () {
        return this.$store.state.shared.transitionName || 'slide-left'
      }
    },
    methods: {
      afterEnter (el) {
        const route = this.$store.state.route
        if (route.name === 'home' && route.from.name === 'view') {
          setTimeout(function () {
            const id = route.from.params.id.toString()
            VueScrollTo.scrollTo('', '1000', {
              container: '.content',
              offset: (document.getElementById(id).offsetTop)
            })
          })
        }
      }
    }
  }

</script>
