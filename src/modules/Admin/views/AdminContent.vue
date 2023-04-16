<template>
  <div>
    <h2>Добавление</h2>
    <form @submit.prevent="onAddCar">
        <div class="selects">
            <UiSelect
                title="Марка" 
                :options="filtersDictionaries.brands"
                @change="(...args) => onVehicleSelectChange('brand_id', ...args)"
            />
            <UiSelect 
                title="Модель" 
                :options="filtersDictionaries.brandModels" 
                @change="(...args) => onVehicleSelectChange('brand_model_id', ...args)"
            />
            <UiSelect
                title="Кузов" 
                :options="filtersDictionaries.bodyTypes"
                @change="(...args) => onVehicleInfoSelectChange('body_type_id', ...args)"
            />
            <UiSelect
                title="Цвет" 
                :options="filtersDictionaries.colors"
                @change="(...args) => onVehicleSelectChange('color_id', ...args)"
            />
            <UiSelect
                title="Класс" 
                :options="filtersDictionaries.classes"
                @change="(...args) => onVehicleSelectChange('vehicle_class_id', ...args)"
            />
            <UiSelect
                title="Тип коробки передач" 
                :options="filterConsts.transmissions"
                @change="(...args) => onVehicleInfoSelectChange('transmission', ...args)"
            />
            <UiSelect
                title="Мультимедиа / встроенный навигатор:" 
                :options="multimedia"
                @change="(...args) => onVehicleInfoSelectChange('multimedia', ...args)"
            />
            <UiInput type="number" placeholder="Кол/во посадочных мест" v-model="vehicleInfo.seats" />
            <UiInput placeholder="Мощность" v-model="vehicleInfo.horsepower" />
            <UiInput placeholder="Стоимость" v-model="offer.per_minute" />
            <UiInput type="number" placeholder="Год" v-model="vehicle.year" />
            <UiInput placeholder="Пробег" v-model="vehicle.mileage" />
            <UiInput placeholder="Гос. номер" v-model="vehicle.license_plate" />
            <UiInput placeholder="Расход топлива" v-model="vehicleInfo.consumption" />
            <UiInput placeholder="Запас хода полный бак" v-model="vehicleInfo.power_reserve" />
            <UiSelect
                title="Единица измерения" 
                :options="filterConsts.units"
                @change="(...args) => onVehicleInfoSelectChange('power_reserve_unit', ...args)"
            />
        </div>
        <UiFileAttachment 
            label="Фото" 
            placeholderTip="Загрузить изображения" 
            :multiple="true" 
            @handleFileChange="onMediaUpload"
        />
        <UiBtn type="white" width="100%">Добавить</UiBtn>
    </form>
  </div>
  <div class="delete-block">
    <h2>Удаление</h2>
    <form @submit.prevent="onDeleteCar">
        <div class="selects filters">
            <UiFilterSelect 
                title="Марка" 
                :items="filtersDictionaries.brands"
                v-model="filters.brands"
            />
            <UiFilterSelect 
                title="Модель" 
                :items="filtersDictionaries.brandModels" 
                :isBlocks="true"
                v-model="filters.brandmodels"
            />
            <button 
                class="filters__btn filters__btn--apply" 
                @click="onApplyFilters"
            >Применить фильтры</button>
            <button 
                class="filters__btn filters__btn--reset" 
                @click="onResetFilters"
            >Сбросить фильтры</button>
        </div>
        <div class="cars">
            <OfferComponent 
                v-for="car in cars"
                :key="car.id"
                :offer="car" 
                size="small" 
                :isOffer="false"
                @click="event => onSelectCar(event, car.id)"
            />
        </div>
        
        <UiBtn type="white" width="100%">Удалить</UiBtn>
    </form>
  </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
