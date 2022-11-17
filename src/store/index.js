import { createStore } from 'vuex'

export default createStore({
    state: {
        users: [
            {id: 1, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 2, fullName: 'Махмудов Айнди Усманович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
            {id: 4, fullName: 'Магомедов Магомед Магомедович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
        ],

        cars: [
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
        ],

        carsharing: [
            {
                id: 1, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'booked',
                time: '02:40:34',
            },
            {
                id: 2, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'waitingStart',
                time: '02:40:34',
            },
            {
                id: 3, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'waitingStart',
                time: '02:40:34',
            },
            {
                id: 4, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'completed',
                time: '02:40:34',
            },
        ]
    },
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getCars: (state) => {
            return state.cars
        },
        getCarsharing: (state) => {
            return state.carsharing
        },
        getCarsharingsByStatus: (_, getters) => (status) => {
            return getters.getCarsharing.filter(car => car.status === status)
        },
        getCarsharingById: (_, getters) => (id) => {
            return getters.getCarsharing.find(carsharing => carsharing.id == id)
        },
    },
    mutations: {},
    actions: {},
    modules: {},
})