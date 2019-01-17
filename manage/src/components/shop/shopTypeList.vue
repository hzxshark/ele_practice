<template>
    <div>
        <el-col class="toolbar">
            <el-form :inline="true">
                <el-input type="text" style="width:200px" v-model="keyWord"></el-input>
                <el-button type="primary"  icon="el-icon-search" @click="searchShopType">搜 索</el-button>
                <el-button type="primary" @click="backList" >返回列表</el-button>
                <el-button type="primary" @click="handleAdd">添加类别</el-button>
            </el-form>
        </el-col>
        <el-table
            :data="$store.state.shop.shopTypeList"
            stripe
            v-loading="$store.state.loading"
            style="width: 100%">
            <el-table-column  type="index" label="#"></el-table-column>
            <el-table-column
                prop="shopTypeName"
                label="店铺类别名称"
                width="180">
            </el-table-column>
            <el-table-column label="店铺类别图片">
              <div slot-scope="scope">
                  <img :src="scope.row.shopTypePic | picUrl" alt="">
              </div>
            </el-table-column>
            <el-table-column label="添加时间"  width="220">
                <div slot-scope="scope">
                    {{scope.row.addTime | date}}
                </div>
            </el-table-column>
            <el-table-column label="修改时间"  width="220">
                <div slot-scope="scope">
                    {{scope.row.upTime | date}}
                </div>
            </el-table-column>
            <el-table-column
                label="操作"
                width="300">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" circle size="small"></el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" circle size="small"></el-button>
                    <el-button type="primary" @click="handleAddShop(scope.row)" size="small">添加店铺</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--下面是翻页-->
        <page dis="getShopTypeList"></page>
        <!--添加店铺类别弹窗-->
        <shop-type :dialogFormVisible.sync="dialogFormVisible" :row="row" ></shop-type>
        <!--添加店铺弹窗-->
        <shop-manage :shopVisible.sync="shopVisible" :row="row"></shop-manage>
    </div>
</template>

<script>
    export default {
        name: "shopTypeList",
        data(){
            return {
                row:{},
                shopVisible:false,
                dialogFormVisible:false,
                keyWord:""
            }
        },
        methods:{
            handleAddShop(row){
                // console.log(11111,row)
                this.shopVisible=true
                this.row=row
            },
            handleAdd(){
                this.row={};
                this.dialogFormVisible = true
            },
            //点击编辑
            handleClick(row){
                this.dialogFormVisible = true;
                this.row=row
            },
            handleDelete(row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //这里表示可以删除，然后进行ajax调用
                    this.$ajax.get("/delShopTypeInfo",{
                        params:{
                            id:row._id
                        }
                    }).then((data)=>{
                        if(data.ok==1){
                            this.$store.dispatch("getShopTypeList",{pageIndex:this.$store.state.page.pageIndex})
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
            searchShopType(){
                var val=this.keyWord
                this.$store.dispatch("getShopTypeList",{pageIndex:1,keyWord:val})
            },
            //返回搜索钱的结果
            backList(){
                this.$store.dispatch("getShopTypeList");
                this.keyWord="";
            }
        },
        mounted(){
           this.$store.dispatch("getShopTypeList")
        }
    }
</script>

<style scoped>
    img{
        height:70px;
    }
</style>
