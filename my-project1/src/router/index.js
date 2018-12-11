import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'
import calculator from '@/components/calculator'
import wordladder from '@/components/wordladder'
import detail from '@/components/detail'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name:'about',
      component:about,
      children:[
        {
          path: 'detail',
          name:detail,
          component:detail

        }
      ]
     },
     {
     path: '/home',
     name:home,
     component:home,
     alias:'/launch_activity'//路由别名，和path等价
    },
   
    {
      path: '/calculator',
      //redirect:'/home',//路由重定向，会重定向到‘/home’页面而不是‘calculator’页面
      //redirect: {name:'about'},
     name:calculator,
     component:calculator,
     
    },
    {
      path: '/wordladder',
     name:wordladder,
     component:wordladder
    },
    {
      path: '/user/:name/:nationality',
      name: 'User',
      component: User,
      props: true
  },
     
    
  ]
})
