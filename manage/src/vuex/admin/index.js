import Vue from "vue"
import axios from "axios"


export default {
    state:{
        adminInfoList:[],
        adminLoginLogList:[],
        adminName:localStorage.adminName,
        adminId:localStorage.adminId,
    },
    mutations:{
        exit(state){
            localStorage.removeItem('adminName')
            localStorage.removeItem('adminId')
            // state.adminName=""
            // state.adminId=""
        },
        changeLogList(state,data){
            state.adminLoginLogList=data.adminLoginLogList
        },
        changeAdminInfo(state,data){
            console.log(data.adminInfoList)
            state.adminInfoList=data.adminInfoList
        }
    },
    getters:{

    },
    actions:{
        getAdminLogList({commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8
            Vue.prototype.$ajax.get("/getAdminLogList",{
                params:{
                    pageIndex,
                    pageNum
                }}).then((data)=>{
                commit("changeLogList",data)
                commit("changePageInfo",data)
                commit("changeLoading",false)
            })
        },
        getAdminInfoList({commit},obj={}){
            var pageIndex=obj.pageIndex || 1;
            var pageNum=obj.pageNum || 8
            var keyWord=obj.keyWord ||""
            Vue.prototype.$ajax.get("/getAdminInfoList",{
                params:{
                    pageIndex,
                    pageNum,
                    keyWord
                }
            }).then((data)=>{//获取成功后，改变adminInfoList的状态，
                    commit("changeAdminInfo",data);
                    commit("changePageInfo",data)
                })
        }
    }
}
