import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        shopList:[],
        shopTypeList:[],
        shopTypeList2:[],
        shopCount:0
    },
    mutations:{
        changeTypeList(state,data){
            state.shopTypeList=data.shopTypeList
        },
        changeTypeList2(state,data){
            state.shopTypeList2=data.shopTypeList
        },
        changeShopList(state,data){
            state.shopList=data.shopList
        }
    },
    getters:{

    },
    actions:{
        //获取所有的店铺列表
        getShopListByType({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8;
            var keyWord=obj.keyWord ||"";
            var shopType=obj.shopType||"";
            Vue.prototype.$ajax.get("/getShopList",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord,
                    shopType
                }
            }).then((data)=>{
                commit("changeShopList",data)
            })
        },
        getShopTypeList({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var keyWord=obj.keyWord || ""
            var pageNum=obj.pageNum || 8;
            Vue.prototype.$ajax.get("/getShopTypeList",{
                params:{
                    pageIndex,
                    keyWord,
                    pageNum
                }
            }).then((data)=>{
                if(data.pageIndex==1){
                    commit("changeTypeList",data)
                }else if(data.pageIndex==2){
                    commit("changeTypeList2",data)
                }

            })
        },
        //获取一种类型的店铺列表
        getShopListByTypeId({state,commit},shopTypeId){
            Vue.prototype.$ajax.get("/getShopListByTypeId",{
                params:{
                    shopTypeId
                }
            }).then((data)=>{
                commit("changeShopList",data)
            })
        }
    }
})
