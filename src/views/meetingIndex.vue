<template>
  <el-container>
    <el-header>
      <div class="navbar-left">
        <img
          src="http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/logo-owl-white.png"
          alt
        />
      </div>
      <div class="navbar-right">
        <div class="login-user-area">
          <svg
            t="1566570822899"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2040"
            width="200"
            height="200"
          >
            <path
              d="M510 64.4c-246.5 0-447.6 200-447.6 447.6 0 246.5 200 447.6 447.6 447.6 246.5 0 447.6-200 447.6-447.6 0-246.5-200.1-447.6-447.6-447.6z m0 831.9c-212.3 0-384.3-172-384.3-384.3s172-384.3 384.3-384.3 384.3 172 384.3 384.3-172 384.3-384.3 384.3z m229.1-181.2c-18.4-70.4-67.9-125.5-131.2-153.6 48-30.6 79.6-84.2 79.6-144.9 0-94.9-77.1-172-172-172s-172 77.1-172 172c0 61.2 31.6 114.8 79.6 144.9-63.8 27.6-113.3 83.2-131.7 153.6-4.1 16.3 5.6 33.2 21.9 37.3 2.6 0.5 5.1 1 7.7 1 13.8 0 26-9.2 29.6-23 19.4-75 87.3-127.1 164.3-127.1S660 655.4 679.4 730.4c4.1 16.3 20.9 26 37.3 21.9 16.8-4 27-20.9 22.4-37.2zM515.6 305.8c61.2 0 110.7 49.5 110.7 110.7s-49.5 110.7-110.7 110.7-110.7-49.5-110.7-110.7 49.5-110.7 110.7-110.7z"
              p-id="2041"
              fill="#ffffff"
            />
          </svg>
          <span>系统工程学会</span>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="course-header">
        <span>进行中</span>
        <span>已结束</span>
      </div>
      <div :style="{padding:'0 40px'}">
        <div class="panel panel-my panel-create panel-border-CCCCCC">
          <div class="panel-createCourse">
            <div class="text-center panel-createCourseIconContainer">
              <svg
                t="1566573498276"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="12870"
                width="200"
                height="200"
              >
                <path
                  d="M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"
                  p-id="12871"
                  fill="#008000"
                />
                <path
                  d="M69.632 79.872l0 866.304 868.352 0L937.984 79.872 69.632 79.872zM720.896 561.152 552.96 561.152l0 167.936c0 28.672-22.528 51.2-49.152 51.2-28.672 0-51.2-22.528-51.2-51.2l0-167.936L286.72 561.152c-28.672 0-51.2-22.528-51.2-51.2 0-28.672 22.528-49.152 51.2-49.152l165.888 0 0-167.936c0-28.672 22.528-51.2 51.2-51.2 26.624 0 49.152 22.528 49.152 51.2l0 167.936 167.936 0c28.672 0 51.2 20.48 51.2 49.152C770.048 540.672 747.52 561.152 720.896 561.152z"
                  p-id="12872"
                  fill="#008000"
                />
              </svg>
            </div>
          </div>
          <div class="panel-footer">
            <div class="text-center">
              <h4>筹办新的会议活动</h4>
            </div>
          </div>
        </div>
      </div>
      <div :style="{padding:'0 40px'}" @click="handleUserAnalysis">
        <div class="panel panel-my panel-create panel-border-CCCCCC">
          <div class="panel-createCourse" :style="{background: 'url(http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/courseCardBgi/bg3.jpg)'}">
            <div class="text-center">
              <div class='title'>
                <span>中部三省系统工程学会2018学术研讨会通知</span>
              </div>
              <ul class="dropdown">
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="panel-img">
                <img src="http://static.hudongxuetang.com/%2Fhdxt%2Fschool-custom-logos%2F6e5b6295-30a4-4c0d-b987-5c1731582e0e%2Fc08ead04-e942-4f28-ac6f-b0b7bead4941" alt="">
              </div>
            </div>
          </div>
          <div class="panel-footer">
            <div style="margin-top:10px">
              <div class="remind_content">
                <svg t="1566823463056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2054" width="200" height="200"><path d="M512 23.272727C332.055273 23.272727 186.181818 169.146182 186.181818 349.090909c0 143.150545 206.242909 420.608 290.536727 518.539636a46.429091 46.429091 0 0 0 70.56291 0C631.575273 769.698909 837.818182 492.241455 837.818182 349.090909c0-179.944727-145.873455-325.818182-325.818182-325.818182m0 69.818182c141.149091 0 256 114.850909 256 256 0 96.139636-143.313455 316.066909-256 452.096C399.313455 665.157818 256 445.230545 256 349.090909c0-141.149091 114.850909-256 256-256m0 93.090909a139.636364 139.636364 0 0 1 0 279.272727 139.636364 139.636364 0 0 1 0-279.272727z m0 69.818182c-38.493091 0-69.818182 31.325091-69.818182 69.818182s31.325091 69.818182 69.818182 69.818182 69.818182-31.325091 69.818182-69.818182-31.325091-69.818182-69.818182-69.818182z m0 733.090909c-151.319273 0-314.181818-40.052364-314.181818-128 0-22.900364 11.659636-55.947636 67.165091-83.339636 7.191273-3.560727 15.034182-6.981818 23.505454-10.24a34.909091 34.909091 0 0 1 25.181091 65.117091 213.783273 213.783273 0 0 0-17.757091 7.703272c-21.015273 10.379636-27.671273 19.176727-28.346182 21.410909 4.840727 14.894545 87.365818 57.530182 244.433455 57.530182 157.067636 0 239.592727-42.635636 244.433455-58.833454-0.954182-1.931636-11.147636-14.08-44.125091-27.042909a34.885818 34.885818 0 1 1 25.553454-64.954182C810.868364 797.114182 826.181818 834.653091 826.181818 861.090909c0 87.947636-162.862545 128-314.181818 128z" fill="#666666" p-id="2055"></path></svg>
                <span>长沙步步高福朋喜来登酒店（湖南省长沙市岳麓区枫林三路1099号A区）</span>
              </div>
              <div class="remind_content">
                <svg t="1566823736155" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3024" width="200" height="200"><path d="M480.435609 448.543759" p-id="3025" fill="#666666"></path><path d="M288.523741 239.458767c24.553209-0.080841 43.60717-19.664875 43.964304-45.440935 0.198521-14.196327 0.036839-28.390607 0.036839-42.580794l0.074701 0c0-0.228197 0.001023-0.456395 0.001023-0.683569 0.004093-14.276145 0.113587-28.55229-0.037862-42.822294-0.125867-11.791557-3.535523-22.514783-11.774161-31.245631-12.972453-13.745049-30.789237-17.772782-48.236608-11.135618-17.033955 6.483668-27.928073 21.722744-28.138874 40.757263-0.167822 14.814404-0.212848 29.630854-0.210801 44.448328 0.001023 14.187117 0.044002 28.374234 0.069585 42.560328C244.32203 219.207537 263.900947 239.549841 288.523741 239.458767z" p-id="3026" fill="#666666"></path><path d="M733.824643 240.284575c24.552186-0.080841 43.606147-19.664875 43.965328-45.440935 0.197498-14.196327 0.036839-28.389584 0.036839-42.579771l0.073678 0c0-0.229221 0.001023-0.456395 0.001023-0.683569 0.004093-14.277168 0.11461-28.55229-0.036839-42.823318-0.124843-11.790534-3.536546-22.514783-11.775184-31.245631-12.971429-13.744026-30.79026-17.772782-48.236608-11.135618-17.033955 6.483668-27.927049 21.721721-28.137851 40.757263-0.167822 14.813381-0.212848 29.629831-0.210801 44.448328 0.001023 14.187117 0.044002 28.373211 0.068562 42.559305C689.623955 220.033345 709.202872 240.376673 733.824643 240.284575z" p-id="3027" fill="#666666"></path><path d="M541.570991 567.092759l116.921943 0 0 87.100754L541.570991 654.193513 541.570991 567.092759z" p-id="3028" fill="#666666"></path><path d="M719.524962 448.37696l116.736725 0 0 87.216387L719.524962 535.593348 719.524962 448.37696 719.524962 448.37696z" p-id="3029" fill="#666666"></path><path d="M719.585337 566.772464l116.613928 0 0 87.422072L719.585337 654.194536 719.585337 566.772464z" p-id="3030" fill="#666666"></path><path d="M363.662045 685.884282l116.730585 0 0 87.242993L363.662045 773.127276 363.662045 685.884282z" p-id="3031" fill="#666666"></path><path d="M541.664112 685.705204l116.750027 0 0 87.081311L541.664112 772.786515 541.664112 685.705204z" p-id="3032" fill="#666666"></path><path d="M719.641619 685.810604l116.823706 0 0 87.012749L719.641619 772.823354 719.641619 685.810604z" p-id="3033" fill="#666666"></path><path d="M185.374476 685.957961l116.931153 0L302.305629 773.039271 185.375499 773.039271 185.374476 685.957961 185.374476 685.957961z" p-id="3034" fill="#666666"></path><path d="M185.641559 567.211463l116.725468 0 0 87.234807L185.641559 654.446269 185.641559 567.211463 185.641559 567.211463z" p-id="3035" fill="#666666"></path><path d="M541.409308 448.601064l116.932176 0 0 87.073124L541.409308 535.674189 541.409308 448.601064 541.409308 448.601064z" p-id="3036" fill="#666666"></path><path d="M363.402125 567.280024l116.909663 0 0 87.083357L363.402125 654.363382 363.402125 567.280024z" p-id="3037" fill="#666666"></path><path d="M363.681488 448.543759 480.435609 448.543759l0 87.178525L363.681488 535.722284 363.681488 448.543759 363.681488 448.543759z" p-id="3038" fill="#666666"></path><path d="M938.119539 150.753469 828.337203 150.753469c-0.032746 5.230118-0.076748 10.461259-0.149403 15.690354-0.743944 53.331649-38.590923 94.366228-88.418772 97.775884-2.26867 0.267083-4.578272 0.423649-6.928806 0.430812-2.89391 0.011256-5.733585-0.200568-8.510838-0.596588-48.7851-4.483104-86.312808-46.484707-86.413092-99.128695-0.007163-4.723581-0.019443-9.448186-0.027629-14.172791L381.532041 150.752446c-0.032746 5.230118-0.076748 10.461259-0.149403 15.690354-0.773619 55.598272-41.87062 97.838306-94.827739 98.012268-53.107545 0.197498-95.337345-43.680848-95.443769-99.530854-0.008186-4.723581-0.019443-9.448186-0.028653-14.172791L81.01157 150.751423c-9.572006 0-17.331737 7.759731-17.331737 17.330714l0 735.280296c0 9.572006 7.759731 17.33276 17.331737 17.33276L938.119539 920.695193c9.572006 0 17.331737-7.759731 17.331737-17.33276L955.451276 168.084183C955.450253 158.512177 947.691545 150.753469 938.119539 150.753469zM903.308709 862.971513 119.608633 862.971513l0-24.187889 0-27.7756L119.608633 382.968252l782.953062 0 0 428.039773 0.74599 0L903.308709 862.971513 903.308709 862.971513z" p-id="3039" fill="#666666"></path></svg>
                <span>2018年11月10日-11日</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "meetingIndex",
  inject: ["app"],
  data() {
    return {
      
    };
  },
  methods: {
    handleUserAnalysis() {
      this.$router.push()
    }
  }
};
</script>
<style lang="less" scoped>
body {
  background: #f2f2f2;
}
.el-header {
  background: url("http://meeting.hudongxuetang.com/resources20190816130046/tnsPcResources/images/head_bg.png")
    repeat-x 0 0;
  .navbar-left {
    min-width: 450px;
    float: left;
  }
  .navbar-right {
    float: right;
    position: relative;
    .login-user-area {
      cursor: pointer;
      font-size: 16px;
      line-height: 29px;
      position: relative;
      float: left;
      margin: 0 20px;
      padding-top: 18px;
      color: #fff;
      svg {
        width: 31px;
        height: 31px;
      }
      span {
        vertical-align: top;
      }
    }
  }
  .navbar-right:after {
    content: "";
    width: 8px;
    height: 8px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    position: absolute;
    top: 26px;
    right: 0;
    transform: rotate(45deg);
  }
}
.el-main {
  padding: 0 20px;
  .course-header {
    padding: 10px 40px;
    color: #666666;
    font-size: 16px;
    height: 20px;
    span {
      float: left;
      margin-left: 8px;
      cursor: pointer;
    }
  }
  .title {
    position: absolute;
    top: 26px;
    left: 24px;
    width: 220px;
    span {
      font-size: 20px;
      color: #fff;
    }
    span:hover {
      text-decoration:underline #fff 
    }
  }
  .panel-img {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 85px;
    background: #fff;
    right: 20px;
    border-radius: 50%;
    img {
      width: 70px;
    }
  }
  .dropdown {
    width: 19px;
    height: 30px;
    position: absolute;
    top: 27px;
    right: 25px;
    li {
      border-top: 2px solid #fff;
      margin: 5px 0px;
      height: 2px;
      box-sizing: border-box;
    }
  }
  .dropdown:hover {
    li {
      border-top: 2px solid #ccc;
    }
  }
  .panel-create {
    cursor: pointer;
  }
  .panel-border-CCCCCC {
    border: 1px solid #cccccc;
  }
  .panel-my {
    background-color: #f2f2f2;
    width: 300px;
    -webkit-box-shadow: none;
    box-shadow: none;
    position: relative;
    min-height: 222px;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    border-radius: 0px;
  }

  .panel-createCourse {
    height: 120px;
    background-color: #d6d5d6;
    position: relative;
  }
  .panel-createCourse .panel-createCourseIconContainer {
    position: absolute;
    top: 50%;
    left: 120px;
    transform: translateY(-50%);
    text-align: center;
  }
  svg {
    width: 66px;
    height: 66px;
  }
  .panel-footer {
    height: 100px;
    background-color: #ffffff;
    padding: 0px 15px;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    .text-center {
      text-align: center;
      margin-top: 30px;
      h4 {
        font-size: 18px;
      }
    }
    .remind_content {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      svg {
        width: 16px;
      
        height: 16px;
        margin-right: 5px;
      }
    }
  }
}
</style>