import WsProvider from '../Provider/WSProvider'
var UserService = {
  changepassword: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  createduserlist:(param) =>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
}
export default UserService
