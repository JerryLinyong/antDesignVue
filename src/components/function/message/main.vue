<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 23, offset: 1 }">
        <h1>新建群发</h1>
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="{ span: 11, offset: 1 }">
        <a-icon type="notification" class="notice"/>
        <span>消息前的数字表示发送顺序</span>
      </a-col>
      <a-col :span="11" style="direction:rtl">
        <span @click="getRecord" style="cursor:pointer">群发记录</span>
        <a-icon type="clock-circle" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="{ span: 23, offset: 1 }">
        <span style='margin-right:14px'>群发对象</span>
        <a-select defaultValue="jack" style="width: 120px">
          <a-select-option value="jack">全部用户</a-select-option>
          <a-select-option value="lucy">账号</a-select-option>
          <a-select-option value="Yiminghe">标签</a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }" class="title">
        <h3>群发内容</h3>
      </a-col>
    </a-row>
    <br>
    <a-row>
      <a-col :xs="{ span: 16, offset: 4 }">
        <div id="editor"></div>
      </a-col>  
      <a-col :xs="{ span: 3, offset: 1 }">
        <div>
          <a-button type="primary" style="margin:60px 0" @click="showConfirm">立即群发</a-button>
        </div>
        <a-button type="primary" @click="date=true">定时群发</a-button>
      </a-col>
    </a-row>
    <a-modal
      title="定时群发"
      :visible="date"
      @ok="date=false"
      @cancel="date=false"
    >
      <a-date-picker placeholder="选择日期" />
       <a-time-picker :defaultValue="moment('12:08', 'HH:mm')" format="HH:mm" />
    </a-modal>
  </div>
</template>
<script>
  import E from 'wangeditor'
  import moment from 'moment';
  import c from '../../../assets/emoji.js'
  export default {
    components: {
    },
    data () {
      return {
        date: false,
      }
    },
    methods: {
      getRecord () {
        this.$emit('changeSession')
      },
      moment,
      showConfirm() {
        this.$confirm({
          title: '立即群发',
          content: '消息开始群发后无法撤销，是否确认群发？',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      },
    },
    mounted () {
      var E = require('wangeditor')  // 使用 npm 安装
      // 创建编辑器
      var editor = new E('#editor')
      editor.customConfig.menus = [
        'emoticon',  // 表情
        'image',  // 插入图片
      ]
      let cc = c.map(i=>{
        let img = {}
        img.src = i.icon
        img.alt = i.value
        return img
      })
      editor.customConfig.emotions = [
        {
          // tab 的标题
          title: '默认',
          // type -> 'emoji' / 'image'
          type: 'image',
          // content -> 数组
          content: cc
      }
    ]
      editor.customConfig.uploadImgShowBase64 = true
      editor.create()
      document.querySelector('.w-e-text-container').style.height = '240px'
      document.querySelector('.w-e-text-container').style.zIndex = '0'
    }
  }
</script>

<style scoped> 
  .notice {
    transform: rotateY(180deg);
    font-size: 24px
  }
  .ant-row {
    font-size: 16px;
  }
  .title {
    background: #bbdefb ;
    padding: 8px
  }
  .anticon {
    margin: 0 10px;
    font-size: 20px
  }
  .ant-row>div {
    margin-bottom: 20px
  }
</style>
