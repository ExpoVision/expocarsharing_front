<template>
    <section class="payment" id="paymentSection">
      <div class="wrapper">
        <h2 class="heading payment__heading">Cпособы<br> оплаты</h2>
        <p class="payment__text">Оплата в размере 100% суммы договора производится<br> в момент передачи автомобиля:</p>
        <div class="payment__blocks">
          <div class="payment__block">
            <img src="@/assets/img/icons/qr.svg" alt="">
            <div>
              <h3>QR-код</h3>
              <p>по QR-коду</p>
            </div>
          </div>
          <div class="payment__block">
            <img src="@/assets/img/icons/terminal.svg" alt="">
            <div>
              <h3>Эквайринг</h3>
              <p>карта Visa или MasterCard</p>
            </div>
          </div>
          <div class="payment__block">
            <img src="@/assets/img/icons/debit-cards.svg" alt="">
            <div>
              <h3>Оплата по<br> реквизитам</h3>
              <p>Перечисление<br> на расчётный счёт</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
    name: 'PaymentSection',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
  .payment{
    padding: 5em 0;
    background: url('@/assets/img/payment_bg.png') no-repeat top right;

    &__heading{
      margin-bottom: 1em;
    }

    &__text{
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 2.125em;
    }

    &__blocks{
      display: flex;
      gap: 1.82em;
    }

    &__block{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1.365em 1.5em;
      border: 1px solid $purple-opacity;
      min-width: 317px;
      width: 33%;

      img{
        margin-right: 1.625em;
      }

      h3{
        margin-bottom: 7px;
        font-size: 1.5em;
        line-height: 29px;
      }

      p{
        color: $purple;
      }
    }



    @media screen and (max-width: 1372px){
      &__block{
        min-width: auto;
        text-align: center;
        flex-direction: column;
        
        img{
          margin-right: 0;
          margin-bottom: 1.625em;
        }
      }
    }

    @media screen and (max-width: 768px){
      background-size: contain;
      background-position: bottom center;
      padding: 4.875em 0 12em;

      &__blocks{
        flex-direction: column;
      }

      &__block{
        flex-direction: row;
        min-width: 100%;
        text-align: left;
        
        img{
          min-width: 80px;
          margin-right: 1.625em;
          margin-bottom: 0;
        }
      }
    }
  }
</style>