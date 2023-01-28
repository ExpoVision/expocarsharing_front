import axios from 'axios'

export default {
    namespaced: true,
    state: {
        userProfileInfo: {}
    },
    getters: {
        getUserProfileInfo: state => state.userProfileInfo
    },
    mutations: {
        setUserProfileInfo(state, payload) {
            state.userProfileInfo = payload
        }
    },
    actions: {
        // BlackFlag заменить endpoints
        async fetchUserProfileInfo({ getters, commit }) {
            try {
                const { data } = await axios.get('endpoint', getters.token)
                commit('setUserProfileInfo', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updateProfile({ dispatch }, payload) {
            try {
                const { data } = await axios.post('endpoint', payload)
                dispatch('setUserProfileInfo', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updatePassword(_, payload) {
            try {
                await axios.post('endpoint', payload)
                // todo
            } catch (e) {
                console.log(e)
            }
        },
        async updateCard(_, payload) {
            try {
                await axios.post('endpoint', payload)
            } catch (e) {
                console.log(e)
            }
        },
    },
}