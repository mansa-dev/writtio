import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdate: {
      card_details: { ending: '1234', expiry: '01/2024', image: 'linktoimage' },
      last_payment: '15-12-2019',
      payment_history: [
        { 'date': '20-5-2012', 'amount': '200' },
        { 'date': '20-5-2014', 'amount': '260' },
        { 'date': '20-5-2016', 'amount': '300' }
      ] }
  },
  mutations: {
  },
  actions: {
    getuserdata () {

    }
  },
  modules: {
  }
})
