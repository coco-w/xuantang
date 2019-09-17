<template>
  <div class="content">
    <el-row>
      <el-col :md="{span:6,offset: 10}">
        <div class="tns-log-layer personal-layer">
          <div class="tns-log-box select-login-box active">
            
            <div v-show="login">
              <div class="en-log-title">欢迎使用</div>
              <div
                id="selectEmailLoginButton-index-login"
                class="teno-selectEmailLogin-btn"
                @click="emailLogin_step_1"
              >
               <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youjian"></use>
              </svg>&nbsp;&nbsp;使用邮箱登录
              </div>
              <div @click="handleWechat" id="selectWechatLoginButton-index-login" class="teno-selectWechatLogin-btn">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>&nbsp;&nbsp;使用微信登录
              </div>
            </div>
            <div v-show="email_step_1" class="email-login-box">
              <div class="en-remind-text">
                <div class="leftDivInLoginBox">
                  <span class="login-green-color" >登录/注册</span>
                </div>
              </div>
              <input v-model="email" type="text" placeholder="请输入邮箱地址" />
              <div v-show="!emailFormat"><span style="color:#ff0000">请输入正确的邮箱格式</span></div>
              <div>
                <el-button
                  type="success"
                  round
                  style="height: 48px; width:240px; margin-top: 50px; font-size: 24px"
                  @click="emailLogin_step_2"
                >开始</el-button>
              </div>
              <div class="en-login-method">
                <div @click="handleWechat">
                  <svg  t="1566228048627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="744" width="200" height="200"><path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#00C800" p-id="745"></path><path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#00C800" p-id="746"></path></svg>
                  <span>微信登录</span>
                </div>
              </div>
            </div>
          </div>
          <div class="tns-log-box check-box " v-show='email_step_2'>
            <div class="infor-dis leftDivInLoginBox">
              Hi, 
              <span class="user-email-wrapper login-green-color">
              {{email}}
            </span>
            <svg @click="handleModify" t="1566228754272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M551.3 253L771 472.7 331.7 912H112V692.3L551.3 253zM303.7 844.4l48.1-48.1-124-124-48.1 48.1v56.5h67.6v67.5h56.4z m276.2-490c0-7.8-3.9-11.7-11.7-11.7-3.6 0-6.6 1.2-9 3.7L273.1 632.7c-2.4 2.4-3.7 5.4-3.7 9 0 7.8 3.9 11.7 11.7 11.7 3.6 0 6.6-1.2 9-3.7l286.2-286.2c2.3-2.5 3.6-5.5 3.6-9.1zM912 303.8c0 18.7-6.6 34.5-19.5 47.5l-87.6 87.6-219.7-219.6 87.6-87.2c12.7-13.3 28.5-20.1 47.5-20.1 18.7 0 34.6 6.7 48.1 20.1l124 123.6c13 13.8 19.6 29.8 19.6 48.1z" p-id="2479" fill="#8a8a8a"></path></svg>
            </div>
            <div class="en-remind-text leftDivInLoginBox">
              请检查邮箱是否正确
            </div>
            <input v-model="email_password" style="margin-top: 40px" type="password" placeholder="请设置登录密码" />
            <div class="en-remind-text other-remind color333 leftDivInLoginBox" style="margin-top: 40px">
              <el-checkbox v-model="checked">同意互动学堂用户协议</el-checkbox>
            </div>
            <el-button
              type="success"
              round
              style="height: 48px; width:240px; font-size: 24px"
              @click="handleLogin"
            >开始</el-button>
          </div>
          <div class="tns-log-box qr-Login-box active" v-show="wechat">
            <div class="en-log-title">微信扫码登录</div>
            <div class="QRcode-box">
              <img style="width: 110px" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQEo8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySkVNVG9oODFkVTExbFhkdE50MWcAAgT7_1tdAwSAUQEA" alt="">
            </div>
            <div class="en-remind-text color333">
              <span style="color:#999">首次使用需关注</span>
            </div>
            <div class="en-login-method color333" @click="handleEmail">
              使用邮箱  
              <svg style="right:0px" t="1566309965012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1467" width="200" height="200"><path d="M853.333333 341.333333 512 554.666667 170.666667 341.333333 170.666667 256 512 469.333333 853.333333 256M853.333333 170.666667 170.666667 170.666667C123.306667 170.666667 85.333333 208.64 85.333333 256L85.333333 768C85.333333 814.933333 123.733333 853.333333 170.666667 853.333333L853.333333 853.333333C900.266667 853.333333 938.666667 814.933333 938.666667 768L938.666667 256C938.666667 208.64 900.266667 170.666667 853.333333 170.666667Z" p-id="1468" fill="#707070"></path></svg>
              账号登录 
            </div>
          </div>
          <div class="tns-log-box login-box active" v-show='submit'>
            <div class="en-log-title">欢迎回来</div>
            <input v-model="email" placeholder="请输入邮箱地址" class="username-index-login">
            <input v-model="email_password" placeholder="请输入登录密码" class="password-index-login">
            <div>
              <el-button
              type="success"
              round
              style="height: 48px; width:240px; font-size: 24px; margin-top: 30px"
            >登录</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "userLogin",
  data() {
    return {
      login: true,
      email_step_1: false,
      email_step_2: false,
      wechat: false,
      email: '',
      emailFormat: true,
      email_password: '',
      checked: true,
      submit: false,
      first: false,
    };
  },
  methods: {
    emailLogin_step_1() {
      this.login = false
      this.email_step_1 = true
    },
    emailLogin_step_2() {
      let myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
      if (myReg.test(this.email)) {
        this.emailFormat = true
        this.email_step_1 = false
        let a = Math.random()
        if (a > 0.3) {
          this.submit = true
        }else {
          this.email_step_2 = true
        }
        
      }else {
        this.emailFormat = false
      }
      
    },
    handleModify() {
      this.email_step_1 = true
      this.email_step_2 = false
    },
    handleWechat() {
      this.login = false
      this.email_step_1 = false
      this.wechat = true
    },
    handleEmail() {
      this.wechat = false
      this.email_step_1 = true
    },
    handleLogin() {
      this.$router.push('/')
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  background: url(http://static.hudongxuetang.com/hdxt/login-images/personal-banner1.jpg)
    center top;
  height: 550px;
}
.personal-layer {
  top: 70px;
  right: 150px;
  background-color: #fff;
  border-radius: 12px;
}
.tns-log-layer {
  margin: 20px;
  display: inline-block;
  width: 340px;
  height: 300px;
  position: absolute;
  font-size: 14px;
  color: #666;
  text-align: center;
  padding-top: 40px;
}

.tns-log-layer .en-log-title {
  font-size: 24px;
}
.tns-log-layer .teno-selectEmailLogin-btn {
  width: 240px;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  background-color: #348ed7;
  margin: 75px auto 0;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }
}
.tns-log-layer .teno-selectWechatLogin-btn {
  width: 240px;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  background-color: #1aad19;
  margin: 25px auto 0;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }
}
.en-remind-text {
  margin-top: 40px;
  .leftDivInLoginBox {
    width: 224px;
    margin: 0 auto;
    text-align: left;
    .login-green-color {
      color: #1aad19;
    }
  }
}

