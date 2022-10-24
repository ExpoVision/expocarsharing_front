<template>
  <div class="testimonials__list">
        <testimonial-component 
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :testimonial="testimonial"
        ></testimonial-component >
    </div>
</template>

<script>
import TestimonialComponent from '@/modules/Landing/components/TestimonialComponent.vue'

export default {
    props: {
        testimonials: Array,
    },
    components: { TestimonialComponent, },
}
</script>

<style lang="scss" scoped>
    .testimonials__list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 3.625em;
        margin-bottom: 3.625em;
    }

</style>