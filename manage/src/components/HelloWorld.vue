<template>
  <div class="hello">
   <h1>欢迎来到饿了么后台管理系统</h1>
      <!--<child :name="msg"  @update:fn="v=>msg=v"></child>-->
      <child :msg="msg"  :msg.sync="msg" ></child>
      <!--<child :name="msg"  @fn="change"></child>-->


  </div>
</template>

<script>

    import child from "@/components/child"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods:{
      change(v){
          this.msg=v
      }
    },
    components:{
      child
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
