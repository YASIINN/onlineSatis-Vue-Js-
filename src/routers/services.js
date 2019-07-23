import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const ServiceDetail = resolve => {
  require.ensure(['../components/UserService/ServiceDetail'], () => {
    resolve(require('../components/UserService/ServiceDetail'))
  })
}

const UserServices = resolve => {
  require.ensure(['../components/UserService/Services'], () => {
    resolve(require('../components/UserService/Services'))
  })
}
const servicesrouters = {
  routes: {
    services: {
      path: '/Hizmetler',
      name: 'Service',
      components: {
        default: UserServices,
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
    servicesdetail: {
      path: '/HizmetDetay/:hizmetid',
      name: 'ServicesDetail',
      components: {
        default: ServiceDetail,
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
export default servicesrouters
