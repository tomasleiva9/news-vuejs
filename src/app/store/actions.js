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

export const getNoticia = (store, payload) => {
  payload.noticia && store.commit('GET_NOTICIA', payload.noticia)
  payload.id && Services.page.getNoticia(payload)
      .then((news) => {
        store.commit('GET_NOTICIA', news)
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
