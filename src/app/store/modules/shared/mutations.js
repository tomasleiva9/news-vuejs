
export default {
  'GET_NEWS' (state, news) {
    state.countNews = news.CountNoticias
    state.countMidias = news.CountNoticiasPorMidia
    state.news = news.Noticias
  },
  'GET_POSTS_FAILURE' (state, error) {
    state.failure = error
  },
  'TRANSITION_NAME' (state, name) {
    state.transitionName = name
  }
}
