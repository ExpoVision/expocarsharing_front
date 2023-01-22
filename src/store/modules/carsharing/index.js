import axios from "axios"

export default {
    namespaced: true,
    state: {
        cars: [],
        brandsDictionary: [
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
        ],
        modelsDictionary: [
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
        pricesDictionary: [
            {value: '1', label: 'до 10 000 ₽'},
            {value: '2', label: 'от  10 000 ₽ до 20 000 ₽'},
            {value: '3', label: 'от  20 000 ₽ до 40 000 ₽'},
            {value: '4', label: 'от  40 000 ₽ до 80 000 ₽'},
        ],
        typesDictionary: [
            {value: '1', label: 'Седан'},
            {value: '2', label: 'Хэтчбек'},
            {value: '3', label: 'Универсал'},
            {value: '4', label: 'Лифтбэк'},
            {value: '5', label: 'Купе'},
            {value: '6', label: 'Кабриолет'},
            {value: '7', label: 'Родстер'},
            {value: '8', label: 'Тарга'},
            {value: '9', label: 'Лимузин'},
            {value: '10', label: 'Стретч'},
            {value: '11', label: 'Внедорожник'},
            {value: '12', label: 'Кроссовер'},
            {value: '13', label: 'Пикап'},
            {value: '14', label: 'Фургон'},
            {value: '15', label: 'Минивэн'},
            {value: '16', label: 'Микроавтобус'},
            {value: '17', label: 'Автобус'}
        ],
        colorsDictionary: [
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
    },
    getters: {
        getBrandsDictionary: state => state.brandsDictionary,
        getModelsDictionary: state => state.modelsDictionary,
        getPricesDictionary: state => state.pricesDictionary,
        getTypesDictionary: state => state.typesDictionary,
        getColorsDictionary: state => state.colorsDictionary
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
                const response = await axios.post('endpoint', filters ?? null)
                commit('setCars', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchFreeCars({ commit }, filters) {
            try {
                const response = await axios.post('endpoint', filters ?? null)
                commit('setCars', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchBrandsDictionary({ commit }) {
            try {
                const response = await axios.post('endpoint', )
                commit('setBrandsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchModelsDictionary({ commit }) {
            try {
                const response = await axios.post('endpoint', )
                commit('setModelsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchPricesDictionary({ commit }) {
            try {
                const response = await axios.post('endpoint', )
                commit('setPricesDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchTypesDictionary({ commit }) {
            try {
                const response = await axios.post('endpoint', )
                commit('setTypesDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
        async fetchColorsDictionary({ commit }) {
            try {
                const response = await axios.post('endpoint', )
                commit('setColorsDictionary', response.data);
            } catch (e) {
                console.log(e)
            }
        },
    },
}