<template>
    <div class="status-btns">
        <UiBtn width="165px" padding="1em" type="white" @click="$emit('setStatus', 'reserved')">Забронированные</UiBtn>
        <UiBtn width="165px" padding="1em" type="white" @click="$emit('setStatus', 'confirming')">Подтверждение оплаты</UiBtn>
        <UiBtn width="165px" padding="1em" type="white" @click="$emit('setStatus', 'rented')">Активные</UiBtn>
        <UiBtn width="165px" padding="1em" type="white" @click="$emit('setStatus', 'archived')">История</UiBtn>
    </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'

export default {
    emits: ['setStatus'],
    components: { UiBtn }
}

</script>

<style lang="scss" scoped>
    .status-btns{
        @include flex-sb-str;
        margin-bottom: 1.5em;

        .ui-btn{
            text-transform: none;
            white-space: break-spaces;
        }
    }
</style>
  