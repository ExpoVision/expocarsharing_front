import axios from 'axios'
import { createStore } from 'vuex'
//BackFlag: убрать mocks и вернуть initial значения в state
import { faqItems, testimonials } from './mocks'

import carsharing from '@/store/modules/carsharing'

export default createStore({
    state: {
        // temp mocks
        users: [
            {id: 1, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 2, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 4, fullName: 'Магомедов Магомед Магомедович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
        ],
        orders: [
            {
                id: 1, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'booked',
                time: '02:40:34',
            },
            {
                id: 2, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'confirmPayment',
                time: '02:40:34',
            },
            {
                id: 3, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'confirmPayment',
                time: '02:40:34',
            },
            {
                id: 4, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'completed',
                time: '02:40:34',
            },
        ],
        supportRequests: [
            {   
                id: 1, 
                user: {id: 1, fullName: 'Иванов Иван Иванович', phoneNumber: '+79990000000'},
                status: 'done'
            },
            {   
                id: 2, 
                user: {id: 1, fullName: 'Иванов Иван Иванович', phoneNumber: '+79990000000'},
                status: 'pending'
            },
            {   
                id: 3, 
                user: {id: 1, fullName: 'Иванов Иван Иванович', phoneNumber: '+79990000000'},
                status: 'done'
            },
        ], 
        //faqItems: [],
        faqItems,
        //testimonials: [],
        testimonials
    },
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getCars: (state) => {
            return state.cars
        },
        getCarsharing: (state) => {
            return state.orders
        },
        getCarsharingsByStatus: (_, getters) => (status) => {
            return getters.getCarsharing.filter(car => car.status === status)
        },
        getCarsharingById: (_, getters) => (id) => {
            return getters.getCarsharing.find(orders => orders.id == id)
        },
        getSupportRequests: (state) => {
            return state.supportRequests
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
        carsharing
    },
})