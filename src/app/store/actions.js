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

export const getNuxt = (store) => {
  Services.page.getNuxt()
    .then((nuxt) => {
      store.commit('GET_NUXT', nuxt)
    })
}
