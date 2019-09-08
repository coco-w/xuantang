<template> 
  <div>
    <div class="regist-head">
      <div class="regist-card">
        <div class="regist-left">
          <div :class="registStatus">
            报名通道已开启
          </div>
          <div class="deadline-text">
            距离报名截止
          </div>
          <div class="time">
            115天 13时 42分 58秒
          </div>
        </div>
        <div class="regist-right">
          <el-button @click="handleSwitchRegist">
            <span v-show="regist">关闭报名通道</span>
            <span v-show="!regist">开启报名通道</span>
          </el-button>
          <el-button>修改报名设置</el-button>
        </div>
      </div>
    </div>
    <div class="regist-body">
      <div class="top-topic">
        <div class="topic-text">
          分享传播
        </div>
      </div>
      <div class="mobile">
        <div class="title">
          移动端传播：微信扫描下方二维码后，转发朋友圈和微信群
        </div>
        <div class="QRcode-box">
          <div class="number-text">
            <div class="steps-num">1</div>
            打开
            <span>微信</span>
            扫描二维码
          </div>
          <div class="QRcode">     
          </div>
        </div>
        <div class="share">
          <div class="number-text">
            <div class="steps-num">2</div>
              点击手机右上方按钮，选择“<span>发送给朋友</span>”分享出去
          </div>
          <div class="phone">
            <div class="img-box">
              <img src="../../../assets/phone.png" alt="">
              <div class="text-box">
              <p class="wechatbar-title">互动学堂</p>    
              <div class="wechatCon">
                <p class="wechatCon-title">中部三省系统工程学会2018学术研讨会通知</p>
                <p class="wechatCon-time">2018年11月10日 - 11日</p>
                <p class="wechatCon-address">长沙步步高福朋喜来登酒店（湖南省长沙市岳麓区枫林三路1099号A区）</p>
            </div>
            
            </div>
            <img class="more" src="../../../assets/more.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="pc">
        <div class="title">
          PC端传播：通过邮件、网站、微信等方式公布以下网址链接
        </div>
        <div class="number-text">
          <div class="steps-num">1</div>
          复制或直接打开以下链接
        </div>
        <el-input v-model="website" :disabled="true">
          <template slot="append">
            <div style="display: inline-block;margin-right:25px;cursor: pointer;   user-select:none;" @click="copy">复制链接</div>
          </template>
          <template slot="append">
            <div style="display: inline-block;cursor: pointer;   user-select:none;" @click="openWeb">直接打开</div>
          </template>
        </el-input>
        <el-input v-model="website" style="opacity: 0;position: absolute;" id="input"></el-input>
        <div class="number-text">
          <div class="steps-num">2</div>
          通过官网、邮件、微信等方式传播
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { countDown } from '@/lib/tools'
export default {
  name: 'invitation',
  data() {
    return {
      regist: true,
      website: 'http://cn.hudongxuetang.com/m/ZJAVV'
    }
  },
  computed: {
    registStatus() {
      return this.regist ? `regist-status open` : `regist-status close`
    }
  },
  methods: {
    handleSwitchRegist() {
      let str = this.regist ? '是否要关闭报名通道？' : '是否要开启报名通道'
      let msg = this.regist ? '关闭成功' : '开启成功'
      this.$confirm(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.regist = !this.regist
          this.$message({
            type: 'success',
            message: msg
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    copy() {
      document.querySelector('#input').select()
      document.execCommand('copy')
      this.$message({
        message: '复制成功',
        type: 'success'
      });
    },
    openWeb() {
      window.open(this.website, '_blank');
    }
  }
}
</script>
<style lang="less" scoped>
.deadline-text {
  color: #999;
  font-size: 14px;
  margin-bottom: 2px;      
}
.regist-head {
  background: #fff;
  padding: 60px;
  overflow: hidden;
  margin-bottom: 10px;
  .regist-left {
    float: left;
    .regist-status {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .open {
      color: #409EFF
    }
    .close {
      color: #F56C6C,
    }
    .time {
      font-size: 13px;
    }
  }
  .regist-right {
    float: right;
  }
}
.regist-body {
  background: #fff;
  padding: 60px;
  position: relative;
  .top-topic{
    position: absolute;
    top: 0;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 22px;
  }
  .number-text {
    .steps-num {
      display: inline-block;
      background: #65B76F;
      border-radius: 50%;
      color:#fff;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
    }
    span {
      color: #65B76F;
    }
  }
  .mobile {
    width: 100%;
    height: 300px;
    
    .QRcode-box {
      width: 180px;
      float: left;
      margin-right: 150px;
      .QRcode {
        width: 150px;
        height: 150px;
        border: 1px solid #ccc;
        margin: 30px auto 0;
        text-align: center;
      }
    }
    .share {
      display: inline-block;
      height: 194px;
      overflow: hidden;
      .phone {
        width: 200px;
        height: 500px;
        padding-top: 40px;
        box-shadow: 0px 0px 0px 2px #aaa;
        border-radius: 30px;
        margin: auto;
        margin-top: 30px;
        
      }
      .img-box {
        width: 160px;
        height: 100px;
        margin: 0 auto;
        box-shadow: 0px 0px 0px 2px #aaa;
        border-bottom: none;
        position: relative;
        img {
          display: inherit;
          width: 160px;
          height: 100px;
        }
        .more {
          position: absolute;
          top: -15px;
          width: 40px;
          height: 40px;
          right: -15px;
        }
        .text-box {
          position: absolute;
          top: 0px;
          color: #fff;
          font-size: 12px;
          .wechatbar-title {
            position: relative;
            top: 10px;
            color: #333;
            text-align: center;
            
          }
          .wechatCon {
            position: relative;
            top: 10px;
            font-size: 8px;
            /* left: 0; */
            width: 130%;
            transform: scale(0.7);
            margin-left: -27px;
          }
          .wechatCon-title {
            font-size: 15px;    
          }
        }
      }
      
      
    }
  }
  .pc {
    .number-text {
      margin: 15px 0;
    }
  }
}
</style>