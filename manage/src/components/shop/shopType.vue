<template>
    <el-dialog :title="title"   @update:visible="visibleFn" :visible="dialogFormVisible">
        <el-form :model="form" label-width="120px" name="myForm" >
            <el-form-item label="店铺类型名称" >
                <el-input v-model="form.shopTypeName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺类型图片">
                <el-upload
                    class="upload-demo"
                    v-model="form.shopTypePic"
                    action=""
                    :limit="1"
                    ref="upload"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <img :src="form.shopTypePic | picUrl" alt="" v-if="this.row._id" class="dialogImg">
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:dialogFormVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addShopTypeInfo">提 交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "shopType",
        props:["dialogFormVisible","row"],
        data(){
            return {
                title:"添加店铺类型",
                form:{
                    shopTypeName:"",
                    shopTypePic:''
                },
            }
        },
        methods:{
            addShopTypeInfo(){
                var formdata=new FormData()
                formdata.set("shopTypeName",this.form.shopTypeName);
                formdata.set("shopTypePic",document.querySelector(".el-upload__input").files[0]);
                var url="/addShopTypeInfo"
                if(this.row._id){
                    url="/upShopTypeById"
                    formdata.set("id",this.row._id)
                }
                this.$ajax.post(url,formdata)
                    .then((data)=>{
                        if(data.ok==1){
                            //提交后关闭弹窗
                            this.$emit('update:dialogFormVisible',false)
                            this.$store.dispatch("getShopTypeList")
                            this.$message({
                                message:data.msg,
                                type: 'success'
                            })
                        }else{
                            alert(data.msg)
                        }
                    })
            },
            visibleFn(){
                this.$emit('update:dialogFormVisible',false)
            }
        },
        watch:{
            row:{
                handler(){
                    this.form.shopTypeName=this.row.shopTypeName || "";
                    this.title=this.row._id?"修改店铺类型":"添加店铺类型";
                    this.form.shopTypePic=this.row.shopTypePic ||""
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
