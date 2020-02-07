import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import AEClient from '@/store/modules/AEClient';
import User from '@/models/User';
import Student from '@/models/Student';
import Candidate from '@/models/Candidate';

Vue.use(Vuex);
VuexORM.use(VuexORMAxios, {
    axios,
    baseURL: 'http://127.0.0.1:4000/api/v1/'
});

const database = new VuexORM.Database();

database.register(User);
database.register(Student);
database.register(Candidate);

export default new Vuex.Store({

    plugins: [VuexORM.install(database)],
    modules: [ AEClient ]
});
