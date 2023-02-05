import axios from 'axios'
import { createStore } from 'vuex'
//BackFlag: убрать mocks и вернуть initial значения в state
import { faqItems, testimonials } from './mocks'

import carsharing from '@/store/modules/carsharing'
import admin from '@/store/modules/admin'
import user from '@/store/modules/user'

axios.defaults.baseURL = 'http://expocarsharing.localhost/api';

export default createStore({
    state: {
        // temp mocks
        //faqItems: [],
        faqItems,
        //testimonials: [],
        testimonials
    },
    getters: {
        getCars: (state) => {
            return state.cars
        },
        getFaqItems: (state) => {
            return state.faqItems
        },
        getTestimonials: state => {
            return state.testimonials
        }
    },
    mutations: {
        setFaqItems(state, payload) {
            state.faqItems = payload
        },
        setTestimonials(state, payload) {
            state.faqItems = payload
        },
    },
    actions: {
        async fetchFaqItems({ commit }) {
            try {
                const { data } = await axios.get('endpoint')
                commit('setFaqItems', data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchTestimonials(state) {
            // FrontFlag then catch or try catch
            await axios.get('endpoint')
            .then(({data}) => {
                state.commit('setTestimonials', data)
            })
            .catch(e => console.log(e))
        },
        async sendFeedback(_, payload) {
            try {
                await axios.post('endpoint', payload)
            } catch (e) {
                console.log(e)
            }
            console.log(payload)
        }
    },
    modules: {
        carsharing,
        admin,
        user
    },
})