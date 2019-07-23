import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'

import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const EBills = resolve => {
  require.ensure(['../components/Bills/EBills'], () => {
    resolve(require('../components/Bills/EBills'))
  })
}
const Bills = resolve => {
  require.ensure(['../components/Bills/Bills'], () => {
    resolve(require('../components/Bills/Bills'))
  })
}
const billsrouters = {
  routes:

    {
      bills: {

        path: '/Faturalarim',
        name: 'MyBills',
        components: {
          default: Bills,
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
      electronicbills: {
        path: '/E-Faturalarim',
        name: 'Ebills',
        components: {
          default: EBills,
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

export default billsrouters
