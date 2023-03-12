<template>
  <div>
    <h2>Добавление</h2>
    <form action="">
        <div class="selects">
            <UiSelect
                title="Марка" 
                :options="filtersDictionaries.brands"
                @change="(...args) => onSelectChange('brand', ...args)"
            />
            <UiSelect 
                title="Модель" 
                :items="filtersDictionaries.brandModels" 
                @change="(...args) => onSelectChange('model', ...args)"
            />
            <UiSelect
                title="Кузов" 
                :options="filtersDictionaries.type"
                @change="(...args) => onSelectChange('type', ...args)"
            />
            <UiSelect
                title="Цвет" 
                :options="filtersDictionaries.colors"
                @change="(...args) => onSelectChange('color', ...args)"
            />
            <UiInput placeholder="Мощность" v-model="carProperties.power" />
            <UiInput placeholder="Стоимость" v-model="carProperties.price" />
            <UiInput placeholder="Год" v-model="carProperties.year" />
            <UiInput placeholder="Гос. номер" v-model="carProperties.govNumber" />
        </div>
        <UiFileAttachment 
            label="Фото" 
            placeholderTip="Загрузить изображения" 
            :multiple="true" 
            @handleFileChange="onMediaUpload"
        />
        <UiBtn type="white" @click="onAddCar" width="100%">Добавить</UiBtn>
    </form>
  </div>
  <div class="delete-block">
    <h2>Удаление</h2>
    <form>
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
                v-model="filters.models"
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
        
        <UiBtn type="white" @click="onDeleteCar" width="100%">Удалить</UiBtn>
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

        // добавление
        const carProperties = ref({
            brand: '',
            model: '',
            type: '',
            color: '',
            power: '',
            price: '',
            year: '',
            govNumber: '',
        })

        const onSelectChange = (key, newValue) => {
            carProperties.value[key] = newValue
        }

        const formData = new FormData()

        onMounted(() => {
            store.dispatch('carsharing/fetchVehicles')
            store.dispatch('carsharing/fetchOffers')
            store.dispatch('carsharing/fetchFilterValues')
        })
        const filtersDictionaries = computed(() => store.getters['carsharing/getFilterValues'])
        const pricesDictionary = computed(() => store.getters['carsharing/getPricesDictionary'])

        const cars = computed(() => store.getters['carsharing/getVehicles'])

        const onMediaUpload = files => {
            files.forEach(file => formData.append('images', file))
        }

        const onAddCar = () => {
            Object.keys(carProperties.value).forEach(key => {
                formData.append(key, carProperties.value[key])
            })
            store.dispatch('admin/addNewCar', carProperties)
            store.dispatch('carsharing/fetchOffers')
        }

        // удаление

        const INITIAL_FILTERS = {
            brand: '',
            model: ''
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
                store.dispatch('carsharing/fetchOffers')
            }
        }

        const onApplyFilters = filters => {
            store.dispatch('carsharing/fetchOffers', filters.value)
        }

        const onResetFilters = () => {
            filters.value = {...INITIAL_FILTERS}
            store.dispatch('carsharing/fetchOffers')
        }

        return {
            cars,
            carProperties,
            filtersDictionaries,
            pricesDictionary,
            filters,

            //methods
            onSelectChange,
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