import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index'
import Login from '@/components/User/Login'
import Dashboard from '@/components/Dashboard/Index'
import School from '@/components/Dashboard/School'
import SchoolProfile from '@/components/Dashboard/SchoolProfile'
import SchoolForm from '@/components/Dashboard/SchoolForm'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard,
          children:[
              { path: 'school', name: 'School', component: School,
                children: [
                    { path: '', name: 'SchoolProfile', component: SchoolProfile },
                    { path: 'edit', name: 'SchoolForm', component: SchoolForm }
                ]
              },

          ]
        }
    ]
})

