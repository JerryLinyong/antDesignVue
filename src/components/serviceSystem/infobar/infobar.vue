<template>
  <div class="infobar">
    <a-row  type="flex" justify='center'>
      <a-col :span="7" v-for='(info,index) in userinfos' :key='index'>
        <a-card>
          <h4>{{info.title}}</h4>
          <h1>{{info.count}}</h1>
        </a-card>
      </a-col>
    </a-row>
    <a-row type="flex" justify='center'>
      <a-col :span="6" v-for='(info,index) in infos' :key='index'>
        <a-card>
          <h4>{{info.title}}</h4>
          <h1>{{info.number}}</h1>
          <h4>周同比&nbsp;{{info.week}}%&nbsp;&nbsp;日同比&nbsp;{{info.day}}%</h4>
          <h4>{{info.other.title}}&nbsp;{{info.other.count}}</h4>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12" :offset="2">
        <div id="chart" style="width: 100%;height:460px;display:inline-block"></div>
      </a-col>
      <a-col :span="6" :offset="2">
        <a-list
          bordered
          :dataSource="rates"
        >
          <a-list-item slot="renderItem" slot-scope="item, index"><a-badge :count="item.rating" :numberStyle="{background:(item.rating>3?'#90caf9':'#e53935')}"></a-badge>&nbsp;&nbsp;<span>{{item.name}}</span><span>{{item.count}}</span></a-list-item>
          <div slot="header">客服接待排行</div>
        </a-list>
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
        userinfos:[{title:'今日活跃用户',count:'123'},{title:'昨日活跃用户',count:'123'},{title:'客服账号',count:'123'}],
        infos: [{title:'总消息数量',number:'1321',week:'11',day:'12',other:{title:'近一周消息平均数',count:'12'}},{title:'有效会话',number:'1321',week:'11',day:'12',other:{title:'近一周有效会话',count:'12'}},{title:'投诉数量',number:'1321',week:'11',day:'12',other:{title:'近一周投诉',count:'12'}},{title:'客服在线时长',number:'1321',week:'11',day:'12',other:{title:'',count:''}},{title:'新用户增加数量',number:'1321',week:'11',day:'12',other:{title:'日均销售额￥',count:'12'}},{title:'老用户增加数量',number:'1321',week:'11',day:'12',other:{title:'日均销售额￥',count:'41213'}}],
        data: [120, 200, 150, 80, 70, 110, 130, 123, 123, 123, 123, 123],
        rates: [{rating: '1', name: 'ninja', count: '11321'},{rating: '2', name: 'ninja', count: '11321'},{rating: '3', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'}]
  
      }
    },
    mounted () {
      var myChart = echarts.init(document.getElementById('chart'));
      var option = {
        color: ['#3398DB'],
        title: {
          text: '销售额趋势'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type : 'category',
            data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisTick: {
                alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type : 'value'
          }
        ],
        series: [
          {
            name:'销售额',
            type:'bar',
            barWidth: '60%',
            data: this.data
          }
        ]
      };
      myChart.setOption(option);
    }
  }
</script>

<style> 
  .ant-list-item>.ant-list-item-content-single.ant-list-item-content-single {
    display: flex;
    justify-content: space-between
  }
  .infobar {
    padding: 0 20px
  }
  .ant-row-flex {
    text-align: center
  }
  h1 {
    font-size: 30px
  }
  h4 {
    font-size: 16px
  }
  .ant-card-body {
    padding: 4px
  }
  .ant-list-item {
    padding: 10px
  }
</style>
