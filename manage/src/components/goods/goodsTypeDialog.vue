<template>
    <div>
        <el-dialog :title="title" :visible="goodsTypeVisible" @update:visible="$emit('update:goodsTypeVisible',false)" class="warp_dialog">
            <el-form label-width="100px">
                <el-form-item label="店铺名称" >
                    <el-select v-model="shopId" placeholder="请选择"  >
                        <el-option
                            v-for="item in $store.state.shop.shopList"
                            :key="item._id"
                            :label="item.shopName"
                            :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品类型名称" >
                    <el-input  v-model="goodsTypeName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('update:goodsTypeVisible',false)">取 消</el-button>
                <el-button type="primary" @click="addGoodsType">提 交</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "goodsTypeDialog",
        props:["goodsTypeVisible","row"],
        data(){
            return{
                title:"添加商品类别",
                shopId:'',
                goodsTypeName:"",
            }
        },
        methods:{
            addGoodsType(){
                var url="/addGoodsType";
                var obj={
                    shopId:this.shopId,
                    goodsTypeName:this.goodsTypeName,
                    shopName:document.querySelector("input[placeholder='请选择']").value
                }
                console.log(this.row._id)
                if(this.row._id){
                    url="/upGoodsTypeById";
                    obj.id=this.row._id
                }
                this.$ajax.post(url,obj).then((data)=>{
                   if(data.ok==1){
                       this.$emit('update:goodsTypeVisible',false)
                       this.$store.dispatch("getGoodsTypeList")
                       this.$message({
                           message:data.msg,
                           type: 'success'
                       })
                   }else{
                       alert(data.msg)
                   }
                })
            }

        },
        watch:{
            row:{
              handler(){
                  console.log(111)
                  this.goodsTypeName=this.row.goodsTypeName
                  this.shopId=this.row.shopId
                  this.title=this.row._id?"修改商品类别":"添加商品类别";
              },
              deep:true
            }
        },
        mounted(){
            this.$store.dispatch("getShopList",{pageNum:10000})
        }
    }
</script>

<style scoped>
    .warp_dialog{
        width:60%;
        margin:0 auto;
    }
</style>
