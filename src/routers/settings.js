import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'

const Holiday = resolve => {
  require.ensure(['../components/Settings/Holiday'], () => {
    resolve(require('../components/Settings/Holiday'))
  })
}
const Shift = resolve => {
  require.ensure(['../components/Settings/Shift'], () => {
    resolve(require('../components/Settings/Shift'))
  })
}
const Title = resolve => {
  require.ensure(['../components/Settings/Title'], () => {
    resolve(require('../components/Settings/Title'))
  })
}
const settingsrouter = {
  routes: {
    holiday: {
      path: '/Resmitatil',
      name: 'publicholiday',
      components: {
        default: Holiday,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter (to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      }
    },
    title: {
      path: '/Unvan',
      name: 'title',
      components: {
        default: Title,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter (to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      }
    },
    shift: {
      path: '/Mesai',
      name: 'shift',
      components: {
        default: Shift,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter (to, from, next) {
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
export default settingsrouter
