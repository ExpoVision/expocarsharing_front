<template>
    <main class="terms">
        <section class="terms__header">
            <div class="wrapper">
                <h1>Условия</h1>
                <nav class="terms__header-nav">
                    <ul>
                        <li><a href="#">Свободные машины</a></li>
                        <li><a href="#">Способы оплаты</a></li>
                        <li><a href="#">Часто задаваемые вопросы</a></li>
                    </ul>
                </nav>
            </div>
        </section>
       
        <section class="terms__filters">
            <div class="wrapper">
                <h2 class="heading">Cвободные<br> машины</h2>
                <UiFilters />
            </div>
        </section>
        <PaymentSection />
        <FaqComponent /> 
        <FeedbackSection />
    </main>
  </template>
  
  <script>
import FeedbackSection from '@/modules/Landing/Sections/FeedbackSection.vue'
import UiFilters from '@/components/ui/UiFilters.vue'
import FaqComponent from '@/modules/Landing/Sections/FaqSection.vue'
import PaymentSection from '@/modules/Landing/Sections/PaymentSection.vue'

  export default {
    name: 'CatalogView',
    components: { UiFilters, FeedbackSection, FaqComponent, PaymentSection },
    data() {
      return {
        cars: [
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
            {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
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
  