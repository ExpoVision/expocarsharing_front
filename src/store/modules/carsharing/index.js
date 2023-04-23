import axios from "axios"

export default {
    namespaced: true,
    state: {
        vehicles: [],
        offers: [],
        offersByClasses: [],
        filterValues: [],
        filterConsts: [],
        pricesDictionary: {
            1: 'до 10 000 ₽',
            2: 'от  10 000 ₽ до 20 000 ₽',
            3: 'от  20 000 ₽ до 40 000 ₽',
            4: 'от  40 000 ₽ до 80 000 ₽',
        },
    },
    getters: {
        getVehicles: state => state.vehicles,
        getOffers: state => state.offers,
        getOffersByClasses: state => state.offersByClasses,
        getOfferByCarId: (_, getters) => id => getters.getOffers.find(({vehicle}) => vehicle.id == id),
        getFilterValues: state => state.filterValues,
        getFilterConsts: state => state.filterConsts,
        getPricesDictionary: state => state.pricesDictionary
    },
    mutations: {
        setVehicles(state, payload) {
            state.vehicles = payload.data
        },
        setOffers(state, payload) {
            state.offers = payload.data
        },
        setOffersByClasses(state, payload) {
            state.offersByClasses = payload.data
        },
        setFilterValues(state, payload) {
            state.filterValues = payload
        },
        setFilterConsts(state, payload) {
            state.filterConsts = payload
        }
    },
    actions: {
        //offer.index
        async fetchVehicles({ commit }, payload) {
            try {
                const response = await axios.get('/vehicle', {params: payload?.filters ?? null})
                commit('setVehicles', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchOffers({ commit }, payload) {
            try {
                const response = await axios.get('/offer', {params: payload?.filters ?? null})
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
        async fetchFilterValues({ commit }) {
            try {
                const response = await axios.get('/filter-values')
                commit('setFilterValues', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchFilterConsts({ commit }) {
            try {
                const response = await axios.get('/filter-consts')
                commit('setFilterConsts', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        // address, phone, name, offer_id, userId (?)
        async bookCar(_, payload) {
            try {
                await axios.post(`/order-process/reserv/${payload.carId}`, payload.bookCarData)
            } catch (e) {
                console.log(e)
            }
        }
    },
}