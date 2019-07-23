import WsProvider from '../Provider/WSProvider'
var RegisterService = {
  addregister: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  activationcode: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  sendcode: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  activatamail:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
}
export default RegisterService
