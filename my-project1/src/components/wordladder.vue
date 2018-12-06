<template>
    
    <div>
        <h1>my wordladder</h1>
        <p>{{aboutMsg}}</p>
        <!-- <p>{{detail}}</p> -->
        <input id="source_word" type="text">
        <input id="target_word" type="text">
        <button class="btn btn-info" id="submit" @click="show()">submit</button>
    </div>

</template>


<script>
import {dfs} from '../components/wordladder/wordladder.js'
export default{
  name: 'wordladder',
  data () {
    
    return {
      aboutMsg: '我是wordladder组件',
      
      
    }
    
  },

  methods:{
        show() {
        var source = document.getElementById("source_word").value;
        var target = document.getElementById("target_word").value;
        //alert(dfs(source, target));
        //alert(target);
        var b=dfs(source, target);
        alert(b);
        
    }
}
}
</script>
