import axios from 'axios'
//BackFlag: убрать mocks и вернуть initial значения в state
import { 
    users, 
    orders,
    archivalSupportRequests, 
    pendingSupportRequests 
} from './mocks'


export default {
    namespaced: true, 
    state: {
        // BlackFlag: temp mocks убрать, uncommit initial массивы
        users,
        //users: [],
        archivalSupportRequests,
        pendingSupportRequests,
        orders,
        statistics: {},
        //orders: [],
        //archivalSupportRequests: [],
        //pendingSupportRequests: []
    },
    getters: {
        getUsers: state => state.users,
        getArchivalSupportRequests: state => state.archivalSupportRequests,
        getPendingSupportRequests:  state => state.pendingSupportRequests,
        getStatistics: state => state.statistics,
        getOrders: state => state.orders,
        getOrderById: (_, getters) => (id) => {
            return getters.getOrders.find(order => order.id == id)
        },
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        },
        setArchivalSupportRequests(state, payload) {
            state.archivalSupportRequests = payload
        },
        setPendingSupportRequests(state, payload) {
            state.pendingSupportRequests = payload
        },
        setStatistics(state, payload) {
            state.statistics = payload
        },
        setOrders(state, payload) {
            state.orders = payload
        }
    },
    actions: {
        // BlackFlag: пересмотреть endpoints и параметры
        async fetchUsers({ commit }) {
            try {
                const { data } = await axios.get('endpoint')
                commit('setUsers', data)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteUser({ dispatch }, payload) {
            try {
                const userId = payload
                await axios.post('endpoint', userId)
                dispatch('fetchUsers')
            } catch (e) {
                console.log(e)
            }
        },
        async fetchArchivalSupportRequests({ commit }) {
            try {
                const { data } = await axios.get('endpoint')
                commit('setArchivalSupportRequests', data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchPendingSupportRequests({ commit }) {
            try {
                const filter = {status: 'pending'}
                const { data } = await axios.get('endpoint', filter)
                commit('setPendingSupportRequests', data)
            } catch (e) {
                console.log(e)
            }
        },
        async completeSupportRequest({ dispatch }, payload) {
            try {
                const requestId = payload
                await axios.post('endpoint', requestId)
                dispatch('fetchPendingSupportRequests')
                dispatch('fetchArchivalSupportRequests')
            } catch (e) {
                console.log(e)
            }
        },
        async fetchStatistics({ commit }) {
            try {
                const { data } = await axios.get('endpoint')
                commit('setStatistics', data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchOrdersByStatus({ commit }, payload) {
            try {
                const { data } = await axios.get('endpoint', payload)
                commit('setOrders', data)
            } catch (e) {
                console.log(e)
            }
        },
        async confirmBooking({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post('endpoint', orderId)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async cancelBooking({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post('endpoint', orderId)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async confirmPayment({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post('endpoint', orderId)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async cancelOrder({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post('endpoint', orderId)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async forceComplete({ dispatch }, payload) {
            try {
                const orderId = payload
                await axios.post('endpoint', orderId)
                dispatch('fetchOrders')
            } catch (e) {
                console.log(e)
            }
        },
        async addCar(_, payload) {
            try {
                await axios.post('endpoint', payload)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteCar(_, carId) {
            try {
                await axios.post('endpoint', carId)
            } catch (e) {
                console.log(e)
            }
        },
    },
    modules: {}
}