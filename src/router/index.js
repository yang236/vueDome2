import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Header from '../luyou/Header'
import Goods from '../luyou/Goods'
import list from '../luyou/List'

import List from '../components/List'
Vue.use(Router)


export default new Router({
  routes: [
    
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/List',
      name:'List',
      component:list
    },
    {
      path:'/Header',
      name:'Header',
      component:Header,
      children:[
          {
            path:'/Goods',
            name:'Goods',
            component:Goods
          },
          {
            path:'/List',
            name:'List',
            component:List
          }
        
      ]
    },
    {
      path:'/Goods',
      name:'Goods',
      component:Goods
    },
    {
      path:'/List',
      name:'List',
      component:List
    }
    
  ]
})
