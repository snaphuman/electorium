import User from '@/models/User';

export default {

    data: function() {
        return {
            user: {}
        };
    },

    methods: {

        save() {
            try {
                User.insert({ data: this.user });
                this.flash('User Saved', 'success');
            } catch (err) {
                this.flash('Something went wrong', 'error');
                console.log(err);
            }
        }
    },

    created() {

        this.user = User.query().last() || {};
    }
};
