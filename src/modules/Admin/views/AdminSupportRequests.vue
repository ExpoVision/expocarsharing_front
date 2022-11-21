<template>
  <h1>Запросы в поддержку</h1>
  <div class="support">
    <div class="support-tabs">
        <UiBtn width="165px" padding="1em" type="white" @click="showArchive = false">Необработанные</UiBtn>
        <UiBtn width="165px" padding="1em" type="white" @click="showArchive = true">Архив</UiBtn>
    </div>
    <ul class="support-requests-list">
        <li 
            v-for="request in supportRequestsByStatus"
            :key="request.id"
        >
            <div class="support-requests-list__user">
                <div>{{request.user.fullName}}</div>
                <div>{{request.user.phoneNumber}}</div>
            </div>
            <UiBtn width="165px" padding="1em" type="white" @click="done">Готово</UiBtn>
        </li>
    </ul>
  </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'

export default {
    components: { UiBtn },
    data() {
        return {
            showArchive: false
        }
    },
    computed: {
        supportRequestsFromStore() {
            return this.$store.getters.getSupportRequests
        },
        supportRequestsByStatus() {
            return this.showArchive 
                    ? this.supportRequestsFromStore.filter(request => request.status == 'done')
                    : this.supportRequestsFromStore.filter(request => request.status == 'pending')
        }
    },
    methods: {
        done() { 
            //
        }
    }
}
</script>

<style lang="scss" scoped>
    .support{
    
    &-tabs{
        @include flex-fs-str;
        margin-bottom: 1.5em;

        .ui-btn{
            text-transform: none;

            &:first-child {
                margin-right: .8em;
            }
        }
    }

    &-requests-list {

        li {
            @include flex-sb-str;
            font-size: 1.2rem;

            &:not(:last-child) {
                margin-bottom: 1em;
            }
        }

        &__user{
            @include flex-sb-c;

            border: 1px solid $purple;
            transition: .3s;
            width: 100%;
            padding: 1em 1.5em;
            font-weight: 500;
        }
    }
}
</style>