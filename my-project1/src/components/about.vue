<template>

    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <p>{{detail}}</p>
        <button class="btn btn-info" @click="create">{{he}}</button>
        <button class="btn btn-info">{{he}}</button>
    </div>

</template>
<script>
export default{
  name: 'about',
  data () {
    
    return {
      aboutMsg: '我是about组件',
      he:"点我",
      detail:[12334]
    }
    
  },

  methods:{
      create(){
        this.he="你点了我"
      }
}
}
</script>
