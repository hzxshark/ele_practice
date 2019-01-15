<template>
    <mt-header :title="title">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
</template>

<script>
    export default {
        name: "headcom",
        data(){
            return {
                title:''
            }
        }
    }
</script>

<style scoped>

</style>
