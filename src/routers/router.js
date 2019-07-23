import Vue from 'vue'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
import Password from './password'
import Users from './Users'
import Bills from './bills'
import Helper from './help'
import Services from './services'
import Product from './product'
import Orders from './orders'
import Request from './requests'
import Settings from './settings'
import Company from './company'
import Payterm from './payterm'
import Category from './category'
import VueRouter from 'vue-router'

const ChatBox = resolve => {
  require.ensure(['../components/ChatBox/ChatBox'], () => {
    resolve(require('../components/ChatBox/ChatBox'))
  })
}

const Files = resolve => {
  require.ensure(['../components/Files/Files'], () => {
    resolve(require('../components/Files/Files'))
  })
}

const Dashboard = resolve => {
  require.ensure(['../components/Dashboard/Dashboard'], () => {
    resolve(require('../components/Dashboard/Dashboard'))
  })
}
Vue.use(VueRouter)
export const router = new VueRouter({

  routes: [{
    path: '/',
    name: 'Dash',
    components: {
      default: Dashboard,
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
    Password.routes.changepassword,
    Password.routes.forgotpassword,
    Users.routes.register,
    Users.routes.profile,
    Users.routes.login,
    Users.routes.newuser,
    Users.routes.phonecode,
    Users.routes.mailnotactive,
    Users.routes.createduserlist,
    Users.routes.activateregister,
    Bills.routes.electronicbills,
    Bills.routes.bills,
    Helper.routes.helpdetail,
    Helper.routes.help,
    Services.routes.servicesdetail,
    Services.routes.services,
    Product.routes.productsdetail,
    Product.routes.product,
    Product.routes.newproduct,
    Company.routes.addusercompany,
    Users.routes.usercompanylist,
    Orders.routes.myorder,
    Orders.routes.waitingorders,
    Request.routes.support,
    Request.routes.newsupport,
    Settings.routes.holiday,
    Settings.routes.shift,
    Settings.routes.title,
    Company.routes.addnewcompany,
    Company.routes.companylist,
    Company.routes.definesector,
    Company.routes.sectorlist,
    Payterm.routes.newpayterm,
    Payterm.routes.paytermlist,
    Category.routes.newcategory,
    {
      path: '/Dosyalar',
      name: 'Files',
      components: {
        default: Files,
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
    {
      path: '/Mesajlar',
      name: 'Messages',
      components: {
        default: ChatBox,
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

    {path: '*', redirect: '/'}
  ],
  mode: 'history'
})
