import axios from "axios"
// BackFlag - убрать импорты
import cars from './mocks'
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
        // BackFlag - убрать данные из mocks
        // cars: [],
        cars,
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
        getCars: state => state.cars,
        getCarById: (_, getters) => id => getters.getCars.find(car => car.id == id),
        getBrandsDictionary: state => state.brandsDictionary,
        getModelsDictionary: state => state.modelsDictionary,
        getPricesDictionary: state => state.pricesDictionary,
        getTypesDictionary: state => state.typesDictionary,
        getColorsDictionary: state => state.colorsDictionary,
    },
    mutations: {
        setCars(state, payload) {
            state.cars = payload
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
        async fetchCars({ commit }, filters) {
            try {
                const response = await axios.get('endpoint', filters ?? null)
                commit('setCars', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchFreeCars({ commit }, filters) {
            try {
                const response = await axios.get('endpoint', filters ?? null)
                commit('setCars', response.data);
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