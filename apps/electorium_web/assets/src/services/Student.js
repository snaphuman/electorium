import Student from '@/store/modules/Student';
import CandidateForm from '@/components/Dashboard/CandidateForm';

export default {

    data: function() {
        return {
            studentList: [],
            candidateData: {},
            student: {}
        };
    },

    components: { CandidateForm },

    props: [ 'students' ],

    methods: {

        save() {
            try {
                this.studentList.push(this.student);
                this.$store.dispatch('setStudent', Object.assign(this.student, this.candidateData));
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
