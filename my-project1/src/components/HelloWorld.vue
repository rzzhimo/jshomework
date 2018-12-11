<template>
  <div class="hello">
    <p>这里主要用axios随机抓取一些信息并显示出来</p>
  <pre>{{content}}</pre>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ''
    }
  },
  
  mounted(){
      this.axios.post('http://api.komavideo.com/news/list').then(body => {
      this.content = body.data
    })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
