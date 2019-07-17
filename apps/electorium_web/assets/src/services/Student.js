export default {

    data: function() {
        return {
            studentList: [],
            student: {}
        };
    },

    props: [ 'students' ],

    methods: {

        save() {
            try {
                this.studentList.push(this.student);
                this.flash('Student Saved', 'success');
            } catch (err) {
                this.flash('Something went wrong', 'error');
                console.log(err);
            }
        }
    },

    watch: {
        studentList: function () {
            this.$emit('update:students', this.studentList);
        }
    }

};
