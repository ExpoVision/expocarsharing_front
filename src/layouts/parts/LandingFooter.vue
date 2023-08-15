<template>
    <footer>
      <div class="wrapper">
        <div class="logo">Лого</div>
        <MainNavComponent type="mobile-visible"></MainNavComponent>
        <div class="contacts">
            <div>
                <div class="inn">ИНН: 7733374916 </div>
                <div class="kpp">КПП: 772701001 </div>
            </div>
            <div>
                <div>E-mail: <a class="email" href="mailto:info@ruscapcar.ru">info@ruscapcar.ru</a></div>
                <div>Телефон: <a class="phone" href="tel:+7(968)0001027">+7(968)000-10-27</a></div>
            </div>
        </div>
        <div class="footer-text">
            <a class="privace-policy">Политика конфиденциальности и обработки персональных данных</a>
            <div class="copyright">&copy; ООО «РУСКАР» 2023. Все права защищены</div>
        </div>
      </div>
    </footer>
</template>
  
<script>
import MainNavComponent from '@/components/MainNavComponent.vue';
  
  export default {
      name: 'LandingFooter',
      components: { MainNavComponent },
  }
  </script>
  
  <style lang="scss" scoped>
      footer {
        padding: 2.18em 0;

        .wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2em;
        }

        .logo {
          font-weight: bold;
        }
  
        .footer-top{
            @include flex-sb-c;  
            margin-bottom: 2.06em;

            @media screen and (max-width: 1155px) {
                font-size: 1.5rem;
            }
        }

        .footer-text{
            color: $darkgrey;
            font-size: .875rem;

            .privace-policy{
                display: block;
                text-decoration: underline;
                margin-bottom: .5em;
            }
        }

        .contacts{
            color: $darkgrey;
            font-size: .875rem;
            display: grid;
            grid-template-columns: 1fr 1fr;

            div:not(:last-child){
                margin-bottom: .5em;
            }
        }

        @media screen and (max-width: 768px) {
            text-align: center;
            .wrapper{
                grid-template-columns: 1fr;
                justify-items: center;
            }

            .contacts{
                grid-template-columns: 1fr;
            }

            .logo{
                margin-bottom: 26px;
            }
        } 
            
      }
  </style>