<template>
    <div>
        <input type="text" placeholder="你喜欢哪只熊" @click="set()" v-model="title">
        <input type="button" value="搜索">
    </div>
</template>
<script>
import Bus from '../Bus.js'
export default {
    data(){
        return{
            title:''
        }
    },
    created(){
        Bus.$on('suibian',(res)=>{
            this.title=res
        })
    },
    methods:{
        set(){
            this.$emit('suibian')
        }
    }

}
</script>
<style lang='scss'>
    button{background:green;}

</style>