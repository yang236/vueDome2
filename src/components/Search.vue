<template>
    <input type="text" @keyup.enter="search()" v-model="keys">

</template>

<script>

export default {
    name:'Search',
    data() {
        return {
            keys:""
        }
    },
   methods: {
       search(){
           var arr=JSON.parse(localStorage.getItem("goods"))
           var data=[]
           for(var i in arr){
              if( arr[i].name.indexOf(this.keys)>=0){
                  data.push(arr[i])
              }
           }
           this.$emit("fun",data)
       }
   },
}
</script>

<style lang="scss">
    
</style>