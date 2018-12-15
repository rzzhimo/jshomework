<template>
    
    <div>
        <h1>my wordladder</h1>
        <p>{{aboutMsg}}</p>
        
        <input id="source_word" type="text">
        <input id="target_word" type="text">
        <button class="btn btn-info" id="submit" @click="show()">submit</button>
        <hr>
        <p>{{ladder}}</p>
    </div>
    
</template>


<script>
import {dfs} from '../components/wordladder/wordladder.js'
export default{
  name: 'wordladder',
  data () {
    
    return {
      aboutMsg: '我是wordladder组件,dic好像太大了不能完全加载，这里只用了迷你字典',
      ladder:'',
      
    }
    
  },
  methods:{
        show() {
        this.ladder='';
        var source = document.getElementById("source_word").value;
        var target = document.getElementById("target_word").value;
       
        this.ladder=dfs(source, target);
        //alert(dfs(source, target));
        
    }
}
}
</script>
