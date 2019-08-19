<template>
  <div class="content">
    <el-row>
      <el-col :md="{span:6,offset: 10}">
        <div class="tns-log-layer personal-layer">
          <div class="tns-log-box select-login-box active">
            <div class="en-log-title">欢迎使用</div>

            <div v-show="login">
              <div
                id="selectEmailLoginButton-index-login"
                class="teno-selectEmailLogin-btn"
                @click="emailLogin_step_1"
              >
                <svg
                  t="1566143684933"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1968"
                  width="200"
                  height="200"
                >
                  <path
                    d="M153.236734 163.111422l714.763665 0c48.810633 0 88.718697 38.475467 89.332667 85.853503l-446.458679 242.518237L64.313381 249.169581C64.722694 201.689218 104.323773 163.111422 153.236734 163.111422L153.236734 163.111422zM64.313381 341.981413l-0.409313 429.062856c0 47.787349 40.215049 86.876786 89.332667 86.876786l714.763665 0c49.117618 0 89.332667-39.089437 89.332667-86.876786L957.333067 341.776756 521.311882 573.038873c-6.651344 3.581493-14.735285 3.581493-21.386629 0L64.313381 341.981413 64.313381 341.981413zM64.313381 341.981413"
                    p-id="1969"
                    fill="#ffffff"
                  />
                </svg>&nbsp;&nbsp;使用邮箱登录
              </div>
              <div id="selectWechatLoginButton-index-login" class="teno-selectWechatLogin-btn">
                <svg
                  t="1566143501015"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="899"
                  width="200"
                  height="200"
                >
                  <path
                    d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                    fill="#ffffff"
                    p-id="900"
                  />
                  <path
                    d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                    fill="#ffffff"
                    p-id="901"
                  />
                </svg>&nbsp;&nbsp;使用微信登录
              </div>
            </div>
            <div v-show="email_step_1" class="email-login-box">
              <div class="en-remind-text">
                <div class="leftDivInLoginBox">
                  <span class="login-green-color">登录/注册</span>
                </div>
              </div>
              <input v-model="email" type="text" placeholder="请输入邮箱地址" />
              <div>
                <el-button
                  type="success"
                  round
                  style="height: 48px; width:240px; margin-top: 50px; font-size: 24px"
                  @click="emailLogin_step_2"
                >开始</el-button>
              </div>
              <div class="en-login-method">
                <div >
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
            <svg t="1566228754272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M551.3 253L771 472.7 331.7 912H112V692.3L551.3 253zM303.7 844.4l48.1-48.1-124-124-48.1 48.1v56.5h67.6v67.5h56.4z m276.2-490c0-7.8-3.9-11.7-11.7-11.7-3.6 0-6.6 1.2-9 3.7L273.1 632.7c-2.4 2.4-3.7 5.4-3.7 9 0 7.8 3.9 11.7 11.7 11.7 3.6 0 6.6-1.2 9-3.7l286.2-286.2c2.3-2.5 3.6-5.5 3.6-9.1zM912 303.8c0 18.7-6.6 34.5-19.5 47.5l-87.6 87.6-219.7-219.6 87.6-87.2c12.7-13.3 28.5-20.1 47.5-20.1 18.7 0 34.6 6.7 48.1 20.1l124 123.6c13 13.8 19.6 29.8 19.6 48.1z" p-id="2479" fill="#8a8a8a"></path></svg>
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
      email_password: '',
    };
  },
  methods: {
    emailLogin_step_1() {
      this.login = false;
      this.email_step_1 = true;
    },
    emailLogin_step_2() {
      this.email_step_1 = false
      this.email_step_2 = true
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
  height: 380px;
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
</style>