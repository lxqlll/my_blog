<template>
  <div>
    <br>
    <a-card hoverable title="友情链接" :head-style="headStyle">
      <div class="link-container">
        <a v-for="item in linkList" :key="item.linkId" :href="linkUrl">{{ item.linkName }}</a>
      </div>
    </a-card>
  </div>
</template>

<script>
import LinkApi from '../../api/linkApi'
export default {
  data() {
    return {
      headStyle: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '15px',
        borderLeft: '5px solid #FFB800'
      },
      linkList: []
    }
  },
  created() {
    this.getLinkList()
  },
  methods: {
    getLinkList() {
      LinkApi.getList().then(res => {
        this.linkList = res.data
      })
    }
  }
}
</script>

<style >
.link-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.link-container a{
  font-size: 24px;
  width: 60px;
}
</style>
