import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import store from '../store/store'
import BreadCrumbs from '../components/shared/BreadCrumbs'
const ForgotPassword = resolve => {
  require.ensure(['../components/Password/Password'], () => {
    resolve(require('../components/Password/Password'))
  })
}
const ChangeUserPassword = resolve => {
  require.ensure(['../components/User/ChangePassword'], () => {
    resolve(require('../components/User/ChangePassword'))
  })
}
const passwordrouters = {
  routes:

    {
      forgotpassword: {

        path: '/ParolamiUnuttum',
        name: 'ForgotPsw',
        components: {
          'login': ForgotPassword
        }
      },
      changepassword: {

        path: '/ParolaDegistir',
        name: 'ChangePassword',
        components: {
          default: ChangeUserPassword,
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

export default passwordrouters
