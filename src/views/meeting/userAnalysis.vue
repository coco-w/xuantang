<template>
  <div>
    <div class="main">
    <div class="data-preview">
      <div class="data-text-title">报名注册数据</div>
      <div class="data-details" v-for="(item,key) in registrationData" :key="key">
        <div class="data-tit">
          <span >{{item.title}}</span>
        </div>
        <div class="data-con">
          <span :style="{color: item.color}">{{item.count}}</span>
        </div>
        <div class="data-data">{{item.remark}} {{item.remarkData}}</div>
      </div>
      
    </div>
    <div class="data-chart">
      <div class="data-time">
        <el-date-picker
          v-model="date"
          type="daterange"
          align="right"
          prefix-icon=''
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @change="handleTimeChange"
        ></el-date-picker>
      </div>
      <div id="chart" style="width:100%;height:320px"></div>
    </div>
  </div>
  <div class="footer">
    <div class="data-preview">
      <div class="data-text-title">
        <span>缴费情况</span>
        <svg @click="handleSwitchEye" v-show='eye' t="1567597502131" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1390" width="200" height="200"><path d="M512 209.403241c-201.731514 0-374.009206 125.476783-443.808922 302.596759 69.798692 177.119977 242.077408 302.596759 443.808922 302.596759 201.933105 0 374.010229-125.476783 443.808922-302.596759C886.009206 334.880023 713.933105 209.403241 512 209.403241zM512 713.731514c-111.355157 0-201.731514-90.375334-201.731514-201.731514s90.375334-201.731514 201.731514-201.731514 201.731514 90.375334 201.731514 201.731514S623.355157 713.731514 512 713.731514zM512 390.961296c-66.772776 0-121.038704 54.265928-121.038704 121.038704s54.265928 121.038704 121.038704 121.038704 121.038704-54.265928 121.038704-121.038704S578.772776 390.961296 512 390.961296z" p-id="1391" fill="#666666"></path></svg>
        <svg @click="handleSwitchEye" v-show='!eye' t="1567597514196" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1619" width="200" height="200"><path d="M707.910948 259.388678l91.052762-130.717134-50.761104-33.895995L648.810922 237.46332c-41.478693-12.288884-87.363743-19.631106-137.814786-19.631106-292.827255 0-448.087365 277.695626-448.087365 277.695626s94.688569 139.408073 260.782422 208.68488L193.338357 891.349841l50.761104 33.897018 139.511427-200.285582c39.33589 10.891048 81.872682 17.397229 127.385249 17.397229 280.467763 0 448.125227-246.829642 448.125227-246.829642S880.407628 336.848864 707.910948 259.388678zM349.59619 480.341976c0-87.117127 72.386634-157.756977 161.677263-157.756977 24.313755 0 47.367821 5.247514 68.054979 14.629185l-55.680137 79.935564c-4.101411-0.733711-8.318456-1.136893-12.633738-1.136893-39.09132 0-70.781066 31.432896-70.781066 70.197782 0 13.231349 3.697205 25.605168 10.115382 36.169781l-50.398854 72.353888C368.935654 565.990658 349.59619 525.369495 349.59619 480.341976zM511.273453 638.09793c-21.002336 0-41.068348-3.910053-59.478649-11.022031l49.678446-71.319325c3.122107 0.417509 6.303566 0.652869 9.541307 0.652869 39.092343 0 70.780043-31.432896 70.780043-70.197782 0-12.124132-3.099594-23.530926-8.555863-33.483602l55.94108-80.310094c27.14115 28.218692 43.771923 66.176189 43.771923 107.922988C672.948669 567.462173 600.563058 638.09793 511.273453 638.09793z" p-id="1620" fill="#666666"></path></svg>
        <span>(￥：元)</span>
      </div>
      <div class="data-details" v-for="(item,key) in moneyData" :key="key">
        <div class="data-tit">
          <span>{{item.title}}</span>
        </div>
        <div class="data-con">
          <span v-show='eye' :style="{color: item.color}">￥ {{item.count}}</span>
          <span v-show='!eye' :style="{color: item.color}">*****</span>
        </div>
        <div class="data-data">{{item.remark}} 
          <span v-show="eye">￥ {{item.remarkData}}</span>
          <span v-show="!eye">***</span>
          <span class="text-other" v-if="item.footer" v-show="eye">累计退款总额: ￥{{item.footerCount}}</span>
          <span class="text-other" v-if="item.footer" v-show="!eye">累计退款总额: ***</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import {timeChartOptions} from '@/const/chartOptions'
