<template>
  <el-container>
    <el-header>
      <div class="back">
        <svg
          t="1566907818620"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2677"
          width="200"
          height="200"
        >
          <path
            d="M861.9 481.6v60.9c0 16.8-5.2 31.1-15.5 43s-23.7 17.8-40.2 17.8H471.6l139.3 139.8c12 11.4 18.1 25.7 18.1 42.8s-6 31.4-18.1 42.8l-35.7 36.2c-11.7 11.7-26 17.6-42.8 17.6-16.5 0-30.9-5.9-43.3-17.6l-309.5-310c-11.7-11.7-17.6-26-17.6-42.8 0-16.5 5.9-30.9 17.6-43.3l309.5-309.1c12-12 26.5-18.1 43.3-18.1 16.5 0 30.7 6 42.8 18.1l35.7 35.2c12 12.1 18.1 26.5 18.1 43.3 0 16.8-6 31.2-18.1 43.3L471.6 420.8h334.7c16.5 0 29.9 5.9 40.2 17.8 10.3 11.9 15.4 26.2 15.4 43z"
            p-id="2678"
            fill="#1AAD19"
          />
        </svg>
      </div>
      <div class="header-mian">
        <div class="logo">
          <img
            src="http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/hdxt_logo.png"
            alt
          />
          <span class="tip">专业版</span>
        </div>
        <div class="header-container">
          <div class="header-title">
            <div class="title">中部三省系统工程学会2018学术研讨会通知</div>
            <div class="other">
              <span class="webside">http://cn.hudongxuetang.com/m/ZJAVV</span>
              <span class="copy">复制链接</span>
              <span class="mobile">移动端邀请</span>
              <div class="tips"></div>
            </div>
          </div>
          <div class="right">
            <span>是否允许搜索到此次会议活动</span>
            <el-switch v-model="switchValue"></el-switch>
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="container">
        <div class="sider">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      switchValue: true
    };
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background: #fff;
  border-bottom: 5px solid #1aad19;
  position: relative;
  height: 70px !important;
  .back {
    position: absolute;
    top: 15px;
    left: 90px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .header-mian {
    width: 1200px;
    margin: 0 auto;
    .logo {
      display: inline-block;
      position: relative;
      width: 200px;
      height: 50px;
      bottom: 10px;
      cursor: pointer;
      border-right: 1.5px solid #ccc;
      img {
        margin-top: 8px;
        vertical-align: -10px;
      }
      .tip {
        margin-left: 15px;
        padding: 4px;
        background-color: #41b01b;
        color: #fff;
        border-radius: 15px;
        font-size: 14px;
      }
    }
    .header-container {
      display: inline-block;
      width: 930px;
      height: 65px;
      margin-left: 30px;
      .header-title {
        .title {
          font-size: 20px;
          font-weight: bold;
          line-height: 1.2;
          color: #333;
          padding-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 980px;
        }
        .other {
          span {
            color: #1aad19;
            margin-left: 10px;
            cursor: pointer;
          }
          .webside {
            color: #ccc;
            margin: 0;
          }
          .webside:hover {
            color: #1aad19;
          }
        }
      }
      .right {
        position: absolute;
        bottom: 0;
        right: 262px;
        span {
          margin-right: 5px;
          color: #555;
        }
      }
    }
  }
  
}
.container {
    width: 1200px;
    margin: auto;
    .sider {
      width: 200px;
    }
  }
</style>