import Vue from "vue"
import axios from "axios"

export default {
    state:{
        total:0,
        pageNum:8,
        pageIndex:1
    },
    mutations:{
        changePageInfo(state,data){
           state.total=data.count;
           state.pageNum=data.pageNum
           state.pageIndex=data.pageIndex
        }
    }
}
