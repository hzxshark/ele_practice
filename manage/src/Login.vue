<template>
<el-form label-width="100px" class="demo-ruleForm" :model="loginForm" :rules="rules" ref="valiLoginForm">
    <h3>欢迎登录XXX后台管理系统</h3>
    <br>
    <el-form-item label="用户名" prop="adminName">
        <el-input type="text" v-model="loginForm.adminName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="loginForm.passWord"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="loginFn('valiLoginForm')">登录</el-button>
    </el-form-item>
</el-form>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                loginForm:{
                    adminName:"",
                    passWord:""
                },
                rules:{
                    adminName:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 4, max: 16, message: '用户名长度必须4-16个字符', trigger: 'blur' }
                    ],
                    passWord:[
                        { min: 4, max: 16, message: '密码长度必须4-12个字符', trigger: 'blur' },
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            loginFn(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$ajax.post("/login",{
                            adminName:this.loginForm.adminName,
                            passWord:this.loginForm.passWord
                        }).then((data)=>{
                            if(data.ok==1){//login success -> set localStorage
                                localStorage.adminName=data.adminName;
                                localStorage.adminId=data.adminId
                                this.$Bus.$emit("init")
                            }else{
                                alert(data.msg)
                            }
                        })
                    }else{
                        alert("输入的用户名或密码不正确")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .demo-ruleForm{
        border-radius: 10px;
        padding:0 50px 0 0;
        text-align:center;
        border:1px solid dodgerblue;
        width:500px;
        margin:30px auto;
    }
</style>
