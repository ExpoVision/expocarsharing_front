<template>
    <h1>Статус каршеринга</h1>
    <AdminNavTab @setStatus="setStatus"/>
    <div class="cars">
        <div 
            class="car-block"
            v-for="(carsharing, index) in carsharing"
            :key="index"
        >
            <div class="car-block__time">
                > {{carsharing.car.time}}
            </div>
            <CarComponent :car="carsharing.car" size="small"></CarComponent>
            <UiBtn width="93%" padding="1em" type="white" @click="toCarsharingInfo(carsharing.id)">Посмотреть</UiBtn>
        </div>
    </div>
</template>

<script>
import CarComponent from '@/components/CarComponent.vue'
import AdminNavTab from '@/modules/Admin/components/AdminNavTab.vue'
import UiBtn from '@/components/ui/UiBtn.vue'

export default {
    components: { AdminNavTab, CarComponent, UiBtn },
    data() {
        return {
            status: 'booked'
        }
    },
    methods: {
        toCarsharingInfo(id) {
            this.$router.push({name: 'AdminCarsharingInfo', params: {id}})
        },
        setStatus(status) {
            this.status = status
        }
    },
    computed: {
        carsharing() {
            return this.$store.getters['getCarsharingsByStatus'](this.status)
        }
    }
}
</script>

<style lang="scss" scoped>
    .cars {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.3em;
        column-gap: .7em;
    }

    .car-block{
        position: relative;

        .ui-btn{
            opacity: 0;
            position: absolute;
            margin: auto;
            bottom: 10px;
            right: 0;
            left: 0;
            transition: .2s;
        }

        &:hover,
        &:active {
            .ui-btn {
                opacity: 1;
            }
        }
    
        &__time{
            margin-bottom: .7em;
        }
    }
</style>
  