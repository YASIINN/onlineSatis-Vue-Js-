import WsProvider from '../Provider/WSProvider'
var StaticService = {
  gettallcity: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Il.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getdistrict: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Il.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }

}
export default StaticService
