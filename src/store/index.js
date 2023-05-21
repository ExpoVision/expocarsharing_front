import axios from 'axios'
import { createStore } from 'vuex'

import carsharing from '@/store/modules/carsharing'
import admin from '@/store/modules/admin'
import user from '@/store/modules/user'

import { BASE_API_URL } from '@/config/index'


axios.defaults.baseURL = BASE_API_URL


axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})



export default createStore({
    state: {
        faqItems: {},
        testimonials: {},
        testimonialsPerPage: 4
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
        decTestimonialsPerPage(state) {
            state.testimonialsPerPage += 4
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
        async fetchTestimonials({ state, commit }) {
            try {
                const { data } = await axios.get('/review', {
                    params: {per_page: state.testimonialsPerPage}
                })
                commit('setTestimonials', data)
                commit('decTestimonialsPerPage')
            } catch (e) {
                console.log(e)
            }
        },
        async sendTestimonial({ dispatch }, payload) {
            try {
                await axios.post('/review', payload)
                dispatch('fetchTestimonials')
            } catch (e) {
                console.log(e)
            }
        },
        async deleteTestimonial({ dispatch }, payload) {
            try {
                await axios.delete(`/review/${payload}`)
                dispatch('fetchTestimonials')
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