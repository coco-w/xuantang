<template>
  <div class="register-main">
    <div v-if="isRegister" class="register-info-box">
      <div class="register-success">您已成功报名注册，欢迎参会！</div>
      <div class="user-info-box">
        <div class="user-info-title">
          <span>基本信息</span>
          <el-button size="small" class="btn" @click='hanldeModify'>修改</el-button>
        </div>
        <div class="user-field">
          <div class="list" :style="showItemStyle">
            <div class="user-item" v-for="(item, index) in data" :key="index">
              <div class="user-item-name">{{item.name}}</div>
              <div class="user-tiem-data">{{item.value}}</div>
            </div>
          </div>
        </div>
        <div class="more" @click="handleMore">
          <div v-show="!showItem">+查看更多报名注册信息</div>
          <div v-show="showItem">-收起报名注册信息</div>
        </div>
        <div class="success-img">
          <img
            src="http://cn.hudongxuetang.com/resources20190816130046/tnsPcResources/images/meetingInfo/resultStamps/stamp_Welcome_cn.png"
            alt
          />
        </div>
      </div>
    </div>
    <div v-if="!isRegister">
      <h2>请填写表单   <span style="font-size:14px;color:#999">带 <span style="color:#F56C6C">*</span> 为必填项</span></h2>
    
        <el-divider></el-divider>
        <div v-if="asd">
      <el-form ref="form" :model='models' :rules="rules">
        <el-form-item v-for="(item,index) in formData" :key="index" :label="item.entry" :prop="item.model">
          <!-- <el-input v-if="item.type=='input'" v-model="models[item.model]"></el-input> -->
          <item :item="item" :models.sync="models" @on-update="itemChange"></item>
            <!-- <component v-bind:is="'el-'+item.type"  v-model="models[item.model]" @change="handleChange" >
              <template v-if="item.options">
                <component v-bind:is="'el-'+v.tag" v-for="v,i in item.options" :label="v.value">
                  </component>
              </template>
            </component> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { getRegisterFormData } from "@/api/userPageRegister";
import Item from '@/components/item'
import clonedeep from 'clonedeep'
import { data } from '@/const/temp.js'
export default {
  name: "userHomeRegister",
  components: {
    Item
  },
  data() {
    return {
      data,
      showItem: false,
      isRegister: true,
      formData: [],
      rules:{},
      models: {},
      asd: true,
    };
  },
  mounted() {
    getRegisterFormData().then(res => {
      console.log(res)
      this.formData = res
      this.formData.forEach(ele => {
        this.models[ele.model] = ele.value
        if (ele.required) {
          console.log(ele)
          if (ele.type === 'input') {
            this.rules[ele.model] = [{ required: true, message: '请输入内容', trigger: 'blur' }]
          }else {
            this.rules[ele.model] = [{ required: true, message: '请选择选项', trigger: 'blur' }]
          }
        }
      })
    })
  
  },
  computed: {
    showItemStyle() {
      return this.showItem ? `height: ${data.length * 60}px` : "height: 160px";
    }
  },
  methods: {
    hanldeModify() {
      this.isRegister = false
    },
    handleMore() {
      this.showItem = !this.showItem;
    },
    itemChange(val,model) {
      console.log(val,model)
      this.models[model] = val
    },
    handleChange() {
      this.asd = false
      this.$nextTick(() => {
        this.asd = true
      })
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.isRegister = true
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.register-main {
  border: 1px solid #cccccc;
  background-color: #fff;
  padding: 30px 35px 60px;
  .register-info-box {
    min-height: 370px;
    width: 800px;
    margin: 0 auto;
    .register-success {
      background: #409eff;
      padding: 13px 20px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  }
  .user-info-box {
    position: relative;
    border: 1px solid #ccc;
    .user-info-title {
      background-color: #f4f5f9;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      padding: 14px 90px 14px 20px;
      position: relative;
      .btn {
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }
    .list {
      padding: 15px;
      transition: 1s all ease;
      overflow: hidden;
      .user-item {
        margin-top: 10px;
        height: 50px;
        .user-item-name {
          color: #999;
        }
        .user-item-data {
        }
      }
    }
    .success-img {
      position: absolute;
      top: 70px;
      right: 40px;
    }
    .more {
      padding-left: 15px;
      cursor: pointer;
      margin-bottom: 20px;
      div {
        color: #409eff;
      }
    }
  }
}
</style>