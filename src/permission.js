import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/']
/**
 * 在路由跳转前操作
 */
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // console.log(to, from, next)
  // const path = to.path
  // if (whiteList.indexOf(path) === -1) {
  //   // 不在白名单,跳转登录
  //   next('/login')
  // } else {
  next()
  //  // 在白名单，判断是不是为登录页面,如果是登录。跳到首页
  //  if (path === '/login') {
  //   next('/')
  // } else {
  //   // 不是登录页，放行
  //   next()
  // }
  // }
  NProgress.done()
})
// 在路由跳转后操作
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
