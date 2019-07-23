import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'
const ProductDetail = resolve => {
  require.ensure(['../components/Products/ProductDetail'], () => {
    resolve(require('../components/Products/ProductDetail'))
  })
}
const UserProducts = resolve => {
  require.ensure(['../components/Products/UserProducts'], () => {
    resolve(require('../components/Products/UserProducts'))
  })
}

const NewProduct = resolve =>{
  require.ensure(['../components/Products/NewProduct'], () => {
    resolve(require('../components/Products/NewProduct'))
  })
}
const productrouters = {
  routes: {
    productsdetail: {

      path: '/UrunDetay/:urunid',
      name: 'PrDetail',
      components: {
        default: ProductDetail,
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
    newproduct:{
      path: '/Urunolustur',
      name: 'newProduct',
      components: {
        default: NewProduct,
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
    product: {
      path: '/Urunlerim',
      name: 'MyProduct',
      components: {
        default: UserProducts,
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
export default productrouters
