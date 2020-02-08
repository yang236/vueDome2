<template>
    <div class="list">
        <Sort :listdata="list" :fl="flag" @setflag="setFlag"></Sort>
            <Search @fun="search"></Search>
        <table border="1" cellspacing="0" cellpadding="0" class="tab">
            <tr>
                <td>id</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>商品库存</td>
                <td>添加时间</td>
                <td>操作</td>
            </tr>
            <tr v-for="(item,key) in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.number}}</td>
                <td>{{item.addtime|timeout}}</td>
                <td><Del :k="key" @fun="getData"></Del></td>
            </tr>
        </table>
    </div>
</template>
<script>
import Bus from '@/Bus'
import Del from '@/components/Del'
import Sort from '@/components/Sort'
import Search from '@/components/Search'

export default {
    name:'List',
    components:{Del,Sort,Search},
    data() {
        return {
            list:JSON.parse(localStorage.getItem("goods"))||[],
            flag:true
        }
    },
    created() {
        Bus.$on("all",(res)=>{
            this.list=res
        })
    },
    methods: {
        getData(){
        //获取所有的数据
        this.list=JSON.parse(localStorage.getItem("goods"))||[]
    
        },
        setFlag(){
            this.flag=!this.flag
        },
        search(data){
            this.list=data
        }
    },
    
    filters:{
        timeout(val){
            var date = new Date(val)
            console.log(val)
                var year=date.getFullYear();
                var month=date.getMonth()+1;
                var day=date.getDate();
                var hour=date.getHours();
                var min=date.getMinutes();
                var s=date.getSeconds();
                var time = year+"-"+month+"-"+day+" "+hour+":"+min+":"+s
                console.log(time)
            return time
        }
        

    }
}
</script>

<style lang="scss" scoped>
    .tab{
        width: 600px;
        height: 40px;
        margin-top: 10px;
        text-align: center;
        line-height: 40px;
    }
</style>