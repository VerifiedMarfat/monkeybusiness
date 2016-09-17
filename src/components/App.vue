<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <activate></activate>
  </div>
</template>

<script>

import Activate from './Activate.vue'

export default {
  components: {
    Activate,
  },
  vuex: {
    getters: {
      header: state => state.header
    }
  }
}

</script>
