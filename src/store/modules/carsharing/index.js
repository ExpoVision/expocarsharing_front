import axios from "axios"

export default {
    namespaced: true,
    state: {
        vehicles: [],
        offers: [],
        offersByClasses: [],
        filterValues: [],
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
        getOffersByClasses: state => state.offersByClasses.data,
        getOfferByCarId: (_, getters) => id => getters.getOffers.find(({vehicle}) => vehicle.id == id),
        getFilterValues: state => state.filterValues,
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
            state.filterValues = payload.data
        },
    },
    actions: {
        //offer.index
        async fetchVehicles({ commit }, filters) {
            try {
                const response = await axios.get('/vehicle', filters ?? null)
                commit('setVehicles', response.data)
            } catch (e) {
                console.log(e)
            }
        },
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
        async fetchFilterValues({ commit }) {
            try {
                const response = await axios.get('/filter-values')
                commit('setFilterValues', response.data)
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