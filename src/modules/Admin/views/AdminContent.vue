<template>
  <div>
    <h2>Добавление</h2>
    <form action="">
        <div class="selects">
            <UiSelect
                title="Марка" 
                :options="brandsDictionary"
                @change="(...args) => onSelectChange('brand', ...args)"
            />
            <UiSelect
                title="Модель" 
                :options="modelsDictionary"
                @change="(...args) => onSelectChange('model', ...args)"
            />
            <UiSelect
                title="Кузов" 
                :options="typesDictionary"
                @change="(...args) => onSelectChange('type', ...args)"
            />
            <UiSelect
                title="Цвет" 
                :options="colorsDictionary"
                @change="(...args) => onSelectChange('color', ...args)"
            />
            <UiInput placeholder="Мощность" v-model="carProperties.power" />
            <UiInput placeholder="Стоимость" v-model="carProperties.price" />
            <UiInput placeholder="Год" v-model="carProperties.year" />
        </div>
        <UiFileAttachment label="Фото" placeholderTip="Загрузить изображение"/>
        <UiBtn type="white" @click="onAddCar" width="100%">Добавить</UiBtn>
    </form>
  </div>
  <div class="delete-block">
    <h2>Удаление</h2>
    <form>
        <div class="selects filters">
            <UiFilterSelect 
                title="Марка" 
                :items="brandsDictionary"
                v-model="filters.brands"
            />
            <UiFilterSelect 
                title="Модель" 
                :items="modelsDictionary" 
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
            <CarComponent 
                v-for="car in cars"
                :key="car.id"
                :car="car" size="small" 
                @click="event => selectCar(event, car.id)"
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
import CarComponent from '@/components/CarComponent.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { UiInput, UiFileAttachment, UiBtn, UiSelect, UiFilterSelect, CarComponent },
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
        })

        const onSelectChange = (key, newValue) => {
            carProperties.value[key] = newValue
        }

        const formData = new FormData()

        onMounted(() => {
            store.dispatch('carsharing/fetchCars')/* 
            store.dispatch('carsharing/fetchBrandsDictionary')
            store.dispatch('carsharing/fetchModelsDictionary')
            store.dispatch('carsharing/fetchTypesDictionary')
            store.dispatch('carsharing/fetchColorsDictionary') */
        })

        const brandsDictionary = computed(() => store.getters['carsharing/getBrandsDictionary'])
        const modelsDictionary = computed(() => store.getters['carsharing/getModelsDictionary'])
        const typesDictionary = computed(() => store.getters['carsharing/getTypesDictionary'])
        const colorsDictionary = computed(() => store.getters['carsharing/getColorsDictionary'])

        const cars = computed(() => store.getters['carsharing/getCars'])

        const onMediaUpload = files => {
            for (let i = 0; i < files.length; i++) {
                formData.append(files[i].name, files[i])
            }
        }

        const onAddCar = () => {
            Object.keys(carProperties.value).forEach(key => {
                formData.append(key, carProperties.value[key])
            })
            store.dispatch('admin/addNewCar', carProperties)
            store.dispatch('carsharing/fetchCars')
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
                store.dispatch('carsharing/fetchCars')
            }
            
        }

        const onApplyFilters = filters => {
            store.dispatch('carsharing/fetchCars', filters.value)
        }

        const onResetFilters = () => {
            filters.value = {...INITIAL_FILTERS}
            store.dispatch('carsharing/fetchCars')
        }

        return {
            cars,
            carProperties,
            brandsDictionary,
            modelsDictionary,
            typesDictionary,
            colorsDictionary,
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