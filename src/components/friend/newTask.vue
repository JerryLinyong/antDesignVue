<template>
<div style="padding:30px 24px;box-sizing:border-box;">
    <div class="taskBody">
      <div class="n-top">
        <b style="font-size:18px;">加粉任务</b>
      </div>
      <div style="height:auto;">
        <div class="n-add" @click="addFans">
          <a-icon type="plus-circle-o" style="color:#1890ff;"/>
          <span>添加加粉账号</span>
        </div>
      </div>
       <div class="n-title">
        <b>批量添加微信号</b>
       </div>
       <div class="n-upload">
         <a-row style="padding: 10px 30px;">
           <b>点击上传txt文件</b>
           <input type="file" style="opacity:0;z-index:999;position:absolute;width:90px;height:32px;display:inline-block;">
           <a-button>上传文件</a-button>
           <p style="color:#1890ff;">*格式：一行一个微信号、以回车隔开，每行字符数不能超过50。</p>
         </a-row>
         <div class="upload-show">
           <textarea cols="90" rows="10"></textarea>
         </div>
       </div>
       <div class="n-title">
        <b>设置来源</b>
       </div>
       <div class="radio">
        <label for="chatNumber">
          <input name="check" type="radio" id="chatNumber" value="微信号搜索" checked='checked'> 通过微信号搜索添加好友
        </label>
        <br>
        <label for="phoneNumber">
          <input name="check" type="radio" id="phoneNumber" value="手机号搜索"> 通过搜索手机号添加好友
        </label>
       </div>
       
       <div class="n-title">
        <b>设置验证申请</b>
       </div>
       <div style="height:auto;">
         <div class="askTest">
           <input type="text" placeholder="请输入申请验证，最多40字" class="askIpt">
         </div>
       </div>
       
       <div class="n-title">
        <b>加粉任务设置</b>
       </div>
       <div class="addFanset">
         <table class="addSet">
           <tr>
             <th><b>·</b> 任务执行时间：</th>
             <td>
               <div>
                 <a-time-picker use24Hours format="HH:mm" :defaultValue="moment('08:00', 'HH:mm')" @change="onChange" />
                 -
                 <a-time-picker use24Hours format="HH:mm" :defaultValue="moment('23:00', 'HH:mm')" @change="onChange" />
               </div>
               <p class="message">（每日加粉任务在指定时间内执行）</p>
             </td>
           </tr>
           <tr>
             <th><b>·</b> 提交申请间隔时长：</th>
             <td>
               <div>
                 <input type="text" value="300" class="defaul-ipt"> 秒
                 &nbsp;&nbsp;-&nbsp;&nbsp;
                 <input type="text" value="500" class="defaul-ipt"> 秒
               </div>
               <p class="message">（多个账号进行加粉任务时，为单个账号提交申请间隔时长）</p>
             </td>
           </tr>
           <tr>
             <th><b>·</b> 单日提交申请最大限制：</th>
             <td>
               <div>
                 <input type="text" value="20" class="defaul-ipt"> 个
               </div>
               <p class="message">（每个账号每天最多可提交的好友申请数，当添加粉丝超过最大值，顺延到次日）</p>
             </td>
           </tr>
           <tr>
             <th><b>·</b> 请求模式：</th>
             <td>
               <label for="array">
                 <input type="radio" id="array" name="model" checked='checked'> 队列模式&nbsp;&nbsp;&nbsp;&nbsp;
               </label>
               <label for="full">
                 <input type="radio" id="full" name="model"> 全部模式
               </label>
             </td>
           </tr>
            <tr>
             <th><b>·</b> 添加成功后打标签：</th>
             <td>
                 <div>
                   <span class="addTag" @click="showToggle()">添加标签</span>
                   <i class="downArrow"></i>
                 </div>
                 <div class="Tag" v-show="isShow">
                   <h3 class="Tag-title">打标签</h3>     
                   <div class="Tag-content">
                     <span>
                       <input type="checkbox" id="tag0" data_id=''>
                       <label for="tag0">附近人不可见</label>
                     </span>
                     <span>
                       <input type="checkbox" id="tag1" data_id=''>
                       <label for="tag1">自动</label>
                     </span>
                     
                   </div>
                   <div class="Tag-new">
                     <span @click="newTag">新建标签</span>
                     <p v-show="hitTag">
                       <input type="text" class="Tag-newIpt" placeholder="请输入标签名">&nbsp;&nbsp;&nbsp;
                       <span class="Tag-newAdd">添加</span>&nbsp;&nbsp;
                       <span class="Tag-newAdd" @click="noNewTag">取消</span>
                     </p>
                   </div>
                   <div class="Tag-foot">
                      <button>确认</button>
                      <button @click="showTog()">取消</button>
                   </div>
                </div>        
             </td>
           </tr>
          
         </table>
         

       </div>
       
       <div class="submit">
         <button>确认提交</button>
       </div>



    </div>
