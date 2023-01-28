<template>
    <section class="testimonials">
        <div class="wrapper">
            <h2 class="testimonials__heading heading">Отзывы<br> наших<br> клиентов</h2>
            <div class="testimonials__list">
                <testimonial-component 
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    :testimonial="testimonial"
                ></testimonial-component >
            </div>
            <a href="#" class="testimonials__more-link">загрузить еще</a>
        </div>
        <SliderSection
            v-if="showTestimonialsSlider" 
            title="Отзывы наших клиентов" 
            :elements="testimonials" 
            type="testimonials" 
        />
    </section>  
</template>

<script>
import SliderSection from '@/modules/Landing/Sections/SliderSection.vue'
import TestimonialComponent from '@/modules/Landing/components/TestimonialComponent.vue'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';

export default {
    components: { TestimonialComponent, SliderSection },
    setup() {
        const store = useStore()
        //FronFlag
        onMounted(() => {
            /* store.dispatch('fetchTestimonials') */
            
            if(window.innerWidth <= 768) {
                showTestimonialsSlider.value = true
            }
        })
        const testimonials = computed(() => store.getters.getTestimonials)
        
        const showTestimonialsSlider = ref(false)
        
        const toggleTestimonialsView = () => {
            if (window.innerWidth <= 768) {
                showTestimonialsSlider.value = true
            } else {
                showTestimonialsSlider.value = false
            }
        }

        window.addEventListener('resize', toggleTestimonialsView)


        onBeforeUnmount(() => {
            window.removeEventListener('resize', toggleTestimonialsView)
        })
        return {
            testimonials,
            showTestimonialsSlider
        }
    }
}
</script>

<style lang="scss" scoped>
    .testimonials{
        padding: 3.562em 0;
        background: url('@/assets/img/testimonials_bg.png') no-repeat top right;

        @media screen and (max-width: 768px){
            padding-bottom: 15em;
            background-position: bottom center;
            background-size: 100%;
                
            .wrapper{
                display: none;
            }
        }

        &__heading{
            color: $purple-dark;
            margin-bottom: .635em;
            }

            &__more-link{
            width: 140px;
            display: block;
            margin: auto;
            padding-bottom: .5em;
            border-bottom: 1px solid $purple;
            color: $purple;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            transition: .3s;

            &:hover, &:active{
                color: $lilac;
                border-color: $lilac;
            }

            @media screen and (max-width: 865px){
                display: none;
            }
        }

        &__list{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 3.625em;
            margin-bottom: 3.625em;
        }

        &__slider{
            display: none;

            @media screen and (max-width: 865px){
                display: block;
            }
        }
    }
</style>