// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Tabbar, TabItem} from 'mint-ui';
import {Header} from 'mint-ui';

import axios from "axios"
import filters from '@/common/filters'
import FootNav from '@/components/common/FootNav'
import shopList from '@/components/common/shopList'
import Headcom from "@/components/common/Headcom"
import ToLogin from "@/components/ToLogin"

import '@/assets/style/common.css'
import store from './vuex'

// 引入公共组件


//设为公共组件

Vue.component('FootNav', FootNav)
Vue.component('shopList',shopList)
Vue.component('ToLogin',ToLogin)
Vue.component('Headcom',Headcom)
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$ajax=axios;

//拦截器拦截请求
axios.interceptors.request.use((config)=>{
    config.url="http://127.0.0.1"+config.url;
    return config
})
axios.interceptors.response.use((res)=>{
    return res.data
})

//filters全局过滤器
for(var key in filters){
    Vue.filter(key,filters[key])
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
