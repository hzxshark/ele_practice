<template>
    <div>
        <header>
            <mt-header fixed>
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
            <div class="shop_logo">
                <img src="../assets/tologin.png" alt="">
            </div>
        </header>
        <section>
            <div class="shop_title">
                <h2>我是店铺名字</h2>
                <p>平评分，销量，配送</p>
                <div class="shop_active">
                    <span>
                        <b>特价</b>
                        <i>单品定价</i>
                    </span>
                    <span>
                        7个优惠
                    </span>
                </div>
                <div class="shop_notice">
                    公告：几号到几号免费送啦allalalalalalalalalallaLALALALLA AKSHKAHS
                </div>
            </div>
        </section>
        <footer>

        </footer>
    </div>
</template>

<script>
    export default {
        name: "shopDetail"
    }
</script>

<style scoped>
    header{
        height:1.4rem;
        background:url("../assets/ele.png");
        position:relative;
    }
    .mint-header{
        height:0.6rem;
        background:rgba(0,0,0,0)
    }
    .shop_logo{
        width:1.1rem;
        height:1.1rem;
        border:1px solid #eee;
        background:#fff;
        position:absolute;
        left:0;
        right:0;
        top:0.6rem;
        margin:0 auto;
    }
    .shop_logo img{
        height:100%;
        width:100%;
    }
    .shop_title{
        width:4.35rem;
        margin:0.45rem auto 0;
    }
    .shop_active{
        display:flex;
        justify-content: space-between;
    }
    .shop_notice{
        width:100%;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
