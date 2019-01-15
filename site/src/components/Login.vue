<template>
    <div>
        <div class="login_img">
            <img src="../assets/login_logo.jpg" alt="">
        </div>
        <div class="login_title">
            <span>短信登录</span>
        </div>
        <div class="login_phone">
            <input type="text" placeholder="手机号" v-model="phoneId" @change="changeBack"/>
            <input type="button" value="获取验证码" @click="sendMessage" id="getMessage" :class="login_class">
        </div>
        <div class="login_message">
            <input type="text" placeholder="请输入验证码" v-model="valiCode">
        </div>
        <div class="login_content">
            <p>
                温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<a href="">《用户服务协议》</a>
            </p>
         </div>
        <div>
            <mt-button type="primary" @click="login">登 录</mt-button>
        </div>
        <div class="login_aboutUs">
            <p>关于我们</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                phoneId:"",
                valiCode:'',
                login_class:''
            }
        },
        methods:{
            //获取验证码 可以利用样式作为判断条件，或者class值
            sendMessage(){
                if(this.login_class=="allowClick"){
                    this.$ajax.post("/sendCode",{
                        phoneId:this.phoneId
                    }).then((data)=>{
                        console.log(data)
                        if(data.ok==1){
                            this.valiCode=data.valiCode
                        }
                    })
                }
            },
            //登录
            login(){
                this.$ajax.post("/userLogin",{
                    phoneId:this.phoneId,
                    valiCode:this.valiCode
                }).then((data)=>{
                    if(data.ok==1){
                        console.log(data)
                        localStorage.token=data.token;
                        localStorage.phoneId=data.phoneId;
                        this.$router.history.go(-1)
                    }else{
                        alert(data.msg)
                    }
                })
            },
            changeBack(){
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(myreg.test(this.phoneId)){
                    this.login_class="allowClick"
                }else{
                    this.login_class="";
                    alert("请输入正确的手机号")
                }
            }
        }
    }
</script>

<style scoped>
    .login_img{
        margin-top:0.75rem;
        width:100%;
    }
    .login_img>img{
        display: inline-block;
        width:1.9rem;
        height:0.8rem;
        text-align:center;
    }
    .login_title>span{
        font-weight: bolder;
        display: inline-block;
        font-size:.2rem;
        color:#2395ff;
        border-bottom: 0.03rem solid #2395ff ;
        line-height:1.5em;
    }
    .login_title{
        margin-top:0.6rem;
    }
    input[type="text"]{
        height:0.6rem;
        width:3.95rem;
        border:1px solid #ddd;
        margin-top:0.2rem;
        border-radius: 0.05rem;
        padding-left:0.15rem;
    }
    div .mint-button--primary{
        background-color:#4cd96f;
        height:0.55rem;
        width:4.1rem;
    }
    .login_content p{
        margin:0 auto;
        width:4.1rem;
    }
    .login_content{
        margin:0.2rem 0 0.2rem;
    }
    .login_aboutUs{
        margin:0.32rem;
    }
    #getMessage{
        border-radius: 0.05rem;
        position:absolute;
        padding:0 0.15rem;
        right:-0.01rem;
        top:0.21rem;
        background:#fff;
        border:0;
        height:0.6rem;
        color:#cecece;
    }
    .login_phone{
        width:4.1rem;
        margin:0 auto;
        position:relative;
    }
    .login_message{
        width:4.1rem;
        margin:0 auto;
    }
    .allowClick{
        background:#2395ff !important;
        color:#fff !important;
    }
</style>
