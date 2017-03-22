
export const news = (state) => {
  return state.shared.news.filter(function (item) {
    item.Secoes = item.Secoes.split(',')
    item.Secoes.forEach(function (canal, idx) {
      item.Secoes[idx] = {
        nome: canal.split('|')[0],
        idA: canal.split('|')[1],
        idB: canal.split('|')[2],
        paramA: canal.split('|')[3],
        paramB: canal.split('|')[5],
        tipo: canal.split('|')[4]
      }
    })

    item.nomeMidia = function (idMidia) {
      switch (idMidia) {
        case 1: return 'Web'
        case 2: return 'Impresso'
        case 3: return 'Rádio'
        case 4: return 'TV'
        case 5: return 'Redes Sociais'
        default: return 'Outros'
      }
    }

    return item
  })
}
