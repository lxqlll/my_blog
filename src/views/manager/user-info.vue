<template>
  <div>
    <div class="info-container">
      <div class="user-container">
        <div class="update-img-container">
          <img src="@/assets/header.gif" class="user-header" alt>
          <a href="javascript:void(0);" @click="openHeaderUploadDialog">点我上传</a>
        </div>
        <div class="meta-container">
          <div class="user-id">ID:12323133223</div>
          <div class="user-collection">收藏2 评论20</div>
          <a-divider />
          <div>
            <a-form :form="form" @submit="infoSubmit">
              <a-form-item label="账号" :label-col="{ span: 5 }" :wrapper-col="{span: 19}">
                <a-input
                  v-decorator="['username', { rules: [{ required: true, message: '请输入账号' }] }]"
                  placeholder="请输入账号"
                />
              </a-form-item>
              <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{span: 19}">
                <a-button type="primary" @click="showModal">点我修改</a-button>
              </a-form-item>
              <a-form-item label="昵称" :label-col="{ span: 5 }" :wrapper-col="{span: 19}">
                <a-input
                  v-decorator="['username', { rules: [{ required: true, message: '请输入昵称' }] }]"
                  placeholder="请输入昵称"
                />
              </a-form-item>
              <a-form-item label="邮箱" :label-col="{ span: 5 }" :wrapper-col="{span: 19}">
                <a-input
                  v-decorator="['username', { rules: [{ required: true, message: '请输入邮箱' }] }]"
                  placeholder="请输入邮箱"
                />
              </a-form-item>
              <a-form-item
                label="性别"
                :label-col="{ span: 5 }"
                :wrapper-col="{span: 19}"
                has-feedback
              >
                <a-select
                  v-decorator="[
                    'sex',
                    { rules: [{ required: true, message: '请选择性别' }] },
                  ]"
                  placeholder="请选择性别"
                >
                  <a-select-option value="1">男</a-select-option>
                  <a-select-option value="2">女</a-select-option>
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

    <a-modal title="修改密码" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form :form="passwordForm">
        <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{span: 19}">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
            type="password"
            placeholder="请输入密码"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <a-modal title="修改头像" :visible="uploadVisible" @ok="handleOk" @cancel="handleCancel">
      <a-upload-dragger
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">单击或拖动文件到此区域上载</p>
        <p class="ant-upload-hint" />
      </a-upload-dragger>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this, { name: 'coordinated' }),
      passwordForm: this.$form.createForm(this, { name: 'coordinated' }),
      uploadVisible: false
    }
  },
  methods: {
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
      this.uploadVisible = false
    },
    openHeaderUploadDialog() {
      this.uploadVisible = true
    },
    showModal() {
      this.visible = true
    },
    // 提交
    handleOk(e) {
      // eslint-disable-next-line handle-callback-err
      this.passwordForm.validateFields((err, values) => {
        console.log('Received values of form: ', values)
      })
      this.visible = false
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
      this.uploadVisible = false
    },
    infoSubmit(e) {
      console.log(e)
      e.preventDefault()
      // eslint-disable-next-line handle-callback-err
      this.form.validateFields((err, values) => {
        console.log('Received values of form: ', values)
      })
    }
  }
}
</script>

<style scoped>
.user-header {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #e5e5e5;
}
.user-container {
  display: flex;
  flex-direction: row;
}
.meta-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 450px;
}
.user-id {
  color: #b39999;
  font-size: 17px;
}
.user-collection {
  line-height: 40px;
  font-size: 16px;
}
.update-img-container{
  display: flex;
  flex-direction: column;
}
.update-img-container a{
  text-align: center;
  margin-top: 10px;
}
</style>
