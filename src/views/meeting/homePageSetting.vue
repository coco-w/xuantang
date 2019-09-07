<template>
  <div class="homePageSetting_index">
    <div class="ob1"></div>
    <div class="hp_card hp_head">
      <div class="hp_head_main">
        <span>邀请函设置</span>
        <div class="hp_head_btn">
          <el-button>
            手机预览
          </el-button>
          <el-button type="">PC预览</el-button>
        </div>
      </div>
    </div>
    <div class="hp_card hp_basic">
      <div class="top-topic">
        <span class="topic-text">基本信息</span>
      </div>
      <div class="hp_basic_top">
        <el-button type="" class="basic_upd_btn">修改</el-button>
      </div>
      <div class="hp_basic_main">
        <div class="hp_logo_box">
          <div class="hp_logo_container">
            <div class="hp_logo_empty" >暂无LOGO</div>
            <img :src="Invitation.img" alt="这是logo" class="hp_logo_pic">  
          </div>
          <p>LOGO</p>
        </div>
        <div class="hp_info_box">
          <el-row>
            <div class="info_tit">名称: &nbsp</div>
            <div class="info_con" v-show="Invitation.title">{{Invitation.title}}</div>
          </el-row>
          <el-row>
            <div class="info_tit">时间: &nbsp</div>
            <div class="info_con" v-show="Invitation.time">{{Invitation.time}}</div>
          </el-row>
          <el-row>
            <div class="info_tit">地点: &nbsp</div>
            <div class="info_con" v-show="Invitation.address">{{Invitation.address}}</div>
          </el-row>
        </div>
      </div>
      
    </div>
    <div class="hp_card hp_poster">
        <div class="top-topic">
          <div class="topic-text">
            邀请函图片
          </div>
        </div>
        <div class="poster_row">
          <div class="poster_left">
            <div class="poster_img">
              <div class="poster_text" v-show='value'>
                <div class="poster_scale">
                  <div class="poster_title">
                    {{Invitation.title}}
                  </div>
                  <div class="poster_time">
                    {{Invitation.time}}
                  </div>
                  <div class="poster_location">
                    {{Invitation.address}}
                  </div>
                </div>  
              </div>
              <img src="http://static.hudongxuetang.com/hdxt%2Fmeeting-poster%2Ff240f4fa-331d-4679-b8e7-7da44ecaf473%2Fded76e80-2180-47ca-8f95-c320f2474210" alt="">
            </div>
            <div class="poster_set_box">
              <div class="set_poster">
                <span>是否显示会议信息在海报上</span>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </div>
            </div>
          </div>
          <div class="poster_main">
            <p>关于邀请函图片：</p>
            <p>左侧为官网主页封面海报效果预览</p>
            <p>您也可以点击【更换默认图片】或【上传自定义图片】进行更换。</p>
            <p>建议上传比例为16:9~4:1之间的.png、.jpg、.gif图片，小于5M。</p>
            <div class="poster_btns">
              <el-button>更换默认图片</el-button>
              <el-button>上传自定义图片</el-button>
            </div>
          </div>
        </div>
    </div>
    <div class="hp_card hp_home">
      <div class="hp_home_head">
        <div class="top-topic">
          <div class="topic-text">
            邀请函内容设置
          </div>
        </div>
        <el-button class="hp_btn" @click="handleMoveModel">调整模块顺序</el-button>
        <div class="menu_btn">
          <el-button class="hp_btn2" @click="handleAdd">添加模块</el-button>
          <div class="menu_dropdown_btn">
            <span class="menu_dropdown_sp" @click="handleShowLayer">
              <i class="el-icon-caret-bottom"></i>
            </span>
          </div>
          <div class="home_set_layer" v-show="layerShow">
            <div class="hs_title">
              官网主页内容布局设置
            </div>
            <div class="hs_row">
              <span>显示侧边导航</span>
              <el-switch
                style="float: right"
                v-model="navShow"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </div>
          </div>
        </div>
      </div>
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
          <div class="content-wrapper" :style="{marginLeft : navShow ? '242px' : '0px'}">
            <div class="content-item" v-for="(item,index) in Invitation.data" :key="index" :id="index" v-if="refresh">
              <div :class='contentOB(index)'></div>
              <div class="title">
                <span class="sort">{{item.sort}}</span>
                <div class="operation">
                  <div class="operation-item" @click="openDialog(index)">
                    <i class="el-icon-edit"></i>
                  </div>
                  <div class="operation-item" @click="deleteData(index)">
                    <i class="el-icon-delete-solid"></i>
                  </div>
                </div>
              </div>
              <div class="content">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogEditor" custom-class='hp_diaglog' show-close :close-on-click-modal='lock'>
      <div class="dialog_title">标题</div>
      <el-input v-if="Invitation.data" v-model="inputValue" placeholder=""></el-input>
      <div class="dialog_title">正文</div>
      <Editor v-if="dialogEditor" :content='editorContent' @change="contentChange" @close='handleClose'></Editor>
    </el-dialog>
    <el-dialog :visible.sync="dialogModel"  title="按住鼠标左键拖动，可以调整模块在官网主页显示的顺序" custom-class='move_diaglog' show-close :close-on-click-modal='lock'>
      <div class="modal">
         <!-- <div
          class="model-item"
          v-for="(model, index) in moveArr" v-dragging="{ item: model, list: moveArr, group: 'color' }"
          :key="index"
        >
          {{model.sort}}
        </div> -->
        <draggable v-model="moveArr" v-if="dialogModel">
          <div
          class="model-item"
          v-for="(model, index) in moveArr"
          :key="index"
        >
          {{model.sort}}
        </div>
        </draggable>
      </div>
      <div class="dialog_btns">
          <el-button @click="handleClose">取消</el-button>
          <el-button @click="handleMove">确认</el-button>
        </div>
    </el-dialog>
    
  </div>
