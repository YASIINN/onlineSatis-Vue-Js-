import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const PayTerm = resolve => {
  require.ensure(['../components/PayTerm/NewPayTerm'], () => {
    resolve(require('../components/PayTerm/NewPayTerm'))
  })
}
const PayTermListe = resolve =>{
  require.ensure(['../components/PayTerm/PayTermList'], () => {
    resolve(require('../components/PayTerm/PayTermList'))
  })
}


const paytermrouters = {
  routes:
    {
      newpayterm: {

        path: '/Odemedonemitanimla',
        name: 'payday',
        components: {
          default: PayTerm,
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
      paytermlist: {

        path: '/Odemedonemleri',
        name: 'paytermlist',
        components: {
          default: PayTermListe,
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
    }

}

export default paytermrouters
