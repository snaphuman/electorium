import Student from '@/models/Student';

export default {

    data: function() {
        return {
            studentId: ''
        };
    },

    computed: {
        students () {
            return Student.all();
        }
    }
};
