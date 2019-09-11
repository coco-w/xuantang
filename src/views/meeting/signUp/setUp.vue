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
          <el-button @click="showAdd = true">自定义添加</el-button>
        </template>
      </my-table>
    </div>
    <div class="pay card">
      <div class="top-topic">
        <div class="topic-text">缴费设置</div>
      </div>
      <my-table :options="payOptions">
        <template slot="title">
          <el-button >添加</el-button>
        </template>
      </my-table>
      <div class="payMode">
        <div class="tb-head">
          <span>缴费方式 </span>
          <span>（请对以上价格所允许的缴费方式进行配置）</span>
        </div>
        <el-row class="payRow">
          <el-col :span="3">转账汇款</el-col>
          <el-col :span="18">参会人可在手机或PC端缴费页面，看到转账有关信息</el-col>
          <el-col :span="3">修改账号</el-col>
        </el-row>
         <el-row class="payRow">
          <el-col :span="3">现场缴费</el-col>
          <el-col :span="18">参会人可在手机或PC端缴费页面，看到现场缴费有关信息</el-col>
          <el-col :span="3">修改说明</el-col>
        </el-row>
      </div>
      <div>
        <div class="tb-head">
          <span>缴费说明 </span>
          <div style="float: right">
            <el-button >添加</el-button>
          </div>
        </div>
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
      width="30%"
      :close-on-click-modal="false">
      <div>快速添加报名项（请在下方勾选）</div>
        <el-checkbox-group 
          v-model="checked"
          >
          <el-checkbox style="width: 33%" v-for="city in checkedArr" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleQuickCancel">取 消</el-button>
        <el-button type="primary" @click="handleQuickAdd">确 定</el-button>
      </span>
    </el-dialog>
      <el-dialog
      title="报名项设置"
      :visible.sync="showAdd"
      width="45%"
      :close-on-click-modal="false">
      <el-form :model="addForm" >
        <el-form-item label="报名项类型" v-if="addForm.index">
          <el-radio v-model="addForm.type" label="1" v-show="addForm.type == '1'">填空</el-radio>
          <el-radio v-model="addForm.type" label="2" v-show="addForm.type == '2'">单选</el-radio>
          <el-radio v-model="addForm.type" label="3" v-show="addForm.type == '3'">多选</el-radio>
          <el-radio v-model="addForm.type" label="4" v-show="addForm.type == '4'">日期</el-radio>
        </el-form-item>
        <el-form-item label="报名项类型" v-else>
          <el-radio v-model="addForm.type" label="1">填空</el-radio>
          <el-radio v-model="addForm.type" label="2">单选</el-radio>
          <el-radio v-model="addForm.type" label="3">多选</el-radio>
          <el-radio v-model="addForm.type" label="4">日期</el-radio>
        </el-form-item>
        <el-form-item label="请填写报名项名称">
          <el-input v-model="addForm.entry" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="请填写备注（非必填）">
           <el-input type="textarea" placeholder="此备注在报名项名称下面显示" v-model="addForm.remarks"></el-input>
        </el-form-item>
        <el-form-item v-show="addForm.type === '2'" label="请选择选项展现形式">
          <el-radio v-model="addForm.selectType" label="1">单选按钮</el-radio>
          <el-radio v-model="addForm.selectType" label="2">下拉选择</el-radio>
        </el-form-item>
        <Options v-if="showAdd && (addForm.type === '2' || addForm.type === '3')" v-model="addForm.options" @change="handlechange"></Options>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import myTable from "@/components/myTable";
