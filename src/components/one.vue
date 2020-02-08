<template>
  <div>
      <h1>我是one</h1>
      <ul>
          <li v-for="(item,index) in sb">
              {{item.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:["sb"],
    data(){
        return{
            inp:'好像是这样的'
        }
    }
}
</script>

<style>

</style>