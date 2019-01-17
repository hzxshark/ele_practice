<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-col :span="12" class="logo" @click.native="$router.push('/')"><strong >饿了么后台管理系统</strong></el-col>
                <el-col :span="12" class="admin">欢迎您
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            {{admin.adminInfo.adminName}} <img src="@/assets/pig1.jpg"><i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-header>
            <el-container>
                <el-aside width="200px" >
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-menu-item index="5" @click.native="$router.push('/')">
                            <i class="el-icon-setting" ></i>
                            <span  >首页</span>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-warning"></i>
                                <span>管理员信息</span>
                            </template>
                                <el-menu-item index="1-1" @click.native="$router.push('/AdminLoginLog')">管理员登录日志</el-menu-item>
                                <el-menu-item index="1-2" @click.native="$router.push('/AdminInfo')">管理员信息列表</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>店铺信息</span>
                            </template>
                            <el-menu-item index="2-1" @click.native="$router.push('/shopTypeList')">店铺类别管理</el-menu-item>
                            <el-menu-item index="2-2" @click.native="$router.push('/shopList')">店铺管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>商品信息</span>
                            </template>
                            <el-menu-item index="3-1" @click.native="$router.push('/goodsTypeList')">商品类别管理</el-menu-item>
                            <el-menu-item index="3-2" @click.native="$router.push('/goodsList')">商品管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>用户信息</span>
                            </template>
                            <el-menu-item index="4-1" @click.native="$router.push('/shopTypeList')">用户管理</el-menu-item>
                            <el-menu-item index="4-2" @click.native="$router.push('/AdminInfo')">哈哈哈</el-menu-item>
                        </el-submenu>

                        <el-menu-item index="5" >
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
    export default {
        name: 'App',
        data() {
            return {
                tabPosition: 'left'
            }
        },
        computed:{
            ...mapState(["admin"])
        },
        methods:{
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            exit(){
                this.$store.commit("exit")
                this.$Bus.$emit("init")
            }
        }
    }
</script>

<style>
    *{
        padding:0;
        margin:0;
    }
    html, body, #app, .el-container {
        height: 100%;
    }
    /*工具栏的样式*/
    .toolbar{
        background:#f4f4f4;
        padding:10px;
        margin:10px 0;
        text-align:left;
    }
    .el-header, .el-footer {
        background-color: #409EFF ;
        color: #fff;
        text-align: center;
        height:60px;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        height: 100%
    }
    .el-table__row{
        text-align: center;
    }
    .el-header strong {
        font-size: 20px;
        color: #fff;
    }
    .admin{
        text-align: right;
        padding-right:40px;
    }
    .logo{
        text-align: left;
        padding-left:10px;
    }
    .admin img{
        width:36px;
        height:36px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .el-table th{
        text-align: center;
    }
    .dialogImg{
        height:100px;
    }
    .toolbar .el-form-item{
        margin-bottom:0;
    }
    .el-dialog__header{
        text-align:center;
    }
</style>
