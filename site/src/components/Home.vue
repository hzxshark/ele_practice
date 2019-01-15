<template>
    <div class="home_box">
        <mt-header :title="title">
            <router-link to="/address" slot="left">
                <mt-button>地址哈哈哈</mt-button>
            </router-link>
        </mt-header>
        <mt-search
            v-model="value"
            cancel-text=""
            placeholder=" 搜索商家、商品名称"
            @input="toSearch">
        </mt-search>
        <div class="home_banner">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <!--<input type="button" value="点我去type详情" @click="toTypeDetail">-->
                    <!--{{$store.state.shopTypeList}}-->
                    <ul class="home_main">
                        <li v-for="item in $store.state.shopTypeList" @click="toTypeDetail(item._id)">
                            <img :src="item.shopTypePic | picUrl" alt="">
                            <p>{{item.shopTypeName}}</p>
                        </li>
                    </ul>
                </mt-swipe-item>
                <mt-swipe-item>
                    <ul class="home_main">
                        <li v-for="item in $store.state.shopTypeList2" @click="toTypeDetail(item._id)">
                            <img :src="item.shopTypePic | picUrl" alt="">
                            <p>{{item.shopTypeName}}</p>
                        </li>
                    </ul>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="home_adv">
            <div class="adv_pic">
                <p><img src="../assets/advImg/change1.jpg" alt=""></p>
                <p><img src="../assets/advImg/change2.jpg" alt=""></p>
            </div>
            <div class="adv_banner">
                <mt-swipe :show-indicators="false">
                    <mt-swipe-item>
                        <img src="../assets/advImg/change3.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/advImg/change4.png" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="recommend">
            推荐商家
        </div>
        <shopList></shopList>
        <FootNav></FootNav>
    </div>

</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                value: '',
                title:"",
            }
        },
        methods:{
            toTypeDetail(shopTypeId){
                this.$router.push({path:"/shopTypeDetail"});
                this.$store.dispatch("getShopListByTypeId",shopTypeId)
            },
            toSearch(){
                this.$router.push("/search")
            },
        },
        mounted(){
            this.$store.dispatch("getShopTypeList",{pageNum:10});
            this.$store.dispatch("getShopTypeList",{pageIndex:2,pageNum:10})
            this.$store.dispatch("getShopListByType")
        }

    }
</script>

<style>
    .mint-searchbar {
        background-color: #0089FF;
        border:0;
        z-index:0;
    }
    .mint-search{
        border:0;
        height:100%;
    }
    .home_banner{
        width: 100%;
        height:2.5rem;
    }
    .home_adv{
        width:5.12rem;
        margin:0 auto;
    }
    .adv_pic{
        display: flex;
        justify-content: space-between;
    }
    .adv_pic p{
        width:2.5rem;
        height:2rem;
        background:#999;
    }
    .adv_pic p img{
        width:100%;
        height:100%;
    }
    .adv_banner{
        height:1.27rem;
        margin-top:0.1rem;
    }
    .adv_banner img{
        width:100%;
        height:100%;
    }
    .recommend{
        height:0.7rem;
        font-size:0.21rem;
        color:#000;
        line-height:0.7rem;
        text-align: center;
    }
    .home_main li{
        float:left;
        width:20%;
        height:1rem;
        padding-top:0.2rem;
    }
    .home_main li img{
        height:0.55rem;
        width:0.55rem;
        display:inline-block;
        line-height:0.9rem;
    }
</style>
