<template>

    <div>
        <p1>组件的组件</p1>
        <p>{{aboutMsg}}</p>
        <p>{{detail}}</p>
        <!-- <p>{{name}}</p> -->
        <button class="btn btn-info" @click="create">{{he}}</button>
        <button class="btn btn-primary" @click="goBack">返回</button>
    </div>

</template>
<script>
export default{
  name: 'detail',
  data () {
    return {
      aboutMsg: '我是组件的组件',
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