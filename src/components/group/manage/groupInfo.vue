<template>
  <div>
    <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="data" @change="change"/>
    <a-modal
      title="Title"
      :visible="info"
      @ok="info=false"
      @cancel="info=false"
    >
      <p>123</p>
    </a-modal>
  </div>
</template>
<script>
const columns = [{
  title: '群名称	',
  dataIndex: 'name',
}, {
  title: '群主',
  dataIndex: 'master',
}, {
  title: '成员数',
  dataIndex: 'number',
}, {
  title: '所属账号',
  dataIndex: 'account',
}, {
  title: '聊天机器人设置',
  dataIndex: 'robot',
}, {
  title: '是否启用机器人',
  dataIndex: 'useRobot',
}, {
  title: '群主配置',
  dataIndex: 'config',
}, {
  title: '是否屏蔽群消息',
  dataIndex: 'ignore',
}, {
  title: '操作',
  dataIndex: 'operate',
}];

const data = [];
let check = true
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    master: 32,
    number: 233,
    account: `London, Park Lane no. ${i}`,
    robot:  `1232`,
    config: 32,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      info: false,
      
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys
    },
    change () {
      let _this = this
      let check = true
      setTimeout(function(){
        document.querySelectorAll('.ant-table-row').forEach(i=>{
          i.lastChild.innerHTML = `<a>详情</a>`
          i.lastChild.addEventListener('click',function(){
            _this.info = true
          })
          i.childNodes[5].innerHTML =  `<a>设置</a>`
          i.childNodes[5].addEventListener('click',function(){
            _this.info = true
          }) 
          i.childNodes[6].innerHTML =  `<a>${check}</a>`
          i.childNodes[6].addEventListener('click',function(){
            i.childNodes[6].innerHTML =  `<a>${check=!check}</a>`
          }) 
          i.childNodes[8].innerHTML =  `<a>${check}</a>`
          i.childNodes[8].addEventListener('click',function(){
            i.childNodes[8].innerHTML =  `<a>${check=!check}</a>`
          }) 
        }) 
      })
    }
  },
  mounted () {
    this.change()
  }
}
</script>

<style scoped> 
</style>

