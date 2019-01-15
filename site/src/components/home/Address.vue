<template>
    <div>
        <mt-header :title="title" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right">新增地址</mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: "Address",
        data(){
            return {
                title:"选择收货地址"
            }
        }
    }
</script>

<style scoped>

</style>
