<template>
    <div>
        <h1>活动组件</h1>
        <p>{{aboutMsg}}</p>
        <div class="amap-wrapper">
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
        <!-- 高德地图 -->
        </div>
        
        <button class="btn btn-info" @click="create">{{he}}</button>
        <button class="btn btn-primary" @click="goBack">返回</button>
        <router-link to='/about/detail' class="btn btn-primary">展示细节</router-link>
        <!-- 这里嵌套路由的路径开始一定要在父组件下 -->
        <router-view/>
      
    </div>

</template>
<script>

export default{
  name: 'about',
  data () {
    
    return {
      aboutMsg: '我是活动组件',
      he:"点我",
      
    }
     
    
  },
  methods:{
      create(){
        this.he="你点了我"
      },
      goBack() {
          window.history.go(-1)//返回上一层
        },
      
}
}
</script>

<style scoped>
.amap-wrapper {
  /* width: 500px; */
  height: 500px;
}
</style>