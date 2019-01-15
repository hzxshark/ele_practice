import Vue from "vue"
import axios from "axios"

export default {
    state:{
        shopTypeList:[],
        shopList:[],
        shopListAll:[],
        shopTypeListAll:[]
    },
    mutations:{
        changeTypeList(state,data){
            if(data.pageNum>100){
                state.shopTypeListAll=data.shopTypeList
            }else{
                state.shopTypeList=data.shopTypeList
            }

        },
        changeShopList(state,data){
            // if(data.pageNum>100){
            //     state.shopListAll=data.shopList
            // }else{
                state.shopList=data.shopList
            // }

        }
    },
    actions:{
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
                commit("changeTypeList",data)
                commit("changeLoading",false)
                if(data.pageNum<100){
                    commit("changePageInfo",data)
                }



            })
        },
        getShopList({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8;
            var keyWord=obj.keyWord ||"";
            Vue.prototype.$ajax.get("/getShopList",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord
                }
            }).then((data)=>{
                    commit("changeShopList",data)
                    commit("changeLoading",false)
                    if(data.pageNum<100){
                        commit("changePageInfo",data)
                    }
                })
        }
    }
}
