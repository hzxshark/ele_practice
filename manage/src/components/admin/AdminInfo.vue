<template>
    <div>
        <el-col class="toolbar">
            <el-form :inline="true">
                <el-input type="text" style="width:200px" v-model="keyWord"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="searchByKeyword">搜 索</el-button>
                <el-button type="primary" @click="backList" >返回列表</el-button>
                <el-button type="primary" @click="dialogFormVisible = true">添 加</el-button>
            </el-form>
        </el-col>
        <el-table
            :data="$store.state.admin.adminInfoList"
            stripe
            style="width: 100%">
            <el-table-column  type="index" label="#"></el-table-column>
            <el-table-column
                prop="adminName"
                label="管理者名称"
                width="140">
            </el-table-column>
            <el-table-column
                prop="_id"
                label="编号"
                width="230">
            </el-table-column>
            <el-table-column label="添加时间"  width="240">
            <div slot-scope="scope">
                {{scope.row.addTime | date}}
            </div>
            </el-table-column>
            <el-table-column label="最后登陆时间"  width="240">
            <div slot-scope="scope">
                {{scope.row.addTime | date}}
            </div>
            </el-table-column>
            <el-table-column
                prop="cpl"
                label="CPL(当前权限点)"
                width="180">
            </el-table-column>
            <el-table-column label="管理" width = '120'>
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" circle size="small"></el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" circle size="small"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <page dis="getAdminInfoList"></page>
        <!--——————————————以下是弹窗———————————————————-->
        <el-dialog title="添加管理者" :visible.sync="dialogFormVisible" class="warp_dialog">
            <el-form :model="adminForm" label-width="100px" >
                <el-form-item label="管理者账户名" >
                    <el-input v-model="adminForm.adminName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" >
                    <el-input v-model="adminForm.passWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="CPL" >
                    <el-select v-model="cplList" placeholder="请选择">
                        <el-option
                        v-for="item in cplList"
                        :key="item"
                        :label="item"
                        :value="item"
                        :disabled="item===1">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAdminInfo">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AdminInfo",
        data(){
            return {
                dialogFormVisible:false,
                keyWord:"",
                adminForm:{
                    adminName:"",
                    passWord:""
                },
                cplList:[1,2,3,4,5]
            }
        },
        methods:{
            //返回搜索钱的结果
            backList(){
                this.$store.dispatch("getAdminInfoList");
                this.keyWord="";
            },
            searchByKeyword(){
                var val=this.keyWord
                this.$store.dispatch("getAdminInfoList",{keyWord:val})
            },
            addAdminInfo(){
                this.$ajax.post("/addAdminInfo",{
                    adminName:this.adminForm.adminName,
                    passWord:this.adminForm.passWord,
                    // cpl:this.cpl,
                }).then((data)=>{
                    if(data.ok==1){
                        this.dialogFormVisible=false
                        this.adminForm.adminName=""
                        this.adminForm.passWord=""
                        // this.adminForm.cpl=""
                        this.$store.dispatch("getAdminInfoList",this.$store.state.page.pageIndex)
                        this.$message({
                            message: '添加管理员信息成功！',
                            type: 'success'
                        })
                    }else{
                        alert(data.msg)
                    }
                })
            },
            handleDelete(row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //这里表示可以删除，然后进行ajax调用
                    this.$ajax.get("/delAdminInfo",{
                        params:{
                            id:row._id
                        }
                    }).then((data)=>{
                        if(data.ok==1){
                            this.$store.dispatch("getAdminInfoList",{pageIndex:this.$store.state.page.pageIndex})
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                        }else{
                            alert(data.msg)
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

        },
        mounted(){
            this.$store.dispatch("getAdminInfoList")
        }
    }
</script>

<style scoped>
    .warp_dialog{
        width:60%;
        margin:0 auto;
    }
</style>
