import { Model } from '@vuex-orm/core';

export default class User extends Model {

    static entity = 'users';

    static fields () {

        return {

            id: this.attr(null),
            fullName: this.attr(''),
            userName: this.attr(''),
            email: this.attr('')
        };
    }
}
