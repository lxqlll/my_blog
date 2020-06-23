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

    <div class="user-comment">
      <a-textarea v-model="content" placeholder="请输入内容,不超过300字" :rows="4" />
      <div class="comment-button">
        <a-button type="primary">
          发表评论
        </a-button>
        <div v-show="countShow" class="content-count">
          还能输入{{ commentContentCount }}个字符
        </div>
      </div>
    </div>

    <div class="comment-bg">
      <div class="comment-header">
        <img src="@/assets/header.gif" alt="" class="header-img">
      </div>
      <div class="comment-content">
        <div class="comment-nickname">昵称</div>
        <div class="comment-time">发表于时间</div>
        <div class="comment-contemt">内容</div>
      </div>
      <div class="comment-good"><a-icon type="like" />2</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      commentContentCount: 300,
      // 显示是否还能输入的数量
      countShow: false
    }
  },
  watch: {
    'content': function(newVal, oldVal) {
      console.log(newVal, oldVal)
      if (this.content.length > 300) {
        this.content = this.content.substring(0, 300)
      }
      if (this.content.length > 0) {
        this.countShow = true
      } else {
        this.countShow = false
      }
      const newValLength = newVal ? newVal.length : 0
      const oldValLength = oldVal ? oldVal.length : 0
      this.commentContentCount = this.commentContentCount - (newValLength - oldValLength)
    }
  }
}
</script>

<style >
.comment-button{
  margin: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.content-count{
  margin-right: 15px;
}
.user-comment{
  margin-top: 15px;
  background: #fff;

}
.comment-bg{
  background: #fff;
  margin-top: 15px;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.comment-content{
  width: 580px;
  display: flex;
  flex-direction: column;
}
.comment-nickname{
  font-weight: bold;
}
.comment-time{
  font-size: 12px;
  color:#9c9ea8;
}
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
