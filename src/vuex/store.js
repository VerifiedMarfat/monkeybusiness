'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  header: 'You ready for this?!',
  continue: false,
  message: 'Currently Unknown',
  data: {}
}

const mutations = {
  INITIATE (state) {
    state.header = 'Welcome, little capuchin!'
    state.continue = true
  },
  UPDATE (state, value) {
    state.message = value
  },
  EVAL (state) {
    state.data.message = state.message

    console.log('TODO :: call external method to submit: ')
    // state.data.score = doSomething()
    console.log(state.data.message)
  },
}
export default new Vuex.Store({
  state,
  mutations,
  strict: true
})
