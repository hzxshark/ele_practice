// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './Login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Bus from "@/common/Bus"
import store from "@/vuex"


//全局组件
import shopManage from '@/components/shop/shopManage'//添加修改店铺弹窗
import page from '@/components/common/page'     //分页
import shopType from '@/components/shop/shopType' //店铺类别弹窗
import goodsTypeDialog from '@/components/goods/goodsTypeDialog' // 商品类别添加修改弹窗
import goodsDialog from '@/components/goods/goodsDialog'
import filters from '@/common/filters'


//定义全局组件
Vue.component('page',page)
Vue.component('shopType',shopType)
Vue.component('shopManage',shopManage)
Vue.component('goodsTypeDialog',goodsTypeDialog)
Vue.component('goodsDialog',goodsDialog)

//原型的方法
Vue.prototype.$ajax = axios
Vue.prototype.$Bus=Bus


Vue.config.productionTip = false
Vue.use(ElementUI)

//filters全局过滤器
for(var key in filters){
    Vue.filter(key,filters[key])
}


//拦截器实现的loading效果




//拦截器实现对请求的地址处理和响应结果的过滤
axios.interceptors.request.use((config)=>{
   config.url="http://127.0.0.1"+config.url;
    return config
})
axios.interceptors.response.use((res)=>{
    return res.data
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data: {
        login:false
    },
    methods:{
        init(){ //初始化的函数，判断是否登录
            if(localStorage.adminId){
                this.login=true
            }else{
                this.login=false
            }
        }
    },
    mounted(){
         this.init()
        this.$Bus.$on("init",this.init)
    },
    router,
    store,
    components: {App, Login},
    template: `<components :is="login?'App':'Login'"></components>`
})
