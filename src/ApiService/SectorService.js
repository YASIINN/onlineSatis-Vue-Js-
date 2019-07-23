import WsProvider from '../Provider/WSProvider'
var SectorService = {
  addsector: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Sektor.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  editsector: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Sektor.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  deletesector: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Sektor.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  sectorlist:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Sektor.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
}
export default SectorService
