import axios from "axios"
import { 
    brandsDictionary, 
    modelsDictionary,
    pricesDictionary,
    typesDictionary,
    colorsDictionary
 } from './mocks'

export default {
    namespaced: true,
    state: {
        offers: {},
        // brandsDictionary: [],
        brandsDictionary,
        //modelsDictionary: [],
        modelsDictionary,
        //pricesDictionary: [],
        pricesDictionary,
        //typesDictionary: [],
        typesDictionary,
        //colorsDictionary: [],
        colorsDictionary
    },
    getters: {
        getOffers: state => state.offers,
        getOffersByClasses: state => state.offersByClasses.data,
        getOfferById: (_, getters) => id => getters.getOffers.find(offer => offer.id == id),
        getBrandsDictionary: state => state.brandsDictionary,
        getModelsDictionary: state => state.modelsDictionary,
        getPricesDictionary: state => state.pricesDictionary,
        getTypesDictionary: state => state.typesDictionary,
        getColorsDictionary: state => state.colorsDictionary,
    },
    mutations: {
        setOffers(state, payload) {
            state.offers = payload
        },
        setOffersByClasses(state, payload) {
            state.offersByClasses = payload
        },
        setBrandsDictionary(state, payload) {
            state.brandsDictionary = payload
        },
        setModelsDictionary(state, payload) {
            state.modelsDictionary = payload
        },
        setPricesDictionary(state, payload) {
            state.pricesDictionary = payload
        },
        setTypesDictionary(state, payload) {
            state.typesDictionary = payload
        },
        setColorsDictionary(state, payload) {
            state.colorsDictionary = payload
        },
    },
    actions: {
        //offer.index
        async fetchOffers({ commit }, filters) {
            try {
                const response = await axios.get('/offer', filters ?? null)
                commit('setOffers', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchOffersByClasses({ commit }) {
            try {
                const response = await axios.get('/vehicle-class')
                commit('setOffersByClasses', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchBrandsDictionary({ commit }) {
            try {
                const response = await axios.get('endpoint')
                commit('setBrandsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchModelsDictionary({ commit }) {
            try {
                const response = await axios.get('endpoint')
                commit('setModelsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchPricesDictionary({ commit }) {
            try {
                const response = await axios.get('endpoint')
                commit('setPricesDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchTypesDictionary({ commit }) {
            try {
                const response = await axios.get('endpoint')
                commit('setTypesDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchColorsDictionary({ commit }) {
            try {
                const response = await axios.get('endpoint')
                commit('setColorsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async bookCar(_, payload) {
            try {
                await axios.post('endpoint', payload)
            } catch (e) {
                console.log(e)
            }
        }
    },
}