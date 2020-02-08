<template>
  <div class="hello">
    <h1>主组件</h1>
    <h1>{{str}}</h1>
    <one :sb="arr"></one>
    <two @wy="text"></two>
  </div>
</template>

<script>
import one from './one'
import two from './two'
export default {
  name: 'HelloWorld',
  components:{one,two},
  data () {
    return {
      arr:[
        {id:1,name:"王阳"},
        {id:2,name:"王阳1"}
      ],
      str:''
    }
  },
  methods:{
    text(str){
      this.str=str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
