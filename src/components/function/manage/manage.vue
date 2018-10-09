<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 23, offset: 1 }">
        <h1>新建群发</h1>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-icon type="notification" class="notice"/>
        <span>消息前的数字表示发送顺序</span>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <span>查看对象</span>
        <a-input-search
          id="account"
          placeholder="搜索的账号"
          style="width: 200px"
          @search="test=1"
        />
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h3>朋友圈记录</h3>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        test: ''
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
