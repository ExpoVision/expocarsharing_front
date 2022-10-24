<template>
    <div class="slider">
        <div class="slider__controls slider__controls--ontop">
            <button v-if="currentSlide != 1" class="slider__controls--toLeft" @click="toLeft"><img src="@/assets/img/icons/arrow-left-purple.svg" alt=""></button>
            <div v-else class="slider__controls--empty-btn"></div>
            <div class="slider__controls--position">
                0{{currentSlide}}
            </div>
            <button v-if="currentSlide != sliderSize" class="slider__controls--toRight" @click="toRight"><img src="@/assets/img/icons/arrow-right-purple.svg" alt=""></button>
            <div v-else class="slider__controls--empty-btn"></div>
        </div>
        <div class="slider__wrapper wrapper" ref="sliderWrapper" 
            @touchstart="touchStart" @touchend="touchEnd"
            @mousedown="mouseDown" @mouseup="mouseUp"
        >
            <div class="slider__baffle"></div>
            <div v-if="type == 'cars'" class="slider__items" ref="slider">
                <div 
                    class="slider__item"
                    v-for="(car, index) in elements"
                    :key="index"
                >
                    <CarComponent :car="car" />
                </div>
            </div>
            <div v-else-if="type == 'testimonials'" class="slider__items" ref="slider">
                <div 
                    class="slider__item"
                    v-for="(testimonial, index) in elements"
                    :key="index"
                >
                    <TestimonialComponent :testimonial="testimonial"/>
                </div>
            </div>
        </div>
        <div class="slider__controls slider__controls--mobile">
            <button v-if="currentSlide != 1" class="slider__controls--toLeft" @click="toLeft"><img src="@/assets/img/icons/arrow-left-purple.svg" alt=""></button>
            <div v-else class="slider__controls--empty-btn"></div>
            <div class="slider__controls--position">
                <span class="current">{{currentSlide}}</span> из {{slides?.length}}
            </div>
            <button v-if="currentSlide != sliderSize" class="slider__controls--toRight" @click="toRight"><img src="@/assets/img/icons/arrow-right-purple.svg" alt=""></button>
            <div v-else class="slider__controls--empty-btn"></div>
        </div>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref, watch } from '@vue/runtime-core'
import CarComponent from '@/components//CarComponent.vue'
import TestimonialComponent from '@/modules/Landing/components/TestimonialComponent.vue'

export default {
    props: {
        elements: Array,
        autoscroll: Boolean,
        type: String,
        slidesNumberPerPage: {
            type: Number,
            default: 2,
        }
    },
    components: { CarComponent, TestimonialComponent },
    setup(props) {
        const slider = ref(null)
        const sliderWrapper = ref(null)
        const slides = ref(null)

        const sliderWrapperSize = ref('')

        const slidesNumberPerPage = ref(props.slidesNumberPerPage)

        const position = ref(1)
        const currentSlide = ref(1)
        let direction;

        const sliderSize = computed(() => {
            return Math.ceil(props.elements?.length / slidesNumberPerPage.value)
        });

        const sliderWidth = computed(() => {
            return sliderSize.value * 100;
        })
        
        watch(
            () => sliderWidth.value,
            () => slider.value.style.width = sliderWidth.value + '%' 
        )

        const toRight = () => {
            if(direction === 'left'){position.value++}
            if(position.value === sliderSize.value){ 
                position.value = 0 
                currentSlide.value = 0
            }

            slider.value.style.transform = `translateX(-${position.value*100/sliderSize.value}%)`
            position.value++
            currentSlide.value++
            direction = 'right'
        }

        const toLeft = () => {
            if(direction === 'right'){position.value--}
            if(position.value < 1 || direction === undefined){
                position.value = sliderSize.value
                currentSlide.value = sliderSize.value + 1
            }

            slider.value.style.transform = `translateX(-${(position.value-1)*(100/sliderSize.value)}%`;
            position.value--
            currentSlide.value--
            direction = 'left'
        }

        const setSlideWidth100 = () => {
            if (window.innerWidth <= 768){
                slidesNumberPerPage.value = 1

                const styles = window.getComputedStyle(sliderWrapper.value);
                const padding = parseFloat(styles.paddingLeft) +
                                parseFloat(styles.paddingRight);
                sliderWrapperSize.value  = sliderWrapper.value.clientWidth - padding

                slides.value = Array.from(slider.value.querySelectorAll(".slider__item"))
                slides.value.forEach(slide => {
                    slide.style.width = sliderWrapperSize.value + 'px'
                })
            } else {
                slidesNumberPerPage.value = props.slidesNumberPerPage
            }
        }

        const touchstartX = ref(0)
        const touchendX = ref(0)

        function checkDirection(startX, endX) {
            if (startX < endX) toLeft()
            if (startX > endX) toRight()
        }

        const touchStart = e => {
            touchstartX.value = e.changedTouches[0].screenX
        }

        const touchEnd = e => {
            touchendX.value = e.changedTouches[0].screenX

            if(Math.abs(touchstartX.value - touchendX.value) > 50) {    
                checkDirection(touchstartX.value, touchendX.value)
            }
        }

        const clientStartX = ref(0)
        const clientEndX = ref(0)

        const mouseDown = e => {
            clientStartX.value = e.clientX
        }

        const mouseUp = e => {
            clientEndX.value = e.clientX

            if(Math.abs(clientStartX.value - clientEndX.value) > 80) {
                checkDirection(clientStartX.value, clientEndX.value)
            }
        }

        const onResize = () => {
            setSlideWidth100()
        }

        onMounted(() => {
            window.addEventListener('resize', onResize)

            sliderWrapper.value = slider.value.parentNode
            setSlideWidth100()
        })

        onBeforeUnmount(() => {
            window.removeEventListener('resize', onResize)
        })

        return {
            toLeft,
            toRight,
            touchStart,
            touchEnd,
            mouseDown,
            mouseUp,
            slider,
            slides,
            sliderSize,
            currentSlide,
        }
    },
}
</script>

<style lang="scss" scoped>
    .slider {
        position: relative;

        @media screen and (max-width: 768px) {
            padding-bottom: 5em;
        }

        @media screen and (max-width: 658px) {
            padding-bottom: 3.5em;
        }

        &__controls{
            position: absolute;
            top: -10%;
            right: 20%;
            @include flex-sb-c;

            &--position{
                min-width: fit-content;
            }

            &--ontop{
                display: flex;
            }

            &--mobile{
                display: none;
                color: $purple;
                gap: 1.25em;
                top: auto;
                bottom: 0;
                right: 0;
                left: 0;
                margin-left: auto;
                margin-right: auto;
                min-width: 135px;
                width: fit-content;

                .current{
                    color: #FFF;
                    font-size: 1.5em;
                    font-weight: 500;
                }
            }

            button{
                border: none;
                background: none;
                cursor: pointer;
            }

            &--empty-btn{
                width: 23px;
            }

            @media screen and (max-width: 768px) {
                &--ontop{
                    display: none;
                }

                &--mobile{
                    display: flex;
                }
            }
        }

        &__wrapper{
            position: relative;
        }

        &__baffle{
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            z-index: 999;
        }

        &__items{
            @include flex-sb-c;
            gap: 30px;
            transition: .3s;
        }

        &__item{
            max-width: 558px;

            & > * {
                max-width: 100%;
                width: 100%;
            }

            @media screen and (max-width: 768px) {
                max-width: none;
            } 
        }
    }
</style>