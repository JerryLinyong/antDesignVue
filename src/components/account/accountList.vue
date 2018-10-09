<template>
<div>
  <div class="layout-body">
        <div class="l-b-top" >
            <div class="l-b-top-tit" style="margin-left:12px;">
              <p>总账号</p>
              <p>100</p>
            </div>
            <div class="l-b-top-tit">
              <p>在线账号数量</p>
              <p>1234</p>
            </div>
            <div class="l-b-top-tit" style="border:none;">
              <p>离线账号数</p>
              <p>1234</p>
            </div>
        </div>
        <div class="l-b-down">
        <a-row class="first-row">
          <a-col :span="12" style="height:100%;">
            <a-input-search
              placeholder="搜索微信账号"
              style="width:272px;margin-left:11px;"
              @search="onSearch"
            />
          </a-col>
          <a-col :span="12" style="height:100%;display:flex;justify-content:space-between;">
              <a-button type="primary" @click="showModal">编辑分组名称</a-button>
              <a-modal
                title="请输入要编辑分组的名称"
                v-model="visible"
                cancelText="取消"
                okText="确认"
                :centered="true"
                
              >
                <input type="text" placeholder="请输入" style="border:1px solid #ddd;width:100%;height:90px" />
                
              </a-modal>

              <a-button type="primary" @click="showModal2">编辑自动回复模板</a-button>
              <a-modal
                title="请输入自动回复模板的名称"
                v-model="visible2"
                cancelText="取消"
                okText="确认"
                :centered="true"
                @ok="fuck"
              >
                <b>第二个</b>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                
              </a-modal>

              <a-button type="primary"  @click="showModal">编辑打招呼模板</a-button>
              <a-button type="primary"  @click="showModal">+添加设备</a-button>
          </a-col>
        </a-row>
        <a-row class="second-row">
            <a-button style="margin-right:21px;">修改昵称</a-button>
            <a-button style="margin-right:21px;">修改头像</a-button>
            <a-button style="margin-right:21px;">修改所属分组</a-button>
            <a-button style="margin-right:21px;">修改性别</a-button>
            <a-button style="margin-right:21px;">删除</a-button>
            <a-button style="margin-right:21px;">养号配置</a-button>
            <a-button style="margin-right:21px;">修改封面</a-button>
            <a-button style="margin-right:21px;">好友请求设置</a-button>
            <a-button style="margin-right:21px;">打招呼内容设置</a-button>
            <a-button >群聊邀请设置</a-button>
        </a-row>
        <a-row class="third-row">
            <a-button style="margin-right:21px;">自动回复内容设置</a-button>
            <a-button style="margin-right:21px;">导出资料Excel</a-button>
            <a-button>修改所属分组</a-button>
        </a-row>
       
       <a-row class="four-row">
        <a-col :span="1"><a-checkbox @change="checkAll"></a-checkbox></a-col>
        <a-col :span="2">微信昵称</a-col>
        <a-col :span="2">微信账号</a-col>
        <a-col :span="3">登录方式</a-col>
        <a-col :span="3">分组</a-col>
        <a-col :span="3">微信功能</a-col>
        <a-col :span="2">在线状态</a-col>
        <a-col :span="4">代理ip</a-col>
        <a-col :span="4"></a-col>
      </a-row>
       <a-row class="four-row-two">
        <a-col :span="1"><a-checkbox></a-checkbox></a-col>
        <a-col :span="2">大王叫我来巡山</a-col>
        <a-col :span="2">12345</a-col>
        <a-col :span="3">xposed <a>修改</a></a-col>
        <a-col :span="3">一组 <a>修改</a></a-col>
        <a-col :span="3">返利机器人</a-col>
        <a-col :span="2"><a-badge status="default"/>无</a-col>
        <a-col :span="4">114.1414.232</a-col>
        <a-col :span="4"><a>配置</a> | <a>详细资料</a></a-col>
      </a-row>
      <a-row class="four-row-two">
        <a-col :span="1"><a-checkbox></a-checkbox></a-col>
        <a-col :span="2">我把人间转</a-col>
        <a-col :span="2">12345</a-col>
        <a-col :span="3">云端 <a>修改</a></a-col>
        <a-col :span="3">二组 <a>修改</a></a-col>
        <a-col :span="3">返利机器人</a-col>
        <a-col :span="2"><a-badge status="success"/>无</a-col>
        <a-col :span="4">114.1414.232</a-col>
        <a-col :span="4"><a>配置</a> | <a>详细资料</a></a-col>
      </a-row>
      <a-row class="four-row-two">
        <a-col :span="1"><a-checkbox></a-checkbox></a-col>
        <a-col :span="2">来了</a-col>
        <a-col :span="2">12345</a-col>
        <a-col :span="3">Ipad <a>修改</a></a-col>
        <a-col :span="3">三组 <a>修改</a></a-col>
        <a-col :span="3">返利机器人</a-col>
        <a-col :span="2"><a-badge status="error"/>无</a-col>
        <a-col :span="4">114.1414.232</a-col>
        <a-col :span="4"><a>配置</a> | <a>详细资料</a></a-col>
      </a-row>

        <!-- antd的table结束 -->

        <!-- <a-dropdown :trigger="['click']" style="position:relative;left:8%;top:-42px;">
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1" @click="ten()">10条</a-menu-item>
            <a-menu-item key="2" @click="ershi()">20条</a-menu-item>
            <a-menu-item key="3">30条</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            此页显示 <a-icon type="down" />
          </a-button>
        </a-dropdown> -->
        </div>
      </div>
