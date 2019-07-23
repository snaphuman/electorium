const state = {
    user: {}
};

const mutations = {
    'SET_USER'(state, user) {
        state.user = user;
    }
};

const actions = {
    setUser: ({commit}, user) => {
        commit("SET_USER", user);
    }
};

const getters = {
    user: state => {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
