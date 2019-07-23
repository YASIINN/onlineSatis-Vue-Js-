import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const newCategory = resolve => {
  require.ensure(['../components/Category/Category'], () => {
    resolve(require('../components/Category/Category'))
  })
}


const categoryrouters = {
  routes:

    {
      newcategory: {

        path: '/Kategoritanimla',
        name: 'NewCategory',
        components: {
          default: newCategory,
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

export default categoryrouters
