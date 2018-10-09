<template>
  <div>
      <component :is='component' @changeSession='component="record"' @sendMsg='component="main"'></component>
  </div>
</template>
<script>
  import record from './record'
  import main from './main';
  export default {
    components: {
        vmain: main,
        record: record
    },
    data () {
      return {
        component: 'vmain'
      }
    }
  }
</script>

<style scoped> 
</style>
