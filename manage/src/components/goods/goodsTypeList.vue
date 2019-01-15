<template>
    <div>
        <el-col class="toolbar">
            <el-form :inline="true">
                <el-input type="text" style="width:200px" v-model="keyWord"></el-input>
                <el-button type="primary"  icon="el-icon-search" @click="searchGoodsType">搜 索</el-button>
                <el-button type="primary" @click="backList" >返回列表</el-button>
                <el-button type="primary" @click="handleAdd">添加商品类别</el-button>
            </el-form>
        </el-col>
        <el-table
            :data="$store.state.goods.goodsTypeList"
            stripe
            v-loading="$store.state.loading"
            style="width: 100%">
            <el-table-column  type="index" label="#"></el-table-column>
            <el-table-column
                prop="goodsTypeName"
                label="商品类别名称"
                width="140">
            </el-table-column>
            <el-table-column label="所属店铺"   prop="shopName" width="230">
            </el-table-column>
            <el-table-column label="添加时间"  width="230">
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
                    <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row)" size="small"></el-button>
                    <el-button type="primary" @click="handleAddGoods(scope.row)"size="small">添加商品</el-button>
                </template>
            </el-table-column>
        </el-table>


        <!--下面是翻页-->
        <page dis="getGoodsTypeList"></page>
        <!--这是弹窗  // 根据row的状态来判断是添加还是修改-->
        <goodsTypeDialog :goodsTypeVisible.sync="goodsTypeVisible" :row="row"></goodsTypeDialog>
        <!--这是添加商品的弹窗-->
        <goodsDialog :goodsVisible.sync="goodsVisible" :row1="row1"></goodsDialog>
    </div>
</template>

<script>
    export default {
        name: "goodsTypeList",
        data(){
            return {
                row1:{},//这个是添加商品的row
                row:{},//这个是添加商品类别的row
                keyWord:'',
                goodsTypeVisible:false,
                goodsVisible:false
            }
        },
        methods:{
            //返回搜索钱的结果
            backList(){
                this.$store.dispatch("getGoodsTypeList");
                this.keyWord="";
            },
            handleDelete(row){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //这里表示可以删除，然后进行ajax调用
                    this.$ajax.post("/delGoodsTypeInfo",{
                            id:row._id
                    }).then((data)=>{
                        if(data.ok==1){
                            this.$store.dispatch("getGoodsTypeList",{pageIndex:this.$store.state.page.pageIndex})
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
            searchGoodsType(){
                var val=this.keyWord
                this.$store.dispatch("getGoodsTypeList",{keyWord:val})
            },
            handleAdd(){
                this.row={};
                this.goodsTypeVisible=true
            },
            handleClick(row){
               this.goodsTypeVisible=true;
               this.row=row
            },
            handleAddGoods(row){
                this.goodsVisible=true
                this.row1=row
            }
        },
        mounted(){
            this.$store.dispatch("getGoodsTypeList")
        }
    }
</script>

<style scoped>

</style>
