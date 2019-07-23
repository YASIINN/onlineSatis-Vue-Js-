import WsProvider from '../Provider/WSProvider'
import {defer} from "q";
var CompanyService = {
  addnewcompany: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getcompanylist: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  getmanagerlist: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  removamanager: (param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  addcompanyuser:(param)=>{
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },
  editmanager:(param) => {
    var deferred = new Promise(function (resolve, reject) {
      WsProvider.ajaxPost('Firma.php', param).then((response) => {
        resolve(response)
      })
    })
    return deferred
  },

}
export default CompanyService
