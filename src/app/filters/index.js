import moment from 'moment'

export default {

  date (val) {
    moment.locale('pt-br')
    return moment(val)
  }

}
