<template>
    <section class="faq">
      <div class="wrapper">
        <h2 class="faq__heading heading">Часто<br> задаваемые<br> вопросы</h2>
        <div class="faq__list">
          <DropdownComponent title="Можно ли вывозить автомобиль за черту города, в котором он был арендован?">{{answer}}</DropdownComponent>
          <DropdownComponent title="Можно ли вывозить автомобиль за черту города, в котором он был арендован?">{{answer}}</DropdownComponent>
          <DropdownComponent title="Можно ли вывозить автомобиль за черту города, в котором он был арендован?">{{answer}}</DropdownComponent>
          <DropdownComponent title="Можно ли вывозить автомобиль за черту города, в котором он был арендован?">{{answer}}</DropdownComponent>
        </div>
      </div>
    </section>
</template>

<script>
import DropdownComponent from '@/components/DropdownComponent.vue'

export default {
    name: 'FaqSection',
    components: { DropdownComponent },
    data() {
        return {
            answer: "В более расширенном современном определении, появившемся с развитием электроники, машиной является технический объект, состоящий из взаимосвязанных функциональных частей (деталей, узлов, устройств, механизмов и др.), использующий энергию для выполнения возложенных на него функций[2]. В этом понимании машина может и не содержать механически движущихся частей. Примером таких устройств служат электронно-вычислительная машина (компьютер), электрический трансформатор[1].",
        }
    }
}
</script>

<style lang="scss" scoped>
    .faq{
        padding: 8.875em 0 4.812em;
        background: url('@/assets/img/faq_bg.png') no-repeat top right;

        &__heading {
          margin-bottom: 77px;
        }

        &__list{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 23px;
        }

        @media screen and (max-width: 768px) {
          background-size: contain;
          background-position: bottom center;
          padding: 4.875em 0 20.812em;

          &__list{
            gap: 11px;
          }
        }
    }
</style>