<template>
    <h1>{{title}}</h1>
    <div class="carsharing">
        <img src="@/assets/img/single_car.png" alt="">
        <div class="carsharing__info">
            <div class="carsharing-info-row">
                <span class="info-title">Статус:</span> 
                <span>{{statuses[carsharing.status]}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Клиент:</span> 
                <span>{{carsharing.user.fullName}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Адрес:</span> 
                <span>{{carsharing.address}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Тел:</span> 
                <span>{{carsharing.user.phoneNumber}}</span>
            </div>
        </div>
    </div>
    <div class="car">
        <div class="car__info">
            <h3>Данные авто</h3>
            <div class="carsharing-info-row">
                <span class="info-title">Марка:</span> 
                <span>{{carsharing.car.mark}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Двигатель:</span> 
                <span>{{carsharing.car.engine}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Г.Номер:</span> 
                <span>{{carsharing.car.govNumber}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">Адрес:</span> 
                <span>{{carsharing.car.address}}</span>
            </div>
            <div class="carsharing-info-row">
                <span class="info-title">ID:</span> 
                <span>{{carsharing.car.id}}</span>
            </div>
        </div>
        <div class="car__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1666222028336!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div class="carsharing-bottom">
        <div v-if="carsharing.status == 'booked'" class="carsharing-bottom__btns">
            <UiBtn padding="1em" type="white">Повтвердить бронь</UiBtn>
            <UiBtn padding="1em" type="white">Отменить бронь</UiBtn>
        </div>
        <div v-if="carsharing.status == 'confirmPayment'" class="carsharing-bottom__btns">
            <UiBtn padding="1em" type="white">Подтвердить оплату</UiBtn>
            <UiBtn padding="1em" type="white">Отменить заказ</UiBtn>
        </div>
        <div v-if="carsharing.status == 'active'" class="carsharing-bottom__btns">
            <UiBtn padding="1em" type="white">Принудительное завершение</UiBtn>
        </div>
        <div v-if="carsharing.status == 'active' || carsharing.status == 'completed'">
            <p class="carsharing-info-row">
            <span class="info-title">Время сессии:</span> 
            <span>{{carsharing.time}}</span>
            </p>
            <p class="carsharing-info-row">
                <span class="info-title">Тариф:</span> 
                <span>{{carsharing.car.price}} руб/мин</span>
            </p>
        </div>
    </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'

export default {
    components: { UiBtn },
    data() {
        return {
            statuses: {
                'booked': 'Забронирован',
                'confirmPayment': 'Оплата доставки',
                'active': 'Активный',
                'completed': 'Завершен',
            }
        }
    },
    computed: {
        carsharing() {
            return this.$store.getters['getCarsharingById'](this.$route.params.id)
        },
        title() {
            switch(this.carsharing.status){
                case('booked'):
                    return 'Забронированные авто'
                case('confirmPayment'):
                    return 'Подтверждение оплаты'
                case('active'):
                    return 'Активные'
                case('completed'):
                    return 'Завершен'
                default: 
                    return 'Информация'
            }
        }
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
  