<template>
    <div class="single-car__slider slider">
        <button class="slider__toLeftBtn" @click="toLeft"><img src="@/assets/img/icons/arrow-left-purple.svg" alt=""></button>
        <button class="slider__toRightBtn" @click="toRight"><img src="@/assets/img/icons/arrow-right-purple.svg" alt=""></button>
        <div class="slider__wrapper">
            <div class="slider__items" ref="slider">
                <div 
                    class="slider__item"
                    v-for="(media, index) in car.media"
                    :key="index"
                >
                    <img src="@/assets/img/single_car.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
    name: 'SingleCarSliderSection',
    props: {
        media: Array
    },
    setup(props) {
        const slider = ref(null)
        const slidesNumberPerPage = 1;

        let position = 1;
        let direction;

        const sliderSize = Math.ceil(props.media.length / slidesNumberPerPage);
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
            slider
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>