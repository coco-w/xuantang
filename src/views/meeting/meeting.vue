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
    <el-container>
      <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :default-openeds="openArr"
          >
          <template v-for="(item,index) in siderbarList" > 
            <el-menu-item  v-if='item.child === undefined' :key="index"  :index="String(index)">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu v-else :index="String(index)" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group class="group" v-for="(temp, key) in item.child" :key='key'>
                <el-menu-item :index='merge(index,key)'>{{temp.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          </el-menu>
      </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
    </el-container>
  </el-container>
</template>
<script>
import{ siderbarList } from '@/const/siderbar.js'
export default {
  name: "",
  data() {
    return {
      switchValue: true,
      siderbarList,
    };
  },
  computed: {
    openArr() {
      return ['1','2','3','4','5','6','7']
    }
  },
  methods: {
    merge(num1,num2) {
      return `${num1}_${num2}`
    }
  }
};
</script>
<style lang="less" scoped>
.app {

}
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
.el-container{
  height: 100%;
  background: #E0E0E0;
  .el-container {
    height: 100%;
    width: 1200px;
    margin: auto;
    padding-top: 10px;
    .el-main {
      padding: 0;
      margin-left: 25px;
    }
  }
}
/deep/.el-menu-vertical-demo.el-menu {
  padding: 20px 0;
   /deep/.el-menu-item-group__title {
  padding: 0;
  }
  /deep/.el-menu-item,/deep/.el-submenu__title  {
    height: 40px;
    line-height: 40px;
  }
}

</style>