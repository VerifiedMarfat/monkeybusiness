<template>
  <div>
    <button @click='initiate'>Hell yeah!</button>
  </div>
</template>

<script>

export default {
  vuex: {
    getters: {
      header: state => state.header
    },
    actions: {
      initiate: ({ dispatch }, e) => {
        dispatch('INITIATE')
      }
    }
  }
}

</script>
