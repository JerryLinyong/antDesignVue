<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h1>群设置</h1>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-icon type="notification" class="notice"/>
        <span>下方仅展示登录在后台的在线账号，账号下线的情况下不能设置。</span>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <span>账号</span>
        <a-select defaultValue="lucy" style="width: 120px">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
         <a-input-search
            placeholder="请输入账号名称"
            style="width: 200px"
            @search="setRobot=1"
          />
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h3 class="title">群列表</h3>
      </a-col>
      <a-col :xs="{ span: 3, offset: 1 }">
        <a-button type="primary" @click="setRobot=true">群机器人设置</a-button>
        <a-modal
          title="群机器人设置"
          :visible="setRobot"
          @ok="setRobot=false"
          @cancel="setRobot=false"
        >
        <h4>已选账号</h4>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 3, offset: 0 }">
        <a-button type="primary" @click="startRobot=true">启用机器人</a-button>
        <a-modal
          title="启用机器人"
          :visible="startRobot"
          @ok="startRobot=false"
          @cancel="startRobot=false"
        >
          <p>Modal</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 3, offset: 0 }">
        <a-button type="primary" @click="ignoreMsg=true">屏蔽群消息</a-button>
        <a-modal
          title="屏蔽群消息"
          :visible="ignoreMsg"
          @ok="ignoreMsg=false"
          @cancel="ignoreMsg=false"
        >
          <p>123</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 3, offset: 0 }">
        <a-button type="primary" @click="master=true">群主设置</a-button>
        <a-modal
          title="群主设置"
          :visible="master"
          @ok="master=false"
          @cancel="master=false"
        >
          <p>123</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 2, offset: 0 }">
        <a-button type="primary" @click="quit=true">退群</a-button>
        <a-modal
          title="退群"
          :visible="quit"
          @ok="quit=false"
          @cancel="quit=false"
        >
          <p>123</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 3, offset: 3 }">
        <a-button type="primary" @click="changeSession('creatConfig')"><a-icon type="plus-circle" /> 新建机器人配置</a-button>
        <a-modal
          title="新建机器人配置"
          :visible="robotConfig"
          @ok="robotConfig=false"
          @cancel="robotConfig=false"
        >
          <p>123</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 2, offset: 0 }">
        <a-button type="primary" @click="changeSession('log')">任务日志</a-button>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <groupInfo></groupInfo>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import groupInfo from './groupInfo'
  export default {
    components: {
      groupInfo: groupInfo
    },
    data () {
      return {
        setRobot: false,
        startRobot: false,
        ignoreMsg: false,
        master: false,
        quit: false,
        robotConfig: false,
        log: false,
      }
    },
    methods: {
      changeSession (session) {
        this.$emit('changeSession',session)
      }
    },
    mounted () {
    }
  }
</script>

<style scoped> 
  .notice {
    transform: rotateY(180deg);
    font-size: 24px
  }
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
</style>
