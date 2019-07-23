import WsProvider from '../Provider/WSProvider'
var PhoneLogin = {
  activatephone: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  sendphonecode: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  verifycode:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }

}
export default PhoneLogin
