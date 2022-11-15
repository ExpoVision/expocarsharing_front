<template>
    <Transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <h2 class="modal__heading">{{title}}</h2>
                <slot name="header">
                </slot> 

                <slot name="body">
                </slot> 
                <div class="modal__close" @click="$emit('close')"></div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        title: String
    },
    mounted() {
        window.addEventListener('keydown', this.escCloseModal);
    },
    destroy() {
        window.removeEventListener('keydown', this.escCloseModal);
    },
    methods: {
        escCloseModal(e) {
            if (this.show && e.key === 'Escape') {
                this.$emit('close')
            }
        },
    }
}
</script>

<style lang="scss">
    .modal{

        position: relative;
        z-index: 2000;
        width: 558px;
        padding: 3.063em 4.25em;
        border: 1px solid $purple;
        background: linear-gradient(0deg, #130E31, #130E31), #0B0B0B;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 10%;

        &__heading{
            font-size: 3rem;
            color: #FFF;
            margin-bottom: 1.312rem;
        }

        &-backdrop{
            position: fixed;
            z-index: 1999;
            overflow-y: scroll;
            width: 100vw;
            height: 100vh;
            top: 0;
            background-color: rgba($color: #000000, $alpha: .9);
        }

        &__close {
            position: absolute;
            top: 0;
            right: -40px;
            width: 24px;
            height: 24px;
            opacity: 0.8;
            cursor: pointer;
            transition: opacity ease 0.5s;

            &:hover {
                opacity: 1;
            }

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 10px;
                display: block;
                width: 24px;
                height: 3px;
                background: $purple;
            }

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }
        }

        @media screen and (max-width: 768px){
            width: 90%;
            padding: 2em;

            &__close{
                top: 26px;
                right: 25px;
            }
        }

        @media screen and (max-width: 512px){
            width: 95%;

            &__heading {
                font-size: 3rem;
            }
        }


        .ui-input-label {
            display: block;
            margin-bottom: 29px;
        }

        .ui-btn {
            width: 100%;
            padding-top: 1.625em;
            padding-bottom: 1.625em;
        }

        a {
            font-weight: bold;
        }

        p {
            margin-bottom: 16px;

            &:first-child {
                margin-top: 2.188rem;
            }
        }

        h3{
            font-size: 1.5rem;
            color: $purple;
            margin-bottom: 1.875rem;
        }
    }

    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease;
    }
</style>