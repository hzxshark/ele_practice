<template>
    <nav class="common_footer">
        <router-link to="/">首页</router-link>
        <router-link to="/discover">发现</router-link>
        <router-link to="/order">订单</router-link>
        <router-link to="/my">我的</router-link>
    </nav>
</template>

<script>
    export default {
        name: "FootNav",

    }
</script>

<style scoped>
    .common_footer>a{
        width:25%;
        float:left;
    }
    .common_footer{
        width:100%;
        position:fixed;
        bottom:0;
        height:0.7rem;
        border-top:1px solid #f7f7f7;
        box-shadow:0 1px 5px 3px #e2e2e2;
        background:#fff;

    }
</style>
