<template>
  <div>
    <h2>Identify thy business!</h2>
    <p>My business is as follows..</p>
    <textarea rows="10" cols="50" :value="message" @input="updateMessage"></textarea>
  </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        message: state => state.message,
      },
      actions: {
        updateMessage: ({ dispatch }, event) => {
          dispatch('UPDATE', event.target.value)
        },
        evaluate: ({ dispatch }) => {
          dispatch('EVAL')
        }
      }
    }
  }
</script>