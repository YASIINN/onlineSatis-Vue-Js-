import WsProvider from '../Provider/WSProvider'
var PayTermService = {
  addpayterm: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('OdemeDonemi.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  deletepayterm: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('OdemeDonemi.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  editpayterm: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('OdemeDonemi.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getpayterm:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('OdemeDonemi.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
}
export default PayTermService
