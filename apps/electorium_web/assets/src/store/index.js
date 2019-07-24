import Vue from 'vue';
import Vuex from 'vuex';
import AEClient from '@/store/modules/AEClient';
import User from '@/store/modules/User';
import Student from '@/store/modules/Student';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: [
        AEClient,
        User,
        Student
    ]
});
