<template>
  <div>
    <div class="index-carousel">
      <!-- 轮播图 -->
      <a-carousel autoplay>
        <div>
          <img src="@/assets/carousel.gif" class="carousel-img">
        </div>
      </a-carousel>
      <!-- 轮播图 end-->
    </div>
    <blog-list :name="'博客'" />
  </div>
</template>

<script>
import blogList from '../blog/blog-list'
export default {
  // 注册组件
  components: {
    blogList
  }
}
</script>

<style>
.carousel-img{
  width: 100%;
  height: 100%;
}
</style>
