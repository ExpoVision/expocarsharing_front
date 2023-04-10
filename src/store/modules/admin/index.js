import axios from 'axios'
export default {
    namespaced: true, 
    state: {
        users: [],
        archivalSupportRequests: [],
        pendingSupportRequests: [],
        orders: [],
        statistics: {}
    },
    getters: {
        getUsers: state => state.users,
        getUserById: (_, getters) => id => getters.getUsers.find(user => user.id == id),
        getArchivalSupportRequests: state => state.archivalSupportRequests,
        getPendingSupportRequests:  state => state.pendingSupportRequests,
        getStatistics: state => state.statistics,
        getOrders: state => state.orders,
        getOrderById: (_, getters) => id => getters.getOrders.find(order => order.id == id),
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload.data
        },
        setArchivalSupportRequests(state, payload) {
            state.archivalSupportRequests = payload.data
        },
        setPendingSupportRequests(state, payload) {
            state.pendingSupportRequests = payload.data
        },
        setStatistics(state, payload) {
            state.statistics = payload
        },
        setOrders(state, payload) {
            state.orders = payload.data
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const { data } = await axios.get('/user')
                commit('setUsers', data)
            } catch (e) {
                console.log(e)
            }
        }, 
        async deleteUser({ dispatch }, payload) {
            try {
                const userId = payload.userId
                await axios.delete(`/user/${userId}`)
                dispatch('fetchUsers')
            } catch (e) {
                console.log(e)
            }
        },
        // feedback/archival 
        async fetchArchivalSupportRequests({ commit }) {
            try {
                const { data } = await axios.get('/feedback/archival')
                commit('setArchivalSupportRequests', data)
            } catch (e) {
                console.log(e)
            }
        },
        // feedback
        async fetchPendingSupportRequests({ commit }) {
            try {
                const { data } = await axios.get('/feedback')
                commit('setPendingSupportRequests', data)
            } catch (e) {
                console.log(e)
            }
        },
        // удаление 
        async completeSupportRequest({ dispatch }, payload) {
            try {
                const requestId = payload
                await axios.delete('/feedback', requestId)
                dispatch('fetchPendingSupportRequests')
                dispatch('fetchArchivalSupportRequests')
            } catch (e) {
                console.log(e)
            }
        },
        async fetchStatistics({ commit }) {
            try {
                const { data } = await axios.get('/service/statistics')
                commit('setStatistics', data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchOrdersByStatus({ commit }, payload) {
            try {
                const status = payload
                const { data } = await axios.get(`/${status}`)
                commit('setOrders', data)
            } catch (e) {
                console.log(e)
            }
        },
        async confirmBooking({ dispatch }, payload) {
            try {
                const orderId = payload.orderId
                await axios.post(`/order-process/confirmRent/${orderId}`)
                dispatch('fetchOrdersByStatus', payload.status)
            } catch (e) {
                console.log(e)
            }
        },
        async cancelBooking({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post(`/order/${orderId}/cancel`)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async confirmPayment({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post(`/order-process/confirmPayment/${orderId}`)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async cancelOrder({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post(`/order-process/cancel/${orderId}`)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async forceComplete({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post(`/order/${orderId}/forceCancel`)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async addCar(_, payload) {
            try {
                await axios.post('/vehicle', payload)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteCar(_, payload) {
            try {
                const carId = payload
                await axios.delete(`/vehicle/${carId}`)
            } catch (e) {
                console.log(e)
            }
        },
    },
    modules: {}
}