</div>
</template>
<script>
import moment from 'moment';
export default {
  name:'newTask',
  data (){
    return{
        isShow:false,
        hitTag:false
    }
  },
  methods:{
    moment, //无需在main里引入 
    addFans(){
      //添加加粉账号的输入框还没写
    },
    onChange(time, timeString){
      // console.log(time, timeString);  可打印出选择的时间
    },
    showToggle(){
      this.isShow=!this.isShow;
    },
    showTog(){
      this.isShow=false;
    },
    newTag(){
      this.hitTag=true;
    },
    noNewTag(){
      this.hitTag=false;
    }
  }

}
</script>
<style>
.taskBody{
  min-height:804px;
  background: #ffffff;
  padding:0 30px;
  box-sizing:border-box;
  overflow:hidden;
  position: relative;
}
.n-top{
  height:auto;
  line-height:60px;
  border-bottom:2px solid #dddddd;
  padding-left:14px;
}
.n-add{
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
.n-upload{
    height: auto;
    border: 1px solid #dddddd;
    padding-bottom: 10px;
    box-sizing: border-box;
}
.upload-show{
  margin-left:20px;
  border:1px solid #dddddd;
  width: 562px;
  height: 194px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.upload-show>textarea{
  border:0;
}
.radio{
  height:auto;
  padding-left:20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size:16px;
}
#phoneNumber{
  display: inline-block;
  margin-top: 10px;
}
.askTest{
  padding:20px;
}
.askIpt{
  width:240px;
  height:30px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
.addFanset{
  height:auto;
  overflow: hidden;
  padding:25px 20px;
}
.addSet{
  min-width:660px;
  min-height:331px;
  /* background:#d7ecff; */
}
.message{
  margin-top:8px;
  color:#73879c;
}
.defaul-ipt{
  width:80px;
  height:32px;
  border:1px solid #dddddd;
  border-radius:5px;
  text-indent:10px;
}
.addTag{
  display: inline-block;
  width:80px;
  height:30px;
  padding: 2px 10px;
  border-radius: 30px;
  color: #73879c;
  border: solid 1px #ccc;
  box-sizing:border-box;
  cursor: pointer;
}
.downArrow{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid\9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.Tag{
  width:276px;
  height:181px;
  overflow-y:auto;
  border:1px solid #ddd;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  position:absolute;
  margin-top:3px;
}
.Tag-title{
  padding: 8px 14px;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
  color: #73879c;
}
.Tag-content{
  padding:8px 14px;
  color: #73879c;
  min-height:50px;

}
.Tag-new{
  padding:8px 14px;
  color: #73879c;
}
.Tag-new>span{
  cursor: pointer;
}
.Tag-newIpt{
  width:130px;
  height:22px;
  border:1px solid #ddd;
  text-indent:10px;
}
.Tag-newAdd{
  cursor: pointer;
  width:33px;
  height:21px;
  text-align:center;
  display: inline-block;
}
.Tag-newAdd:hover{
  background:#ddd;
}
.Tag-foot{
  text-align:center;
}
.Tag-foot>button:nth-child(1){
  width:80px;height:22px;
  cursor: pointer;
  background:#58bc9c;
  color:#ffffff;
}
.Tag-foot>button:nth-child(2){
  width:80px;height:22px;
  cursor: pointer;
  background: #ffffff;
  border:.5px solid #ddd;
}


.submit{
  height:auto;
  text-align:center;
  padding-top:24px;
  padding-bottom: 100px;
}
.submit>button{
  background: #58bc9c;
  color:#ffffff;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
