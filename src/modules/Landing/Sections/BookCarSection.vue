<template>
    <section class="reserve">
        <div class="wrapper">
            <h2 class="reserve__heading">Забронируйте<br> автомобиль</h2>
            <p class="reserve__text">Заполните форму ниже и с вами свяжутся по указанному номеру в течении 5 минут</p>
            <form class="reserve__form" @submit.prevent="onSubmit">
                <div class="reserve__form-row">
                    <ui-input
                        type="text"
                        placeholder="Введите Адрес доставки..."
                        v-model="bookCarData.address"
                    ></ui-input>
                </div>
                <div class="reserve__form-row">
                    <ui-input
                        type="text"
                        placeholder="Ваше Имя"
                        v-model="bookCarData.name"
                    ></ui-input>
                    <ui-input
                        type="text"
                        placeholder="+ 7 ___ ___ - __ - __"
                        v-model="bookCarData.number"
                    ></ui-input>
                    <ui-btn>Забронировать</ui-btn>
                </div>
            </form>
            <p class="reserve__personal-data">Нажимая кнопку «Оставить заявку», вы даете согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных»</p>
        </div>
    </section>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import UiInput from '@/components/ui/UiInput.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: { UiBtn, UiInput },
    setup() {
        const store = useStore()
        const route = useRoute()

        const bookCarData = ref({
            address: '',
            name: '',
            number: ''
        })

        const onSubmit = async () => {
            await store.dispatch('carsharing/bookCar', { 
                bookCarData: bookCarData.value, 
                carId: route.params.id
            })
            bookCarData.value.address = ''
            bookCarData.value.name = ''
            bookCarData.value.number = ''
        }

        return {
            bookCarData,
            onSubmit
        }
    }
}
</script>

<style lang="scss" scoped>
    .reserve {
        background-color: $purple-opacity-bg;
        padding: 3.625em 0;

        &__heading{
            margin-bottom: .56em;
            font-size: 4.375rem;
            line-height: 90px;
            color: $purple-dark;

            @media screen and (max-width: 768px) {
                font-size: 3.375rem;
                line-height: 70px;
            }

            @media screen and (max-width: 567px) {
                font-size: 2.7rem;
                line-height: 60px;
            }
        }

        &__text{
            font-size: 1.125rem;
            margin-bottom: 1.75em;
        }

        &__form{
            &-row{
                &:first-child{
                    margin-bottom: 1.187em;
                    input{ 
                        width: 100%;
                        margin-right: 0;
                    }
                }

                @include flex-sb-c;
                margin-bottom: 1.625em;

                input{
                    width: 362px;
                    margin-right: 1.875em;
                }
            }
        }

        &__personal-data{
            color: $purple;
            font-size: .875rem;
            line-height: 22px;
        }

        @media screen and (max-width: 970px) {
            &__form{
                &-row{
                    flex-wrap: wrap;
                    margin-bottom: 0;

                    &:first-child{
                        margin-bottom: 0;
                    }

                    input{
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 13px;
                    }

                    .ui-btn{
                        width: 100%;
                        margin-top: 20px;
                        margin-bottom: 19px;
                    }
                }
            }
        }
    }
</style>