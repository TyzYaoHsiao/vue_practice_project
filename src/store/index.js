import Vuex from 'vuex'

const state = {
    sum: 0
}

const actions = {
    add(context, value) {
        context.commit('ADD', value);
    },
    reset(context) {
        context.commit('RESET');
    }
}

const mutations = {
    ADD(state, value) {
        state.sum = state.sum + value;
    },
    RESET(state) {
        state.sum = 0;
    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})