<template>
    <main class="carsharing">
        <section class="carsharing__header">
            <div class="wrapper">
                <h1>MERCEDES E220D</h1>
                <div class="carsharing__slider slider">
                    <button class="slider__toLeftBtn" @click="toLeft"><img src="@/assets/img/icons/arrow-left-purple.svg" alt=""></button>
                    <button class="slider__toRightBtn" @click="toRight"><img src="@/assets/img/icons/arrow-right-purple.svg" alt=""></button>
                    <div class="slider__wrapper">
                        <div class="slider__items" ref="slider">
                            <div 
                                class="slider__item"
                                v-for="(car, index) in cars"
                                :key="index"
                            >
                                <img src="@/assets/img/single_car.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section class="carsharing__characteristics">
            <div class="wrapper">
                <h2 class="heading">Характерист<br>ики</h2>
                <div class="characteristics__list">
                    <div class="characteristics__item">
                        <h4>Марка:</h4>
                        <span>Mercedes</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Средняя стоимость аренды в час:</h4>
                        <span>1200 руб.</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Объём лошадиных сил:</h4>
                        <span>422 л.с.</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Кол/во посадочных мест:</h4>
                        <span>4</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Расход топлива:</h4>
                        <span>4.0 л.</span>
                    </div>
                    
                    <div class="characteristics__item">
                        <h4>Тип коробки передач:</h4>
                        <span>механическая</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Запас хода полный бак:</h4>
                        <span>700 км</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Мультимедиа / встроенный навигатор:</h4>
                        <span>есть</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="reserve">
            <div class="wrapper">
                <h2 class="reserve__heading">Забронируйте<br> автомобиль</h2>
                <p class="reserve__text">Заполните форму ниже и с вами свяжутся по указанному номеру в течении 5 минут</p>
                <form action="" class="reserve__form">
                    <div class="reserve__form-row">
                        <ui-input type="text" placeholder="Введите Адрес доставки..."></ui-input>
                    </div>
                    <div class="reserve__form-row">
                        <ui-input type="text" placeholder="Ваше Имя"></ui-input>
                        <ui-input type="text" placeholder="+ 7 ___ ___ - __ - __"></ui-input>
                        <ui-btn>Забронировать</ui-btn>
                    </div>
                </form>
                <p class="reserve__personal-data">Нажимая кнопку «Оставить заявку», вы даете согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных»</p>
            </div>
        </section>
        <PaymentSection />
        <FeedbackComponent />
    </main>
</template>

<script>
import { ref, computed, watch } from 'vue'
import FeedbackComponent from '@/modules/Landing/Sections/FeedbackSection.vue'
import PaymentSection from '@/modules/Landing/Sections/PaymentSection.vue'
import UiBtn from '@/components/ui/UiBtn.vue'
import UiInput from '@/components/ui/UiInput.vue'


export default {
    name: 'CatalogView',
    components: { FeedbackComponent, PaymentSection, UiBtn, UiInput },
    setup() {
        const slider = ref(null);
        const cars = [
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        ]

        const slidesNumberPerPage = 1;

        let position = 1;
        let direction;

        const sliderSize = Math.ceil(cars.length / slidesNumberPerPage);
        const sliderWidth = computed(() => {
            return sliderSize * 100;
        })

        watch(
            () => slider.value,
            () => {
                slider.value.style.width = sliderWidth.value + '%';            
            },
        )


        const toRight = () => {
            if(direction === 'left'){position++}
            if(position > sliderSize-1){
                position = 0;
            }

            slider.value.style.transform = `translateX(-${position*100/sliderSize}%)`;
            position++;
            direction = 'right';
        }

        const toLeft = () => {
            if(direction === 'right'){position--}
            if(position < 1){
                position = sliderSize;
            }

            slider.value.style.transform = `translateX(-${(position-1)*(100/sliderSize)}%`;
            position--;
            direction = 'left';
        }

        return {
            toLeft,
            toRight,
            slider,
            cars,
        }
    }
}
</script>
  
<style lang="scss" scoped>
    .carsharing{
        padding-top: 3em;

        h1{
            font-weight: 300;
            font-size: 3rem;
            margin-bottom: 1em;    
        }

        .slider {
            position: relative;

            &__wrapper{
                overflow: hidden;
            }

            &__items{
                @include flex-sb-c;
                transition: .3s;
            }

            &__item{
                width: 90vw;
                img{
                    width: 100%;
                }
            }

            button{
                position: absolute;
                top: 50%;
                border: none;
                background: none;
                cursor: pointer;

                &.slider__toLeftBtn{
                    left: -5%;
                }

                &.slider__toRightBtn{
                    right: -5%;
                }
            }
        }

        &__characteristics{

            height: 60vh;
            padding: 5em 0;
            background: url('@/assets/img/characteristics_bg.png') no-repeat top right;

            @media screen and (max-width: 980px) {
                height: auto;
                background-position: 100% 25%;
                background-size: 70%;
            }

            h2{
                margin-bottom: .5em;

                br{
                    display: none;
                }
            }

            @media screen and (max-width: 768px) {
                background-position: 100% 25%;
                background-size: 70%;

                h2{
                    margin-bottom: 101px;

                    br{
                        display: block;
                    }
                }
            }

            .characteristics__list{
                max-width: 700px;
                display: grid;
                grid-template-columns: 2fr 2fr;
                gap: 1.4em;

                @media screen and (max-width: 768px) {
                    grid-template-columns: 1fr;
                }

                div{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                h4{
                    color: $purple-opacity;
                    margin-right: 8px;
                    font-weight: 400;
                    text-transform: none;
                }
            }
        }

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
    }

</style>
  