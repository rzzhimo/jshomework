<template>

    <div>
        <h1>活动组件</h1>
        <p>{{aboutMsg}}</p>
        <p>{{detail}}</p>
        <!-- <p>{{name}}</p> -->
        <button class="btn btn-info" @click="create">{{he}}</button>
        <button class="btn btn-info" @click="goforward">前进</button>
        <button class="btn btn-primary" @click="goBack">返回</button>
    </div>

</template>
<script>
export default{
  name: 'about',
  data () {
    
    return {
      aboutMsg: '我是活动组件',
      he:"点我",
      detail:[12334]
    }
     
    
  },

  methods:{
      create(){
        this.he="你点了我"
      },
      goBack() {
          window.history.go(-1)//返回上一层
        },
      goforward() {
          window.go(1)//返回下一层
        }
}
}
</script>
