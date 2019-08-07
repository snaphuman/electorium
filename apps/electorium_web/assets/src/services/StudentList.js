import Student from '@/models/Student';
import Candidate from '@/models/Candidate';
import CandidateForm from '@/components/Dashboard/CandidateForm';

export default {

    data: function() {
        return {
            showModal: false,
            showCandidateForm: false,
            candidateData: {}
        };
    },

    components: { CandidateForm },

    computed: {
        students () {
            return Student.all();
        }
    },

    methods: {

        showCandidateModal(id) {
            console.log(id);
            this.showModal = this.showCandidateForm = true;
        }
    }
};
