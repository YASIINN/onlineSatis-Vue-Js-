import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const MyOrders = resolve => {
  require.ensure(['../components/Orders/MyOrders'], () => {
    resolve(require('../components/Orders/MyOrders'))
  })
}
const PaymentPending = resolve => {
  require.ensure(['../components/Orders/PaymentPendingOrders'], () => {
    resolve(require('../components/Orders/PaymentPendingOrders'))
  })
}

const ordersrouters = {
  routes:

    {
      myorder: {

        path: '/Siparislerim',
        name: 'MyOrders',
        components: {
          default: MyOrders,
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
      waitingorders: {
        path: '/OdemeBekleyenSiparisler',
        name: 'PaymentPending',
        components: {
          default: PaymentPending,
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

export default ordersrouters
