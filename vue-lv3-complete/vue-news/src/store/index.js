import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        show: [],
        user: {},
        item: {},
        list: []
    },
    getters: {
        // fetchedNews(state) {
        //     return state.news;
        // },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
})