import Options from "@/components/options"
import clonedeep from 'clonedeep'
export default {
  name: "setUp",
  data() {
    return {
      value: true,
      showQuick: false,
      showAdd: false,
      checked: [],
      addForm: {
        type: "1",
        selectType: "1",
        entry: '',
        required: true,
        operation: true,
        remarks: '',
        options: [
          {
            value: '',
            disabled: false,
          },
          {
            value: '',
            disabled: false,
          },
        ],
      },
      checkedArr: ['单位','手机','身高(CM)','体重(KG)','通讯地址','邮编','班级','身份整号','学号'],
      enrollOptions: {
        title: {
          text: '报名信息项',
          class: 'asd'
        },
        tableData: [{
          index: '1',
          entry: '姓名',
          type: '1',
          required: '是',
          operation: false,
          remarks: '',
        }, {
          index: '2',
          entry: '单位',
          type: '1',
          remarks: '',
          required: true,
          operation: false,
        }, {
          index: '3',
          entry: '邮箱',
          type: '1',
          remarks: '',
          required: true,
          operation: true,
        }, {
          index: '4',
          entry: '入住酒店',
          type: '1',
          required: true,
          remarks: '',
          operation: true,
        }],
        tableProps: [
          {
            prop: "index",
            label: "序号",
            slot: true,
            render: (h, { row, column, index, item }) => {
              return (
                <div>{index + 1}</div>
              )
            }
          },
          {
            prop:"entry",
            label: '报名项名称',
            slot: true,
            render: (h, {row, column, index, item }) => {
              let str = ''
              if (row.remarks != '') {
                str = `(${row.remarks})`
              }
              if (row.required === true || row.required === "是") {
                return (
                  <div><span style="color: #ff0000">*</span>{row.entry}
                  <div style="color: #56b78f">{str}</div>
                  </div>
                )
              }else {
                return (
                  <div>{row.entry}
                    <div style="color: #56b78f">{str}</div>
                  </div>
                )
              }
            }
          },
          {
            prop:"type",
            label: '报名项类型',
            slot: true,
            render: (h, {row, column, index, item }) => {
              let str = ""
              switch (row.type) {
                case "1":
                  str="填空"
                  break;
                case "2":
                  str="单选"
                  break;
                case "3":
                  str="多选"
                  break;
                case "4":
                  str="日期"
                  break;
                default:
                  break;
              }
              return (
                <div>{str}</div>
              )
            }
          },
          {
            porp: "required",
            label: "报名人是否必填",
            width: '180',
            slot: true,
            render: (h, { row, column, index, item }) => {
              if (row.required === true) {
                return (
                  <elSwitch 
                  vModel={row.required}
                  >
                  </elSwitch>
                )
              }else if (typeof row.required === 'string') {
                return (
                  <div>
                    {row.required}
                  </div>
                )
              }
              else {
                return (
                   <elSwitch 
                  vModel={row.required}
                  >
                  </elSwitch>
                )
              }
             
            }
          },
          {
            prop:"operation",
            label:"操作",
            slot: true,
            render: (h, {row, column, index, item }) => {
              if (row.operation) {
                return (
                 <el-popover
                  placement="bottom"
                  trigger="click"
                  width="150">
                  <el-button on-click={this.handleUpdate.bind(this, row)}>修改</el-button>
                  <el-button on-click={this.handleDelete.bind(this, row)}>删除</el-button>
                  <i slot="reference" style="  cursor: pointer;" class="el-icon-more"></i>
                </el-popover>
                )
              }else {
                return (
                  <div>不可操作</div>
                )
              }
            }
          }
        ]
      },
      payOptions: {
        title: {
          text: '价格类型'
        },
        tableData: [
          {
            type: "教师及企业代表",
            amount: "500",
            method: "1",
            examine: true,
            supplement: false,
            term: [1568114903000,1568201303000],
            operation: true,
          },
           {
            type: "教师及企业代表",
            amount: "500",
            method: "3",
            examine: true,
            supplement: false,
            term: [1568114903000,1568978903000],
            operation: true,
          },
           {
            type: "教师及企业代表",
            amount: "500",
            method: "2",
            examine: false,
            supplement: true,
            term: [1568114903000,1568201303000],
            operation: true,
          }
        ],
        tableProps: [
          {
            prop: "index",
            label: "序号",
            slot: true,
            width: "50px",
            render: (h, { row, column, index, item }) => {
              return (
                <div>{index + 1}</div>
              )
            }
          },
          {
            prop: "type",
            label: "价格类型名称"
          },
          {
            prop: "amount",
            label: "金额",
            slot: true,
            render: (h, { row, column, index, item }) => {
              return (
                <div>￥ {row.amount}</div>
              )
            }
          },
          {
            prop: "method",
            label: "缴费方式",
            slot: true,
            render: (h, { row, column, index, item }) => {
              switch (row.method) {
                case "1":
                  return (
                    <div>在线支付</div>
                  )
                  break;
                case "2": 
                  return (
                    <div>转账汇款</div>
                  )
                  break;
                case "3": 
                  return (
                    <div>现场缴费</div>
                  )
                  break;
                default:
                  break;
              }
             
            }
          },
          {
            prop: "examine",
            label: "是否审核",
            slot: true,
            render: (h, { row, column, index, item }) => {
              if (row.examine) {
                return (
                  <div>是</div>
                )
              }else {
                return (
                  <div>否</div>
                )
              }
            }
          },
          {
            prop: "supplement",
            label: "是否需要提交补充信息",
            slot: true,
            render: (h, { row, column, index, item }) => {
              if (row.supplement) {
                return (
                  <div>是</div>
                )
              }else {
                return (
                  <div>否</div>
                )
              }
            }
          },
          {
            prop: "term",
            label: "有效期",
            slot: true,
            width: "250px",
            render: (h, { row, column, index, item }) => {
              console.log(row.term)
              let time1= this.getLocalTime(row.term[0])
              let time2= this.getLocalTime(row.term[1])
              let outDate = new Date().getTime() - row.term[1]
              console.log(outDate)
              if (outDate > 0) {
                return (
                  <div style="text-align: center">
                    <p>{time1}</p>
                    <p>至</p>
                    <p>{time2}</p>
                    <p style="color:#ff0000">(已失效)</p>
                  </div>
                )
              } else {
                return (
                  <div style="text-align: center">
                    <p>{time1}</p>
                    <p>至</p>
                    <p>{time2}</p>
                  </div>
                )
              }
            }
          },
          {
            prop: "operation",
            label: "操作",
            slot: true,
            render: (h, {row, column, index, item }) => {
              if (row.operation) {
                return (
                 <el-popover
                  placement="bottom"
                  trigger="click"
                  width="150">
                  <el-button >修改</el-button>
                  <el-button >删除</el-button>
                  <i slot="reference" style="  cursor: pointer;" class="el-icon-more"></i>
                </el-popover>
                )
              }else {
                return (
                  <div>不可操作</div>
                )
              }
            }
          }
        ]
      }
    };
  },
  components: {
    myTable,
    Options
  },
  methods: {
    handleMore(row) {
      console.log(row)
    },
    getLocalTime(nS) { 
       return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
    },
    handleAdd() {
      if (this.addForm.entry.trim().length ==0) {
        this.$message.error('项目名不能为空')
        return
      }
      if (this.addForm.type === '3' || this.addForm.type === '2')
      for (let i = 0; i < this.addForm.options.length; i++){
        let element = this.addForm.options[i]
        if (element.value.trim().length == 0) {
          this.$message.error('选项不能为空')
          return
        } 
      }
      this.addForm.remarks.trim()
      if (this.addForm.index) {
        let index = Number(this.addForm.index) - 1
        this.enrollOptions.tableData.splice(index,1,this.addForm)
      }else {
        this.addForm.index = this.enrollOptions.tableData.length+1
        this.enrollOptions.tableData.push(this.addForm)
      }
      this.addForm = {
        type: "1",
        selectType: "1",
        entry: '',
        required: true,
        operation: true,
        options: [
          {
            value: '',
            disabled: false,
          },
          {
            value: '',
            disabled: false,
          },
        ],
      }
      this.showAdd = false
    },
    handlechange(val) {
      this.addForm.options = val
    },
    handleCancel() {
      this.addForm = {
        type: "1",
        selectType: "1",
        entry: '',
        required: true,
        operation: true,
        options: [
          {
            value: '',
            disabled: false,
          },
          {
            value: '',
            disabled: false,
          },
        ],
      }
      this.showAdd = false
    },
    handleQuickCancel() {
      this.checked = []
      this.showQuick = false
    },
    handleQuickAdd() {
      this.checked.forEach(ele => {
        let index = this.enrollOptions.tableData.length + 1
        this.enrollOptions.tableData.push({
          type: "1",
          entry: `${ele}`,
          required: true,
          operation: true,
          remarks: '',
          index: `${index}`
        })
      })
      this.handleQuickCancel()
    },
    handleUpdate(row) {
      this.addForm = clonedeep(row)
      this.showAdd = true
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该报名信息项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let index = Number(row.index) - 1
          this.enrollOptions.tableData.splice(index,1)
          this.enrollOptions.tableData.forEach((ele,index) => {
            let a = index + 1
            ele.index = `${a}`
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     
    }
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
.tb-head {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  background: #F4F5F9;
  margin-top: 15px;
  span:nth-child(1) {
    font-size: 16px;
    color: #333;
  }
  span:nth-child(2) {
    color: #666;
    font-size: 14px;
    margin-left: 32px;
  }
}
.payRow {
  margin-top: 8px;
  padding: 0 20px;
  div:nth-child(2) {
    color: #666;
    font-size: 14px;
  }
}
</style>