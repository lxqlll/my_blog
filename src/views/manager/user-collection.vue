<template>
  <div>
    <div class="collection container">
      <router-link to="/" class="recom-card">
        <div class="blog-title">标题标题标题标题标标题标题标题标题标标题标题标题标题标标题标题标题标题标标题标题标题标题标标题标题标题标题标</div>
        <div class="blog-type">
          分类：
          <a-tag color="green">java</a-tag>
        </div>
        <div class="blog-bomttom">
          <div class="blog-time">2020年6月2日11:18:13</div>
          <div class="blog-meta">
            <a-icon type="like" />1
            <a-icon type="eye" />2
            <a-icon type="heart" />10
            <a-icon type="message" />5
          </div>
        </div>
      </router-link>
      <a-divider />
    </div>
    <div class="blog-pagination">
      <a-pagination :show-total="total => `共 ${total} 条`" show-quick-jumper :default-current="1" :total="500" @change="pageChange" />
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {

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
.recom-card {
  display: flex;
  flex-direction: column;
  color: #3e4149;
  width: 560px;
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
