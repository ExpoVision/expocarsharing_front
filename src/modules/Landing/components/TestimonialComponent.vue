<template>
  <div class="testimonial">
    <div class="testimonial__text">
       <p>{{testimonial.text}}</p>
    </div>
    <div class="testimonial__author">
        <h4>{{testimonial.author}}</h4>
        <div>{{testimonial.authorPosition}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        testimonial: Object,
    }
}
</script>

<style lang="scss" scoped>
    .testimonial{
        max-width: 500px;

        &__text{
            border: 1px solid $purple;
            position: relative;
            color: #FFF;
            padding: 1.688em 2.438em;
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 2.437em;
            line-height: 24px;

            &::after{
                content: '';
                position: absolute;
                display: block;
                width: 24px;
                height: 24px;
                bottom: -13px;
                right: 0;
                left: 0;
                margin: auto;
                background: $black-bg;
                border-right: 1px solid $purple;
                border-bottom: 1px solid $purple;;
                transform: rotate(45deg);
            }
        }

        &__author{
            text-align: center;

            h4{
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 7px;
            }

            div{
                color: $purple;
                font-weight: 400;
            }
        }
    }
</style>