<template>
    <button @click="sort()">
        <span v-show="fl">升序</span>
        <span v-show="!fl">降序</span>
    
    </button>
    
</template>

<script>
export default {
    name:'Sort',
    props:["listdata","fl"],
    methods: {
        sort(){
            if(this.fl){
                var arr = this.listdata.sort(function(a,b){
                return a.price - b.price
                })
            }else{
                var arr = this.listdata.sort(function(a,b){
                return b.price - a.price
                })
            }
            //通知父组件来修改flag的值
           this.$emit("setflag")
        }
    }
    
}
</script>

<style lang="scss">
    
</style>