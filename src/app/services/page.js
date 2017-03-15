import Vue from 'vue'

export default {

  getNews () {
    const url = "/Noticia/MVC?midias&secoes&fontes&avaliacoes&opcoesAdicionais&dataInicial=''&dataFinal=''&expressao&porDataVeiculacao=false&expressaoTitulo=false&ordem=1&apenasLiberadas=false&skip=0&take=48&idProdutoMvc=112&idAtributo"
    return Vue.$http.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }

}
