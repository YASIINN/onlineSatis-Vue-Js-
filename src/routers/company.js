import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Aside from '../components/shared/Aside'
import BreadCrumbs from '../components/shared/BreadCrumbs'
import store from '../store/store'

const NewCompany = resolve => {
  require.ensure(['../components/Company/NewCompany'], () => {
    resolve(require('../components/Company/NewCompany'))
  })
}
const CompanyList = resolve => {
  require.ensure(['../components/Company/CompanyList'], () => {
    resolve(require('../components/Company/CompanyList'))
  })
}

const NewSector = resolve => {
  require.ensure(['../components/Sector/DefineSector'], () => {
    resolve(require('../components/Sector/DefineSector'))
  })
}
const SectorList = resolve => {
  require.ensure(['../components/Sector/SectorList'], () => {
    resolve(require('../components/Sector/SectorList'))
  })
}

const AddUserCompany = resolve =>{
  require.ensure(['../components/Company/AddUserCompany'], () => {
    resolve(require('../components/Company/AddUserCompany'))
  })
}
const MainCompany = resolve =>{
  require.ensure(['../components/Company/MainCompany'], () => {
    resolve(require('../components/Company/MainCompany'))
  })
}

const companyrouters = {
  routes: {
    addnewcompany: {
      path: '/Firmaekle',
      name: 'NewCompany',
      components: {
        default: MainCompany,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter(to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      },
      children: [
        {path:"",component:NewCompany},
      ]

    },
    addusercompany:{
      path: '/Firmaata/:userid',
      name: 'AddCompanytouser',
      components: {
        default: AddUserCompany,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter(to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      }
    },
    sectorlist:{
      path: '/Sektorler',
      name: 'Sectors',
      components: {
        default: SectorList,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter(to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      }
    },
    definesector: {
      path: '/Sektortanimla',
      name: 'definasector',
      components: {
        default: NewSector,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter(to, from, next) {
        store.dispatch('initAuth').then((res) => {
          if (res == true) {
            next()
          } else {
            next('/GirisYap')
          }
        })
      }
    },
    companylist: {
      path: '/Firmalarim',
      name: 'CompanyList',
      components: {
        default: CompanyList,
        'appheader': Header,
        'appside': Aside,
        'appbreadcrumb': BreadCrumbs,
        'appfooter': Footer
      },
      beforeEnter(to, from, next) {
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

export default companyrouters
