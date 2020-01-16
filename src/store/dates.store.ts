import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdate: {
      card_details: { ending: '1234', expiry: '01/2024', image: 'linktoimage' },
      last_payment: new Date(),
      payment_history: [
        { 'date': new Date(), 'amount': '200' },
        { 'date': new Date(), 'amount': '260' },
        { 'date': new Date(), 'amount': '300' }
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
