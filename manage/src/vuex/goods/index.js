import Vue from "vue"
import axios from "axios"

export default {
    state:{
        goodsTypeList:[],
        goodsList:[]
    },
    mutations:{
        changeGoodsTypeList(state,data){
            state.goodsTypeList=data.goodsTypeList
        },
        changeGoodsList(state,data){
            state.goodsList=data.goodsList
        }
    },
    actions:{
        getGoodsTypeList({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8;
            var keyWord=obj.keyWord ||"";
            axios.get("/getGoodsTypeList",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord
                }
            })
                .then(data=>{
                    commit("changeGoodsTypeList",data)
                    commit("changePageInfo",data)
                    commit("changeLoading",false)
                })
        },
        getGoodsList({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8;
            var keyWord=obj.keyWord ||"";
            axios.get("/getGoodsList",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord
                }
            })
                .then(data=>{
                    commit("changeGoodsList",data)
                    commit("changePageInfo",data)
                    commit("changeLoading",false)
                })
        },
        getGoodsTypeByShop({state,commit},shopId){
            axios.get("/getGoodsTypeByShop",{
                params:{
                    shopId
                }
            }).then(data=>{
                commit("changeGoodsTypeList",data)
                commit("changePageInfo",data)
                commit("changeLoading",false)
            })
        },
        getGoodsListByShop({state,commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8;
            var keyWord=obj.keyWord ||"";
            axios.get("/getGoodsListByShop",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord
                }
            })
                .then(data=>{
                    commit("changeGoodsList",data)
                    commit("changePageInfo",data)
                    commit("changeLoading",false)
                })
        },
    }
}
