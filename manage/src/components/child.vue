<template>

    <div>
        {{msg}} <input type="button" value="改变世界" @click="change">
    </div>
</template>

<script>

    export default {
        name: "child",
        props:["msg"],
        methods:{
            change(){
                this.$emit("update:msg","我既世界")
                //this.$emit("fn","我既世界")
            }
        }
    }
</script>

<style scoped>

</style>
