<template>
    <div>
        <mt-header :title="title" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <nav class="shopdetail_nav">
            <ul>
                <li>全部</li>
            </ul>
        </nav>
        <div>
            广告
        </div>
        <shopList></shopList>
    </div>
</template>

<script>
    export default {
        name: "shopTypeDetail",
        data(){
            return {
                title:"美食（这个要变）"
            }
        }
    }
</script>

<style scoped>
    .shopdetail_nav{
        margin-top:0.6rem;
    }
</style>
