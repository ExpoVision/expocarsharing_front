import axios from 'axios'
const TOKEN_KEY = 'token'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem(TOKEN_KEY),
        userProfileInfo: {},
        user: null,
        userCard: null
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
        getUserProfileInfo: state => state.userProfileInfo,
        getUserCard: state => state.userCard,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);
        },
        setUser(state, user) {
            state.user = {
                id: user.id, 
                name: user.name,
                email: user.email
            }

            localStorage.setItem('user', JSON.stringify({
                    id: user.id, 
                    name: user.name,
                    email: user.email
                })
            );
        },
        setUserCard(state, userCard) {
            state.userCard = userCard.data
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem('user');
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
        async fetchUserProfileInfo({ commit }, payload) {
            try {
                const { data } = await axios.get(`/user-profile/${payload.userId}`)
                commit('setUserProfileInfo', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updateUser({ commit }, payload) {
            try {
                const { data } = await axios.patch(`/user/${payload.id}`, payload)
                commit('setUser', data.data)
            } catch (e) {
                console.log(e)
            }
        },
        async updateProfile({ commit }, payload) {
            try {
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }
                const { data } = await axios.post('/user-profile', payload, headers)
                commit('setUserProfileInfo', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updatePassword(_, payload) {
            try {
                await axios.post(`/user-password/${payload.userId}`, {
                                    password: payload.passwordInfo.password,
                                    password_confirmation: payload.passwordInfo.confirmPassword
                                })
            } catch (e) {
                console.log(e)
            }
        },
        async fetchUserCard({ commit }, payload) {
            try {
                const { data } = await axios.get(`/user-pay/${payload.userId}`)
                commit('setUserCard', data)
            } catch (e) {
                console.log(e)
            }
        },
        async updateCard(_, payload) {
            try {
                await axios.post('/user-pay', payload)
            } catch (e) {
                console.log(e)
            }
        },
    },
}