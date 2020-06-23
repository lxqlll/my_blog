<template>
  <div>
    <br>
    <div class="buttom-container">
      <!-- log statr -->
      <div class="buttom-text">{{ name }}</div>
      <div class="buttom-menu">
        <!-- log end -->
        <!-- 顶部导航菜单  -->
        <!-- =================================statr================================== -->
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="index">最新</a-menu-item>
          <a-menu-item key="type">点赞最多</a-menu-item>
          <a-menu-item key="timeLine">评论最多</a-menu-item>
          <a-menu-item key="about">收藏最多</a-menu-item>
          <!-- 搜索框 start-->
        </a-menu>
        <!-- 搜索框 end-->
        <!-- 顶部导航菜单关闭 -->
        <!-- =================================end================================== -->
      </div>
    </div>
    <!-- 开始 -->
    <div class="blog-list-container">
      <a-card hoverable :body-style="bolgBodyStyle" class="blog-card">
        <div class="blog-main">
          <div class="blog-img">
            <img src="@/assets/springboot.jpg" class="blog-cover" alt>
          </div>
          <router-link to="/Info/1" class="blog-container">
            <div class="blog-title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
            <div class="blog-comment">介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍</div>
            <div class="blog-bontoom">
              <div class="blot-type">
                分类：
                <a-tag color="green">green</a-tag>
              </div>
              <div class="blog-meta">
                <div class="blog-time">2020年6月2日17:00:06</div>
                <div class="blog-other">
                  <a-icon type="like" />1
                  <a-icon type="eye" />2
                  <a-icon type="heart" />10
                  <a-icon type="message" />5
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </a-card>
    </div>
    <div class="blog-pagination">
      <a-pagination :show-total="total => `共 ${total} 条`" show-quick-jumper :default-current="1" :total="500" @change="pageChange" />
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    name: {
      type: String,
      default: '博客'
    }
  },
  data() {
    return {
      current: ['index'],
      bolgBodyStyle: {
        overflow: 'hidden'
      }
    }
  },
  methods: {
    pageChange(pageNumber) {
      console.log('Page: ', pageNumber)
    }
  }
}
</script>

<style scoped>
.blog-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.buttom-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  line-height: 60px;
}
.ant-menu-horizontal {
  background: #f5f5f5 !important;
  border: none !important;
}
.buttom-text {
  font-size: 20px;
}
.buttom-menu {
  font-size: 15px;
}
.blog-title {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}
.blog-container {
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  color: #3e4149;
  width: 550px;
  min-height: 130px;
  justify-content: space-between;
}

.blog-container:hover {
  color: #3e4149;
}
.blog-comment {
  font-size: 14px;
  margin-bottom: 10px;
  color: #9c9ea8;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-bontoom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.blog-meta {
  font-size: 12px;
  color: #9c9ea8;
}
.blog-img {
  width: 230px;
  margin-right: 20px;
}
.blog-cover {
  width: 100%;
  border-radius: 5px;
}
.blog-main {
  display: flex;
  flex-flow: row;
  align-items: center;
}
.blog-card{
  margin-bottom:15px ;
  border-radius: 5px;
}
</style>
