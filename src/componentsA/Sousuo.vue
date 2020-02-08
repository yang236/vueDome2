<template>
    <div>
        <Sousuo1 @suibian='setflag'></Sousuo1>
        <Sousuo2 v-show="!flag" @suibian='setflag'></Sousuo2>
    </div>
</template>
<script>

import Sousuo1 from './Sousuo1.vue'
import Sousuo2 from './Sousuo2.vue'
export default {
    components:{Sousuo1,Sousuo2},
    data(){
        return{
            flag:false
        }
    },
    methods:{
        setflag(){
            this.flag=!this.flag
        }
    }

}
</script>
<style lang='scss' scoped>


</style>