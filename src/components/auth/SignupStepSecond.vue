<template>
    <UiInput type="email" label="E-mail" />
    <UiInput type="password" label="Введите пароль" />
    <UiInput type="password" label="Введите пароль еще раз" />
</template>

<script>
import UiInput from '@/components/ui/UiInput.vue'

export default {
    components: { UiInput }
}
</script>

<style>

</style>