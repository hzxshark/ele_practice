import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order'
import My from '@/components/My'
import Discover from '@/components/Discover'
import Login from '@/components/Login'
import ToLogin from '@/components/ToLogin'
import shopTypeDetail from '@/components/shopTypeDetail'
import Search from '@/components/home/Search'
import Address from '@/components/home/Address'
import ShopDetail from '@/components/ShopDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/discover',
            name: 'Discover',
            component: Discover
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/tologin',
            name: 'ToLogin',
            component: ToLogin
        },
        {
            path: '/shopTypeDetail',
            name: 'shopTypeDetail',
            component: shopTypeDetail
        },
        {
            path:"/search",
            name:"Search",
            component:Search
        },
        {
            path:'/address',
            name:'Address',
            component:Address
        },
        {
            path:'/shopDetail',
            name:'shopDetail',
            component:ShopDetail
        }

    ]
})
