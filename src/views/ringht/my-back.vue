<template>
  <div>
    <a-card hoverable>
      <img src="@/assets/my-back.jpg" class="my-back">
      <img src="@/assets/header.gif" class="my-header">
      <div class="my-bottom-container">
        <div class="my-nickname">小明明</div>
        <div class="my-signature">活到老,学到老</div>
        <a-divider />
        <div class="social-contact">
          <div class="social-text">社交：</div>
          <div class="social-item">
            <a href="https://me.csdn.net/qq_24702237" title="CSND" target="_Blank"><img src="@/assets/icons/csdn.png" class="social-icon"></a>
            <a title="暂无"><img src="@/assets/icons/gitee.png" class="social-icon"></a>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=1824992529&site=qq&menu=yes" title="QQ" t target="_Blank"><img src="@/assets/icons/qq.png" class="social-icon"></a>
            <a href="https://github.com/lxqlll" title="git" target="_Blank"><img src="@/assets/icons/github.png" class="social-icon"></a>
          </div>
        </div>
        <a-divider />
        <div class="join-contact">
          <div class="join-text">加入我们：</div>
          <div class="join-item">
            <a href="//shang.qq.com/wpa/qunwpa?idkey=a4c2c4a57d400dbf880ecca1b5132e90146aacb6d6b790a8ea3132958031e1c7" title="QQ群" target="_Blank"><img src="@/assets/icons/QQqun.png" class="join-icon"></a>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<style >
.my-back-card .ant-card-body{
  padding: 0 !important;
}

.my-back{
  width: 280px;
  position: absolute;
  z-index: 0;
}
.my-header{
  width: 100%;
}

.my-header{
  width: 100px;
  display: block;
  height: 100px;
  border: 5px solid #e5e5e5;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  margin: 75px auto 15px;
}
.my-bottom-container{
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
}
.my-nickname{
  margin: auto;
  font-size: 22px;
  font-weight: bold;
  line-height: 60px;
}
.my-signature{
    margin: auto;
    font-size: 15px;
    color:#878d99;
}
.social-contact{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.social-text{
   font-size: 15px;
  color:#878d99;
}
.social-icon{
  width: 40px;
  height: 40px;
}
.social-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
}
.join-contact{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.join-item{
  margin: auto;
}
.join-icon{
  width: 40px;
  height: 40px;

}
.join-text{
   font-size: 15px;
    color:#878d99;
}
</style>
