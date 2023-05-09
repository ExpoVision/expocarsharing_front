<template>
    <h1>Отзывы</h1>
    <ul class="testimonials-list">
        <li 
            class="testimonials-list__item"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
        >
            <div class="testimonials-list__item-body">
                <div>{{testimonial.text}}</div>
                <div><span>Оценка:</span> {{testimonial.evaluation}}</div>
                <div><span>Автор:</span> {{testimonial.author}}{{testimonial.authorPosition}}</div>
            </div>
            <ui-btn
                width="100px"
                padding="0.7em"
                @click="deleteTestimonial(testimonial.id)"
            >Удалить</ui-btn>
        </li>
    </ul>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
    components: { UiBtn },
    setup() {
        const store = useStore()

        const testimonials = computed(() => store.getters.getTestimonials)
        const deleteTestimonial = id => {
            store.dispatch('deleteTestimonial', id)
        }

        onMounted(() => {
            store.dispatch('fetchTestimonials')
        })

        return {
            testimonials,
            deleteTestimonial
        }
    }
}
</script>

<style lang="scss" scoped>
    .testimonials-list {
        &__item {
            border: 1px solid $purple;
            transition: .3s;
            font-size: 1.1rem;
            line-height: 120%;
            padding: 1em 1.3em;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            &:not(:last-child) {
                margin-bottom: 1em;
            }

            &-body{
                max-width: 80%;

                div{
                    margin-bottom: .5em;

                    span{
                        color: $purple;
                    }
                }
            }
        }
    }
</style>