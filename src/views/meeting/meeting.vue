<template>
  <el-container>
    <el-header>
    
      <div class="header-mian">
        <router-link :to="{name: 'home'}" class="logo">
          <img
            src="http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/hdxt_logo.png"
            alt
          />
          <span class="tip">专业版</span>
        </router-link>
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
            :router='true'
            :default-openeds="openArr"
          >
          <template v-for="(item,index) in siderbarList" > 
            <el-menu-item :route="{name: item.link}"  v-if='item.child === undefined' :key="index"  :index="String(index)">
              <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
              </svg>
              <span  slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu v-else :index="String(index)" :key="index">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.icon"></use>
                </svg>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group class="group" v-for="(temp, key) in item.child" :key='key'>
                <el-menu-item :route="{name: temp.link}" :index='merge(index,key)'>
                  <span>{{temp.title}}</span>
                </el-menu-item>
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
.icon {
  width: 2em;
  height: 1.5em;
}
</style>