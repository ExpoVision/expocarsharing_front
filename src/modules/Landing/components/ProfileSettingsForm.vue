<template>
    <div class="profile__card">
        <h2>{{title}}</h2>
        <div class="profile__card-content">
            <form action="profile__settings-form">
                <slot></slot>
                <ui-btn type="submit">{{btnTitle}}</ui-btn>
            </form>
        </div>
    </div>
  </template>
  
  <script>
  import UiBtn from '@/components/ui/UiBtn.vue'
  
  export default {
    name: 'ProfileView',
    components: { UiBtn, },
    props: {
        title: String,
        btnTitle: {
            type: String,
            default: 'Сохранить изменения'
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .profile{
        @media screen and (max-width: 865px) {
            .ui-btn{
                width: 100%;
            }  
        }

        &__card{
        border: 1px solid $purple;
        padding: 2.812em 4.187em;

        h1, h2{
            color: #FFF;
            font-size: 3em;
            margin-bottom: 1.5em;
        }

        &-content{
            margin-bottom: 2.5em;
        }

        &-row{
            display: flex;
            justify-content: flex-start;
            margin-bottom: .95em;
            font-size: 1.5rem;

            h3{
            color: #FFF; 
            margin-right: .687em;
            text-transform: none;
            }

            div{
            color: $purple;
            }
        }
        @media screen and (max-width: 768px){
            padding: 1.75em;

            h2{ 
            font-size: 2em;
            margin-bottom: 0.7em;
            line-height: 50px;
            }

            &-row{
            margin-bottom: .5em;
            }

            .ui-btn{
            width: 100%;
            }
        }
        }
    }
  </style>