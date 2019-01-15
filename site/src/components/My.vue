<template>
    <div id="My">
        <mt-header :title="title" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="my_info">
            <aside>
                <img src="../assets/ele.png" alt="">
            </aside>
            <div class="my_content" v-if="!isLogin">
                <h2 @click="toLogin">登录/注册</h2>
                <p>登录后享受更多特权</p>
            </div>
            <div class="my_content" v-if="isLogin">
                <h2>{{phoneId}}</h2>
                <p>{{phoneId}}</p>
            </div>
            <div class="my_turn">
                <i> ></i>
            </div>

        </div>
        <div class="my_option">
            <ul>
                <li>钱包</li>
                <li>红包</li>
                <li class="last_li">金币</li>
            </ul>
        </div>
        <section>
            <div>
                <mt-cell title="我的地址" icon="more" is-link></mt-cell>
            </div>
            <div>
                <mt-cell title="金币商城" icon="more" is-link></mt-cell>
                <mt-cell title="分享拿十元现金" icon="more" is-link></mt-cell>
            </div>
            <div>
                <mt-cell title="我的客服" icon="more" is-link></mt-cell>
                <mt-cell title="下载饿了么APP" icon="more" is-link></mt-cell>
            </div>
        </section>
        <FootNav></FootNav>
    </div>
</template>

<script>
    export default {
        name: "My",
        data(){
            return{
                isLogin:false,
                phoneId:"",
                title:"我的"
            }
        },
        methods:{
            toLogin(){
                this.$router.push("/login");
            }
        },
        mounted(){
            if(localStorage.phoneId){
                this.isLogin=true
                this.phoneId=localStorage.phoneId.substr(0,3)+"****"+localStorage.phoneId.substr(7);
            }else{
                this.isLogin=false
            }
        }
    }
</script>

<style scoped>
    #My{
        background-color:#f5f5f5;
    }
    .my_info{
        width:100%;
        height:1.65rem;
        background:#008dff;
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-top:0.6rem;
    }
    .my_option>ul{
        display:flex;
        justify-content: space-around;
        border-bottom:1px solid #dedede ;
    }
    .my_option>ul>li{
        height:0.7rem;
        border-right:1px solid #dedede;
        width:33%;
        font-size:0.17rem;
        font-weight:bolder;
        color:#797979;
    }
   .my_option ul .last_li{
        border-right:0;
   }
   section{
       display: flex;
       flex-direction: column;
       padding-top:0.15rem;
   }
   aside img{
       width:0.87rem;
       height:0.87rem;
       border-radius: 50%;
   }
   aside{
       float:left;
       margin-left:0.2rem;
   }
    .my_turn{
        margin-right:0.2rem;
        color:white;
    }
    .my_content{
        color:white;
        margin-left:-2rem;
        text-align: left;
    }
    h2{
        font-size: 0.3rem;
        font-weight: bolder;
    }
    .my_content p{
        font-size:0.17rem;
        line-height:0.3rem;
    }
    .mint-cell{
        ;text-align:left
    }
    section div:nth-of-type(2),section div:nth-of-type(3){
        margin-top:0.15rem;
    }
</style>
