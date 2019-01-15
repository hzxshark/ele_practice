<template>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="$store.state.page.total"
        :page-size="$store.state.page.pageNum"
        :current-page="$store.state.page.pageIndex/1"
        @current-change="fn"
    >
    </el-pagination>
</template>
<!-- :current-page="$store.state.page.pageIndex"-->
<script>
    export default {
        name: "page",
        props:["dis"],
        methods:{
            fn(pageIndex){
                this.$store.dispatch(this.dis,{pageIndex:pageIndex})
    }
        },
    }
</script>

<style scoped>
    .el-pagination{
        text-align:right;
    }
</style>
