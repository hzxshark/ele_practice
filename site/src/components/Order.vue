<template>
    <div>
        <mt-header :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <ToLogin v-if="!isLogin"></ToLogin>
        <div v-if="hadOrder && isLogin" class="hadOrder">
            <img src="../assets/order.png" alt="">
            <p>近三个月无外卖订单</p>
            <p>查看三个月前的外卖订单</p>
        </div>

        <FootNav></FootNav>
    </div>

</template>

<script>

    export default {
        name: "Order",
        data(){
            return {
                isLogin:true,
                hadOrder:true,//判断有没有订单
                title:"订单"
            }
        },
        // mounted(){
        //     //挂载之前首先判断一下是否登录
        //     if(!localStorage.phoneId){
        //         this.$router.push("/toLogin");
        //     }
        // }
        mounted(){
            if(!localStorage.phoneId){
                this.isLogin=false
            }
        }

    }
</script>

<style scoped>
    .hadOrder{
        display:inline-block;
    }
    .hadOrder img{
        width:2.9rem;
        margin-top:1.5rem;
    }
</style>
