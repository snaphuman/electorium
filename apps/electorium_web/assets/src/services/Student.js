import * as Crypto from '@aeternity/aepp-sdk/es/utils/crypto';
import Student from '@/models/Student';
import Candidate from '@/models/Candidate';
import CandidateForm from '@/components/Dashboard/CandidateForm';

export default {

    data: function() {
        return {
            candidateData: {},
            student: {},
            keypair: {}
        };
    },

    components: { CandidateForm },

    props: [ 'students' ],

    methods: {

        genKeypair() {
            this.keypair = Crypto.generateKeyPair();
        },
        save() {

            let student = Object.assign(this.student, this.keypair);
            console.log(student);
            console.log(this.candidateData);

            try {
                Student.insert({ data: student });
                if (this.student.isCandidate){

                    let candidate = Object.assign(this.candidateData, {publicKey: student.publicKey});

                    Candidate.insert({
                        data: candidate});
                }

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
    },

    created() {
        this.genKeypair();
    }

};
