import { Model } from '@vuex-orm/core';

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
            //vote: this.attr('')
        };
    };
};
