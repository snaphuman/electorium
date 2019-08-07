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

        toggleModal () {

            this.showModal = this.showModal ? false : true;
        },
        showCandidateModal(id) {

            let student = Student.query()
                .where('publicKey', id)
                .get();

            if (student[0].isCandidate === false) return;

            this.toggleModal();
            this.showCandidateForm = true;
        }
    }
};
