'use strict'

import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

require('./styles/app.scss')

new Vue({
  store,
  el: 'body',
  components: { App }
})
