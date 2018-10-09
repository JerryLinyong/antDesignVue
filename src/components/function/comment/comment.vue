<template>
  <div>
    <a-row>
      <a-col :span="22" :offset="1">
        <h1>朋友圈评论</h1>
      </a-col>
      <a-col :span="10" :offset="1">
        <a-input-search
          placeholder="请输入朋友圈评论昵称"
          style="width: 240px"
          @search="test=2"
        />
      </a-col>
      <a-col :span="12">
        <a-dropdown>
          <a-menu slot="overlay" @click="test=3">
            <a-menu-item key="1"><a-icon type="user" />全部账号</a-menu-item>
          </a-menu>
          <a-button>
            全部账号 <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <a-range-picker @change="test=1" />
      </a-col>
      <a-col :span="24" style="text-align:center">
        <a-col :span="22" :offset='1' class="infoTable">
          <a-col :span="8">评论</a-col>
          <a-col :span="8">朋友圈内容</a-col>
          <a-col :span="3">评论时间</a-col>
          <a-col :span="3">发布账号</a-col>
          <a-col :span="2">操作</a-col>
        </a-col>
        <a-col :span="22" :offset='1' v-for="(info,index) in data" :key='index' class="infoTable">
          <a-col :span="8">{{info.comment}}</a-col>
          <a-col :span="8">{{info.content}}</a-col>
          <a-col :span="3">{{info.time}}</a-col>
          <a-col :span="3">{{info.account}}</a-col>
          <a-col :span="2">{{info.operate}}</a-col>
        </a-col>
      </a-col>
      <a-col :span="13" :offset="11">
        <a-pagination simple :defaultCurrent="1" :total="50" @change="newPage"/>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  export default {
    components: {
      name:'comment'
    },
    data () {
      return {
        test:'',
        data: [],
        info: [{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'},{comment:'评论',content:'朋友圈内容',time:'评论时间',account:'发布账号',operate:'操作'}]
      }
    },
    methods: {
      newPage (page, pageSize) {
        this.data = this.info.slice((page-1)*10,page*10)
      }
    },
    mounted () {
      this.data = this.info.slice(0,10)
    }
  }
</script>

<style scoped> 
  .ant-row>div {
      margin-bottom: 20px
    }
  .infoTable:first-child {
    background: #bbdefb ;
    padding: 10px 0;
    font-size: 18px
  }
  .infoTable {
    padding: 8px 0
  }
</style>
