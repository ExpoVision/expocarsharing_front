<template>
   <form class="filters">
        <div class="filters__selects">
            <div class="filters__selects-area">
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
                <UiFilterSelect 
                    title="Цена" 
                    :items="pricesDictionary" 
                    type="single-column"
                    v-model="filters.prices" 
                />
                <UiFilterSelect 
                    title="Тип" 
                    :items="typesDictionary" 
                    v-model="filters.types"
                />
                <UiFilterSelect 
                    title="Цвет" 
                    :items="colorsDictionary" 
                    v-model="filters.colors"
                />
                <button class="filters__btn filters__btn--reset" @click="resetFilters">
                    <img src="@/assets/img/icons/cross-purple.svg" alt=""
                    > Сбросить всё</button>
            </div>
            <button 
                class="filters__btn filters__btn--apply" 
                @click="applyFilters"
            >Применить фильтры</button>
        </div>
        <div class="filters__bottom">
            <div class="found">
                Найдено 16 авто
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
    emits: ['applyFlters', 'resetFilters'],
    setup(_, { emit }) {
        const store = useStore()
        const brandsDictionary = computed(() => store.getters['carsharing/getBrandsDictionary'])
        const modelsDictionary = computed(() => store.getters['carsharing/getModelsDictionary'])
        const pricesDictionary = computed(() => store.getters['carsharing/getPricesDictionary'])
        const typesDictionary = computed(() => store.getters['carsharing/getTypesDictionary'])
        const colorsDictionary = computed(() => store.getters['carsharing/getColorsDictionary'])

        onMounted(() => {
            store.dispatch('carsharing/fetchBrandsDictionary')
            store.dispatch('carsharing/fetchModelsDictionary')
            store.dispatch('carsharing/fetchPricesDictionary')
            store.dispatch('carsharing/fetchTypesDictionary')
            store.dispatch('carsharing/fetchColorsDictionary')
        })

        const SORT_TYPE = {
            'by_ascending': 'по возрастанию цены',
            'by_descending': 'по убыванию цены'
        }

        const sort = ref('by_ascending')

        const toggleSort = () => {
            sort.value = sort.value == 'by_ascending' ? 'by_descending' : 'by_ascending'
            filters.value.sortBy = sort.value
        }

        const INITIAL_FILTERS = {
            brands: [],
            models: [],
            prices: [],
            types: [],
            colors: [],
            sortBy: sort.value
        }

        const filters = ref({...INITIAL_FILTERS})

        const applyFilters = () => {
            emit('applyFilters', filters.value)
        }

        const resetFilters = () => {
            filters.value = {...INITIAL_FILTERS}
            emit('resetFilters')
        }

        return {
            brandsDictionary,
            modelsDictionary,
            pricesDictionary,
            typesDictionary,
            colorsDictionary,
            filters,
            SORT_TYPE,
            sort,

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
            align-items: start;
            grid-template-areas: "selects selects selects"
                                "selects selects selects"
                                ". apply .";
            gap: 1.875em;
            margin: 2.375em 0;

            @media screen and (max-width: 975px){
                grid-template-columns: repeat(2, 1fr);
                grid-template-areas: "selects selects"
                                    "selects selects"
                                    "selects selects"
                                    "apply .";
            }

            @media screen and (max-width: 768px){
                grid-template-columns: 1fr;
                grid-template-areas: "selects"
                                    "selects"
                                    "selects"
                                    "selects"
                                    "selects"
                                    "selects"
                                    "apply";
            }
        }

        &__selects-area{
            grid-area: selects;
            display: contents;
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

            &--apply{
                grid-area: apply;
            }
        }
    }
</style>