</div>
</template>
<script>


export default {
  name:'accountList',
  data() {
    return {
      visible: false,
      visible2: false,
      
    }
  },
  computed: {
   

  },
  methods: {
    onSearch (value) {
      console.log(value) // 这个val就是输入框里输入的val
    },
   
    //每页显示多少条下拉 ↓
    handleMenuClick(e) {
      // console.log('click', e);
    },

   checkAll (e) {
      if (e.target.checked == true) {
        document.querySelectorAll('.ant-checkbox').forEach(target=>{
          target.classList.add('ant-checkbox-checked')
        })
      } else {
        document.querySelectorAll('.ant-checkbox').forEach(target=>{
          target.classList.remove('ant-checkbox-checked')
        })
      }
    },

    showModal() {
      this.visible = true
    },
    showModal2() {
      this.visible2 = true
    },
    fuck(){
      console.log('aaaa')
      this.visible = false;
    },
    
   
  },
  
  
}
</script>
<style scoped>
.layout-body{
    width:100%;
    height:auto;
    padding:0 24px;
    box-sizing:border-box;
    
  }
  .l-b-top{
    height:106px;
    background:#ffffff;
    margin:30px 0;
    display: flex;
    align-items: center;
  }
.l-b-top-tit{
    display:inline-block;
    width:187px;
    height:58px;
    text-align:center;
    border-right:1px solid #f7f7f7;
    padding-top:6px;
    box-sizing:border-box;
}
.l-b-top-tit>p:nth-child(1){
    color: rgba(0, 0, 0, 0.45);
	font-size: 14px;
}
.l-b-top-tit>p:nth-child(2){
    color: rgba(0, 0, 0, 0.85);
	font-size: 24px;
}

.l-b-down{
    min-height:804px;
    background: #ffffff;
    margin-bottom:30px;
    padding:20px 30px;
    box-sizing:border-box;
}
.first-row{
 height:auto;
}
.second-row{
 height:auto;
 margin-top:8px;
 padding-left:11px;
}
.third-row{
  height:auto;
  margin-top:8px;
  padding-left:11px;
}
.four-row{
  text-align:center;
  background: #fafafa;
  height:50px;
  display:flex;
  align-items:center;
  margin-top:15px;
}
.four-row-two{
  text-align:center;
  height:50px;
  display:flex;
  align-items:center;
  border-bottom:1px solid #fafafa;
}


</style>
