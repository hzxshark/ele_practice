<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                value:"",
                selected:''
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .router-link-exact-active{
        color:#0089FF;;
    }
    .mint-header{
        height:0.6rem;
        background:#0089FF;
        font-size:0.28rem;
    }
    .mint-header-title{
        font-weight: bolder ;
    }
</style>
