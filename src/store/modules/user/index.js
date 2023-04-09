import axios from 'axios'
const TOKEN_KEY = 'token'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem(TOKEN_KEY),
        userProfileInfo: {},
        user: null
    },
    getters: {
        token: (state) => {
            return state.token
        },
        getUser: (state) => {
            return state.user ?? JSON.parse(localStorage.getItem('user'))
        },
        isAuth: (_, getters) => {
            return !!getters.token
        },
        getUserProfileInfo: state => state.userProfileInfo
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);
        },
        setUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        },
        setUserProfileInfo(state, payload) {
            state.userProfileInfo = payload.data
        }
    },
    actions: {
        async login({ commit }, payload) {
            try {
                const { data } = await axios.post('/login', payload)
                commit('setToken', data.token)
                commit('setUser', data.user)
            } catch (e) {
                console.log(e)
            }
        },
        async signup({ commit }, payload) {
            try {
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }
                const { data } = await axios.post('/register', payload, headers)
                commit('setToken', data.token)
                commit('setUser', data.user)
            } catch (e) {
                console.log(e)
            }
        },
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
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }
                const { data } = await axios.post('endpoint', payload, headers)
                dispatch('setUserProfileInfo', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updatePassword(_, payload) {
            try {
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }
                await axios.post('endpoint', payload, headers)
                // todo
            } catch (e) {
                console.log(e)
            }
        },
        async updateCard(_, payload) {
            try {
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }
                await axios.post('endpoint', payload, headers)
            } catch (e) {
                console.log(e)
            }
        },
    },
}