import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const HelpDetail = resolve => {
  require.ensure(['../components/Help/HelpDetail'], () => {
    resolve(require('../components/Help/HelpDetail'))
  })
}
const UserHelp = resolve => {
  require.ensure(['../components/Help/Help'], () => {
    resolve(require('../components/Help/Help'))
  })
}

const helprouters = {
  routes:

    {
      help: {

        path: '/Yardim',
        name: 'Help',
        components: {
          default: UserHelp,
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
      helpdetail: {
        path: '/Yardim/:kategori',
        name: 'DetailHelp',
        components: {
          default: HelpDetail,
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

export default helprouters
