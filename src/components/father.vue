<template>
<div>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      style="height:100%;overflow-y:auto;"
    >
      <div class="l-top">
       <img src="../assets/icon-1.jpg">
     </div>
       <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1','sub2']">
         <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="compass" /><span>账号</span></span>
              <a-menu-item key="1" @click="account()">账号列表</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="compass" /><span>好友</span></span>
              <a-menu-item key="2" @click="addFans()">加粉任务</a-menu-item>
              <a-menu-item @click="cleanFans()">清粉任务</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="compass" /><span>群</span></span>
              <a-menu-item @click="groupmanage()">群管理</a-menu-item>
              <a-menu-item @click="config()">群主配置</a-menu-item>
              <a-menu-item @click="join()">扫码进群</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub4">
              <span slot="title"><a-icon type="compass" /><span>主动</span></span>
              <a-menu-item @click="allNews()">群发消息</a-menu-item>
              <a-menu-item @click="friends()">发朋友圈</a-menu-item>
              <a-menu-item @click="comment()">朋友圈评论</a-menu-item>
              <a-menu-item @click="manage()">朋友圈管理</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub5">
              <span slot="title"><a-icon type="compass" /><span>客服系统</span></span>
              <a-menu-item @click="wxManage()">微信管理</a-menu-item>
              <a-menu-item @click="shortcut()">快捷回复</a-menu-item>
              <a-menu-item @click="serviceManage()">客服管理</a-menu-item>
              <a-menu-item @click="infobar()">信息展示</a-menu-item>
            </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧边开始 ↓ -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;box-shadow: 0px 2px 2px 0px #f1f2f4;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="L-H-right">
        <a-icon type="search"/>
        <a-icon type="bell" style="margin:0 28px;"/>
        <img src="../assets/logo.png" class="headport">
        <span class="userName" style="margin-left:3px">用户名</span>
        </div>
        
      </a-layout-header>
      <section>
        <router-view> </router-view>
    </section>
    </a-layout>
  </a-layout>
 </div> 
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
      current: '1',
      theme: 'dark',
    }
  },
  methods: {
    handleClick (e) {
      console.log('click ', e)
      this.current = e.key
    },
    addFans(){
      this.$router.push('/fansAdd')
    },
    cleanFans(){
      this.$router.push('/fansClean')
    },
    account(){
      this.$router.push('/account')
    },
    allNews(){
      this.$router.push('/allNews')
    },
    friends(){
      this.$router.push('/friendZone')
    },
    wxManage(){
      this.$router.push('/wxManage')
    },
    shortcut(){
      this.$router.push('/shortcut')
    },
    serviceManage(){
      this.$router.push('/serviceManage')
    },
    infobar(){
      this.$router.push('/infobar')
    },
    comment(){
      this.$router.push('/comment')
    },
    manage(){
      this.$router.push('/manage')
    },
    groupmanage(){
      this.$router.push('/groupmanage')
    },
    config(){
      this.$router.push('/config')
    },
    join(){
      this.$router.push('/join')
    }
   
  },
  mounted(){
     this.$router.push('/account')
  }
}
</script>
<style scoped>
@import "../css/father.css";
</style>
