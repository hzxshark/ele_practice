<template>
    <div>
        <el-col :span="24" class="toolbar">
            <el-form :inline="true">
                <el-form-item>
                    <el-input type="text" v-model="keyWord"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="searchByKeyword">搜索</el-button>
                </el-form-item>
                <el-button type="primary" @click="backList" >返回列表</el-button>
                <el-form-item>
                    <el-button type="primary" @click="addShop">添加店铺</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table
            :data="$store.state.shop.shopList"
            stripe
            v-loading="$store.state.loading"
            style="width: 100%">
            <el-table-column  type="index" label="#"></el-table-column>
            <el-table-column
                prop="shopName"
                label="店铺名称"
                width="140">
            </el-table-column>
            <el-table-column label="店铺图片" width="220">
                <div slot-scope="scope">
                    <img :src="scope.row.shopPic | picUrl" alt="">
                </div>
            </el-table-column>
            <el-table-column label="店铺类别"   prop="shopTypeName" width="180">
            </el-table-column>
            <el-table-column label="添加时间"  width="200">
                <div slot-scope="scope">
                    {{scope.row.addTime | date}}
                </div>
            </el-table-column>
            <el-table-column label="修改时间"  width="200">
                <div slot-scope="scope">
                    {{scope.row.upTime | date}}
                </div>
            </el-table-column>
            <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" circle size="small"></el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" circle size="small"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--页数-->
        <page dis="getShopList"></page>
        <!--弹窗-->
        <shopManage :shopVisible.sync="shopVisible" :row1="row1"></shopManage>
    </div>
</template>

<script>
    export default {
        name: "shopList",
        methods:{
            searchByKeyword(){
                var val=this.keyWord
                this.$store.dispatch("getShopList",{keyWord:val})
            },
            //返回搜索钱的结果
            backList(){
                this.$store.dispatch("getShopList");
                this.keyWord="";
            },
            addShop(){
                this.shopVisible=true
                this.row1={}
            },
            handleClick(row){
                this.shopVisible = true;
                this.row1=row
            },
            handleDelete(row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //这里表示可以删除，然后进行ajax调用
                    this.$ajax.get("/delShopInfo",{
                        params:{
                            id:row._id
                        }
                    }).then((data)=>{
                        if(data.ok==1){
                            this.$store.dispatch("getShopList",{pageIndex:this.$store.state.page.pageIndex})
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
        data(){
            return {
                row1:{},
                shopVisible:false,
                keyWord:''
            }
        },
        mounted(){
            this.$store.dispatch("getShopList")
        }
    }
</script>

<style >
    img{
        height:80px;
    }
    .el-table th>.cell{
    text-align: left;
    }
</style>
