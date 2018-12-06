import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'
import calculator from '@/components/calculator'
import wordladder from '@/components/wordladder'
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
      name:about,
      
      component:about
     },
     {
      path: '/home',
     name:home,
     
     component:home
    },
    {
      path: '/calculator',
     name:calculator,
     component:calculator
    },
    {
      path: '/wordladder',
     name:wordladder,
     component:wordladder
    }
    
  ]
})
