<template>
  <div class="offer" :class="{'offer--small': size == 'small'}" @click="onOfferClick">
    <img
        v-if="offer?.vehicle?.images.length"
        :src="BASE_URL + offer?.vehicle?.images[0]?.path" 
        class="offer__img"
        alt=""
    >
    <img
        v-else
        src="@/assets/img/single_car.png"
        class="offer__img"
        alt=""
    >
    <div class="offer__info">
        <h3 v-if="isOffer" class="offer__title">
            {{offer.vehicle.brand.name}} {{offer.vehicle.model.name}}
        </h3>
        <h3 v-else class="offer__title">{{offer.brand.name}} {{offer.model.name}}</h3>
        <div class="offer__columns">
            <div>
                <h4>Год выпуска</h4>
                <span v-if="isOffer">{{offer.vehicle.year}}</span>
                <span v-else>{{offer.year}}</span>
            </div>
            <div>
                <h4>Пробег</h4>
                <span v-if="isOffer">{{offer.vehicle.mileage}}</span>
                <span v-else>{{offer.mileage}}</span>
            </div>
            <div>
                <h4>Цвет</h4>
                <span v-if="isOffer">{{offer.vehicle.color.name}}</span>
                <span v-else>{{offer.color.name}}</span>
            </div>
        </div>
        <div v-if="isOffer" class="offer__price-block">
            <div class="offer__timer">
                <img src="@/assets/img/icons/timer.svg" alt="">
                <span class="price">{{offer.per_minute}} &#8381;</span>  / минута
            </div>
            <img src="@/assets/img/icons/arrow-right-purple.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import { BASE_URL } from '@/config/index'

export default {
    name: 'OfferComponent',
    props: {
        offer: Object,
        size: String,
        isOffer: {
            type: Boolean,
            required: false,
            default: true,
        }
    },
    setup(props) {
        const router = useRouter()
        const onOfferClick = () => router.push({
                    name: 'OfferView', 
                    params: {
                        id: props.offer.vehicle.id
                    }
                })

        return {
            onOfferClick,
            BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
    .offer{
        width: auto;
        max-width: 558px;
        color: $purple;
        font-size: 1rem;
        border: 1px solid $purple-opacity;
        backdrop-filter: blur(40px);
        background: rgba(11, 11, 11, 0.7);
        cursor: pointer;

        &--small{
            max-width: 250px;
            font-size: .9rem;
        
            .offer__title{
                font-size: 1rem;
                margin-left: 0;
            }

            .offer__img{
                height: 190px;
                width: 100%;
            }

            .offer__info{
                padding: 1.3em;
            }

            .offer__columns{
                flex-direction: column;
                border: none;

                h4{
                    display: inline-block;
                    margin-bottom: 0;
                    margin-right: .9em;
                }

                div{
                    width: 100%;
                    padding: .688em 0;
                    
                    &:nth-child(2){
                        border: none;
                    }
                }
            }
        }

        @media screen and (max-width: 658px){
            width: 100%;
        }

        span{
            color: #FFF;
        }

        &__title{
            font-size: 1.5rem;
            margin-left: .6em;
            margin-bottom: 1.438em;

            @media screen and (max-width: 658px){
                margin-left: 0;
                margin-bottom: 1em;
            }
        }
        
        &__img{
            display: block;
            width: 100%;
            height: 307px;
            max-height: 307px;
            object-fit: cover;
        }

        &__info{
            padding: 1.75em 2.875em;

            @media screen and (max-width: 658px){
                padding: 1.75em;
            }
        }

        &__columns{
            @include flex-fs-c;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 1.375em;

            h4{
                margin-bottom: .5em;
                text-transform: none;
            }

            div{
                padding: .688em 1em;
                width: 33%;
            
                &:nth-child(2){
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                }
            }

            @media screen and (max-width: 658px){
                flex-direction: column;
                border: none;

                h4{
                    display: inline-block;
                    margin-bottom: 0;
                    margin-right: .9em;
                }

                div{
                    width: 100%;
                    padding: .688em 0;
                    
                    &:nth-child(2){
                        border: none;
                    }
                }
            }
        }

        &__price-block{
            @include flex-sb-c;
        }

        &__timer{
            @include flex-sb-c;
            
            img{
                margin-right: .75em;
            }
        }
    }
</style>