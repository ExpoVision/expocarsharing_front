<template>
    <main class="terms">
        <section class="terms__header">
            <div class="wrapper">
                <h1>Условия</h1>
                <nav class="terms__header-nav">
                    <ul>
                        <li>
                            <a
                                href="#freeCarsSection"
                                data-anchor="freeCarsSection"
                                @click="onAnchorLinkClick"
                            >Свободные машины</a>
                        </li>
                        <li>
                            <a
                                href="#paymentSection"
                                data-anchor="paymentSection"
                                @click="onAnchorLinkClick"
                            >Способы оплаты</a>
                        </li>
                        <li>
                            <a
                                href="#faqSection"
                                data-anchor="faqSection"
                                @click="onAnchorLinkClick"
                            >Часто задаваемые вопросы</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
       
        <section class="terms__filters" id="freeCarsSection">
            <div class="wrapper">
                <h2 class="heading">Cвободные<br> машины</h2>
                <FiltersComponent 
                    @applyFilters="onApplyFilters"
                    @resetFilters="onResetFilters"
                />
            </div>
        </section>
        <PaymentSection />
        <FaqSection /> 
        <FeedbackSection />
    </main>
  </template>
  
  <script>
import FeedbackSection from '@/modules/Landing/Sections/FeedbackSection.vue'
import FiltersComponent from '@landing/components/FiltersComponent.vue'
import FaqSection from '@/modules/Landing/Sections/FaqSection.vue'
import PaymentSection from '@/modules/Landing/Sections/PaymentSection.vue'
import { useStore } from 'vuex'

  export default {
    name: 'CatalogView',
    components: { FiltersComponent, FeedbackSection, FaqSection, PaymentSection },
    setup() {
        const store = useStore()

        const onApplyFilters = filters => {
            store.dispatch('carsharing/fetchCars', {filters})
        }

        const onResetFilters = () => {
            store.dispatch('carsharing/fetchCars')
        }

        const onAnchorLinkClick = e => {
            e.preventDefault()
            const hash = e.target.attributes['data-anchor'].value
            document.getElementById(hash)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        return {
            onApplyFilters, 
            onResetFilters,
            onAnchorLinkClick,
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    * {scroll-behavior: smooth;}
    .terms{

        h1{
            font-weight: 300;
            font-size: 3rem;    
        }

        &__header{
            height: 80vh;
            padding: 3.5em 0;
            background: url('@/assets/img/terms_bg.png') no-repeat top right;
            background-size: 100%;

            @media screen and (max-width: 768px){
                background-position: 50% 75%;
                background-size: 150%;
            }
            

            .wrapper{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
            }

            &-nav{
                ul{
                    
                    li{
                        width: fit-content;
                        border-bottom: 1px solid $purple;
                        margin-bottom: 3em;

                        a{
                            color: $purple;
                            padding-bottom: 5px;
                            display: block;
                            text-decoration: none;
                            font-weight: 500;
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }

        &__filters{
            padding: 6em 0;
        }
    }
  
  </style>
  