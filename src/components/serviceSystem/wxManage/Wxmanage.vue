<template>
  <div class="manage">
    <div class="controller">
      <a-input-search placeholder="搜索微信账号" style="width:300px"/>
      <a-button type="primary" @click="showS=1">设置客服账号</a-button>
      <a-button type="primary" @click="showOffL">下线</a-button>
      <a-button type="primary" @click="showOn">上线</a-button>
    </div>
    <div>
      <a-row style="background:#e4ebf4">
        <a-col :span="4"><a-checkbox class="checkAll" @change='checkAll'></a-checkbox>&nbsp;&nbsp;微信昵称</a-col>
        <a-col :span="4">微信账号</a-col>
        <a-col :span="3">所属客服</a-col>
        <a-col :span="3">未处理消息总数</a-col>
        <a-col :span="6">状态</a-col>
        <a-col :span="4">操作</a-col>
      </a-row>
      <div style="height:500px;overflow:hidden">
        <div>
          <a-row v-for='(info,index) in wxInfos' :key='index'>  
            <a-col :span="4"><a-checkbox @click="cancelChecked"></a-checkbox>&nbsp;&nbsp;{{info.name}}</a-col>
            <a-col :span="4">{{info.acount}}</a-col>
            <a-col :span="3">{{info.service}}</a-col>
            <a-col :span="3">{{info.number}}</a-col>
            <a-col :span="6"> <a-badge status="success" />{{info.state}}</a-col>
            <a-col :span="4" style='color: #1890ff;display:flex;justify-content:space-around'><a @click='showE=1'>设置</a><a>聊天记录</a></a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div style="text-align:right;margin:30px 60px">
      <a-pagination v-model="current" :total="page" @change="clearCheck"/>
    </div>
    <section class="background" v-if='showE===1'>
      <div class="delete">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showE=0'/>
        <h2>账号</h2>
        <div style='display:flex;justify-content:space-around;margin-top:40px'>
          <a-button type="danger">确定</a-button><a-button  @click='showE=0'>取消</a-button>
        </div>
      </div>
    </section>
    <section class="background" v-if='showS===1'>
      <div class="service">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showS=0'/>
        <h2>添加客服</h2>
        <login></login>
      </div>
    </section>
  </div>
</template>

<script>
import login from './login'
export default {
  components: {
    login: login
  },
  data () {
    return {
      showS: 0,
      current: 1,
      showE: 0,
      showedUsers: [],
      allUsers: [{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'},{name: 'ninja', acount: '123', service: 'mario', number: '456', state: 'open'}]
    }
  },
  methods: {
    cancelChecked (e) {
      let pre = e.target.parentNode.classList.contains('ant-checkbox-checked')
      setTimeout(function(){
        let now = e.target.parentNode.classList.contains('ant-checkbox-checked')
        if(pre === now && pre === true) {
          e.target.parentNode.classList.remove('ant-checkbox-checked')
        } else if (pre === now && pre === false) {
          e.target.parentNode.classList.add('ant-checkbox-checked')
        }
        if(!e.target.parentNode.classList.contains('ant-checkbox-checked')){
          document.querySelector('.checkAll').firstChild.classList.remove('ant-checkbox-checked')
        } else if (document.querySelectorAll('.ant-checkbox').length-1 === document.querySelectorAll('.ant-checkbox-checked').length) {
          document.querySelector('.checkAll').firstChild.classList.add('ant-checkbox-checked')
        }
      }) 
      
    },
    showOn () {
      this.clearCheck()
      this.showedUsers = this.allUsers.filter(info=>{
        return (info.state === 'open')
      }) 
    },
    showOffL () {
      this.clearCheck()
      this.showedUsers = this.allUsers.filter(info=>{
        return (info.state !== 'open')
      })
    },
    clearCheck () {
      document.querySelectorAll('.ant-checkbox').forEach(target=>{
        target.classList.remove('ant-checkbox-checked')
      })
    },
    checkAll (e) {
      if (e.target.checked === true) {
        document.querySelectorAll('.ant-checkbox').forEach(target=>{
          target.classList.add('ant-checkbox-checked')
        })
      } else {
        document.querySelectorAll('.ant-checkbox').forEach(target=>{
          target.classList.remove('ant-checkbox-checked')
        })
      }
    }
  },
  computed: {
    page () {
      return Math.ceil(this.showedUsers.length/10)*10
    },
    wxInfos () {
      return this.showedUsers.slice((this.current-1)*10,this.current*10)
    }
  },
  mounted () {
    this.showedUsers = this.allUsers
  }
}
</script>

<style scoped>
  .controller {
    padding: 30px 50px;
  }
  .ant-btn.ant-btn-primary {
    float: right;
    margin: 0 10px
  }
  .ant-row {
    display: flex;
    align-items: center;
    height: 50px;
    text-align: center
  }
  .background {
    position: absolute;
    top: 0;
    left: 0px;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65)
  }
  .delete {
    position: absolute;
    top: calc(50% - 100px);
    right: calc(50% - 150px);
    height: 140px;
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    background: #e4ebf4;
    text-align: center
  }
  .service {
    position: absolute;
    top: calc(50% - 150px);
    right: calc(50% - 250px);
    width: 500px;
    height: 300px;
    padding: 10px;
    border-radius: 20px;
    background: #e4ebf4;
    text-align: center
  }
  .manage {
    padding: 0
  }
</style>
