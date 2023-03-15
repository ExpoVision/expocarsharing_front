<template>
    <h1>{{title}}</h1>
    <div class="carsharing">
        <img src="@/assets/img/single_car.png" alt="">
        <div class="carsharing__info">
            <div class="carsharing-info-row">
                <span class="info-title">Статус:</span> 
                <span>{{order?.status}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Клиент:</span> 
                <span>{{order?.user.name}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Адрес:</span> 
                <span>{{order?.address}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Тел:</span> 
                <span>{{order?.user.phoneNumber}}</span>
            </div>
        </div>
    </div>
    <div class="car">
        <div class="car__info">
            <h3>Данные авто</h3>
            <div class="carsharing-info-row">
                <span class="info-title">Марка:</span> 
                <span>{{order?.vehicle.brand.name}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Двигатель:</span> 
                <span>{{order?.vehicle.engine}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Г.Номер:</span> 
                <span>{{order?.vehicle.govNumber}}</span>
            </div>
            <!-- <div class="carsharing-info-row">
                <span class="info-title">Адрес:</span> 
                <span>{{order.vehicle.address}}</span>
            </div> -->
            <div class="carsharing-info-row">
                <span class="info-title">ID:</span> 
                <span>{{order?.vehicle.id}}</span>
            </div>
        </div>
        <div class="car__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1666222028336!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div class="carsharing-bottom">
        <div v-if="order?.status == 'RESERVED'" class="carsharing-bottom__btns">
            <UiBtn
                padding="1em"
                type="white"
                @click="confirmBooking"
            >Подтвердить бронь</UiBtn>
            <UiBtn
                padding="1em"
                type="white"
                @click="cancelBooking"
            >Отменить бронь</UiBtn>
        </div>
        <div v-if="order?.status == 'CONFIRMING_RENT'" class="carsharing-bottom__btns">
            <UiBtn
                padding="1em"
                type="white"
                @click="confirmPayment"
            >Подтвердить оплату</UiBtn>
            <UiBtn
                padding="1em"
                type="white"
                @click="cancelOrder"
            >Отменить заказ</UiBtn>
        </div>
        <div v-if="order?.status == 'RENTED'" class="carsharing-bottom__btns">
            <UiBtn
                padding="1em"
                type="white"
                @click="forceComplete"
            >Принудительное завершение</UiBtn>
        </div>
        <div v-if="order?.status == 'RESERVED' || order?.status == 'FINISH'">
            <!-- <p class="carsharing-info-row">
            <span class="info-title">Время сессии:</span> 
            <span>{{order?.totalHours}}</span>
            </p> -->
            <p class="carsharing-info-row">
                <span class="info-title">Тариф:</span> 
                <span>{{order?.offer.per_minute}} руб/мин</span>
            </p>
        </div>
    </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: { UiBtn },
    setup() {
        const store = useStore()
        const route = useRoute()

        const statuses = {
            'reserved': 'Забронирован',
            'confirming': 'Оплата доставки',
            'rented': 'Активный',
            'archived': 'Завершен',
        }

        const orderId = route.params.id

        const order = computed(() => store.getters['admin/getOrderById'](orderId))

        onMounted(() => {
            store.dispatch('admin/fetchOrdersByStatus', route.query.status)
        })

        const title = computed(() =>  {
            switch(order.value?.status){
                case('reserved'):
                    return 'Забронированные авто'
                case('confirming'):
                    return 'Подтверждение оплаты'
                case('rented'):
                    return 'Активные'
                case('archived'):
                    return 'Завершен'
                default: 
                    return 'Информация'
            }
        })

        const confirmBooking = () => {
            store.dispatch('admin/confirmBooking', {orderId, status: route.query.status})
        }

        const cancelBooking = () => {
            store.dispatch('admin/cancelBooking', {orderId, status: route.query.status})
        }

        const confirmPayment = () => {
            store.dispatch('admin/confirmPayment', {orderId, status: route.query.status})
        }

        const cancelOrder = () => {
            store.dispatch('admin/cancelOrder', {orderId, status: route.query.status})
        }

        const forceComplete = () => {
            store.dispatch('admin/forceComplete', {orderId, status: route.query.status})
        }

        return {
            order,
            title,
            statuses,

            confirmBooking,
            cancelBooking,
            confirmPayment,
            cancelOrder,
            forceComplete
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss" scoped>

    h3{
        margin-bottom: 1em;
        font-size: 1.3rem;
        color: $purple;
        font-weight: bold;
        text-decoration: underline;
    }

    .carsharing, 
    .car {
        @include flex-fs-str;
        border: 2px solid $purple;
        margin-bottom: 2em;
        font-size: 1.1rem;
        line-height: 125%;

        &__info{
            padding: 1.5em;
        }
    }

    .carsharing {
        img{
            max-width: 30%;
            object-fit: cover;
        }

        &-bottom{
            .ui-btn {
                margin-bottom: .8em;
                width: 100%;
            }
        }
    }

    .car {
        justify-content: space-between;
        min-height: 400px;

        &__map{
            min-width: 67%;
        }
    }

    .carsharing-info-row{
        margin-bottom: .5em;
    }

    .info-title{
        color: $purple;
        margin-right: 1em;
        font-weight: bold;
    }
</style>
  