import UiSelect from '@/components/ui/UiSelect.vue'
import UiFilterSelect from '@/components/ui/UiFilterSelect.vue'
import OfferComponent from '@/components/OfferComponent.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { UiInput, UiFileAttachment, UiBtn, UiSelect, UiFilterSelect, OfferComponent },
    setup() {
        const store = useStore()

        onMounted(async () => {
            await store.dispatch('carsharing/fetchVehicles')
            await store.dispatch('carsharing/fetchOffers')
            await store.dispatch('carsharing/fetchFilterValues')
            await store.dispatch('carsharing/fetchFilterConsts')
        })

        const filtersDictionaries = computed(() => store.getters['carsharing/getFilterValues'])
        const pricesDictionary = computed(() => store.getters['carsharing/getPricesDictionary'])
        const filterConsts = computed(() => store.getters['carsharing/getFilterConsts'])

        // добавление
        const multimedia = ref({
            0: 'нет',
            1: 'есть'
        })
        const vehicle = ref({
            brand_id: '',
            brand_model_id: '',
            color_id: '',
            year: '',
            license_plate: '',
            mileage: ''
        })

        const vehicleInfo = ref({
            body_type_id: '',
            consumption: '',
            horsepower: '',
            power_reserve_unit: '',
            transmission: '',
            seats: '',
            multimedia: '',
        })

        const offer = ref({
            per_minute: ''
        })

        const onVehicleSelectChange = (key, newValue) => {
            vehicle.value[key] = newValue
        }

        const onVehicleInfoSelectChange = (key, newValue) => {
            vehicleInfo.value[key] = newValue
        }

        const formData = new FormData()

        const cars = computed(() => store.getters['carsharing/getVehicles'])

        const onMediaUpload = files => {
            Array.from(files).forEach(file => formData.append('vehicle[images][]', file))
        }

        const onAddCar = async () => {
            Object.keys(vehicle.value).forEach(key => {
                formData.append(`vehicle[${key}]`, vehicle.value[key])
            })
            Object.keys(vehicleInfo.value).forEach(key => {
                formData.append(`vehicle_info[${key}]`, vehicleInfo.value[key])
            })

            formData.append(`offer[per_minute]`, offer.value.per_minute)

            await store.dispatch('admin/addCar', formData)
            await store.dispatch('carsharing/fetchOffers')
        }

        // удаление

        const INITIAL_FILTERS = {
            brands: [],
            brandmodels: []
        } 
        const filters = ref({...INITIAL_FILTERS})
        const selectedCarId = ref(null)

        const onSelectCar = (event, id) => {
            selectedCarId.value = id
            const selectedCar = document.querySelector('.car--selected')
            selectedCar?.classList.remove('car--selected')
            event.currentTarget.classList.add('car--selected')
        }
        
        const onDeleteCar = () => {
            if(selectedCarId.value) {
                store.dispatch('admin/deleteCar', selectedCarId.value)
                store.dispatch('carsharing/fetchVehicles')
            }
        }

        const onApplyFilters = () => {
            store.dispatch('carsharing/fetchVehicles', {filters: filters.value})
        }

        const onResetFilters = () => {
            filters.value = {...INITIAL_FILTERS}
            store.dispatch('carsharing/fetchVehicles')
        }

        return {
            cars,
            vehicle,
            vehicleInfo,
            offer,
            filtersDictionaries,
            filterConsts,
            multimedia,
            pricesDictionary,
            filters,

            //methods
            onVehicleSelectChange,
            onVehicleInfoSelectChange,
            onApplyFilters,
            onResetFilters,
            onMediaUpload,
            onSelectCar,
            onAddCar,
            onDeleteCar,
        }
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #FFF;
    }

    .delete-block {
        margin-top: 3em;
    }

    .selects {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 2;
        align-items: center;
        gap: 1.875em;
        margin: 2.375em 0;

        @media screen and (max-width: 975px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
        }

    }

    .filters{

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2;
        align-items: start;

        &__btn{
            background-color: transparent;
            color: $purple-opacity;
            border: 1px solid $purple-opacity;
            padding: 1.5em 2em;
            text-transform: uppercase;
            white-space: nowrap;
            cursor: pointer;
            transition: .3s;

            &:hover, &:active{
                border-color: $purple;
                color: $purple;
            }

            &--reset{

                display: flex;
                justify-content: center;

                img{
                    margin-right: .875em;
                }
            }
        }
    }

    .cars {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.3em;
        column-gap: .7em;
        margin-bottom: 2em;
    }

    .car {

        &--selected{
            border: 3px solid $purple;
        }
    }
</style>