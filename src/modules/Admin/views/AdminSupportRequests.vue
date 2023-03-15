<template>
  <h1>Запросы в поддержку</h1>
  <div class="support">
    <div class="support-tabs">
        <UiBtn width="165px" padding="1em" type="white" @click="showArchive = false">Необработанные</UiBtn>
        <UiBtn width="165px" padding="1em" type="white" @click="switchToArchive">Архив</UiBtn>
    </div>
    <ul class="support-requests-list">
        <li 
            v-for="request in supportRequestsList"
            :key="request.id"
        >
            <div class="support-requests-list__user">
                <div>{{request.user.fullName}}</div>
                <div>{{request.user.phoneNumber}}</div>
            </div>
            <UiBtn width="165px" padding="1em" type="white" @click="complete(request.id)">Готово</UiBtn>
        </li>
    </ul>
  </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { UiBtn },
    setup() {
        const store = useStore()
        const archivalSupportRequests = computed(() => {
            return store.getters['admin/getArchivalSupportRequests']
        })
        const pendingSupportRequests = computed(() => {
            return store.getters['admin/getPendingSupportRequests']
        })

        onMounted(() => {
            store.dispatch('admin/fetchPendingSupportRequests')
        })
        
        const showArchive = ref(false)
        const supportRequestsList = computed(() => {
            return showArchive.value
                    ? archivalSupportRequests
                    : pendingSupportRequests
        })

        const complete = requestId => {
            store.dispatch('admin/completeSupportRequest', requestId)
        }

        const switchToArchive = () => {
            store.dispatch('admin/fetchArchivalSupportRequests')
            showArchive.value = true
        }

        return {
            showArchive,
            supportRequestsList,
            archivalSupportRequests,
            pendingSupportRequests,
            switchToArchive,
            complete
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