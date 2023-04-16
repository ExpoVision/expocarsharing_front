<template>
   <form class="filters">
        <div class="filters__selects">
            <UiFilterSelect 
                title="Марка" 
                :items="filtersDictionaries?.brands"
                v-model="filters.brands"
            />
            <UiFilterSelect 
                title="Цена" 
                :items="pricesDictionary" 
                column="single-column"
                type="radio"
                v-model="filters.price" 
            />
            <UiFilterSelect 
                title="Тип кузова" 
                :items="filtersDictionaries?.bodyTypes" 
                column="single-column"
                v-model="filters.bodyTypes"
            />
            <UiFilterSelect 
                title="Цвет" 
                :items="filtersDictionaries?.colors" 
                v-model="filters.colors"
            />
            <button 
                class="filters__btn filters__btn--apply" 
                @click.prevent="applyFilters"
            >Применить фильтры</button>
            <button 
                class="filters__btn filters__btn--reset"
                @click.prevent="resetFilters">
                <img src="@/assets/img/icons/cross-purple.svg" alt=""
            >Сбросить всё</button>
        </div>
        <div class="filters__bottom">
            <div class="found">
                Найдено {{offers.length}} авто
            </div>
            <div class="sort">
                <span>Cортировка:</span>
                <div class="sort_by" @click="toggleSort">{{SORT_TYPE[sort]}}</div>
            </div>
        </div>
    </form>
</template>

<script>
import UiFilterSelect from '@/components/ui/UiFilterSelect.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { UiFilterSelect },
    emits: ['applyFilters', 'resetFilters'],
    setup(_, { emit }) {
        
        const store = useStore()
        const filtersDictionaries = computed(() => store.getters['carsharing/getFilterValues'])
        const pricesDictionary = computed(() => store.getters['carsharing/getPricesDictionary'])
        const offers = computed(() => store.getters['carsharing/getOffers'])

        // запросить словари для фильтров
        onMounted(async () => {
            await store.dispatch('carsharing/fetchFilterValues')  
        })

        const SORT_TYPE = {
            'by_ascending': 'по возрастанию цены',
            'by_descending': 'по убыванию цены'
        }

        // значения для соотношения ключей prices dictionary 
        const PRICES = {
            1: ['', 10000],
            2: [10000, 20000],
            3: [20000, 40000],
            4: [40000, 80000],
        }

        const sort = ref('by_ascending')

        const toggleSort = () => {
            sort.value = sort.value == 'by_ascending' ? 'by_descending' : 'by_ascending'
            filters.value.sortBy = sort.value
        }

        const INITIAL_FILTERS = {
            brands: [],
            price: [],
            bodyTypes: [],
            colors: [],
            sortBy: sort.value
        }

        const filters = ref({...INITIAL_FILTERS})

        // применить фильтры
        const applyFilters = () => {
            filters.value.price = PRICES[filters.value.price]
            emit('applyFilters', filters.value)
        }

        // сбросить фильтры
        const resetFilters = () => {
            filters.value = {...INITIAL_FILTERS}
            emit('resetFilters')
        }

        return {
            filtersDictionaries,
            pricesDictionary,
            filters,
            SORT_TYPE,
            sort,
            offers,

            //methods
            applyFilters,
            resetFilters,
            toggleSort
        }
    }
}
</script>

<style lang="scss" scoped>
    .filters{

        margin-bottom: 3.125em;

        &__bottom{
            @include flex-sb-c;

            @media screen and (max-width: 768px){
                flex-direction: column-reverse;
                align-items: flex-start;

                .sort{
                    margin-bottom: 2.75em;
                }
            }

            .found{
                color: rgba(255, 255, 255, 0.3);
            }

            .sort{
                color: rgba(255, 255, 255, 0.3);

                span{
                    margin-right: 10px;
                }

                &_by{
                    color: $purple;
                    display: inline-block;
                    cursor: pointer;
                }
            }
        }

        &__selects{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            align-items: start;
            gap: 1.875em;
            margin: 2.375em 0;

            @media screen and (max-width: 975px){
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
            }

            @media screen and (max-width: 768px){
                grid-template-columns: 1fr;
                grid-template-rows: repeat(6, 1fr);
            }
        }
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
</style>