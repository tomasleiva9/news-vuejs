import Services from '../services'

export const getNews = (store, request) => {
  Services.page.getNews(request)
    .then((news) => {
      store.commit('GET_NEWS', news)
    })
    .catch((error) => {
      store.commit('GET_POSTS_FAILURE', error)
    })
}

export const transitionName = (store, name) => {
  store.commit('TRANSITION_NAME', name)
}
