import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminLoginLog from '@/components/admin/adminLoginLogList'
import AdminInfo from '@/components/admin/AdminInfo'
import shopTypeList from '@/components/shop/shopTypeList'
import shopList from '@/components/shop/shopList'
import goodsTypeList from '@/components/goods/goodsTypeList'
import goodsList from '@/components/goods/goodsList'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/AdminLoginLog',
            name: 'AdminLoginLog',
            component: AdminLoginLog
        },
        {
            path: '/shopTypeList',
            name: 'shopTypeList',
            component: shopTypeList
        },
        {
            path: '/AdminInfo',
            name: 'AdminInfo',
            component: AdminInfo
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: shopList
        },
        {
            path: '/goodsTypeList',
            name: 'goodsTypeList',
            component: goodsTypeList
        },
        {
            path: '/goodsList',
            name: 'goodsList',
            component: goodsList
        },
    ]
})
