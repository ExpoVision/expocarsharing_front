<template>
  <Teleport to="body">
    <ModalComponent v-if="show" @close="$emit('close')" title="Вход">
      <template v-slot:body>
        <form action="">
            <UiInput type="email" label="Введите ваш E-mail" placeholder="Ваш E-mail" />
            <UiInput type="password" label="Введите пароль" placeholder="Ваш Пароль" />
            <UiBtn width="180px" padding="1em" type="white">Войти</UiBtn>
        </form>
        <div class="login-bottom">
            <p>Нет аккаунта? <!-- <router-link>Зарегистрируйся</router-link> --> <a href="" @click.prevent="$emit('openSignupModal')">Зарегистрируйся</a></p>
            <!-- <router-link>Забыли пароль?</router-link> -->
            <a href="">Забыли пароль?</a>
        </div>
      </template>
    </ModalComponent>
  </Teleport>
</template>

<script>
import UiInput from '@/components/ui/UiInput.vue'
import UiBtn from '@/components/ui/UiBtn.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
    emits: ['close', 'openSignupModal'],
    components: { ModalComponent, UiInput, UiBtn },
    props: {
        show: Boolean
    },
}
</script>

<style lang="scss" scoped>
</style>