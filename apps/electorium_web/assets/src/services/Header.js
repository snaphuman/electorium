import MainNav from '@/components/Header/MainNav'
import UserNav from '@/components/Header/UserNav'
import AdminNav from '@/components/Header/AdminNav'

export default {
    computed: {
        isRouteName: function () {
            return this.$route.name
        }
    },
    components: {
        MainNav,
        UserNav,
        AdminNav
    }
}
