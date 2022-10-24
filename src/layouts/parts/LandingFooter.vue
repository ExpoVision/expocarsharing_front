<template>
    <footer>
      <div class="wrapper">
        <div class="footer-top">
            <div class="logo">Лого</div>
            <MainNavComponent type="mobile-visible"></MainNavComponent>
        </div>
        <div class="footer-bottom">
            <div class="footer-text">
                <a class="privace-policy">Политика конфиденциальности и обработки персональных данных</a>
                <div class="copyright">2020. Все права защищены</div>
            </div>
            <div class="socials">

            </div>
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

        .footer-bottom{
            @include flex-sb-c;  

            .footer-text{
                color: $darkgrey;
                font-size: .875rem;

                .privace-policy{
                    display: block;
                    text-decoration: underline;
                    margin-bottom: .5em;
                }
            }
        }

        @media screen and (max-width: 768px) {

            text-align: center;

            .logo{
                margin-bottom: 26px;
            }

            .footer-top{
                flex-direction: column;
            }

            .footer-bottom{
                flex-direction: column;
            }
        } 
            
      }
  </style>