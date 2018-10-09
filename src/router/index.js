import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'
import accountList from '@/components/account/accountList'
import fansAdd from '@/components/friend/fansAdd'
import fansClean from '@/components/friend/fansClean'
import allNews from '@/components/function/message/message'
import friendZone from '@/components/function/friendZone/friendZone'
import comment from '@/components/function/comment/comment'
import manage from '@/components/function/manage/manage'
import newTask from '@/components/newTask'
import cleanTask from '@/components/friend/cleanTask'
import wxManage from '@/components/serviceSystem/wxManage/wxManage'
import serviceManage from '@/components/serviceSystem/serviceManage/serviceManage'
import infobar from '@/components/serviceSystem/infobar/infobar'
import shortcut from '@/components/serviceSystem/shortcut/shortcut'
import groupmanage from '@/components/group/manage/manage'
import config from '@/components/group/config/config'
import join from '@/components/group/join/join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'father',
      component: father,
      children:[
        {
         path:'/account',
         component:accountList
        },
        {
          path:'/fansAdd',
          component:fansAdd
         },
         {
          path:'/fansClean',
          component:fansClean
         },
         {
          path:'/allNews',
          component:allNews
         },
         {
          path:'/friendZone',
          component:friendZone
         },
         {
          path:'/newTask',
          component:newTask
         },
         {
          path:'/cleanTask',
          component:cleanTask
         },
         {
          path:'/wxManage',
          component:wxManage
         }, {
          path:'/shortcut',
          component:shortcut
         }, {
          path:'/serviceManage',
          component:serviceManage
         }, {
          path:'/infobar',
          component:infobar
         },{
          path:'/comment',
          component:comment
          },
          {
          path:'/manage',
          component:manage
          },
          {
            path:'/groupmanage',
            component:groupmanage
          },
          {
            path:'/config',
            component:config
          },
          {
            path:'/join',
            component:join
          },
         
         {path:'/',redirect:'/account'}
    ]
    },
    
  ]
})
