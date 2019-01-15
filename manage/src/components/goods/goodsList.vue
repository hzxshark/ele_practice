<template>
    <div>
        <el-col class="toolbar">
            <el-form :inline="true">
                <el-form-item label="店铺名称" >
                    <el-select v-model="typeId" placeholder="请选择" @change="getGoodsListByShop">
                        <el-option
                            v-for="item in $store.state.shop.shopList"
                            :key="item._id"
                            :label="item.shopName"
                            :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-input type="text" style="width:200px" v-model="keyWord"></el-input>
                <el-button type="primary"  icon="el-icon-search" @click="searchByKeyword">搜 索</el-button>
                <el-button type="primary" @click="backList" >返回列表</el-button>
                <el-button type="primary" @click="addGoods">添加商品</el-button>
            </el-form>
        </el-col>
            <!--列表-->
            <el-table
                :data="$store.state.goods.goodsList"
                stripe
                v-loading="$store.state.loading"
                style="width: 100%">
                <el-table-column  type="index" label="#"></el-table-column>
                <el-table-column label="商品图片" width="140">
                <div slot-scope="scope">
                    <img :src="scope.row.goodsPic | picUrl" alt="">
                </div>
                </el-table-column>
                <el-table-column
                    prop="goodsName"
                    label="商品名称"
                    width="100">
                </el-table-column>

                <el-table-column label="价格" width="80">
                    <div slot-scope="scope">
                        {{scope.row.goodsPrice |currency}}
                    </div>
                </el-table-column>
                <el-table-column label="商品描述"   prop="goodsTxt" width="130">
                </el-table-column>
                <el-table-column label="是否打折" width="80">
                    <div slot-scope="scope">
                        {{scope.row.isCheap |hotCheap}}
                    </div>
                </el-table-column>
                <el-table-column label="是否热销" width="80">
                    <div slot-scope="scope">
                        {{scope.row.isHot |hotCheap}}
                    </div>
                </el-table-column>
                <el-table-column label="商品类别"   prop="goodsTypeName" width="90">
                </el-table-column>
                <el-table-column label="所属店铺"   prop="shopName" width="90">
                </el-table-column>
                <el-table-column label="添加时间"  width="106">
                    <div slot-scope="scope">
                        {{scope.row.addTime | date}}
                    </div>
                </el-table-column>
                <el-table-column label="修改时间"  width="106">
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


        <!--添加商品弹窗-->
        <goodsDialog :goodsVisible.sync="goodsVisible" :row="row"></goodsDialog>
        <!--翻页-->
        <page dis="getGoodsList"></page>
    </div>
</template>

<script>
    export default {
        name: "goodsList",
        data(){
            return {
                row:{},
                keyWord:'',
                goodsVisible:false,
                typeId:''
            }
        },
        methods:{
            getGoodsListByShop(){//通过店铺类型检索
                this.$store.dispatch("getGoodsListByShop",{keyWord:this.typeId})
                this.typeId=""
            },
            //返回搜索钱的结果
            backList(){
                this.$store.dispatch("getGoodsList");
                this.keyWord="";
            },
            searchByKeyword(){
                var val=this.keyWord
                this.$store.dispatch("getGoodsList",{pageIndex:1,keyWord:val})
            },
            addGoods(){
                this.row={}
                this.goodsVisible=true

            },
            handleClick(row){
                this.goodsVisible=true
                this.row=row
            },
            handleDelete(row){//删除
                this.$ajax.post("/delGoodsInfo",{
                    id:row._id
                }).then(data=>{
                    console.log(data)
                    if(data.ok==1){
                        this.$store.dispatch("getGoodsList")
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
                    this.$ajax.post("/delGoodsInfo",{
                        id:row._id
                    }).then(data=>{
                        console.log(data)
                        if(data.ok==1){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.$store.dispatch("getGoodsList")
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
            // this.$store.dispatch("getShopList",{pageNum:10000})
            this.$store.dispatch("getGoodsList")
        }
    }
</script>

<style scoped>
    img{
        height:70px;
    }
</style>
