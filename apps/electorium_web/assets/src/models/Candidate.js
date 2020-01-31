import { Model } from '@vuex-orm/core';
import Student from './Student';

export default class Candidate extends Model {

    static entity = 'candidates';

    static primaryKey = 'publicKey';

    static fields () {

        return {

            publicKey: this.attr(null),
            nomination: this.attr(''),
            proposal: this.attr(''),
            student: this.belongsTo(Student, 'publicKey', 'publicKey')
        };
    }
}
