<template>
  <div class="hello">
   <h1>欢迎来到XXX后台管理系统</h1>
      <!--<child :name="msg"  @update:fn="v=>msg=v"></child>-->
      <!-- <child :msg="msg"  :msg.sync="msg" ></child> -->
      <!--<child :name="msg"  @fn="change"></child>-->
      <p>管理员： {{admin.adminName}}</p> 
      <p>CPL： 1</p> 
      <p>待处理工单数量： <el-link type="primary">0</el-link></p> 
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
import child from "@/components/child"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      }
    },
   computed:{
        ...mapState(["admin"]),
        child
    },
    methods:{
      change(v){
          this.msg=v
      }
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
