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
            { id: 1, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 2, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 3, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 4, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 5, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
            { id: 6, title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
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
                status: 'confirmPayment',
                time: '02:40:34',
            },
            {
                id: 3, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
                user:  {id: 3, fullName: 'Иванов Иван Иванович', address: '', phoneNumber: '+7999', age: '27', status: 'Авторизован', carsharingTotal: new Date()},
                status: 'confirmPayment',
                time: '02:40:34',
            },
            {
                id: 4, 
                car:  { title: "MERCEDES E220D", year: 2011, mileage: 166000, color: "Коричневый", price: 16, mark: 'MercedesBenz', model: 'w220', engine: '230ЛC(2л)', govNumber: 'в006ур777', address: 'Moscow city' },
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
        filterBlocks: {
            mark: [
                {
                    title: 'Audi S серия', 
                    items: [
                        {value: 'S1', label: 'S1',},
                        {value: 'S2', label: 'S2',},
                        {value: 'SQ', label: 'SQ',}, 
                        {value: 'TT', label: 'TT',}, 
                        {value: 'S3', label: 'S3',},
                        {value: 'S4', label: 'S4',}
                    ]
                }
            ],
                
            model: [
                {
                    title: '',
                    items: [
                        {value: 'Audi', label: 'Audi'},
                        {value: 'Bentley', label: 'Bentley'},
                        {value: 'BMW', label: 'BMW'},
                        {value: 'Chevrolet', label: 'Chevrolet'},
                        {value: 'Citroen', label: 'Citroen'},
                        {value: 'Ferrari', label: 'Ferrari'},
                        {value: 'Ford', label: 'Ford'},
                        {value: 'Honda', label: 'Honda'},
                        {value: 'Hyundai', label: 'Hyundai'},
                        {value: 'Kia', label: 'Kia'},
                        {value: 'Lamborghini', label: 'Lamborghini'},
                        {value: 'Lexus', label: 'Lexus'},
                        {value: 'Mazda', label: 'Mazda'},
                        {value: 'Mercedes', label: 'Mercedes'},
                        {value: 'Mitsubishi', label: 'Mitsubishi'},
                        {value: 'Nissan', label: 'Nissan'},
                        {value: 'Opel', label: 'Opel'},
                        {value: 'Peugeot', label: 'Peugeot'},
                        {value: 'Porsche', label: 'Porsche'},
                        {value: 'Renault', label: 'Renault'},
                        {value: 'Skoda', label: 'Skoda'},
                        {value: 'Toyota', label: 'Toyota'},
                        {value: 'Rolls-Royce', label: 'RollsRoyce'},
                        {value: 'Tesla', label: 'Tesla'},
                        {value: 'Volkswagen', label: 'Volkswagen'},
                    ]
                }
            ],

            price: [
                {
                    title: '',
                    items: [
                        {value: '', label: 'до 10 000 ₽'},
                        {value: '', label: 'от  10 000 ₽ до 20 000 ₽'},
                        {value: '', label: 'от  20 000 ₽ до 40 000 ₽'},
                        {value: '', label: 'от  40 000 ₽ до 80 000 ₽'},
                    ]
                }
            ],
            type: [
                {
                    title: '',
                    items: [
                        {value: '', label: 'Седан'},
                        {value: '', label: 'Хэтчбек'},
                        {value: '', label: 'Универсал'},
                        {value: '', label: 'Лифтбэк'},
                        {value: '', label: 'Купе'},
                        {value: '', label: 'Кабриолет'},
                        {value: '', label: 'Родстер'},
                        {value: '', label: 'Тарга'},
                        {value: '', label: 'Лимузин'},
                        {value: '', label: 'Стретч'},
                        {value: '', label: 'Внедорожник'},
                        {value: '', label: 'Кроссовер'},
                        {value: '', label: 'Пикап'},
                        {value: '', label: 'Фургон'},
                        {value: '', label: 'Минивэн'},
                        {value: '', label: 'Микроавтобус'},
                        {value: '', label: 'Автобус'}
                    ]
                }
            ],
            color: [
                {
                    title: '',
                    items: [
                        {value: 'white', label: 'Белый'},
                        {value: 'bege', label: 'Бежевый'},
                        {value: 'silver', label: 'Серебристый'},
                        {value: 'grey', label: 'Серый'},
                        {value: 'black', label: 'Черный'},
                        {value: 'yellow', label: 'Желтый'},
                        {value: 'orange', label: 'Оранжевый'},
                        {value: 'red', label: 'Красный'},
                        {value: 'brown', label: 'Коричневый'},
                        {value: 'green', label: 'Зеленый'},
                        {value: 'lightblue', label: 'Голубой'},
                        {value: 'blue', label: 'Синий'},
                        {value: 'purple', label: 'Фиолетовый'},
                        {value: 'pink', label: 'Розовый'},
                    ]
                }
            ]
        }
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
        getSupportRequests: (state) => {
            return state.supportRequests
        },
        getFiltersBlocks: (state) => {
            return state.filterBlocks
        }
    },
    mutations: {},
    actions: {},
    modules: {},
})