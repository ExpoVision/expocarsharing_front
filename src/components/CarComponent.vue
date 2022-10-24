<template>
  <div class="car" :class="{'car--small': size == 'small'}">
    <img src="@/assets/img/single_car.png" alt="" class="car__img">
    <div class="car__info">
        <h3 class="car__title">{{car.title}}</h3>
        <div class="car__columns">
            <div>
                <h4>Год выпуска</h4>
                <span>{{car.year}}</span>
            </div>
            <div>
                <h4>Пробег</h4>
                <span>{{car.mileage}} км</span>
            </div>
            <div>
                <h4>Цвет</h4>
                <span>{{car.color}}</span>
            </div>
        </div>
        <div class="car__price-block">
            <div class="car__timer">
                <img src="@/assets/img/icons/timer.svg" alt="">
                <span class="price">{{car.price}} &#8381;</span>  / минута
            </div>
            <img src="@/assets/img/icons/arrow-right-purple.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CarComponent',
    props: {
        car: Object,
        size: String,
        /* src: String,
        title: String,
        year: Number,
        mileage: Number,
        color: String,
        price: Number, */
    }
}
</script>

<style lang="scss" scoped>
    .car{
        width: auto;
        max-width: 558px;
        color: $purple;
        font-size: 1rem;
        border: 1px solid $purple-opacity;
        backdrop-filter: blur(40px);
        background: rgba(11, 11, 11, 0.7);

        &--small{
            max-width: 250px;
            font-size: .9rem;

            .car {
                &__title{
                    font-size: 1rem;
                }

                &__img{
                    height: 190px;
                }

                &__info{
                    padding: 1.3em;
                }

                &__columns{
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