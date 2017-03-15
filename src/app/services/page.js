import Vue from 'vue'

export default {

  getNews () {
    const url = 'https://api.myjson.com/bins/1gvgpr'
    return Vue.$http.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }

}
