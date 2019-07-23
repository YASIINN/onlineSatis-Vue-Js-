import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const Register = resolve => {
    require.ensure(['../components/Register/Register'], () => {
        resolve(require('../components/Register/Register'))
    })
}
const Login = resolve => {
    require.ensure(['../components/Login/Login'], () => {
        resolve(require('../components/Login/Login'))
    })
}
const MyProfile = resolve => {
    require.ensure(['../components/User/MyProfile'], () => {
        resolve(require('../components/User/MyProfile'))
    })
}
const ActivateRegister = resolve => {
    require.ensure(['../components/Register/ActivateRegister'], () => {
        resolve(require('../components/Register/ActivateRegister'))
    })
}
const NewUser = resolve => {
    require.ensure(['../components/User/NewUser'], () => {
        resolve(require('../components/User/NewUser'))
    })
}
const activatetest = resolve => {
    require.ensure(['../components/Register/ActivateRegisterCode'], () => {
        resolve(require('../components/Register/ActivateRegisterCode'))
    })
}
const phonecode=resolve=>{
  require.ensure(['../components/PhoneCode/PhoneCode'], () => {
    resolve(require('../components/PhoneCode/PhoneCode'))
  })
}
const mailnotactivated=resolve=>{
  require.ensure(['../components/Register/MailNotActivated'], () => {
    resolve(require('../components/Register/MailNotActivated'))
  })
}
const createdUserList = resolve =>{
  require.ensure(['../components/User/CreatedUserList'], () => {
    resolve(require('../components/User/CreatedUserList'))
  })
}
const userCompanyList = resolve =>{
  require.ensure(['../components/Company/UserCompanyList'], () => {
    resolve(require('../components/Company/UserCompanyList'))
  })
}

const usersrouters = {
    routes: {
        register: {
            path: '/Kayitol',
            name: 'Register',
            components: {
                'login': Register
            }
        },
        profile: {
            path: '/Profilim',
            name: 'MyPrf',
            components: {
                default: MyProfile,
                'appheader': Header,
                'appside': Aside,
                'appbreadcrumb': BreadCrumbs,
                'appfooter': Footer
            },
            beforeEnter(to, from, next) {
                store.dispatch('initAuth').then((res) => {
                    if (res == true) {
                        next()
                    } else {
                        next('/GirisYap')
                    }
                })
            }

        },
      mailnotactive:{
        path: '/MailAktivasyon',
        name: "mailactivate",
        components: {
          'login': mailnotactivated
        }
      },
      phonecode:{
        path: '/TelefonGiris',
        name: "phonelogin",
        components: {
          'login': phonecode
        }
      },
      usercompanylist:{
        path: '/Kullanicifirmalari/:userid',
        name: 'UserToCompany',
        components: {
          default: userCompanyList,
          'appheader': Header,
          'appside': Aside,
          'appbreadcrumb': BreadCrumbs,
          'appfooter': Footer
        },
        beforeEnter(to, from, next) {
          store.dispatch('initAuth').then((res) => {
            if (res == true) {
              next()
            } else {
              next('/GirisYap')
            }
          })
        }
      },
      createduserlist:{
        path: '/Olusturulankisiler',
        name: 'CreatedUsers',
        components: {
          default: createdUserList,
          'appheader': Header,
          'appside': Aside,
          'appbreadcrumb': BreadCrumbs,
          'appfooter': Footer
        },
        beforeEnter(to, from, next) {
          store.dispatch('initAuth').then((res) => {
            if (res == true) {
              next()
            } else {
              next('/GirisYap')
            }
          })
        }
      },




        login: {
            path: '/GirisYap',
            name: 'Login',
            components: {
                'login': Login
            }
        },
        activateregister: {
            path: '/Kayitaktivasyon/:code',
            name: "activate",
            components: {
                'login': activatetest
            }
        },
        newuser: {
            path: '/Yenikullanici',
            name: 'NewUser',
            components: {
                default: NewUser,
                'appheader': Header,
                'appside': Aside,
                'appbreadcrumb': BreadCrumbs,
                'appfooter': Footer
            },
            beforeEnter(to, from, next) {
                store.dispatch('initAuth').then((res) => {
                    if (res == true) {
                        next()
                    } else {
                        next('/GirisYap')
                    }
                })
            }
        }
    }
}

export default usersrouters
