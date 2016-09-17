<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <content></content>
  </div>
</template>

<script>
  import Content from './Content.vue'

  export default {
    components: {
      Content,
    },
    vuex: {
      getters: {
        header: state => state.header
      }
    }
  }
</script>
