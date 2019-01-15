<template>
    <div>
    <el-dialog :title="title" :visible="shopVisible" @update:visible="fn">
        <el-form label-width="100px" >
            <el-form-item label="店铺类别" >
                <el-select v-model="typeId" placeholder="请选择"  >
                    <el-option
                        v-for="item in $store.state.shop.shopTypeListAll"
                        :key="item._id"
                        :label="item.shopTypeName"
                        :value="item._id">
                    </el-option>
                 </el-select>
            </el-form-item>
            <el-form-item label="店铺名称">
                <el-input v-model="shopName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺图片" >
                <el-upload
                    class="upload-demo"
                    action=""
                    :limit="1"
                    ref="upload"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <img :src="shopPic | picUrl" alt="" v-if="isImg" class="dialogImg">
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:shopVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addShop">提 交</el-button>
        </div>
    </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "shopManage",
        props:["shopVisible","row","row1"],
        data(){
          return{
              title:'添加店铺',
              typeId:"",
              shopName:'',
              shopPic:'',
              shopTypeName:'',
              isImg:false
          }
        },
        mounted(){//获取店铺类别列表
            // this.$store.dispatch("getShopTypeList")
        },
        methods:{
            fn(){
               this.$emit('update:shopVisible',false)
            },
            addShop(){
                var formdata=new FormData();
                formdata.set("shopName",this.shopName)
                formdata.set("shopPic",document.querySelector(".el-upload__input").files[0]);
                formdata.set("shopTypeId",this.typeId)
                formdata.set("shopTypeName",this.shopTypeName)
                formdata.set("shopTypeName",document.querySelector("input[placeholder='请选择']").value);
                var url="/addShop"
                try{
                    if(this.row1._id){
                        url="/upShopById"
                        formdata.set("id",this.row1._id)
                    }
                }catch(error){

                }

                this.$ajax.post(url,formdata)
                    .then((data)=>{
                        if(data.ok==1){
                            this.$message({
                                message: '添加店铺成功',
                                type: 'success'
                            })
                            //表单提交后清除
                            this.typeId=''
                            this.shopName=''
                            try{
                                this.row1._id=""
                            }catch(err){

                            }
                            this.$emit('update:shopVisible',false);
                            this.$store.dispatch("getShopList")
                            if(this.$refs.upload)
                                this.$refs.upload.clearFiles();
                        }else{
                            alert(data.msg)
                        }
                    })
            }
        },
        watch:{
            row:{
                handler(){
                    this.shopName=this.row.shopName || "";
                    this.shopTypeName=this.row.shopTypeName
                    this.typeId=this.row._id;
                    if(this.$refs.upload)
                        this.$refs.upload.clearFiles();
                },
                deep:true
            },
            row1:{//修改
                handler(){
                    this.$store.dispatch("getShopTypeList",{pageNum:1000})
                    this.shopName=this.row1.shopName || "";
                    this.shopTypeName=this.row1.shopTypeName
                    this.typeId=this.row1.shopTypeId;
                    this.shopPic=this.row1.shopPic
                    this.title=this.row1._id?"修改店铺":"添加店铺";
                    this.isImg=this.row1._id?true:false;
                    if(this.$refs.upload)
                        this.$refs.upload.clearFiles();
                },
                deep:true
            }
        }
    }
</script>

<style scoped>

</style>
