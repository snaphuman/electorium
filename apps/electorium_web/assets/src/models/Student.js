import { Model } from '@vuex-orm/core';

export default class Student extends Model {

    static entity  = 'students';

    static primayKey = 'address';

    static fields () {

        return {

            address: this.attr(''),
            name: this.attr(''),
            lastname: this.attr(''),
            email: this.attr(''),
            course: this.attr(''),
            isCandidate: this.attr(false),
            votedAt: this.number(0)
            //vote: this.attr('')
        };
    };
};
