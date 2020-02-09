import Student from '@/models/Student';

export default {

    data: function() {
        return {
            students: [],
            studentId: ''
        };
    },

    methods: {
        async getStudents() {
            let students = Student.all();
            if (students.lenght != 0) {
                try {
                    const result = await Student.api().get('students');
                    students = result.entities.students;
                } catch (err) {
                    this.flash('Something went wrong', 'error');
                    console.error(err);
                };
            };

            return students;
        }
    },
    computed: {
        updateStudents: function() {
            return this.getStudents();
        }
    },
    async created() {
        this.students = await this.getStudents();
    }
};
