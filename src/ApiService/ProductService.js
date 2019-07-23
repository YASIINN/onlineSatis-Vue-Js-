import WsProvider from '../Provider/WSProvider'
var ProductService = {
  newproduct: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Urun.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  deleteproduct: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Urun.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getproducts: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Urun.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getproductdetails:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Urun.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  }
}
export default ProductService
