<template>
  <div class="homePageSetting_index">
    <div class="hp_card hp_home">
      <div class="hp_home_maim">
        <div class="ob2"></div>
        <div class="mian_box">
          <div class="nav-wrapper" v-show="navShow">
            <ul class="nav">
              <li v-for="(item,index) in Invitation.data" :key="index" @click="hanleAnchor(index)">
                <span>{{item.sort}}</span>
              </li>
            </ul>
          </div>
          <div class="content-wrapper" :style="{marginLeft : navShow ? '242px' : '0px'}"  v-if="refresh">
            <div class="content-item" v-for="(item,index) in Invitation.data" :key="index" :id="index">
              <div :class='contentOB(index)'></div>
              <div class="title">
                <span class="sort">{{item.sort}}</span>
              </div>
              <div class="content">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//编辑器
//滚动动画插件
import { scrollTo } from 'scroll-ease-efficient'
import draggable from 'vuedraggable'
import { getInvitationContent } from '@/api/homePageSetting'
import { debuglog } from 'util';
export default {
  name: 'homePageSetting',
  props: {
    type: {
      type: String,
      default: 'read',
    }
  },
  data() {
    return {
      value: true,
      navShow: true,
      inputValue: '',
      layerShow: false,
      dialogEditor: false,
      editorContent: '',
      lock:false,
      activeIndex: 0,
      initLock: true,
      Invitation: {
        img: '',
      },
      scrollTo,
      scrollLock: true,
      obServeLock: true,
      dialogModel: false,
      moveArr: [],
      refresh: true,
    }
  },
  components: {
   
    draggable,
  },
  created() {
  },
  mounted() {
    getInvitationContent('1231').then(res => {
      this.Invitation = res
      
    })
    let nav = document.querySelector('.nav-wrapper');
    let reference2 = document.querySelector(".ob2");
    new IntersectionObserver(entries => {
      let item = entries[0];
      let top = item.boundingClientRect.top;
      // 当参照元素的的top值小于0，也就是在视窗的顶部的时候，开始吸顶，否则移除吸顶
      if (top < 0) nav.classList.add("nav_fiexd");
      else nav.classList.remove("nav_fiexd");
    }).observe(reference2);   
  },
  updated() {
    if (this.initLock) {
      this.refreshContent()
    }
    if (this.obServeLock) {
      this.obServeLock = false
      const images = document.querySelectorAll('.content-item')
      let dom = document.querySelectorAll('.nav>li') 
      const config = {
        rootMargin: '0px',
        threshold: 0
      }
      let observer = new IntersectionObserver((entries, self)=>{
        let item = entries[0];
        console.log(item)
        if (item.isIntersecting && this.scrollLock) {
          let id = item.target.id 
          for (let i = 0; i < dom.length; i++) {
            id == i ? dom[i].className = 'active' : dom[i].className = ''
          }
        }
      }, config)
      images.forEach(image => {
        observer.observe(image);
      });
    }
  },
  methods: {
    handleShowLayer() {
      this.layerShow = !this.layerShow
    },
  
    refreshContent(index) {
      let dom = document.querySelectorAll('.content')
      if (this.initLock) {
        console.log('init')
        this.initLock = false
        this.$nextTick(() => {
          console.log(dom)
          for (let i = 0; i < dom.length; i++) {
            dom[i].innerHTML = this.Invitation.data[i].content
          }
        })
      }
      if (index !== undefined) {
        console.log('refresh')
        dom[index].innerHTML = this.Invitation.data[index].content
      }
    },
    hanleAnchor(index) {
      let dom = document.querySelectorAll('.nav>li') 
      for (let i = 0; i < dom.length; i++) {
        index === i ? dom[i].className = 'active' : dom[i].className = ''
      }
      this.scrollTo(document.documentElement, document.getElementsByClassName('homePageSetting_index')[0].offsetTop +  document.getElementById(`${index}`).offsetTop, { duration: 500})
      this.scrollLock = false 
      setTimeout(() => {
        this.scrollLock = true
      },1200)
    },
    contentOB(index) {
      return `content${index}`
    }
  }
}
</script>
<style lang="less" scoped>
  .homePageSetting_index {
    position: relative;

    .hp_home {
      padding: 0;
      border: 0;
      background-color: #E0E0E0;
      .hp_home_head {
        background-color: #fff;
        height: 70px;
        box-sizing: border-box;
        padding: 0 30px;
        border: 1px solid #ccc;
        position: relative;
        .hp_btn {
          position: absolute;
          top: 25px;
          right: 170px;
        }
        .menu_btn {
          width: 130px;
          position: absolute;
          top: 25px;
          right: 30px;
          border: 1px solid #DCDFE6;
          border-radius: 4px;
          .hp_btn2 {
            border: none;
            &:hover {
              background: #fff;
            }
          }
          .menu_dropdown_btn {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            right: 0;
            text-align: center;
            .menu_dropdown_sp {
              display: inline-block;
              width: 100%;
              height: 100%;
              padding-top: 3px;
              box-sizing: border-box;
              position: relative;
              cursor: pointer;
              &::before {
                content: '';
                display: inline-block;
                width: 1px;
                height: 12px;
                background-color: #ccc;
                position: absolute;
                top: 9px;
                left: -2px;
              }
              i {
                line-height: 30px;
                font-size: 25px;
              }
            }
          }
          .home_set_layer {
            position: absolute;
            display: block;
            min-width: 160px;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.15);
            border-radius: 4px;
            box-shadow: 0 6px 12px rgba(0,0,0,.175);
            padding: 30px;
            width: 300px;
            height: 130px;
            top: 42px;
            right: -2px;
            left: inherit;
            color: #333;
            box-sizing: border-box;
            font-size: 16px;
            cursor: default;
            z-index: 996;
            .hs_row{
              margin-top: 25px;
              color: #666;
            }
          }
        }
      }
      .hp_home_maim {
        display: block;
        padding-top: 0px;
        background-color: #E0E0E0;
        .mian_box {
          width: 100%;
          margin: 10px auto 0;
          .nav-wrapper {
            width: 190px;
            float: left;
            margin-right: 10px;
            background: #fff;
            border: 1px solid #ccc;
            padding: 20px;
            position: relative;
            z-index: 9;
            .nav {
              height: 100%;
              overflow: auto;          
              li {
                padding: 10px 0 9px 15px;
                position: relative;
                word-break: break-word;
                font-size: 16px;
                color: #333;
                cursor: pointer;
                margin-top: 1px;
                &::before {
                  content: '';
                  background:#ccc;
                  width: 10px;
                  height: 10px;
                  border: 1px solid #ccc;
                  border-radius: 50%;
                  position: absolute;
                  top: 17px;
                  left: 0px;
                }
              }
              .active {
                background: rgba(64,158,255,0.2)
              }
              .active::before {
                content: '';
                background: rgba(64, 158, 255);
                width: 5px;
                height: 42px;
                border: none;
                border-radius: 0;
                position: absolute;
                top: 1px;
                left: 0px;
              }
              > :first-child::after {
                content: '';
                width: 0;
                height: 0;
              }
            }
          }
          .nav_fiexd {
            position: fixed;
            top: 0px;
            z-index: 999;
          }
          .content-wrapper {
            margin-left: 242px;
            overflow: hidden;
            transition: 0.3s all 0s ease;
            .content-item {
              min-height: 120px;
              border: 1px solid #ccc;
              padding: 30px;
              background-color: #fff;
              position: relative;
              margin-bottom: 10px;
              .title {
                height: 30px;
                line-height: 30px;
                &::before {
                  content: '';
                  background: rgba(64, 158, 255);
                  width: 5px;
                  height: 30px;
                  border: none;
                  border-radius: 0;
                  position: absolute;
                  top: 30px;
                  left: 25px; 
                }
              }
              .sort {
                font-size: 24px;
                display: inline-block;
              }
              .content {
                margin-top: 10px;
              }
              .operation {
                display: inline-block;
                float: right;
                .operation-item {
                  display: inline-block;
                  width: 30px;
                  text-align: center;
                  border: 1px solid #ccc;
                  background: #F4F5F9;
                  margin-right: 5px;
                  border-radius: 5px;
                  color: #333;
                  cursor: pointer;
                }
              }
            }
           
          }
        }
        
      }
    }
    
  }
  /deep/.el-dialog {
    .el-dialog__body {
      overflow: hidden;
    }
  }
  .model-item {
    height: 50px;
    margin-bottom: 10px;
    line-height: 50px;
    border: 1px solid #DCDFE6;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 10px;
    background: rgb(217, 236, 255);
    cursor: move;
  }
  .dialog_btns {
    float: right;
  }
</style>