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
            <el-switch v-model="pay" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </div>
        </div>
        <div class="basic-table-row">
          <div class="basic-title">是否开具发票</div>
          <div class="basic-tip">开启后，将向参会人员搜集发票抬头信息，并自动匹配纳税人识别号</div>
          <div class="basic-right">
            <el-switch v-model="invoice" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
          <el-button @click="handleShowAdd(enrollOptions)">自定义添加</el-button>
        </template>
      </my-table>
    </div>
    <div class="pay card" v-show="pay">
      <div class="top-topic">
        <div class="topic-text">缴费设置</div>
      </div>
      <my-table :options="payOptions">
        <template slot="title">
          <el-button @click="showPayMode = true" >添加</el-button>
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
          <el-col :span="3">
            <el-button @click="handlePayAccount">修改账号</el-button>
          </el-col>
        </el-row>
         <el-row class="payRow">
          <el-col :span="3">现场缴费</el-col>
          <el-col :span="18">参会人可在手机或PC端缴费页面，看到现场缴费有关信息</el-col>
          <el-col :span="3" >
            <el-button @click="handlePayExplaint">修改说明</el-button>
          </el-col>
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
    <div class="invoice card" v-show="invoice && pay">
      <div class="top-topic">
        <div class="topic-text">发票设置</div>
        
      </div>
      <my-table :options="invoiceOptions">
        <template slot="title">
          <el-button @click="handleShowAdd(invoiceOptions)">自定义添加</el-button>
        </template>
      </my-table>
    </div>
    <div class="footer">
      <el-button  type="danger" size="medium">取消</el-button>
      <el-button  type="success" size="medium">提交</el-button>
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
          <el-radio v-model="addForm.type" label="input" v-show="addForm.type == 'input'">填空</el-radio>
          <el-radio v-model="addForm.type" label="radio" v-show="addForm.type == 'radio'">单选</el-radio>
          <el-radio v-model="addForm.type" label="checkbox" v-show="addForm.type == 'checkbox'">多选</el-radio>
          <el-radio v-model="addForm.type" label="date-picker" v-show="addForm.type == 'date-picker'">日期</el-radio>
        </el-form-item>
        <el-form-item label="报名项类型" v-else>
          <el-radio v-model="addForm.type" label="input">填空</el-radio>
          <el-radio v-model="addForm.type" label="radio">单选</el-radio>
          <el-radio v-model="addForm.type" label="checkbox">多选</el-radio>
          <el-radio v-model="addForm.type" label="date-picker">日期</el-radio>
        </el-form-item>
        <el-form-item label="请填写报名项名称">
          <el-input v-model="addForm.entry" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="请填写备注（非必填）">
           <el-input type="textarea" placeholder="此备注在报名项名称下面显示" v-model="addForm.remarks"></el-input>
        </el-form-item>
        <el-form-item v-show="addForm.type === 'radio'" label="请选择选项展现形式">
          <el-radio v-model="addForm.selectType" label="1">单选按钮</el-radio>
          <el-radio v-model="addForm.selectType" label="2">下拉选择</el-radio>
        </el-form-item>
        <Options v-if="showAdd && (addForm.type === 'radio' || addForm.type === 'checkbox')" v-model="addForm.options" @change="handlechange"></Options>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </span>
    </el-dialog>
     <el-dialog
      title="缴费设置"
      :visible.sync="showPayMode"
      width="45%"
      :close-on-click-modal="false">
      <el-form :model="payModeForm"  label-width="110px"  ref="paymode"  label-position="left" :rules="rules">
        <el-form-item label="价格类型名称" prop="type">
          <el-input v-model="payModeForm.type"></el-input>
        </el-form-item>
         <el-form-item label="金额" prop="amount">
          <el-input v-model="payModeForm.amount"></el-input>
        </el-form-item>
         <el-form-item label="备注">
          <el-input v-model="payModeForm.remark" type="textarea" :autosize="{ minRows: 2}" ></el-input>
        </el-form-item>
        <el-form-item label="本价格允许的缴费方式：" label-width="200px">
           <el-radio-group v-model="payModeForm.method">
            <el-radio :label="1">在线支付</el-radio>
            <el-radio :label="2">转账汇款</el-radio>
            <el-radio :label="3">现场缴费</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="term">
          <el-switch
            v-model="payModeForm.showTerm"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          <span style="margin-left:25px">是否设置价格有效期？超出有效期后参会人员将无法选择此价格</span>
          <div>
            <el-date-picker
              v-show="payModeForm.showTerm"
              v-model="payModeForm.term"
              value-format="timestamp"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-switch
            v-model="payModeForm.examine"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          <span style="margin-left:25px">开启后，您需要在人员管理模块对选择此价格的参会人进行审核</span>
        </el-form-item>
        <el-form-item>
          <el-switch
            v-model="payModeForm.supplement"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          <span style="margin-left:25px">是否要求选择此价格的参会人补充填写有关信息</span>
        </el-form-item>
      </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handlePayModeCancel">取 消</el-button>
          <el-button type="primary" @click="addPayMode" >确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog
      title="请填写收款账号信息"
      :visible.sync="showPayAccount"
      width="30%"
      :close-on-click-modal="false">
      <el-form label-width="100px">
        <el-form-item label="账户">
          <el-input v-model="payAccount2.account"></el-input>
        </el-form-item>
        <el-form-item label="账户名称">
          <el-input v-model="payAccount2.titleOfAccount"></el-input>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input v-model="payAccount2.OpeningBank"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="payAccount2.remark" ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPayAccount = false">取 消</el-button>
        <el-button type="primary" @click="handlePayAccountUpdate">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="现场缴费说明"
      :visible.sync="showPayExplaint"
      width="30%"
      :close-on-click-modal="false">
      <el-input type="textarea" :autosize="{ minRows: 4}" v-model="PayExplaint2"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPayExplaint = false">取 消</el-button>
        <el-button type="primary" @click="handlePayExplaintUpdate">确 定</el-button>
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
    let checkAge = (rule, value, callback) => {
        if (!Number(value)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
    }
    let checkTerm = (rule, value, callback) => {
        if (!value && this.payModeForm.showTerm) {
          callback(new Error('请选择日期'));
        } else {
          callback();
        }
    } 
    return {
      value: true,
      showQuick: false,
      showAdd: false,
      showPayMode: false,
      pay: true,
      invoice: true,
      checked: [],
      showPayAccount:false,
      showPayExplaint: false,
      activeOptions: null,
      PayExplaint: '现场缴费请在会议指定地点的签到台完成缴费',      
      PayExplaint2: '',
      payModeForm: {
        type: '',
        amount: "",
        method: 3,
        examine: false,
        showTerm: false,
        remark: "",
        supplement: false,
        term: null,
        operation: true,
      },
      payAccount2: {

      },
      payAccount: {
        account: '800316206802019',
        titleOfAccount: '湖南鹰研数据有限公司',
        OpeningBank: '长沙银行友谊支行',
        remark: '',
      },
      rules: {
          type: [
            { required: true, message: '请输入价格类型名称', trigger: 'blur' },
            { max: 20, message: '最多 20 个字符', trigger: 'blur' }
          ],
          amount: [
            { required: true, message: '请输入金额', trigger: 'blur' },
            { validator: checkAge, trigger: 'blur' }
          ],
          term: [
            { validator: checkTerm, trigger: 'blur' }
          ]
        },
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
          type: 'input',
          required: '是',
          operation: false,
          remarks: '',
          
        }, {
          index: '2',
          entry: '单位',
          type: 'input',
          remarks: '',
          required: true,
          operation: false,
        }, {
          index: '3',
          entry: '邮箱',
          type: 'input',
          remarks: '',
          required: true,
          operation: true,
        }, {
          index: '4',
          entry: '入住酒店',
          type: 'input',
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
                case "input":
                  str="填空"
                  break;
                case "radio":
                  str="单选"
                  break;
                case "checkbox":
                  str="多选"
                  break;
                case "date-picker":
                  str="日期"
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
            method: 1,
            examine: true,
            supplement: false,
            term: [1568114903000,1568201303000],
            operation: true,
            index: 0,
          },
           {
            type: "教师及企业代表",
            amount: "500",
            method: 3,
            examine: true,
            supplement: false,
            term: [1568114903000,1568978903000],
            operation: true,
            index: 1,
          },
           {
            type: "教师及企业代表",
            amount: "500",
            method: 2,
            examine: false,
            supplement: true,
            term: [1568114903000,1568201303000],
            operation: true,
            index: 2,
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
              let a = String(row.method)
              switch (a) {
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
              if (row.showTerm) {
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
              }else {
                return (
                  <div>
                    报名截止前有效
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
                  <el-button on-click={this.handlePayModeUpdate.bind(this,row)}>修改</el-button>
                  <el-button on-click={this.handlePayModeDelete.bind(this,row)}>删除</el-button>
                  <i slot="reference" style="cursor: pointer;" class="el-icon-more"></i>
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
      invoiceOptions: {
        title: {
          text: '发票信息项'
        },
        tableData: [
          {
            index: '1',
            entry: '发票类型',
            type: 'input',
            required: "是",
            remarks: '',
            operation: false,
          },
          {
            index: '2',
            entry: '发票抬头',
            type: 'input',
            required: "是",
            remarks: '',
            operation: false,
          },
          {
            index: '3',
            entry: '纳税人识别号',
            type: 'input',
            required: false,
            remarks: '',
            operation: false,
          },
        ],
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
                case "input":
                  str="填空"
                  break;
                case "radio":
                  str="单选"
                  break;
                case "checkbox":
                  str="多选"
                  break;
                case "date-picker":
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
      
      if (this.addForm.index > -1) {
        let index = Number(this.addForm.index) - 1
        this.activeOptions.tableData.splice(index,1,this.addForm)
      }else {
        this.addForm.index = this.activeOptions.tableData.length+1
        this.activeOptions.tableData.push(this.addForm)
      }
      this.addForm = {
        type: "1",
        selectType: "1",
        entry: '',
        required: true,
        operation: true,
        remarks: "",
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
        remarks: "",
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
          type: "input",
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
     
    },
    addPayMode() {
      this.$refs.paymode.validate((valid) => {
        if (valid) {
          if (this.payModeForm.index > -1) {
            this.payOptions.tableData.splice(this.payModeForm.index,1,this.payModeForm)
          }else {
            this.payModeForm.index = this.payOptions.tableData.length
            this.payOptions.tableData.push(this.payModeForm)
          }
          this.showPayMode = false
            this.payModeForm = {
              type: '',
              amount: "",
              method: 3,
              examine: false,
              showTerm: false,
              remark: "",
              supplement: false,
              term: null,
              operation: true,
            }
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    handlePayModeCancel() {
      this.showPayMode = false
      this.payModeForm = {
        type: '',
        amount: "",
        method: 3,
        examine: false,
        showTerm: false,
        remark: "",
        supplement: false,
        term: null,
        operation: true,
      }
    },
    handlePayModeUpdate(row) {
      console.log(clonedeep(row))
      this.payModeForm = clonedeep(row)
      this.showPayMode = true
    },
    handlePayModeDelete(row) {
      this.$confirm('此操作将永久删除该报名信息项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let index = Number(row.index)
          this.payOptions.tableData.splice(index,1)
          this.payOptions.tableData.forEach((ele,index) => {
            let a = index
            ele.index = a
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
    },
    handlePayAccount() {
      this.payAccount2 = clonedeep(this.payAccount)
      this.showPayAccount = true
    },
    handlePayAccountUpdate() {
      this.payAccount = clonedeep(this.payAccount2)
      this.showPayAccount = false
    },
    handlePayExplaint() {
      this.PayExplaint2 = clonedeep(this.PayExplaint)
      this.showPayExplaint = true
    },
    handlePayExplaintUpdate() {
      this.PayExplaint = clonedeep(this.PayExplaint2)
      this.showPayExplaint = false
    },
    handleShowAdd(options) {
      this.showAdd = true
      this.activeOptions = options
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
    border: 1px solid #EBEEF5;
    .basic-table-row {
      padding: 0 15px;
      border-bottom: 1px solid #EBEEF5;
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
.payMode {
  
}
.payRow {
  
  padding: 4px 20px;
  line-height: 40px;
  border: 1px solid #EBEEF5;
  
  div:nth-child(2) {
    color: #666;
    font-size: 14px;
  }
  &:last-child {
    border-top: none;
  }
}
.footer {
  text-align: center;
  margin: 40px 0 100px 0;
}
</style>