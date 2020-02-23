import Student from '@/models/Student';
import Candidate from '@/models/Candidate';

export default {

    data: function() {
        return {
            candidate: {},
            student: {},
        };
    },

    methods: {

        async save() {

            try {
                let candidate = Object.assign(this.candidate, this.student);
                console.log(candidate);
                const result = await Candidate.api().post('candidates', candidate);
                console.log(result.response.status);
                console.log(result.entities);
                this.flash('Candidate Saved', 'success');

            } catch(err) {
                this.flash('Something went wrong', 'error');
                console.log(err);

            }
        }
    }
};
