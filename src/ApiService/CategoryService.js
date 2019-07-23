import WsProvider from '../Provider/WSProvider'
var CategoryService = {
  newcategory: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Urun.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },

}
export default CategoryService
