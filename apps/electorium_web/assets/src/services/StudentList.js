import Student from '@/models/Student';
import Candidate from '@/models/Candidate';

export default {

    computed: {
        students () {
            return Student.all(); 
        }
    }
};
