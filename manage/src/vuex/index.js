import Vue from "vue"
import Vuex from "vuex"
import admin from "@/vuex/admin"
import shop from "@/vuex/shop"
import page from "@/vuex/page"
import goods from "@/vuex/goods"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        loading:true
    },
    mutations:{
        changeLoading(state,isLoading){
            state.loading=isLoading;
        }
    },
    modules:{
        admin,
        page,
        shop,
        goods
    }
})
