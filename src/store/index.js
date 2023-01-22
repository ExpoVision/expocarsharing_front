import { createStore } from 'vuex'

import carsharing from '@/store/modules/carsharing'

export default createStore({
    state: {
        users: [
            {id: 1, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 2, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 4, fullName: 'Магомедов Магомед Магомедович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
        ],
        cars: [
            { id: 1, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 2, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 3, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 4, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 5, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 6, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, brand: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
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
    },
    mutations: {},
    actions: {},
    modules: {
        carsharing
    },
})