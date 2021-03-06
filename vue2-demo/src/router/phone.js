import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'
Vue.use(Router)
const noexsit          = r => require.ensure([], () => r(require('phone/pages/noexsit/children/noexsit')), 'phone/no-exsit');
const index_user       = r => require.ensure([], () => r(require('phone/pages/index/children/user')), 'phone/index-main');

const routes = [
    {
        path     : '/m/index',
        component: index_user,
        name     : '',

    },
    {
        path     : '/m/noexsit',
        component: noexsit,
        name     : ''
    },
    {
        path     : '*',
        component: noexsit,
    }
]

export default new Router({
    mode  : routerMode,
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
