<template>
    <main class="single-offer">
        <section class="single-offer__header">
            <div class="wrapper">
                <h1>{{offer?.vehicle.brand.title}} {{offer?.vehicle.model.title}}</h1>
                <OfferSliderSection v-if="offer?.vehicle.media" :media="offer?.vehicle.media" />
            </div>
        </section>
       
        <section class="single-offer__characteristics">
            <div class="wrapper">
                <h2 class="heading">Характерист<br>ики</h2>
                <div class="characteristics__list">
                    <div class="characteristics__item">
                        <h4>Марка:</h4>
                        <span>{{offer?.vehicle.brand}}</span>
                    </div>
                    <div class="characteristics__item">
                        <h4>Средняя стоимость аренды в час:</h4>
                        <span>{{offer?.per_minute}}</span>
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
        <BookCarSection />
        <PaymentSection />
        <FeedbackComponent />
    </main>
</template>

<script>
import BookCarSection from '@landing/Sections/BookCarSection.vue'
import FeedbackComponent from '@/modules/Landing/Sections/FeedbackSection.vue'
import PaymentSection from '@/modules/Landing/Sections/PaymentSection.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import OfferSliderSection from '@landing/components/OfferSliderSection.vue'


export default {
    name: 'OfferView',
    components: { FeedbackComponent, PaymentSection, BookCarSection, OfferSliderSection },
    setup() {
        const store = useStore()
        const route = useRoute()

        const offerId = route.params.id

        const offer = computed(() => store.getters['carsharing/getOfferByCarId'](offerId))

        onMounted(() => {
            if(store.getters['carsharing/getOffers'] == []) {
                store.dispatch('carsharing/fetchOffers')
            }
        })

        return {
            offer
        }
    }
}
</script>
  
<style lang="scss" scoped>
    .single-offer{
        padding-top: 3em;

        h1{
            font-weight: 300;
            font-size: 3rem;
            margin-bottom: 1em;    
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
    }
</style>
  