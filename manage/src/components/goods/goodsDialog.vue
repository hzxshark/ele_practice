<template>
<div>
    <el-dialog :title="title" :visible="goodsVisible" @update:visible="$emit('update:goodsVisible',false)">
        <el-form :inline="true">
            <el-form-item style="width:50%" label="店铺名称">
                <el-select  v-model="shopId" placeholder="请选择店铺名称" @change="getGoodsType">
                    <el-option
                        v-for="item in $store.state.shop.shopList"
                        :key="item._id"
                        :label="item.shopName"
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品类型">
                <el-select  v-model="goodsTypeId" placeholder="请选择商品类别">
                    <el-option
                        v-for="item in $store.state.goods.goodsTypeList"
                        :key="item._id"
                        :label="item.goodsTypeName"
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品名称" style="width:50%">
                <el-input v-model="goodsName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="goodsPrice" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否热销" style="width:50%">
                <el-radio v-model="isHot" label="1">是</el-radio>
                <el-radio v-model="isHot" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="是否优惠" >
                <el-radio v-model="isCheap" label="1">是</el-radio>
                <el-radio v-model="isCheap" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="商品图片" style="width:50%">
                <el-upload
                    class="upload-demo"
                    action=""
                    :limit="1"
                    ref="upload"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <img :src="goodsPic | picUrl" alt="" v-if="isImg" class="dialogImg">
            </el-form-item>
            <el-form-item label="商品描述" >
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入对该商品的描述"
                    v-model="goodsTxt">
                </el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:goodsVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addGoods">提 交</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
    export default {
        name: "goodsDialog",
        props:["goodsVisible","row1","row"],//row1是商品类型那过来添加商品的,row是修改商品的参数
        data(){
          return{
              isImg:false,
              title:"添加商品",
              isCheap:"2",
              isHot:"2",
              goodsTxt:"",
              shopId:'',
              goodsTypeId:'',
              goodsName:'',
              goodsPrice:'',
              goodsPic:''
          }
        },
        methods:{
            addGoods(){
                var formdata=new FormData();
                formdata.set("shopName",document.querySelector("input[placeholder='请选择店铺名称']").value);
                formdata.set("goodsTypeName",document.querySelector("input[placeholder='请选择商品类别']").value);
                formdata.set("shopId",this.shopId)
                formdata.set("goodsTypeId",this.goodsTypeId)
                formdata.set("goodsName",this.goodsName)
                formdata.set("goodsPrice",this.goodsPrice)
                formdata.set("isHot",this.isHot)
                formdata.set("isCheap",this.isCheap)
                formdata.set("goodsPic",document.querySelector(".el-upload__input").files[0]);
                formdata.set("goodsTxt",this.goodsTxt)

                var url="/addGoods"
                try{
                    if(this.row._id){
                        url="/upGoodsById"
                        formdata.set("id",this.row._id)
                    }
                }catch(error){
                }
                this.$ajax.post("/addGoods",formdata)
                    .then((data)=>{
                        console.log(data)
                        if(data.ok==1){
                            this.$message({
                                message: '添加商品成功',
                                type: 'success'
                            })
                            if(this.$refs.upload)
                                this.$refs.upload.clearFiles();
                            try{
                                this.row._id=""
                            }catch(err){

                            }
                            this.$store.dispatch("getGoodsList")
                            this.$emit('update:goodsVisible',false)
                        }else{
                            alert(data.msg)
                        }
                    })
            },
            getGoodsType(){
                console.log("我执行了")
               this.$store.dispatch("getGoodsTypeByShop",this.shopId)
            }
        },
        watch:{
          row1:{
              handler(){
                  this.shopId=this.row1.shopId;
                  this.goodsTypeId=this.row1._id
              },
              deep:true
          },
            row:{           //row是修改商品的参数
              handler(){
                  this.shopId=this.row.shopId;
                  this.goodsTypeId=this.row.goodsTypeId;
                  this.title=this.row._id?"修改商品信息":"添加商品信息";
                  this.isImg=this.row._id?true:false;
                  this.goodsPic=this.row.goodsPic;
                  this.goodsName=this.row.goodsName;
                  this.goodsPrice=this.row.goodsPrice;
                  this.goodsTxt=this.row.goodsTxt;
                  this.isHot=this.row.isHot;
                  this.isCheap=this.row.isCheap
                  if(this.$refs.upload)
                      this.$refs.upload.clearFiles();
              }
            }
        },
        mounted(){
            this.$store.dispatch("getShopList",{pageNum:10000})
            this.$store.dispatch("getGoodsTypeList",{pageNum:10000})
        }
    }
</script>

<style scoped>

</style>
