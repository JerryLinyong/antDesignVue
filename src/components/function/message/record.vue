<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 23, offset: 1 }">
        <h1>群发记录</h1>
      </a-col>
      <a-col :xs="{ span: 4, offset: 20 }">
        <a-button type="primary" @click="sendMsg">新建群发</a-button>
      </a-col>
      <a-col :xs="{ span: 23, offset: 1 }">
        <h3>消息详情</h3>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }" v-for='(info,index) in infos' :key='index'>
        <h4>{{info.time}}</h4>
        <p>{{info.message}}</p>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        infos: [{time: '2018.07.05',message: '121'},{time: '2018.07.05',message: '121'},{time: '2018.07.05',message: '121'},{time: '2018.07.05',message: '121'}]
      }
    },
    methods: {
      sendMsg () {
        this.$emit('sendMsg')
      }
    }
  }
</script>

<style scoped> 
  .ant-row {
    font-size: 16px
  }
  .title {
    background: #bbdefb ;
    padding: 8px
  }
  .ant-row>div {
    margin-bottom: 20px
  }
  h4 {
    background: #bbdefb
  }
</style>
