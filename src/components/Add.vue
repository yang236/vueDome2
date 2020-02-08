<template>
    <div class="add">
        <h2>商品添加</h2>
        <p>商品id:<input type="text" v-model="id"></p>
        <p>商品名称:<input type="text" v-model="name"></p>
        <p>商品价格:<input type="text" v-model="price"></p>
        <p>商品库存:<input type="text" v-model="number"></p>
        <p><input type="button" value="添加" @click="add()"></p>
    </div>
</template>

<script>
import Bus from '@/Bus'
export default {
    name:'Add',
    data() {
        return {
            arr:JSON.parse(localStorage.getItem("goods"))||[],
            name:'',
            price:'',
            number:'',
            id:''

        }
    },
    methods: {
        add(){
            //思路
            //存储的格式[{},{},{}]
            //1.如果为空不能添加
            if(this.name==""||this.price==""||this.number==""){
                return false
            }
            //判断id是否重复
            var index=this.arr.findIndex((item,key,arr)=>{
                return this.id == item.id
            })
            if(index>-1){
                alert("id重复了")
                return false
            }

            //2.组合新对象
            var obj={id:this.id,name:this.name,price:this.price,number:this.number
            ,addtime:new Date()}
            console.log(obj)
            //3.将对象unshift()数组中
            this.arr.unshift(obj)
            //4.将数组存储到localStorage中
            localStorage.setItem("goods",JSON.stringify(this.arr))
            //5.清空所有的页面数据
            this.name=this.price=this.number=this.id=""
            //通知list组件更新数据
            Bus.$emit("all",this.arr)
        }
    },
    created() {
        Bus.$on("del",(res)=>{
            this.arr=res
        })
    },
}
</script>

<style lang="scss">
    
</style>