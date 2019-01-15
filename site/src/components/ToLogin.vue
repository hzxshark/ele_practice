<template>
    <div>
        <div>
            header
        </div>
        <div>
            <img src="../assets/tologin.png" alt="">
        </div>
        <p>登陆后查看外卖订单</p>
        <mt-button type="primary" @click="toLogin">立即登录</mt-button>
        <FootNav></FootNav>
    </div>
</template>

<script>
    export default {
        name: "ToLogin" ,
        methods:{
            toLogin(){
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
    .mint-button--primary{
        background-color:#4cd96f;
        font-size:0.21rem;
        height:0.5rem;
        width:1.7rem;
    }
    p{
        font-size:0.25rem;
        color:#6c6c6c;
        line-height:0.5rem;
    }
    div img{
        display:inline-block;
        text-align:center;
    }
</style>
