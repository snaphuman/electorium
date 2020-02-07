import { Model } from '@vuex-orm/core';
import Candidate from './Candidate';

export default class Student extends Model {

    static entity  = 'students';

    static fields () {

        return {

            id: this.uid(),
            publicKey: this.attr(''),
            secretKey: this.attr(''),
            name: this.attr(''),
            last_name: this.attr(''),
            email: this.attr(''),
            course: this.attr(''),
            isCandidate: this.attr(false),
            votedAt: this.number(0),
            candidate_id: this.attr(''),
            candidate: this.belongsTo(Candidate, 'candidate_id')
            //vote: this.attr('')
        };
    };
};
