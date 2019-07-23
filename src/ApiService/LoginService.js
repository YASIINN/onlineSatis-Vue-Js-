import WSProvider from '../Provider/WSProvider'
var LoginService = {
  getuser: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WSProvider.ajaxPost('Kullanici.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
  /*
    logout: (param) => {
        debugger
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/Signout", param).then((response) => {
                resolve(response)
            })
        });
        return deferred
    } */

}

export default LoginService
