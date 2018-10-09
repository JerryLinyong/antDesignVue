<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h1>任务日志列表</h1>
      </a-col>
      <a-col :xs="{ span: 3, offset: 1 }" style="text-align:center">
        <h4><a-icon type="team" /> 次数</h4>
        <h1 style="font-size:40px">{{0}}</h1>
      </a-col>
      <a-col :xs="{ span: 2, offset: 17 }">
        <a-button type="primary" @click="changeSession('vmain')">返回</a-button>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-col :xs="{ span: 6, offset: 0 }" v-for="(item,index) in titles" :key="index" style="text-align:center;padding:10px 0;font-size:20px" class="title">
          {{item}}
        </a-col>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }" v-for="(item,index) in contents" :key="index" style="text-align:center">
        <a-col :xs="{ span: 6, offset: 0 }">
          {{item.account}}
        </a-col>
        <a-col :xs="{ span: 6, offset: 0 }" >
          {{item.group}}
        </a-col>
        <a-col :xs="{ span: 6, offset: 0 }">
          {{item.content}}
        </a-col>
        <a-col :xs="{ span: 6, offset: 0 }">
          {{item.state}}
        </a-col>
      </a-col>
      
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-col :xs="{ span: 6, offset: 18 }">
          <a-pagination v-model="current" :total="page"/>
        </a-col>
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
        titles: ['发言账号','发言群','发言内容','状态'],
        allData: [{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'},{account:'1211321',group:'1321',content:'asdas',state:'ok'}],
        current: 1
      }
    },
    methods: {
      changeSession (session) {
        this.$emit('changeSession',session)
      }
    },
    computed: {
      contents () {
        return this.allData.slice((this.current-1)*10,(this.current*10))
      },
      page () {
        return Math.ceil(this.allData.length/10)*10
      }
    },
    mounted () {
    }
  }
</script>

<style scoped> 
  .ant-row {
    font-size: 16px
  }
  .title {
    background: #bbdefb;
    padding: 8px
  }
  .ant-row>div {
    margin-bottom: 20px
  }
</style>
