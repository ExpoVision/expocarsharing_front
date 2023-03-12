<template>
  <Teleport to="body">
    <ModalComponent v-if="show" @close="$emit('close')" title="Вход">
      <template v-slot:body>
        <form name="loginForm" @submit.prevent="login">
            <UiInput 
              type="email" 
              label="Введите ваш E-mail" 
              placeholder="Ваш E-mail"
              v-model="loginForm.email" 
            />
            <UiInput 
              type="password" 
              label="Введите пароль" 
              placeholder="Ваш Пароль"
              v-model="loginForm.password" 
            />
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
import { useStore } from 'vuex'

export default {
    emits: ['close', 'openSignupModal'],
    components: { ModalComponent, UiInput, UiBtn },
    props: {
      show: Boolean
    },
    setup(_, { emit }) {
      const store = useStore()

      const loginForm = {
        email: '',
        password: ''
      }

      const login = async () => {
        await store.dispatch('user/login', loginForm)
        emit('close')
      }

      return {
        login,
        loginForm
      }
    }
}
</script>

<style lang="scss" scoped>
</style>