</template>
<script>
//编辑器
import Editor from '@/components/editor'
//滚动动画插件
import { scrollTo } from 'scroll-ease-efficient'
import draggable from 'vuedraggable'
import { getInvitationContent } from '@/api/homePageSetting'
import { debuglog } from 'util';
import { setTimeout } from 'timers';
export default {
  name: 'homePageSetting',
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
    Editor,
    draggable,
  },
  created() {
  },
  mounted() {
    getInvitationContent('1231').then(res => {
      this.Invitation = res
      if (this.Invitation.img !== '') {
        document.querySelector('.hp_logo_empty').setAttribute('style','display:none')
        document.querySelector('.hp_logo_pic').setAttribute('style','display:block')
      }
      this.setMoveArr()
    })
    let head = document.querySelector('.hp_head');
    let reference = document.querySelector(".ob1");
    new IntersectionObserver(entries => {
      let item = entries[0];
      let top = item.boundingClientRect.top;
      // 当参照元素的的top值小于0，也就是在视窗的顶部的时候，开始吸顶，否则移除吸顶
      if (top < 0) head.classList.add("hp_fiexd");
      else head.classList.remove("hp_fiexd");
    }).observe(reference);
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
    setMoveArr() {
      this.moveArr = []
       this.Invitation.data.forEach((ele, index) => {
        let obj = {}
        obj.sort = ele.sort
        obj.index = index
        ele.index = index
        this.moveArr.push(obj)
      })
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
    openDialog(index) {
      console.log(index)
      this.editorContent = this.Invitation.data[index].content
      this.inputValue = this.Invitation.data[index].sort
      this.activeIndex = index
      this.dialogEditor = true
    },
    //改
    contentChange(val) {
      if (this.inputValue === '') {
        this.$message.error('标题不能为空') 
        return
      }
      this.Invitation.data[this.activeIndex].content = val
      this.Invitation.data[this.activeIndex].sort = this.inputValue
      this.refreshContent(this.activeIndex)
      this.setMoveArr()
      this.dialogEditor = false
      this.obServeLock = true
    },
    handleClose() {
      this.dialogEditor = false
      this.dialogModel = false
    },
    //删
    deleteData(index) {
      this.$confirm('此操作将永久删除此模块, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.Invitation.data.splice(index,1)
          this.setMoveArr()
          this.initLock = true
          this.refreshContent()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //增
    handleAdd() {
      this.Invitation.data.push({})
      this.activeIndex = this.Invitation.data.length - 1
      this.editorContent = ''
      this.inputValue = ''
      this.dialogEditor = true
       this.initLock = true
      this.refreshContent()
      this.setMoveArr()
    },
    hanleAnchor(index) {
      let dom = document.querySelectorAll('.nav>li') 
      for (let i = 0; i < dom.length; i++) {
        index === i ? dom[i].className = 'active' : dom[i].className = ''
      }
      this.scrollTo(document.documentElement, document.getElementById(`${index}`).offsetTop , { duration: 500})
      this.scrollLock = false 
      setTimeout(() => {
        this.scrollLock = true
      },1200)
    },
    contentOB(index) {
      return `content${index}`
    },
    handleMoveModel() {
      this.dialogModel = true
    },
    handleMove() {
      console.log('12312')
      let temp = []
      for (let i = 0; i < this.moveArr.length; i++) {
        const ele = this.moveArr[i]
        const n = ele.index
        ele.index = i
        let a = this.Invitation.data.slice(n,n+1)[0]
        temp.push(a)
      }
      this.Invitation.data = temp
      this.dialogModel = false
      this.initLock = true
      this.refreshContent()
    }
  }
}
</script>
<style lang="less" scoped>
  .homePageSetting_index {
    position: relative;
    .hp_card {
      padding: 0 30px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      background-color: #fff;
      margin-bottom: 10px;
    }
    .hp_fiexd {
      width: 980px;
      position: fixed;
      top: 0;
      z-index: 999;
    }
    .hp_head {
      padding: 0;
      .hp_head_main {
        padding: 0 30px;
        height: 60px;
        box-sizing: border-box;
        line-height: 60px;
        font-size: 18px;
        position: relative;
        .hp_head_btn {
          position: absolute;
          top: -1px;
          right: 30px;
        }
      }
    }
    .hp_basic {
      padding-bottom: 40px;
      .hp_basic_top {
        position: relative;
        margin: 20px 0 30px 0;
        border-bottom: 1px solid #ccc;
        .basic_upd_btn {
          position: absolute;
          right: 0;
          top: -40px;
        }
      }
      .hp_basic_main {
        position: relative;
        .hp_logo_box {
          width: 100px;
          height: 150px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 10px;
          .hp_logo_container {
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
            .hp_logo_empty {
              width: 100%;
              height: 100%;
              line-height: 100px;
              font-size: 14px;
              border-radius: 50%;
              border: 2px dashed #ccc;
              background-color: #F5F5F9;
              color: #999;
            }
            .hp_logo_pic {
              display: none;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          p {
            smargin: 0 0 10px;
          }
         
        }
        .hp_info_box {
          padding-left: 150px;
          box-sizing: border-box;
          .el-row {
            margin-bottom: 20px;
            &>div {
            display: table-cell;
            }
            .info_tit {
              white-space: nowrap;
              color: #999;
            }
            .info_lang_tip {
              display: inline-block;
              margin-left: 20px;
              color: #999;
            }
          }
          
        }
      }
    }
    
    .hp_poster {
      padding-bottom: 60px;
      .poster_row {
        margin-top: 20px;
        position: relative;
        .poster_left{
          display: inline-block;
          width: 320px;
          text-align: center;
          .poster_img {
            width: 100%;
            height: 166.5px;
            position: relative;
            .poster_text {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #FFFFFF;
              line-height: 18px;
              text-align: center;
              font-size: 18px;
              padding: 30px;
              box-sizing: border-box;
              display: flex;
              display: -webkit-flex;
              flex-direction: column;
              -webkit-flex-direction: column;
              align-items: center;
              -webkit-align-items: center;
              justify-content: center;
              -webkit-justify-content: center;
              .poster_scale {
                width: 100%;
                font-size: 5px;
                display: inline-block;
                .poster_title {        
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                }
                .poster_location {
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
              }
             
            }
            img {
              height: 100%;
              width: 100%;
              vertical-align: middle;
            }
          }
          .poster_set_box {
            margin-top: 20px;
            color: #000;
            .set_poster {
              span {
                margin-right: 10px;
              }
            }
          }
        }
        .poster_main {
          width: 570px;
          float: right;
          .poster_btns {
            margin-top: 30px;
          }
        }
      }
    }
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
            top: 70px;
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