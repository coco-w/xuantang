<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { userInfo } from 'os';
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
  }
  body {
    font-family: Helvetica,Arial,"微软雅黑","Microsoft YaHei"
  }
</style>
