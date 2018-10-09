<template>
  <div style="padding:30px 24px;box-sizing:border-box;">
    <div class="cTaskBody">
      <div class="cT-top">
        <b style="font-size:18px;">清粉任务</b>
      </div>
      <div style="height:auto;">
        <div class="c-add">
          <a-icon type="plus-circle-o" style="color:#1890ff;"/>
          <span @click="showModal">添加清粉账号</span>
        </div>
      </div>
      <div class="n-title">
        <b>批量清除僵尸粉</b>
      </div>
      <div class="advert">
        <p><b>·</b> 一键无痕检测僵尸粉</p>
        <p><b>·</b> 快 · 狠 · 准</p>
      </div>
      <div class="n-title">
        <b>设置方式</b>
      </div>
       <div class="radio">
        <label for="ament">
          <input name="check" type="radio" id="ament" value="修改备注"> 修改备注（僵尸粉）
        </label>
        <br>
        <label for="delete">
          <input name="check" type="radio" id="delete" value="直接删除"> 直接删除
        </label>
       </div>
       <div class="c-submit">
         <button>确认提交</button>
       </div>
      <!-- 弹出框↓ -->
      <a-modal
        title="添加账号"
        v-model="visible"
        @ok="handleOk"
        cancelText="取消"
        okText="确认"
      >
        <a-input-search placeholder="请输入搜索关键字" @search="onSearch" enterButton="搜索" size="default" />
        <div class="alartMain">
          <div class="mainLeft">
            <div class="mL-head">
              <button @click="isAllChecked=!isAllChecked">231321</button>
              <label for="checkAll" style="font-weight:100;float:left"><input type="checkbox" id="checkAll" @change="checkAll" checked  >全选</label>
              全部账号
            </div>
            <div class="mL-body">
              <ul>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
                <li>
                  <a class="downArrow"><span></span></a>
                  <label class="label">
                    <input type="checkbox"><span>xx分组名</span>
                  </label>
                </li>
               
              </ul>
            </div>
          </div>
          <!-- left end -->
          <div class="mainRight">
            <div class="mR-head">
              已选账号
              <a style="float:right;color:#73879c;">清空</a>
            </div>
            <div class="mR-body">

            </div>
          </div>
        </div>
      <!-- alart end -->
        <span class="currentCheck" @click="aa" style="">当前已选账号：<i>0</i>个</span>
      </a-modal>
      
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name:'cleanTask',
  data(){
    return{
      visible:false,
      isAllChecked: false
    }
  },
  methods:{
    checkAll (e) {
      console.log(this.isAllChecked)
      document.querySelectorAll('.label input').forEach((i)=>{
        i.checked=e.target.checked
      }) 
    },
    handleOk () {
      console.log() //这是弹出框确认的
    },
    showModal(){
      this.visible=true;
    },
    onSearch (value) {
      console.log(value) //这是弹出框搜索框里的
    },
    aa(e){
      console.log(e)
    }
  },
  computed: {
  },
  created () {
  }
}
</script>
<style scoped>
.cTaskBody{
  min-height:804px;
  background: #ffffff;
  padding:0 30px;
  box-sizing:border-box;
  overflow:hidden;
}
.cT-top{
  height:auto;
  line-height:60px;
  border-bottom:2px solid #dddddd;
  padding-left:14px;
}
.c-add{
  font-size:18px;
  margin-top:20px;
  margin-left:20px;
  cursor: pointer;
}
.n-title{
  height:45px;
  background: #fafafa;
  font-size:16px;
  display:flex;
  align-items:center;
  padding-left:20px;
  margin-top:20px;
}
.advert{
  color:#58bc9c;
  padding:20px;
}
.radio{
  height:auto;
  padding-left:20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size:16px;
}
.c-submit{
  text-align:center;
  height:auto;
  padding:30px 0;
}
.c-submit>button{
  background: #58bc9c;
  color:#ffffff;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
.alartMain{
  margin-top: 10px;
  display: table;
  table-layout: fixed;
  width:100%;
  height:253px;
  border: solid 1px #ccc;
}
.mainLeft,mainRight{display:table-cell;}
.mL-head{
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: #2a3f54;
    border-bottom: solid 1px #ccc;
}
.mL-body,.mR-body{
  height: 210px;
  overflow-y: auto;
}
.mL-body::-webkit-scrollbar {/*滚动条整体样式*/
        width: 7px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
}
.mL-body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 20px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #dddddd;
}
.mL-body::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #fafafa;
}

.mL-body>ul>li{
  height:43px;
  border-bottom: solid 1px #e5e5e5;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
}
.downArrow{
    position:absolute;
    top:0;right:0;
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #73879c;
    z-index: 1;
}
.downArrow>span{
  display: inline-block;
  border-top: 4px solid #73879c;  
  border-right: 4px solid transparent;  
  border-left: 4px solid transparent;  
  margin-top: 5px;
}
.lable{
  padding:10px;
  width:100%;
  cursor: pointer;
}
.mR-head{
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: #2a3f54;
  border-left:1px solid #ccc;
  border-bottom: solid 1px #ccc;
}
.currentCheck{
  display:block;
  color:#40a9ff;
  width:fit-content;
  margin:auto;
  padding-top:20px;
}
</style>




