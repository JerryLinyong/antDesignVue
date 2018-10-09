<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h1>群设置</h1>
      </a-col>
      <a-col :xs="{ span: 18, offset: 1 }">
        <a-button type="primary" @click="tabs.push('1')"><a-icon type="plus-circle-o" /> 新增配置</a-button>
      </a-col>
      <a-col :xs="{ span: 4, offset: 0 }">
        <a-button type="primary" @click="changeSession('vmain')">返回</a-button>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane v-for="(tab,index) in tabs" :tab="'配置' + (index+1)" :key="index+1+''">
            <a-col :span="3">
              配置名称：
            </a-col>
            <a-col :span="21">
              <a-input placeholder="名称" style="width: 200px" />
            </a-col>
            <a-col :span="3">
              任务执行时间：
            </a-col>
            <a-col :span="21">
              <a-time-picker @openChange="handleOpenChange" :open="open" placeholder="开始时间">
                <a-button slot="addon" size="small" type="primary" @click="handleClose">OK</a-button>
              </a-time-picker>
              <a-time-picker :open.sync="open2" placeholder="结束时间">
                <a-button slot="addon" size="small" type="primary" @click="handleClose">OK</a-button>
              </a-time-picker>
            </a-col>
            <a-col :span="3">
              聊天间隔时长：
            </a-col>
            <a-col :span="21">
               <a-input-number :min="0" :max="100" v-model="value" />分
               <h5>(机器人每一次发言的间隔时长)</h5>
            </a-col>
            <a-col :span="3">
              单日发言最大限制：
            </a-col>
            <a-col :span="21">
              <a-input-number :min="0" :max="500" v-model="value2" />次
              <h5>(每个机器人每天最多可发言的次数，当发言次数超过最大值，顺延到次日)</h5>
            </a-col>
          </a-tab-pane>
        </a-tabs>
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
        tabs: [],
        open: false,
        open2: false,
        value: 3,
        value2: 2
      }
    },
    methods: {
      handleOpenChange(open){
        this.open = open
      },
      handleClose(){
        this.open = false
        this.open2 = false
      },
      changeSession (session) {
        this.$emit('changeSession',session)
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
    background: #bbdefb ;
    padding: 8px
  }
  .ant-row>div {
    margin-bottom: 20px
  }
  .ant-col-21 {
    margin-bottom: 10px
  }
  .ant-col-3 {
    margin-top: 6px
  }
</style>
