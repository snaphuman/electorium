import Vue from 'vue';
import Vuex from 'vuex';
import AEClient from '@/store/modules/AEClient.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: [
        AEClient
    ]
});
