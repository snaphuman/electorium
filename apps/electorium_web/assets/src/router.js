import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index'
import Login from '@/components/User/Login'
import Dashboard from '@/components/Dashboard/Index'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard }
    ]
})

