<template>
  <h3>The preview</h3>
  <p>{{ message }}</p>
  <button @click='submit'>Finish up</button>
</template>

<script>
  export default {
    vuex: {
      getters: {
        message: state => state.message
      },
      actions: {
        submit: ({ dispatch }) => {
          dispatch('EVAL')
        }
      }
    }
  }
</script>
