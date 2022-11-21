<template>
  <div>
    <h2>Добавление</h2>
    <form action="">
        <div class="selects">
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks.mark"/>
            <UiSelectCheckboxes title="Модель" :blocks="filterBlocks.model"/>
            <UiInput placeholder="Кузов" />
            <UiSelectCheckboxes title="Цвет" :blocks="filterBlocks.colors"/>
            <UiInput placeholder="Мощность" />
            <UiInput placeholder="Стоимость" />
            <UiSelectCheckboxes title="Тип" :blocks="filterBlocks.type"/>
            <UiInput placeholder="Год" />
        </div>
        <UiFileAttachment label="Фото" placeholderTip="Загрузить изображение"/>
        <UiBtn type="white" @click="addCar" width="100%">Добавить</UiBtn>
    </form>
  </div>
  <div class="delete-block">
    <h2>Удаление</h2>
    <form action="">
        <div class="selects">
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks.mark"/>
            <UiSelectCheckboxes title="Модель" :blocks="filterBlocks.model"/>
        </div>
        <div class="cars">
            <CarComponent 
                v-for="car in allCars"
                :key="car.id"
                :car="car" size="small" 
                @click="event => selectCar(event, car.id)"
            />
        </div>
        
        <UiBtn type="white" @click="deleteCar" width="100%">Удалить</UiBtn>
    </form>
  </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
import UiSelectCheckboxes from '@/components/ui/UiSelectCheckboxes.vue'
import CarComponent from '@/components/CarComponent.vue'

export default {
    components: { UiInput, UiFileAttachment, UiBtn, UiSelectCheckboxes, CarComponent },
    data() {
        return {
            filters: {
                mark: '',
                model: ''
            },
            selectedCarId: null
        }
    },
    computed: {
        filterBlocks() {
            return this.$store.getters.getFiltersBlocks
        },
        allCars() {
            return this.$store.getters.getCars
        },
        // filteredCars() {}
    },
    methods: {
        selectCar(event, id) {
            this.selectedCarId = id
            const selectedCar = document.querySelector('.car--selected')
            selectedCar?.classList.remove('car--selected')
            event.currentTarget.classList.add('car--selected')
        },
        addCar() {
            //
        },
        deleteCar() {
            //
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
        align-items: start;
        gap: 1.875em;
        margin: 2.375em 0;

        @media screen and (max-width: 975px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
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