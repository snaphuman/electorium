import { Model } from '@vuex-orm/core';
import Student from './Student';

export default class Candidate extends Model {

    static entity = 'candidates';

    static primaryKey = 'address';

    static fields () {

        return {

            address: this.attr(''),
            nomination: this.attr(''),
            proposal: this.attr(''),
            student: this.belongsTo(Student, 'address')
        };
    }
}
