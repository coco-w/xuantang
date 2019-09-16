<template>
  <div>
    <div class="add" @click="handleAdd">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia3" />
        </svg>
      </span>
      <span>添加嘉宾</span>
    </div>
    <div class="guest-container">
      <div class="img-box" v-show="guestsArr.length == 0">
        <img src="@/assets/guest-absent-img.jpg" alt srcset />
      </div>
    </div>
    <div v-show="guestsArr.length > 0">
      <template v-for="(item,index) in guestsArr">
        <div class="guest-list" :key="index">
          <el-row>
            <el-col class="left" :span="15">
              <div class="svg-box">
                <svg class="icon" aria-hidden="true" style="width:40px;height:40px">
                  <use xlink:href="#icon-touxiang2" />
                </svg>
              </div>
              <div class="info">
                <div>{{item.name}}</div>
                <div>{{item.work}}</div>
              </div>
            </el-col>
            <el-col :span="5">
              <span class="invite">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youxiang" />
                </svg>
                <div>邮箱邀请</div>
              </span>
              <span class="invite">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qrcode" />
                </svg>
                <div>微信邀请</div>
              </span>
            </el-col>
            <el-col class="emnu" :span="4">
              <el-popover placement="bottom"  trigger="click">
                <el-button @click="handleGuestsFormUpdate(index)">修改</el-button>
                <el-button @click="handleGuestsFormDelete(index)">删除</el-button>
                <div class="svg-box" slot="reference">
                  <svg class="icon" aria-hidden="true" style="width:40px;height:40px">
                    <use xlink:href="#icon-caidan"/>
                  </svg>
                </div>
              </el-popover>
            </el-col>
          </el-row>
        </div>
      </template>
    </div>
    <el-dialog title="嘉宾基本资料录入" :visible.sync="dialogVisible" width="40%">
      <el-form ref="ruleForm" :model="guestsForm" :rules="rules">
        <el-form-item v-for="(item, index) in guestsFormOptions" :key="index" :prop="item.prop">
          <el-input v-model="guestsForm[item.prop]" :placeholder="item.placeholder"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm">确认</el-button>
          <el-button @click="cancelForm">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { guestsForm, rules, guestsFormOptions } from "@/const/guests.js"
import clonedeep from 'clonedeep'
export default {
  name: "guests",
  data() {
    return {
      dialogVisible: false,
      guestsForm,
      rules,
      guestsFormOptions,
      guestsArr: [
        {
          name: "wql",
          work: "sad",
          email: "5353@qq.com",
          phoneNumber: "14523",
          major: ""
        },
        {
          name: "大手大脚",
          work: "爱仕达",
          email: "5353@qq.com",
          phoneNumber: "14523",
          major: ""
        }
      ],
      activeIndex: -1,
    };
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true;
      this.activeIndex = -1
    },
    cancelForm() {
      this.dialogVisible = false
      this.guestsForm = {
        name: '',
            work: '',
            email: '',
            phoneNumber: '',
            major: '',
      }
    },
    handleClose() {},
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.activeIndex > -1) {
            this.guestsArr.splice(this.activeIndex, 1, this.guestsForm)
          }else {
            this.guestsArr.push(this.guestsForm)
          }
          
          this.guestsForm = {
            name: '',
            work: '',
            email: '',
            phoneNumber: '',
            major: '',
          }
          this.dialogVisible = false
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleGuestsFormDelete(index) {
        this.$confirm('此操作将永久删除该嘉宾, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.guestsArr.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });         
        })
    },
    handleGuestsFormUpdate(index) {
      this.dialogVisible = true
      this.activeIndex = index
      this.guestsForm = clonedeep(this.guestsArr[index])
    }
  }
};
</script>
<style lang="less" scoped>
.add {
  text-align: center;
  width: 100%;
  height: 70px;
  background: #fff;
  cursor: pointer;
  span {
    color: #666;
    font-size: 25px;
    line-height: 70px;
    user-select: none;
  }
  .icon {
    width: 30px;
    height: 30px;
    vertical-align: sub;
  }
}
.guest-container {
  margin-top: 10px;
  width: 100%;
  background: #fff;
  text-align: center;
}
.guest-list {
  margin-top: 10px;
  width: 100%;
  background: #fff;
  height: 70px;
}
.invite {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin-left: 30px;
  margin-top: 15px;
  float: left;
  .icon {
    width: 20px;
    height: 20px;
  }
}
.left {
  .info {
    display: inline-block;
    margin-left: 20px;
    & > div {
      margin-top: 10px;
      height: 20px;
    }
  }
  .svg-box {
    display: inline-block;
    margin-left: 20px;
  }
  .icon {
    width: 40px;
    height: 40px;
    vertical-align: 3px;
  }
}
.emnu {
  .svg-box {
    float: right;
    padding: 15px 25px 0 0;
    cursor: pointer;
  }
}
</style>