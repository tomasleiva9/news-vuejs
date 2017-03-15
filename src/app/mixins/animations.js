export default {

  methods: {

    viewTransitionAnimationStart (e) {
      const animated = document.createElement('div')
      const _this = this

      animated.className = 'placeholder'
      document.body.appendChild(animated)

      setTimeout(function () {
        animated.className = 'placeholder placeholder--trans-in'
      }, 50)

      _this.onEndTransition(animated, function () {
        animated.className = 'placeholder placeholder--trans-out'
        _this.onEndTransition(animated, function () {
          animated.remove()
        })
      })
    },

    onEndTransition (el, callback) {
      let onEndCallbackFn = function (ev) {
        if (ev.target !== this) return
        this.removeEventListener('transitionend', onEndCallbackFn)
        if (callback && typeof callback === 'function') { callback.call(this) }
      }
      el.addEventListener('transitionend', onEndCallbackFn)
    },

    getViewport (axis) {
      let client, inner
      if (axis === 'x') {
        client = window.document.documentElement['clientWidth']
        inner = window['innerWidth']
      } else if (axis === 'y') {
        client = window.document.documentElement['clientHeight']
        inner = window['innerHeight']
      }
      return client < inner ? inner : client
    },

    scrollY () {
      return window.pageYOffset || window.document.documentElement.scrollTop
    },

    scrollX () {
      return window.pageXOffset || window.document.documentElement.scrollLeft
    }

  }

}
