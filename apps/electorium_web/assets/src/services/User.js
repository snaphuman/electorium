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
                this.flash('User Saved', 'success');
            } catch (err) {
                this.flash('Something went wrong', 'error');
                console.log(err);
            }
        }
    }
};
