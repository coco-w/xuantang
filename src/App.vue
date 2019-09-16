<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>
<script>

export default {
  provide() {
    return{
      app: this
    }
  },
  data() {
    return {
      userInfo: null,
    }
  },
  methods: {
    saveUserInfo(userInfo) {
      this.userInfo = userInfo
    },
  }
}
</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #333;
  }
  html,body,#app {
    min-height: 100%;
  }
  body {
    font-family: Helvetica,Arial,"微软雅黑","Microsoft YaHei"
  }
  .icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
