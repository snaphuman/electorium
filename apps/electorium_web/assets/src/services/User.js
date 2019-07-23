import User from '@/store/modules/User';

export default {

    data: function() {
        return {
            userList: [],
            user: {}
        };
    },

    methods: {

        save() {
            try {
                this.userList.push(this.user);
                this.$store.dispatch('setUser', this.user);
                this.flash('User Saved', 'success');
            } catch (err) {
                this.flash('Something went wrong', 'error');
                console.log(err);
            }
        }
    },

    created() {

        this.user = User.state.user;
    }
};
