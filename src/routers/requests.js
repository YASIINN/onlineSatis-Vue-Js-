import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const NewSupport = resolve => {
  require.ensure(['../components/Support/CreateNewSupport'], () => {
    resolve(require('../components/Support/CreateNewSupport'))
  })
}

const MySupports = resolve => {
  require.ensure(['../components/Support/MySupports'], () => {
    resolve(require('../components/Support/MySupports'))
  })
}

const requestrouters = {
  routes:

    {
      support: {

        path: '/Taleplerim',
        name: 'MySupports',
        components: {
          default: MySupports,
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
      newsupport: {
        path: '/YeniTalep',
        name: 'NewSupport',
        components: {
          default: NewSupport,
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

export default requestrouters
