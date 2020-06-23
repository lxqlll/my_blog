<template>
  <div class="mian">
    <!-- 导航菜单组件 -->
    <transition name="menu">
      <navigation-bar v-show="show" class="menu-container" />
    </transition>
    <div class="main-container">
      <div class="left-container">
        <a-locale-provider :locale="locale">
          <!-- 这边主要部分 -->
          <router-view />
        </a-locale-provider>
      </div>
      <!-- 右边卡片组件 个人资料 -->
      <ringht />
      <!-- 这边主要部分 -->
    </div>
    <bottom />
    <a-back-top />
  </div>
</template>

<script>
// 导航栏
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import navigationBar from '@/views/navigation-bar/navigationBar'
import ringht from '@/views/ringht/ringht'
import Bottom from '@/views/bottom/index'
export default {
  // 注册组件
  components: {
    // 导航栏
    navigationBar,
    // 个人资料
    ringht,
    // 底部
    Bottom
  },
  data() {
    return {
      locale: zhCN,
      show: true
    }
  },
  created() {
    this.mouseScroll()
  },
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-shizuku/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json' },
        display: { position: 'left', width: 240, height: 450 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法  ie谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    watchScroll(e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      }
    }
  }
}
</script>

<style>
/* 主div */
.mian {
  background-color: #f5f5f5;
}
.main-container {
  width: 1200px;
  margin: auto;
  /* 表示这是一个flex容器 */
  display: flex;
  /* 定义容器方向是横向，元素从左到右 （默认） */
  flex-direction: row;
  /* 左右对齐 */
  /* justify-content:space-between; */
  margin-top: 12px;
}
.left-container {
  width: 850px;
  padding: 0 10px;
}
.menu-container {
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.menu-enter-active ,
.menu-leave-active{
  transition: all .8s ease;
}

.menu-enter, .menu-leave-to
/* .menu-leave-active for below version 2.1.8 */ {
  transform: translateY(-60px);
  opacity: 0;
}
</style>
