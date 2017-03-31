import Vue from 'vue'

export default {

  getNews () {
    const url = 'https://api.myjson.com/bins/1gvgpr'
    return Vue.$http.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getNuxt () {
    const allow = 'http://allow-any-origin.appspot.com/'
    const url = allow + 'https://boxnet-1198.appspot.com'
    return Vue.$http.get(url)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }

}
