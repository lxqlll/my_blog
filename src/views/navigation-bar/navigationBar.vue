<template>
  <div>
    <div class="menu-container">
      <!-- log statr -->
      <div class="nav-logo">
        <img src="@/assets/logo.png" class="logo-img">
        <span class="logo-text">DaYueJin</span>
      </div>
      <div class="nav-menu-search">
        <!-- log end -->
        <!-- 顶部导航菜单  -->
        <!-- =================================statr================================== -->
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="index">
            <router-link to="/">
              <a-icon type="mail" />首页
            </router-link>
          </a-menu-item>
          <a-menu-item key="type">
            <router-link to="/type">
              <a-icon type="mail" />分类
            </router-link>
          </a-menu-item>
          <a-menu-item key="timeLine">
            <router-link to="/timeLine">
              <a-icon type="mail" />时间轴
            </router-link>
          </a-menu-item>
          <a-menu-item key="about">
            <router-link to="/about">
              <a-icon type="mail" />关于我
            </router-link>
          </a-menu-item>
          <!-- 搜索框 start-->
          <a-input-search
            autosize
            allow-clear
            class="menu-search"
            placeholder="input search text"
            style="width: 200px"
            @search="onSearch"
          />
          <router-link v-show="false" to="/login" class="login">
            登录/注册
          </router-link>

          <a-dropdown class="login-header">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <img src="@/assets/header.gif" class="login-header-img" alt=""> <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">退出登录</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="toManager">个人中心</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>

        </a-menu>

        <!-- 搜索框 end-->
        <!-- 顶部导航菜单关闭 -->
        <!-- =================================end================================== -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['index'],
      nickname: '小明'
    }
  },
  methods: {
    // 顶部导航菜单搜索框
    onSearch() {},

    toManager() {
      this.$router.push('manager')
    }

  }
}
</script>

<style scoped>
/* 顶部导航菜单div布局 */
.menu-container {
  /* 表示这是一个flex容器 */
  display: flex;
  /* 定义容器方向是横向，元素从左到右 （默认） */
  flex-direction: row;
  /* 左右对齐 */
  justify-content: space-between;
  /* 居中 */
  align-items: center;
  /* 边距 */
  padding: 0px 80px;
  /* 行、高 */
  line-height: 60px;
  background: #ffffff;
}
/* log图片样式 */
.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
/* log图片旁边文字 */
.logo-text {
  font-size: 17px;
}
.menu-search {
  margin-top: 5px !important;
  margin-left: 20px !important;
}
.nav-menu-search {
}
.ant-menu {
  border: none !important;
  font-size: 16px !important;
}
.login{
  color:rgba(0, 0, 0, 0.65);
  margin-left: 20px;
}
.login:hover{
 color:rgba(0, 0, 0, 0.65);
}
.login-header-img{
  width: 45px;
  height: 42px;
  border-radius: 50px;
  margin-left: 27px;
  border: 3px solid #e5e5e5;
}
.login-header{
   color:rgba(0, 0, 0, 0.65);
}
.ant-dropdown-menu{
  margin-top: 18px;
  margin-left: 25px;
}
</style>
