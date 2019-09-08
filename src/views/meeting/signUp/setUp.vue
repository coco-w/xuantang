<template>
  <div>
    <div class="basic card">
      <div class="top-topic">
        <div class="topic-text">基本设置</div>
      </div>
      <div class="basic-table">
        <div class="basic-table-row">
          <div class="basic-title">截止时间</div>
          <div class="basic-time">2019-12-31 23:55</div>
          <div class="basic-right" style="cursor: pointer">修改</div>
        </div>
        <div class="basic-table-row">
          <div class="basic-title">是否收费</div>
          <div class="basic-tip">开启后，可以设置多种缴费价格类型</div>
          <div class="basic-right">
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </div>
        </div>
        <div class="basic-table-row">
          <div class="basic-title">是否开具发票</div>
          <div class="basic-tip">开启后，将向参会人员搜集发票抬头信息，并自动匹配纳税人识别号</div>
          <div class="basic-right">
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="enroll card">
      <div class="top-topic">
        <div class="topic-text">报名表设置</div>
      </div>
      <my-table :options="enrollOptions">
        <template slot="title">
          <el-button @click="showQuick = true">添加快捷项</el-button>
        </template>
      </my-table>
    </div>
    <div class="pay card">
      <div class="top-topic">
        <div class="topic-text">缴费设置</div>
      </div>
    </div>
    <div class="invoice card">
      <div class="top-topic">
        <div class="topic-text">发票设置</div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="showQuick"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showQuick = false">取 消</el-button>
        <el-button type="primary" @click="showQuick = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import myTable from "@/components/myTable";
export default {
  name: "setUp",
  data() {
    return {
      value: true,
      showQuick: false,
      enrollOptions: {
        title: {
          text: '报名信息项',
          class: 'asd'
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          required: true,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          required: true,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableProps: [
          {
            prop:"date",
            label: '日期',
            width: '180',
          },
          {
            prop:"name",
            label: '姓名',
            width: '180',
            slot: '',
          },
          {
            prop:"address",
            label: '地址',
            width: '180',
            slot: '',
          },
          {
            porp: "required",
            label: "报名人是否必填",
            width: '180',
            slot: true,
            render: (h, { row, column, index, item }) => {
              if (row.required) {
                return (
                  <el-button>是</el-button>
                )
              }
            }
          }
        ]

      }
    };
  },
  components: {
    myTable
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.card {
  background-color: #ffffff;
  padding: 0 25px 30px;
  margin-top: 20px;
  color: #333;
  font-size: 16px;
  &:nth-child(1) {
    margin-top: 0px;
  }
}
.basic {
  .basic-table {
    margin-top: 15px;
    border: 1px solid #999;
    .basic-table-row {
      padding: 0 15px;
      border-bottom: 1px solid #999;
      height: 50px;
      line-height: 50px;
      &:nth-last-child(1) {
        border-bottom: none;
      }
      .basic-title {
        font-size: 16px;
        display: inline-block;
        margin-right: 20px;
      }
      .basic-time {
        color: #409eff;
        display: inline-block;
      }
      .basic-tip {
        color: #ccc;
        display: inline-block;
      }
      .basic-right {
        float: right;
      }
    }
  }
}
</style>