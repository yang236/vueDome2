<template>
    <div>
        <ul>
            <li><router-link to="/Goods" >商品</router-link></li>
            <li><router-link to="/List">购物车</router-link></li>
        </ul>
        
       <router-view></router-view>
        
    </div>
</template>

<script>
import Goods from '../luyou/Goods'
import List from '../luyou/List'
export default {
   
}
</script>

<style lang="scss">
    
</style>