<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :md="{span: 20,offset: 2}" :xs="24">
          <div class="header-main">
            <div class="left">
              <img
                src="http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/logo-owl-green.png"
                alt="这是logo"
              />
            </div>
            <div class="center hidden-md-and-down">
              <ul>
                <li>首页</li>
                <li>客户案例</li>
                <li>精选会议</li>
                <li>业务介绍</li>
                <li>关于我们</li>
              </ul>
            </div>
            <div class="right">
              <router-link to='/userlogin'><el-button type="success" plain >个人登录</el-button></router-link>
              <router-link to='/adminlogin' style="margin-left: 10px"><el-button type="success" plain>会议管理登录</el-button></router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <el-row class="footer">
        <el-col :md="{span:20,offset:2}" :xs="24">
          <el-col :md="{span: 10}" :xs="24">
            <el-row>
              <el-col :span="24">
                <ul class="introduction-list">
              <li class="special">互动学堂</li>
              <li>
                <span>关于我们 |</span>            
              </li>
              <li>
                <span>精选会议 |</span>
              </li>
              <li>
                <span>登录/注册 |</span>
              </li>
              <li>
                <span>业务介绍 |</span>
              </li>
              <li>
                <span>联系我们 |</span>
              </li>
              <li>
                <span>隐私条款</span>
              </li>
            </ul>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <ul class="introduction-friends">
              								<li>友情链接</li>
								<li><a target="_blank" href="//www.moe.gov.cn/">教育部 | </a></li>
								<li><a target="_blank" href="//www.nsfc.gov.cn/">国家自然科学基金委 | </a></li>
								<li><a target="_blank" href="//www.npopss-cn.gov.cn/">全国哲学社会科学工作办公室</a></li>
								<li><a target="_blank" href="//www.ncpssd.org/">国家哲学社会科学文献中心 | </a></li>
								<li><a target="_blank" href="//mylib.nlc.cn/web/guest">国家数字图书馆 | </a></li>
								<li><a target="_blank" href="//www.sysu.edu.cn/">中山大学</a></li>

            </ul>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="{span: 8}" :xs="24">
            <ul class="contact-us-list">
							<li class="contact-us-items">联系我们</li>
							<li class="contact-us-items">客服热线：020-84387803</li>
							<li class="contact-us-items">微信客服：hdxt006</li>
							<li class="contact-us-items">QQ客服：691796501</li>
							<li class="contact-us-items">邮箱：service@hudongxuetang.com</li>
							<li class="contact-us-items">商务合作联系：13602420345</li>
						</ul>

          </el-col>
          <el-col :md="{span: 6}" :xs="24">
            <div class="QR-code"> 
							<p>关注我们获取更多资讯</p>
							<img class="erweima-light" src="http://static.hudongxuetang.com/hdxt/webphotos/pc/erweima.jpg" alt="">
						</div>

          </el-col>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {

    }
  }
};
</script>
<style lang="less" scoped>
.el-main {
  padding: 0px;
}
.header-main {
  position: relative;
  .left {
    float: left;
    line-height: 60px;
    img {
      width: 120px;
      vertical-align: middle;
    }
  }
  .right {
    float: right;
    line-height: 60px;
  }
  .center {
    position: absolute;
    top: 0;
    left: 30%;
    line-height: 60px;

    ul {
      li {
        cursor: pointer;
        font-size: 18px;
        float: left;
        margin-right: 1px;
        padding: 0 20px;
        color: inherit;
        text-decoration: none;
        transition: all 0.5s;
        &:hover {
          color: #31C27C;
        }
      }
      
    }
  }
}

.content {
  background: bisque;
  height: 550px;
}
.el-footer {
  padding: 50px 0 0 0;
  background-color: #f5f5f5;
}
.footer {
  background-color: #f5f5f5;
  height: 380px;
  color: #333;
  min-width: 1200px; 
  .introduction-list {
    
    li {
      color: rgba(51, 51, 51, 0.7);
      float: left;
      span {
        font-size: 14px;
        cursor: pointer;
      }
      span:hover {
        color: #333;
      }
    }
    li:nth-of-type(1){
      float: none;
      font-size: 20px;
      margin-bottom: 15px;
      color: #333;
    }
    
  }
  .introduction-friends {
    width: 378px;
    margin-top: 50px;
    li {
      display: inline-block;
      a {
        transition: all 0.5s;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.7);
        text-decoration: none;
      }
    }  
    li:nth-of-type(1){
      display: block;
      font-size: 20px;
      margin-bottom: 15px;
      color: #333;
      
    }
  }
  .contact-us-list {
    .contact-us-items {
      font-size: 14px;
      margin-bottom: 10px;
      transition: all 0.5s;
    }
    .contact-us-items:nth-of-type(1) {
      font-size: 20px;
      margin-bottom: 15px;
      color: #333;
    } 
  }
  .QR-code {
    text-align: center;
    font-size: 20px;
    img {
      width: 150px;
      height: 150px;
      margin-top: 15px;
    }
  }
}
</style>