.tns-log-layer input,
.tns-log-layer input[type="password"] {
  height: 30px;
  width: 240px;
  border: 0;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
}
.email-login-box input {
  margin-top: 25px;
  width: 224px;
}
.en-login-method {
  margin-top: 40px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  font-size: 15px;
  .login-green-color {
    color: #1aad19;
  }
  svg{
    width: 15px;
    height: 15px;
    position: relative;
    top: 2px;
    right: 5px;
  }
}
.check-box .leftDivInLoginBox {
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  
}
.leftDivInLoginBox {
  svg {
    width: 12px;
    height: 12px;
    cursor: pointer;
    position: relative;
    top: -3px;
  }
}
.user-email-wrapper {
  position: relative;
  
}
.tns-log-layer .login-green-color {
  color: #1AAD19; 
}
.tns-log-layer .en-remind-text {
  margin-top: 10px;
}
.check-box .other-remind {
  width: 240px;
  margin: 20px auto 40px;
}
.en-log-title {
  font-size: 24px;
}
.QRcode-box {
  width: 110px;
  height: 110px;
  margin: 30px auto;
  img {
    vertical-align: middle;
  }
}
.en-remind-text {
  margin-top: 10px;
}
.color333 {
  color: #333333;
}
.en-login-method {
  margin-top: 40px;
}
.username-index-login,.password-index-login {
  margin-top: 30px
}
</style>