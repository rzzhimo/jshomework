<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <img src="./assets/pdd21.jpg" width="200" height="200"> -->
    <hr>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr>
    <div class="myclass1">你好！</div>
    <router-link to='/home'>发起活动</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/calculator'>calculator</router-link>
    <router-link to='/'>HelloWorld</router-link>
    <router-link to='/wordladder'>wordladder</router-link>
    <!-- <router-view></router-view> -->
     <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
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
</style>
