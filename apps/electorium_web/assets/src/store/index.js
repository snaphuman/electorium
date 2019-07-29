import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import AEClient from '@/store/modules/AEClient';
import User from '@/models/User';
import Student from '@/models/Student';
import Candidate from '@/models/Candidate';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Student);
database.register(Candidate);

export default new Vuex.Store({

    plugins: [VuexORM.install(database)],
    modules: [ AEClient ]
});
