
import Vue from "vue"
export default {
    currency(v,moneyType="￥"){
        v=v*1
        return moneyType+v.toFixed(2)
    },
    date(v){
        return new Date(v).toLocaleString()
    },
    picUrl(v){
        return "http://127.0.0.1/"+v
    },
    hotCheap(v){
        if(v=="1"){
            return "是"
        }else if(v=="2"){
            return "否"
        }
    }

}
