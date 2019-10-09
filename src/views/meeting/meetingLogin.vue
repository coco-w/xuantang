<template>
  <div class="tns-content">
    <div class="tns-content-center">
      <div class="tns-log-layer meeting-layer active comLayerFrom">
        <div class="tns-switch-box">
          <div class="tns-mobile-box">
            <el-form :model="form">
              <el-form-item>
                <el-input v-model="form.username" placeholder="请输入账号">
                  <i slot="prefix" class="el-icon-user"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.password" placeholder="请输入密码" type="password" style="   ">
                  <i slot="prefix" class="el-icon-lock"></i>
                </el-input>
              </el-form-item>
            </el-form>
            <div :style="{height: '50px'}">
               <el-checkbox v-model="remember" :style="{float:'left'}" >记住账号</el-checkbox>
               <span :style="{float:'right',color: '#31C27C',cursor: 'pointer'}">忘记密码</span>
            </div>
            <div>
              <el-button type="success"  @click="handleLogin">登录</el-button>
            </div>
            <div class="footer_row_between">
              <el-divider>   还没有账号    </el-divider>
            </div>
            <div>
              <el-button >注册账号</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setToken } from '@/lib/util'
import { mapActions } from 'vuex'
export default {
  name: "meeting",
  
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      remember: true,
    };
  },
  mounted() {
    this.form.username = localStorage.getItem('user') || ''
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    handleLogin() {
      if (this.remember) localStorage.setItem('user', this.form.username)
      this.login(this.form).then(res => {
        if (res.code === 200) {
          this.$router.push({path: '/meeting/index'})
        }else {
          
        }
      })
    },
    
  }
};
</script>
<style lang="less" scoped>
.tns-content {
  background: url(http://static.hudongxuetang.com/hdxt/login-images/meeting-mechanism-bg-20180918.png)
    center top;
  height: 580px;
  .el-button{
    width: 100%
  }
  .tns-content-center {
    width: 1200px;
    height: 100%;
    margin: 0px auto 0;
    position: relative;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .comLayerFrom {
    width: 300px;
    right: 20px;
    top: 80px;
    margin: 0 20px;
    .tns-switch-box {
      padding-top: 25px;
      .left {
        float: left;
        .icon1 {
          width: 40px;
          height: 40px;
          padding: 10px 0px 0 0;
          background: #eee;
          border: 1px solid #ccc;
          border-radius: 0 4px 4px 0;
          border-right: none;
          box-sizing: border-box;
        }
      }
      .right {
        float: right;
        width: 260px;
        input {
          border: none;
        }
      }
    }
  }
}

.tns-log-layer {
  margin: 20px;
  display: inline-block;
  width: 340px;
  height: 380px;
  position: absolute;
  font-size: 14px;
  color: #666;
  text-align: center;
  padding-top: 40px;
  .meeting-layer {
    top: 93px;
    right: 80px;
    width: 190px;
    position: absolute;
    color: #666;
    text-align: left;
  }
}
</style>