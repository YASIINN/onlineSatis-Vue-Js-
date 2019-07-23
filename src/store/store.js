import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)
const namespaced = true
const store = new Vuex.Store({
  state: {
    breadcrumbtitle: 'Müşteri Paneli',
    mainpage: 'AnaSayfa',
    subpage: 'Müşteri Paneli',
    token: '',
    user: '',
    authority:''
  },
  namespaced,
  getters,
  mutations,
  actions
})

export default store
