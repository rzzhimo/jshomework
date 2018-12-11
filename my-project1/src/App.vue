<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <img src="./assets/pdd21.jpg" width="200" height="200"> -->
    <hr>
    
    <p>bootstrap按钮大全</p>
    <button class="btn btn-default">默认按钮</button>
    <button class="btn btn-primary">原始按钮</button>
    <button class="btn btn-success">成功</button>
    <button class="btn btn-danger">危险</button>
    <button class="btn btn-info">信息</button>
    <button class="btn btn-warning">警告</button>
    <button class="btn btn-link">这是一个链接按钮</button> 
    <hr>
    <div class="myclass1">你好！</div>
    <div>可以跳转

    <router-link to='/launch_activity'>发起活动</router-link>
    <!-- 这里用了路由的别名 -->

    <router-link to='/about'>About</router-link>
    <router-link to='/calculator'>calculator</router-link>
    <router-link to='/'>HelloWorld</router-link>
    <router-link to='/wordladder'>wordladder</router-link>
    <router-link to="/user/1/usa">User1</router-link>
    <router-link to="/user/2/china">User2</router-link>
    <router-link to="/user/3/korea">User3</router-link>
    <!-- <router-view></router-view> -->
    </div>
     <router-view/>
    
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App',
  props:['user','number']
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
color: rgb(255, 115, 0);
}
</style>
