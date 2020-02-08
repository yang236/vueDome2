<template>
  <div>
      <h1>我是two</h1>
      <button @click="sen">点击</button>
  </div>
</template>

<script>
export default {
   
    data(){
        return{
            inp:'好像是这样的'
        }
    },
    methods:{
        sen(){
            console.log(this.inp)
            this.$emit("wy",this.inp)
        }
    }
}
</script>

<style>

</style>