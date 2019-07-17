const state = {
    account: {},
    accountBalance: 0
};

const mutations = {
    'SET_ACCOUNT'(state, account) {
        state.account = account;
    },
    'SET_ACCOUNT_BALANCE'(state, balance) {
        state.accountBalance = balance;
    }
};

const actions = {
    setAccount: ({commit}, account) => {
        commit("SET_ACCOUNT", account);
    },
    setAccountBalance: ({commit}, balance) => {
        commit("SET_ACCOUNT_BALANCE", balance);
    }
};

const getters = {
    account: state => {
        return state.account;
    },
    accountBalance: state => {
        return state.accountBalance;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
