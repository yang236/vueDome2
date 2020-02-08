<template>
    <div>
        <ul>
            <li v-for="(item,key) in arr" @click="change(key)">{{item.name}}</li>
        </ul>

    </div>
</template>
<script>
import Bus from '../Bus.js'
export default {
    data(){
        return{
            arr:[{id:1,name:'熊大'},{id:2,name:'熊二'},{id:3,name:'熊三'}]
        }
    },
    methods:{
        change(k){
            Bus.$emit('suibian',this.arr[k].name)
            this.$emit('suibian')
        }
    }

}
</script>
<style lang='scss'>
*{margin: 0;padding: 0;}
ul{
    border: 1px solid #ccc;
    width: 22%;
    li{list-style: none;}
}

</style>