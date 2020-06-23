<template>
  <div>
    <br>
    <a-card hoverable title="推荐阅读" :head-style="headStyle" :body-style="bodyStyle">
      <router-link to="/" class="recom-card">
        <div class="blog-title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
        <div class="blog-type">
          分类：
          <a-tag color="green">java</a-tag>
        </div>
        <div class="blog-bomttom">
          <div class="blog-time">2020年6月2日11:18:13</div>
          <div class="blog-meta">
            <a-icon type="like" /> 1
            <a-icon type="eye" /> 2
            <a-icon type="heart" /> 10
            <a-icon type="message" />5
          </div>
        </div>
      </router-link>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headStyle: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '15px',
        borderLeft: '5px solid #409eff'
      },
      bodyStyle: {
        maxHeight: '520px',
        overflow: 'hidden'
      }
    }
  }
}
</script>

<style >
.recom-card {
  display: flex;
  flex-direction: column;
  color: #3e4149;
}
.recom-card:hover{
    color: #3e4149;
}
.ant-card-bordered {
  border: none !important;
}
.blog-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 40px;
}
.blog-type {
  line-height: 40px;
}
.blog-bomttom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: #b8b8b8;
  margin-bottom: 5px;
}
</style>
