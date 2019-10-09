<template>
  <div>
    <div class="show-info">
      <img
        src="http://static.hudongxuetang.com/hdxt%2Fmeeting-poster%2Ff240f4fa-331d-4679-b8e7-7da44ecaf473%2Fded76e80-2180-47ca-8f95-c320f2474210"
        alt
      />
      <div class="info-text">
        <div class="info-title">晚上实时</div>
        <div class="info-time">2019年10月12日-19日</div>
        <div class="info-address">asdasdasd</div>
      </div>
    </div>
    <div class="attend_timing_box">
      距离会议开始还有
      <count-down class="time" :date="new Date(1577520297000)"></count-down>
      <div class="btns">
        <el-button @click="routerPush">报名注册</el-button>
        <el-button v-if ='false'>投稿</el-button>
      </div>
    </div>
    <invitation-content></invitation-content>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
import InvitationContent from "@/components/InvitationContent";
export default {
  name: 'UserHome',
  inject: ['index'],
  components: {
    InvitationContent,
    CountDown
  },
  methods:{
    routerPush() {
      this.$router.push({path: '/user/homePage/register'})
      this.index.nowRouter = '1'
      
    }
  },
  
};
</script>
<style lang="less" scoped>
.show-info {
  position: relative;
  img {
    width: 100%;
  }
  .info-text {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px 60px;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.9);
    .info-title {
      font-size: 40px;
      line-height: 46px;
      max-height: 147px;
      font-weight: bold;
      padding: 4px 0;
      text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.6);
      color: #fff;
      margin-bottom: 40px;
    }
    .info-time,
    .info-address {
      color: #fff;
    }
  }
}
.attend_timing_box {
  width: 980px;
  line-height: 60px;
  height: 100%;
  margin: 0 auto;
  color: #333;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0 30px;
  position: relative;
  .time {
    display: inline-block;
  }
  .btns {
    display: inline-block;
    float: right;
  }
}
</style>