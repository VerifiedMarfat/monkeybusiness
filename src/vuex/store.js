'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  header: 'You ready for this?!',
}

const mutations = {
  INITIATE (state) {
    state.header = 'Welcome, little capuchin!'
  }
}
export default new Vuex.Store({
  state,
  mutations
})

