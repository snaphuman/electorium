import { Model } from '@vuex-orm/core';

export default class Candidate extends Model {

    static entity = 'candidates';

    static fields () {

        return {

            id: this.uid(),
            nomination: this.attr(''),
            proposal: this.attr(''),
            photo: this.attr('')
        };
    }
}
