<template>
  <div>
    <div v-if='continue'>
        <message></message>
        <preview></preview>
    </div>
    <div v-else>
      <button @click='initiate'>Hell yeah!</button>
    </div>
  </div>
</template>

<script>
  import Message from './Form/Message.vue'
  import Preview from './Preview.vue'

  export default {
    components: {
      Message,
      Preview,
    },
    vuex: {
      getters: {
        continue: state => state.continue
      },
      actions: {
        initiate: ({ dispatch }, e) => {
          dispatch('INITIATE')
        }
      }
    }
  }
</script>
