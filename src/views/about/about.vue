<template>
  <div>
    <div class="blog-bg">
      <div class="blog-title">你不知道的几个牛逼网站，欢迎收藏</div>
      <div class="blog-item">
        <div class="blog-time">发布时间：2020-06-16 18:00:25</div>
        <div class="blog-meta">
          <a-icon type="like" />1阅读&nbsp;
          <a-icon type="eye" />2点赞&nbsp;
          <a-icon type="heart" />10收藏&nbsp;
          <a-icon type="message" />5评论&nbsp;
        </div>
      </div>
      <div class="blog-content">
        <!-- 内容开始 -->
        111111111111
      <!-- 内容结束 -->
      </div>
      <div class="blog-action">
        <div class="blog-good">
          <a-icon type="like" />点赞
        </div>
        <div class="blog-collection">
          <a-icon type="heart" />收藏
        </div>
      </div>
    </div>

  </div>
</template>

<style >
.header-img{
  width: 100px;
  height: 100px;
  border: 5px solid #e5e5e5;
  border-radius: 50px;
}
.blog-bg {
  background: #fff;
  padding: 40px 25px;
}
.blog-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  line-height: 70px;
}
.blog-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 10px;
}
.blog-action {
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 24px;
}
</style>
