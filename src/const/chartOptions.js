export const timeChartOptions = {
  legend: {
    data: ['浏览数', '报名数'],
    bottom: '0',
  },
  tooltip : {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        label: {
            backgroundColor: '#6a7985'
        }
    }
},
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value'
  },
  series: [{
      name: '浏览数',
      data: [],
      type: 'line',
      itemStyle: {
        color:'#1AAD19'
      }
    },
    {
      name: '报名数',
      data: [],
      type: 'line',
      itemStyle: {
        color:'#348ED7'
      }
    }
  ]
}