import { Model } from '@vuex-orm/core';
import Student from './Student';

export default class Candidate extends Model {

    static entity = 'candidates';

    static fields () {

        return {

            id: this.uid(),
            nomination: this.attr(''),
            proposal: this.attr(''),
            photo: this.attr(''),
            student_id: this.attr(''),
            student: this.hasOne(Student, 'student_id')
        };
    }
}