import { getRegistrationData,browseTheEnrollment,getPaymentStatus } from '@/api/userAnalysis'
export default {
  name: "userAnalysis",
  data() {
    return {
      date: [],
      eye: true,
      registrationData: [
        {
          title: '总浏览数',
          count: 0,
          remark: '今日浏览数',
          remarkData: 0,
          color: '#65B76F',
        },
        {
          title: '总报名数',
          count: 0,
          remark: '成功报名注册人员',
          remarkData: 0,
          color: '#348ED7',
        },
        {
          title: '待审核人数',
          count: 0,
          remark: '已通过审核人数',
          remarkData: 0,
          color: '#FF7674',
        },
        {
          title: '待缴费人数',
          count: 0,
          remark: '已缴费人数',
          remarkData: 0,
          color: '#1FC2A3',
        },
      ],
      moneyData: [
        {
          title: '累计收款总额（元',
          count: 0,
          remark: '今日新增',
          remarkData: 0,
          color: '#FF9800',
          footer: '累计退款总额',
          footerCount: 0,
        },
        {
          title: '在线支付',
          count: 0,
          remark: '今日新增',
          remarkData: 0,
          color: '#65B76F',
        },
        {
          title: '转账汇款',
          count: 0,
          remark: '今日新增',
          remarkData: 0,
          color: '#348ED7',
        },
        {
          title: '现场缴费',
          count: 0,
          remark: '今日新增',
          remarkData: 0,
          color: '#8BC34A',
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      chart: null
    };
  },
  mounted() {
    getRegistrationData().then(res => {
      res.forEach((ele, index) => {
        this.registrationData[index].count = ele[0]
        this.registrationData[index].remarkData = ele[1]
      });
    })
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
    console.log(start, end)
    this.date = [start,end]
    this.chart = this.$echarts.init(document.getElementById('chart'))
    this.chart.setOption(timeChartOptions)
    browseTheEnrollment(this.date).then(res => {
      res.time.forEach((ele,index) => {
        res.time[index] = ele.split('T')[0]
      })
      this.updateMyChart(res)
    })
    getPaymentStatus().then(res => {
       res.forEach((ele, index) => {
        this.moneyData[index].count = ele[0]
        this.moneyData[index].remarkData = ele[1]
        if (ele[2]) {
          this.moneyData[index].footerCount = ele[2]
        }
      });
    })
    
    
  },
  methods: {
    handleTimeChange() {
      browseTheEnrollment(this.date).then(res => {
      res.time.forEach((ele,index) => {
        res.time[index] = ele.split('T')[0]
      })
      this.updateMyChart(res)
    })
    },
    updateMyChart(data) {
      this.chart.setOption({
        xAxis: {
          data: data.time
        },
        series: [
          {
            name: '浏览数',
            data: data.browse
          },
          {
            name: '报名数',
            data: data.enlist
          },
        ]
      })
    },
    handleSwitchEye() {
      this.eye = !this.eye
    }
  }
};
</script>
<style lang="less">
.main {
  padding: 20px;
  background: #fff;
  .data-chart {
    border: 1px solid #ccc;
    .data-time {
      background: #F4F5F9;
      border-bottom: 1px solid #ccc;
      .el-input__inner {
        border: none;
        border-radius: 0;
        border-right: 1px solid #ccc;
        background: #F4F5F9;
        .el-range-input {
          background: #F4F5F9
        }
        input::-webkit-input-placeholder {
          color: #333;
        }
      }
      
    }
    
  }
}
.data-preview {
    border: 1px solid #ccc;
    margin-bottom: 7px;
    color: #333;
    .data-text-title {
      background: #f4f5f9;
      height: 40px;
      padding-left: 10px;
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
    }
    .data-details {
      width: 25%;
      display: inline-block;
      text-align: center;
      height: 150px;
      margin: 25px 0;
      font-size: 14px;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      .data-con {
        margin-top: 16px;
        margin-bottom: 23px;
        font-size: 36px;
        line-height: 52px;
        font-weight: bold;
      }
    }
    > :last-child{
      border: none;
    }
   
  }
.footer {
  border: 1px solid #ccc;
  margin-bottom: 7px;
  padding: 20px;
  color: #333;
  background: #fff;
  margin-top: 8px;
  svg {
    width: 24px;
    height: 100%;
    cursor: pointer;
  }
  .data-preview {
    .data-text-title {
      span {
        vertical-align: top;
        margin-right: 10px;
      }
      > :last-child {
        float: right;
        user-select: none;
      }
    }
    .data-details {
      width: 20%;
      .text-other {
        float: right;
        color: #ccc;
        margin-right: 15px;
      }
    }
    > :nth-child(2) {
      width: 40%;
      text-align: none;
      text-align: left;
      padding-left: 15px;
    }
  }
}
</style>