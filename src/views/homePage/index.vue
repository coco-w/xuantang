<template>
  <div style="background: #E7E8EB">
    <div class="header">
      <div class="fixed-nav-wapper">
        <div class="fixed-nav">
          <div class="left">
            <span>hi, 啧啧啧 欢迎参会</span>
          </div>
          <div class="right">
            <ul>
              <li>
                <el-tooltip class="item" effect="dark" placement="bottom">
                  <span class="tip">手机端</span>
                  <div slot="content" class="tipQRcode">
                    <div class="QRcode"></div>
                    <div class="QRcode-text">微信扫码访问手机版</div>
                  </div>
                </el-tooltip>
              </li>
              <li>我要参加的会议</li>
              <li>我要筹备的会议</li>
              <li>退出</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-nav" v-if='show'>
        <el-menu class="el-menu-demo" mode="horizontal" :router='true' :default-active="nowRouter">
          <template v-for="(item, index) in userMenu">
            <el-menu-item :ref="item.title" :key="index" :index="String(index)" :route="{path: item.link}">{{item.title}}</el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
    <div class="container-wapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import { userMenu } from "@/const/userMenu.js";

export default {
  name: "userHomeIndex",
   provide() {
    return{
      index: this
    }
  },
  data() {
    return {
      userMenu,
      nowRouter: '0',
      show: true
    };
  },
  watch: {
    nowRouter() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  mounted() {
    this.userMenu.forEach((ele,index) => {
      if (this.$route.path === ele.link) {
        this.nowRouter = `${index}`
      }
    })
  },
  beforeRouteLeave(to,from,next) {
    this.userMenu.forEach((ele,index) => {
      if (to.path === ele.link) {
        this.nowRouter = `${index}`
      }
    })
  }
};
</script>

<style lang="less" scoped>
.header {
  background: #fff;
  box-shadow: 0 1px 2px rgba(150, 150, 150, 0.3);
  .fixed-nav-wapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #666;
    z-index: 1000;
    .fixed-nav {
      color: #ffffff;
      font-size: 13px;
      height: 30px;
      line-height: 30px;
      width: 980px;
      margin: 0 auto;
      .right {
        float: right;
        ul {
          li {
            float: left;
            padding-left: 25px;
            padding-right: 25px;
            color: #fff;
            .tip {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
      .left {
        float: left;
        span {
          color: #fff;
        }
      }
    }
  }
  .header-nav {
    width: 980px;
    height: 100%;
    margin: 30px auto 0;
    text-align: center;

    .el-menu-demo {
      width: 45%;
      margin: 0 auto;
      border: none;
    }
  }
}
.container-wapper {
  min-height: 400px;
  padding-bottom: 10px;
  .container {
    width: 980px;
    margin: 10px auto;
    
  }
}
.footer {
    width: 100%;
    height: 100px;
    background-color: #666;
    overflow: hidden;
    font-size: 14px;
}
.tipQRcode {
  width: 120px;
  height: 120px;
  text-align: center;
  .QRcode {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    background: #fff;
  }
  .QRcode-text {
    color: #1aad19;
  }
}
</style>