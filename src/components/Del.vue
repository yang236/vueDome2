<template>
    <button @click="del()">删除{{k}}</button>
</template>

<script>
import Bus from '@/Bus'
export default {
    name:'Del',
    props:["k"],
    methods: {
        del(){
            var arr=JSON.parse(localStorage.getItem("goods"))
                arr.splice(this.k,1)
                localStorage.setItem("goods",JSON.stringify(arr))
                this.$emit("fun")
                Bus.$emit("del",arr)
        }
    },
}
</script>

<style lang="scss">
    
</style>