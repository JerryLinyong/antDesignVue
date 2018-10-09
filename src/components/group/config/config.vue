<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h1>群主配置管理</h1>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-icon type="notification" class="notice"/>
        <span>下方仅针对群主账号生效，账号非群主的情况下设置无效。</span>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-button type="primary" @click="tabs.push(1)"><a-icon type="plus-circle-o"/> 新增配置</a-button>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-tabs>
          <a-button slot="tabBarExtraContent" type="danger" @click="remove=true">删除配置</a-button> 
          <a-button slot="tabBarExtraContent" style="margin:0 10px" @click="modify=true">修改配置</a-button>
          <a-tab-pane v-for="(tab,index) in tabs" :key="index+1+''" :tab="'配置'+(index+1)">
            <a-col  class="title" :xs="{ span: 24, offset: 0 }">
              <a-col :xs="{ span: 20, offset: 0 }"> 
                <h3>配置类型</h3> 
              </a-col>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }">
              配置名称 <a-input placeholder="请输入自定义养号配置名称" style="width:400px" />
            </a-col>
            <a-col :xs="{ span: 8, offset: 0 }">
              <a-checkbox value="b">踢人设置</a-checkbox>
            </a-col>
            <a-col :xs="{ span: 16, offset: 0 }">
              <a-checkbox value="A">新人进群发欢迎语</a-checkbox>
            </a-col>
            <a-col :xs="{ span: 7, offset: 0 }">
              <div>
                <h4>防广告：请设置你要踢得消息类型</h4>
                <ul>
                  <li><a-checkbox value="b">踢消息中包含以下关键词<a href="">设置</a></a-checkbox></li>
                  <li><a-checkbox value="b">踢昵称中包含以下关键词<a href="">设置</a></a-checkbox></li>
                  <li><a-checkbox value="b">踢发二维码（耗CPU）</a-checkbox></li>
                  <li><a-checkbox value="b">踢发名片</a-checkbox></li>
                  <li><a-checkbox value="b">踢发网址分享</a-checkbox></li>
                  <li><a-checkbox value="b">踢发小视频</a-checkbox></li>
                </ul>
              </div>
            </a-col>
            <a-col :xs="{ span: 12, offset: 1 }">
              <a-textarea placeholder="新增欢迎语" :rows="10"/>
              <a-col :xs="{ span: 3, offset: 21 }" style="margin-top:-40px">
                <a-button type="primary" @click="visible=true">新增</a-button>
              </a-col>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }">
              <div>
                <h4>防骚扰：请设置你要踢的消息长度</h4>
                <ul>
                  <li><a-checkbox value="b">信息大于<a-input-number :min="0" :max="10000"  />行</a-checkbox></li>
                  <li><a-checkbox value="b">字符大于<a-input-number :min="0" :max="10000"  />字</a-checkbox></li>
                  <li><a-checkbox value="b">连续<a-input-number :min="0" :max="10000"  />秒发出<a-input-number :min="0" :max="10000"  />条信息的用户将被踢出</a-checkbox></li>
                  <li><a @click="visible=true">设置踢人公告</a></li>
                </ul>
              </div>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }" class="title">
              <a-col :xs="{ span: 16, offset: 0 }" class="title">
                <h3>黑名单</h3>
              </a-col>
              <a-col :xs="{ span: 8, offset: 0 }" class="title">
                <a-icon type="exclamation-circle-o" /> 黑名单成员将自动从所有群主群内退出，并禁止其进群
              </a-col>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }">
              <a-button type="primary" @click="visible=true">添加</a-button>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }" class="title">
              <a-col :xs="{ span: 16, offset: 0 }" class="title">
                <h3>白名单</h3>
              </a-col>
              <a-col :xs="{ span: 8, offset: 0 }" class="title">
                <a-icon type="exclamation-circle-o" /> 白名单成员拥有特殊权限，将不会被自动踢出
              </a-col>
            </a-col>
            <a-col :xs="{ span: 24, offset: 0 }">
              <a-button type="primary" @click="visible=true">添加</a-button>
            </a-col>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="visible=false"
      @cancel="visible=false"
    >
      <p>13232</p>
    </a-modal>
    <a-modal
      title="删除配置"
      :visible="remove"
      @ok="remove=false"
      @cancel="remove=false"
    >
      <p>请选择删除的配置名称</p>
    </a-modal>
    <a-modal
      title="修改配置"
      :visible="modify"
      @ok="modify=false"
      @cancel="modify=false"
    >
      <p>请选择修改的配置名称</p>
    </a-modal>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        visible: false,
        remove: false,
        modify: false,
        count: 3,
        tabs:[1,1,1]
      }
    },
    methods: {
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
  .ant-row>div,.ant-tabs-tabpane>div {
    margin-bottom: 20px
  }
  ul li {
    margin: 8px 0
  }
</style>
