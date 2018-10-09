<template>
  <div>
    <a-row>
      <a-col :span="22" :offset="1">
        <h1>发朋友圈</h1>
      </a-col>
      <a-col :span="22" :offset="1" class="title">
        <h3>发布内容</h3>
      </a-col>
      <a-col :span="22" :offset="1">
        <a-button type="primary" @click="visible=true"><a-icon type="plus-circle" />选择发布账号</a-button>
        <a-modal
          title="选择好友"
          v-model="visible"
          @ok="visible=false"
          okText="确认"
          cancelText="取消"
          width='500px'
        >
          <a-transfer
            :dataSource="mockData"
            showSearch
            :filterOption="filterOption"
            :targetKeys="targetKeys"
            @change="handleChange"
            :render="item=>item.title"
          >
          </a-transfer>
        </a-modal>
      </a-col>
      <a-col :span="22" :offset="1">
        <div id="editor"></div>
      </a-col>
      <a-col :span="22" :offset="1" class="title">
        <h3>评论提醒设置</h3>
      </a-col>
      <a-col :span="22" :offset="1">
        <a-radio-group name="radioGroup" :defaultValue="1">
          <a-radio :value="1">展示评论</a-radio>
          <a-radio :value="2">隐藏评论</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="22" :offset="1">
        <a-button type="primary" @click="showConfirm">立即群发</a-button>
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
  import moment from 'moment';
  import E from 'wangeditor'
  import c from '../../../assets/emoji.js'
  export default {
    components: {
    },
    data () {
      return {
        visible: false,
        mockData: [],
        targetKeys: [],
        date: false,
      }
    },
    methods: {
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
      getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.mockData = mockData
        this.targetKeys = targetKeys
      },
      filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
      },
      handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.targetKeys = targetKeys
      },
    },
    mounted () {
      this.getMock()  
      var E = require('wangeditor')  // 使用 npm 安装
      // 创建编辑器
      var editor = new E('#editor')
      editor.customConfig.menus = [
        'emoticon',  // 表情
        'image',  // 插入图片
        'link',  // 插入链接
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
  .ant-row>div {
    margin-bottom: 20px
  }
  .title {
    background: #bbdefb ;
    padding: 8px
  }
</style>
