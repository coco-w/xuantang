<template>
  <div class="content">
    <div class="content-banner">
      <div class="content-banner-container">
        <a href="" class="try-free-btn">免费使用</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.content {
  min-width: 1200px;
  .content-banner {
    background: transparent url(//static.hudongxuetang.com/hdxt/resources/tnsPcResources/websitePic/website-banner.jpg)no-repeat center top;
    height: 480px;
    position: relative;
    margin-bottom: 60px;
    .content-banner-container {
      position: relative;
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      color: #fff;
      .try-free-btn {
        position: absolute;
        top: 365px;
        display: inline-block;
        padding: 11px 40px;
        background: #31C27C;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        text-decoration: none;
      }
    }
  }
}
</style>