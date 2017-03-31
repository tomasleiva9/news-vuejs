import Vue from 'Vue'
export default {
  'GET_NEWS' (state, news) {
    state.countNews = news.CountNoticias
    state.countMidias = news.CountNoticiasPorMidia
    state.news = news.Noticias
  },
  'GET_NUXT' (state, nuxt) {
    state.nuxt = nuxt
  },
  'GET_POSTS_FAILURE' (state, error) {
    state.failure = error
  },
  'TRANSITION_NAME' (state, name) {
    state.transitionName = name
  },
  'UPDATE_NEWS_ITEM' (state, {item, index}) {
    Vue.set(state.news, index, item)
  }
}
