import axios from 'axios'
import { createStore } from 'vuex'

import carsharing from '@/store/modules/carsharing'
import admin from '@/store/modules/admin'
import user from '@/store/modules/user'

axios.defaults.baseURL = 'http://expocarsharing.localhost/api/v1'


axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})



export default createStore({
    state: {
        faqItems: {},
        testimonials: {}
    },
    getters: {
        getCars: (state) => {
            return state.cars
        },
        getFaqItems: (state) => {
            return state.faqItems.data
        },
        getTestimonials: state => {
            return state.testimonials.data
        }
    },
    mutations: {
        setFaqItems(state, payload) {
            state.faqItems = payload
        },
        setTestimonials(state, payload) {
            state.testimonials = payload
        },
    },
    actions: {
        async fetchFaqItems({ commit }) {
            try {
                const { data } = await axios.get('/faq')
                commit('setFaqItems', data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchTestimonials({ commit }) {
            try {
                const { data } = await axios.get('/review')
                commit('setTestimonials', data)
            } catch (e) {
                console.log(e)
            }
        },
        async sendFeedback(_, payload) {
            try {
                await axios.post('/feedback', payload)
            } catch (e) {
                console.log(e)
            }
        }
    },
    modules: {
        carsharing,
        admin,
        user
    },
})