<template>
  <div class="login-background">
    <div class="login-container">
      <div class="login-title">欢迎进入DaYueJin博客</div>
      <a-menu v-model="current" mode="horizontal" @select="changTab">
        <a-menu-item key="login">
          <router-link to="#">
            <a-icon type="login" />登录
          </router-link>
        </a-menu-item>
        <a-menu-item key="registered">
          <router-link to="#">
            <a-icon type="edit" />注册
          </router-link>
        </a-menu-item>
      </a-menu>
      <div class="content">
        <div v-show="login" class="login">
          <a-form :form="form" @submit="loginSubmit">
            <a-form-item>
              <a-input
                v-decorator="['username', { rules: [{ required: true, message: '请输入账号' }] }]"
                placeholder="请输入账号"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="['password', { rules: [{ required: true, message: '请输入账密码' }] }]"
                placeholder="请输入账密码"
                type="password"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" block html-type="submit">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div v-show="registered" class="login">
          <a-form :form="form" @submit="registeredSubmit">
            <a-form-item>
              <a-input
                v-decorator="['username', { rules: [{ required: true, message: '请输入账号' }] }]"
                placeholder="请输入账号"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="['password', { rules: [{ required: true, message: '请输入账密码' }] }]"
                placeholder="请输入账密码"
                type="password"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="['nickname', { rules: [{ required: true, message: '请输入昵称' }] }]"
                placeholder="请输入昵称"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="['userEmail', { rules: [{ required: true, message: '请输入邮箱' }] }]"
                placeholder="请输入邮箱"
              />
            </a-form-item>
            <a-form-item has-feedback>
              <a-select
                v-decorator="[
                  'sex',
                  { rules: [{ required: true, message: '请选择性别' }] },
                ]"
                placeholder="请选择性别"
              >
                <a-select-option value="1">
                  男
                </a-select-option>
                <a-select-option value="2">
                  女
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" block html-type="submit">注册</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      current: ['login'],
      registered: false,
      login: true
    }
  },
  methods: {
    loginSubmit(e) {
      console.log(e)
      e.preventDefault()
      // eslint-disable-next-line handle-callback-err
      this.form.validateFields((err, values) => {
        console.log('Received values of form: ', values)
        this.$router.push('/')
      })
    },
    registeredSubmit(e) {
      console.log(e)
      e.preventDefault()
      // eslint-disable-next-line handle-callback-err
      this.form.validateFields((err, values) => {
        console.log('Received values of form: ', values)
      })
    },
    callback(key) {
      console.log(key)
    },
    changTab(e) {
      const key = e.key
      if (key === 'login') {
        this.login = true
        this.registered = false
      }
      if (key === 'registered') {
        this.login = false
        this.registered = true
      }
    }
  }
}
</script>

<style scoped>
.login-background {
  background-image: url("/login-back2.jpg");
  height: 100%;
  width: 100%;
  position: fixed;
}
.login-container {
  background: #fff;
  width: 450px;
  min-height: 450px;
  margin: 100px auto;
  border: 1px solid #e5e5e5;
  padding: 50px 50px 0 50px;
  border-radius: 5px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}
.ant-menu-item {
  width: 50%;
  text-align: center;
}
.content {
  margin-top: 20px;
}
</style>
