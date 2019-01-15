<template>
    <div>
        <div class="shop_filter">
            <ul>
                <li>综合排序</li>
                <li>距离最近</li>
                <li>品质联盟</li>
                <li>筛选</li>
            </ul>
        </div>
        <section>
            <ul>
                <li v-for="item in $store.state.shopList">
                    <aside>
                        <img :src="item.shopPic | picUrl" alt="">
                    </aside>
                    <div class="shop_right" >
                        <div class="shop_info">
                            <p class="shop_title"><b>{{item.shopName}}</b><span>...</span></p>
                            <p>评级 月售2000单</p>
                            <p class="shop_address"><i>￥20起送 | 配送费￥5</i><span>2.4km | 36分钟</span></p>
                            <p class="shop_keyWord"><em>盖浇饭</em> <span>口碑好店</span></p>
                        </div>
                        <div class="activity">
                            <p>新用户下单立减17元</p>
                            <p>满37减17，满100减23</p>
                            <span ><i>4</i>个活动</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "shopList",
        mounted(){

        }
    }
</script>

<style scoped>
    .shop_filter{
        height:0.6rem;
        padding:0 0.22rem 0;
        border-bottom: 1px solid #eee;
    }
    .shop_filter>ul{
        display: flex;
        justify-content: space-between;
    }
    .shop_filter>ul>li{
        font-size:0.2rem;
        line-height:0.6rem;
    }
    section li{
        width:100%;
        display:flex;
        padding:0.2rem 0 ;
        border-bottom:1px solid #eee;
    }
    li aside{
        width:22%
    }
    aside img{
        width:80%;
        margin-left:10%;
        border:1px solid #ddd;
        border-radius:5px;
    }
    .shop_right{
        text-align:left;
        width:75%;
        padding-right:3%;
    }
    .shop_right p{
        line-height:0.32rem;
    }
    .shop_title,.shop_address{
        display:flex;
        justify-content: space-between;
    }
    .shop_title b{
        font-size:0.22rem;
        font-weight:bolder
    }
    .shop_info{
        border-bottom:1px dashed #eee;
    }
    em{
        padding:0 0.05rem;
        border:1px solid #ddd;
    }
    .shop_keyWord span{
        color:#e8470b;
    }
    .activity{
        position:relative;
    }
    .activity span{
        position:absolute;
        top:0;
        right:0;
        line-height:0.32rem;
    }
    section ul{
        margin-bottom:0.7rem;
    }
</style>
