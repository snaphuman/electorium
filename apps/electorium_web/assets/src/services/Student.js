import Student from '@/models/Student';
import Candidate from '@/models/Candidate';
import CandidateForm from '@/components/Dashboard/CandidateForm';

export default {

    data: function() {
        return {
            candidateData: {},
            student: {}
        };
    },

    components: { CandidateForm },

    props: [ 'students' ],

    methods: {

        save() {
            try {
                Student.insert({ data: this.student });
                if (this.student.isCandidate)
                    Candidate.insert({
                        data: this.candidateData});

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
