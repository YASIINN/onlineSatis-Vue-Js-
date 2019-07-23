import LoginService from '../ApiService/LoginService'
import { router } from '../routers/router'
import Component from '../Plugins/Component'

export const newtitle = ({ commit }, title) => {
    switch (title) {
        case 'Müşteri Paneli':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Müşteri Paneli')
            break
        case 'Ürünlerim':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Satın Aldığım Ürünler')
            break
        case 'Hizmetlerim':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Hizmetlerim')
            break
        case 'Faturalarım':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Faturalarım')
            break
        case 'E-Faturalarım':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'E - Faturalarım ')
            break
        case 'Yardım':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Yardım')
            break
        case 'Kullanıcı Profili':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Profil')
            break
        case 'Mesajlar':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Mesajlar')
            break
        case 'Parola Değiştir':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Parola Değiştir')
            break
        case 'Taleplerim':
            commit('setmainpage', 'AnaSayfa')

            commit('setsubpage', 'Taleplerim')
            break
        case 'Yeni Talep Oluştur':
            commit('setmainpage', 'AnaSayfa')
            commit('setcollapse', false)

            commit('setsubpage', 'Yeni Talep Oluştur')
            break
        case 'Siparişlerim':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Siparişlerim')
            break
        case 'Ödeme Bekleyen Siparişler':
            commit('setmainpage', 'AnaSayfa')
            commit('setsubpage', 'Ödeme Bekleyen Siparişler')
            break
        case 'Dosyalar':
            commit('setmainpage', 'AnaSayfa')

            commit('setsubpage', 'Dosyalar')
            break
    }
    commit('setbreadcrumbtitle', title)
}
export const initAuth = ({ commit, dispatch }) => {

    return new Promise((resolve, reject) => {
        if (localStorage.getItem('token') != null && localStorage.getItem('us') != null &&
            localStorage.getItem('token') != '' &&
            localStorage.getItem('us') != ''
        ) {
            let token = JSON.parse(Component.b64DecodeUnicode(localStorage.getItem('token')))
            let user = JSON.parse(Component.b64DecodeUnicode(localStorage.getItem('us')))
            if (token && user) {
                commit('setToken', token)
                commit('setUs', user)
                resolve(true)
            } else {
                resolve(false)
            }
        } else {
            resolve(false)
        }
    })
}
export const login = ({ commit, dispatch, state }, user) => {
    return new Promise((resolve, reject) => {
        LoginService.getuser(user).then((response) => {

            if (response.data.length) {





                if (response.data[0].smsGiris == 1) {

                    //
                    localStorage.setItem('us', Component.b64EncodeUnicode(JSON.stringify(response.data[0])))
                        //  commit('setToken', response.data[0].userToken)
                        //   commit('setUs', response.data[0])
                    router.replace("/TelefonGiris");
                } else {
                    if (response.data[0].durum == 1) {
                        localStorage.setItem('token', Component.b64EncodeUnicode(JSON.stringify({ token: response.data[0].userToken })))
                        commit('setToken', response.data[0].userToken)
                        commit('setUs', response.data[0])
                        resolve(true)
                    }
                    //telefon durumuna bak


                    //maile bak
                    else if (response.data[0].durum == 3) {
                        router.replace('/MailAktivasyon')
                        localStorage.setItem('registerid', Component.b64EncodeUnicode(response.data[0].kullaniciId))
                            //  router.replace('/Kayitdogrula')
                    }
                }


            } else {
                resolve(response.msg)
            }
        })
    })
}
