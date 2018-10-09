<template>
<div style="padding:30px 24px; box-sizing:border-box;">
  <div class="addBody">
    <div class="a-top">
       <b style="font-size:18px;">加粉任务</b>
    </div>
    <div class="a-tit">
      <div class="a-tit-time">
        <p style="color: rgba(0, 0, 0, 0.45);font-size:16px;"><a-icon type="user-add" />加粉次数</p>
        <p style="color: rgba(0, 0, 0, 0.85);font-size:30px;">12</p>
      </div>
      <div class="a-tit-people">
        <p style="color: rgba(0, 0, 0, 0.45);font-size:16px;"><a-icon type="usergroup-add" />加粉人数</p>
        <p style="color: rgba(0, 0, 0, 0.85);font-size:30px;">30</p>
      </div>
    </div>
    <div class="a-title">
      <b>任务明细</b>
    </div>
    <div class="a-handle">
      <a-button>删除</a-button>
      <a-button type="primary" @click="task()">新建任务</a-button>
    </div>

      <a-row class="a-table">
        <a-col :span="2"><a-checkbox class="checkAll" @change="checkAll"></a-checkbox>&nbsp;&nbsp;全选</a-col>
        <a-col :span="8">发起时间</a-col>
        <a-col :span="3">加粉账号（个）</a-col>
        <a-col :span="3">目标加粉（个）</a-col>
        <a-col :span="3">成功加粉</a-col>
        <a-col :span="5">详情</a-col>
      </a-row>
    <!--- 动态展示的数据 -->
    <div class="oList">
      <a-row class="a-table-two" v-for="(message,index) in data" :key='index'> 
        <a-col :span="2"><a-checkbox @click="cancelChecked"></a-checkbox></a-col>
        <a-col :span="8">{{message.time}}</a-col>
        <a-col :span="3">{{message.num}}</a-col>
        <a-col :span="3">{{message.target}}</a-col>
        <a-col :span="3">{{message.success}}</a-col>
        <a-col :span="5">已结束</a-col>
      </a-row>
    </div>

    <div style="margin:30px 0;display:flex;justify-content: space-between;">
      <a-dropdown>
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="tenInfo">10条</a-menu-item>
          <a-menu-item key="2" @click="twentyInfo">20条</a-menu-item>
          <a-menu-item key="3" @click="thrityInfo">30条</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          此页显示 <a-icon type="down" />
        </a-button>
      </a-dropdown>
      <a-pagination :total='size' :pageSize="pageNum" @change="paging"/>
    </div>
  </div>

</div>
</template>
<script>
import $ from 'jquery'
export default {
  name:'fansAdd',
  data (){
    return {
      size:0,
      allData:[],
      data:[],
      pageNum:10
    }
  },
  methods:{
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
    },
    task(){
      this.$router.push('/newTask')
    },
    paging (page,pageSize) {
      this.data=this.allData.slice((page-1)*this.pageNum,page*this.pageNum);
    },
    tenInfo(){
      this.pageNum=10;
      this.data=this.allData.slice(0,10);
    },
    twentyInfo(){
      this.pageNum=20;
      this.data=this.allData.slice(0,20);    
    },
    thrityInfo(){
      this.pageNum=30;
      this.data=this.allData.slice(0,30);      
    }

  },
  mounted(){
    var _this = this;
    $.ajax({
        type:'get',
        url:'../../../static/data.json',
        success:function(info){
          _this.size=info.length
          _this.allData=info;
          _this.data=info.slice(0,10);

        }
      })
  
 




  


  }
}
</script>
<style scoped>
.addBody{
  min-height:804px;
  background: #ffffff;
  padding:0 30px;
  box-sizing:border-box;
  overflow:hidden;
}
.a-top{
  height:auto;
  line-height:60px;
  border-bottom:2px solid #dddddd;
  padding-left:14px;
}
.a-tit{
  height:auto;
  display: flex;
  align-items: center;
}
.a-tit>p{
  width:100%;
}
.a-tit-time{
  width:230px;
  height:131px;
  display: inline-block;  
  text-align: center;
  padding-top:30px;
  box-sizing:border-box;
}
.a-tit-people{
  width:230px;
  height:131px;
  display: inline-block;  
  text-align: center;
  padding-top:30px;
  box-sizing:border-box;
}
.a-title{
  height:45px;
  background: #fafafa;
  font-size:16px;
  display:flex;
  align-items:center;
  padding-left:20px;
}
.a-handle{
  height:auto;
  margin-top:20px;
  margin-bottom:20px;
  display:flex;
  justify-content:space-between;
  padding:0 40px;
  box-sizing:border-box;
}
.a-table{
  text-align:center;
  background: #fafafa;
  height:40px;
  display:flex;
  align-items:center;
}
.a-table-two{
  text-align:center;
  background: #ffffff;
  height:40px;
  display:flex;
  align-items:center;
  border-bottom:1px solid #fafafa;
}
</style>
