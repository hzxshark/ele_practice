<template>
<div>
    <el-table
        :data="$store.state.admin.adminLoginLogList"
        stripe
        v-loading="$store.state.loading"
        style="width: 100%">
        <el-table-column  type="index" label="#"></el-table-column>

        <el-table-column label="登陆时间"  width="300">
            <div slot-scope="scope">
                {{scope.row.loginTime | date}}
            </div>
        </el-table-column>
        <el-table-column
            prop="adminName"
            label="管理者账户"
            width="200">
        </el-table-column>
        <el-table-column
            prop="_id"
            label="流水号">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
             <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" circle size="small"></el-button>
             <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" circle size="small"></el-button>
            </template>
        </el-table-column>
    </el-table>
    <page dis="getAdminLogList"></page>
</div>

</template>

<script>
    export default {
        name: "adminLoginLogList",
        mounted(){
            this.$store.dispatch("getAdminLogList")
        },
        methods:{
            handleDelete(row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //这里表示可以删除，然后进行ajax调用
                    this.$ajax.get("/delAdminLoginInfo",{
                        params:{
                            id:row._id
                        }
                    }).then((data)=>{
                        if(data.ok==1){
                            this.$store.dispatch("getAdminLogList",{pageIndex:this.$store.state.page.pageIndex})
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
        }
    }
</script>

<style >
.el-table th>.cell{
    text-align: left;
}
</style>
