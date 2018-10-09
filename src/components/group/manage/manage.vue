<template>
  <div>
    <component :is='component' @changeSession="changeSession"></component>
  </div>
</template>

<script>
  import main from './main'
  import creatConfig from './creatConfig'
  import log from './log'
  export default {
    components: {
      vmain: main,
      creatConfig: creatConfig,
      log: log
    },
    data () {
      return {
        component: "vmain"
      }
    },
    methods: {
      changeSession (session) {
        this.component = session
      }
    },
    mounted () {
    }
  }
</script>

<style scoped> 
  
</style>
