import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index'
import Login from '@/components/User/Login'
import Dashboard from '@/components/Dashboard/Index'
import School from '@/components/Dashboard/School'
import SchoolProfile from '@/components/Dashboard/SchoolProfile'
import SchoolForm from '@/components/Dashboard/SchoolForm'
import UserProfile from '@/components/User/Profile'
import Student from '@/components/Dashboard/Student'
import StudentList from '@/components/Dashboard/StudentList'
import StudentProfile from '@/components/Dashboard/StudentProfile'
import StudentForm from '@/components/Dashboard/StudentForm'
import CandidateForm from '@/components/Dashboard/CandidateForm'
import CandidateList from '@/components/Shared/CandidateList'
import CandidateProfile from '@/components/Shared/CandidateProfile'
import ResetPassword from '@/components/User/ResetPassword'

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
              {
                path: 'student', name: 'Student', component: Student,
                children: [
                    { path: 'list', name: 'StudentList', component: StudentList },
                    { path: 'edit/:id', name: 'StudentProfile', component: StudentProfile },
                    { path: 'edit', name: 'StudentForm', component: StudentForm },
                    { path: 'set-candidate', name: 'CandidateForm', component: CandidateForm }
                ]
              },
              { path: 'user', name: 'UserProfile', component: UserProfile },
              { path: 'reset-password', name: 'ResetPassword', component: ResetPassword}
          ]
        },
        { path: '/candidate/add', name: 'CandidateForm', component: CandidateForm },
        { path: ':id', name: 'CandidateProfile', component: CandidateProfile }
    ]
})

