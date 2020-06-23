<template>
  <div>
    <div class="myInfo-container">
      <!-- 卡片模板 -->
      <my-back />
      <recommend />
      <music />
      <Link />
    </div>
  </div>
</template>

<script>
import myBack from './my-back'
import recommend from './recommend'
import music from './music'
import Link from './link'
export default {
  components: {
    // 卡片模板
    myBack,
    recommend,
    music,
    Link
  }

}
</script>

<style >
.myInfo-container{
  width: 350px;
  padding: 0 10px;
}

</style>
