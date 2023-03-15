<template>
    <h1>Статус каршеринга</h1>
    <AdminNavTab @setStatus="setStatus"/>
    <div class="orders">
        <div 
            class="order-block"
            v-for="order in orders"
            :key="order"
        >
            <OfferComponent :offer="order.offer" size="small" />
            <UiBtn 
                width="100%"
                padding="1em"
                type="white"
                @click="toCarsharingInfo(order.id)"
            >Посмотреть</UiBtn>
        </div>
    </div>
</template>

<script>
import OfferComponent from '@/components/OfferComponent.vue'
import AdminNavTab from '@/modules/Admin/components/AdminNavTab.vue'
import UiBtn from '@/components/ui/UiBtn.vue'
import { useStore } from 'vuex'
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { AdminNavTab, OfferComponent, UiBtn },
    setup() {
        const store = useStore()
        const router = useRouter()

        const status = ref('reserved')

        const fetchOrders = ordersStatus => {
            store.dispatch('admin/fetchOrdersByStatus', ordersStatus)
        }

        onMounted(() => {
            fetchOrders(status.value)
        })
        
        const orders = computed(() => {
            return store.getters['admin/getOrders']
        })

        const setStatus = newStatus => status.value = newStatus

        watch(status, newVal => {
            fetchOrders(newVal)
        })

        const toCarsharingInfo = id => {
            router.push({name: 'AdminOrderInfo', params: {id}, query: {status: status.value}})
        }

        return {
            orders,
            setStatus,
            toCarsharingInfo
        }
    }
}
</script>

<style lang="scss" scoped>
    .orders {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.3em;
        column-gap: .7em;
    }

    .order-block{
        position: relative;

        .ui-btn{
            opacity: 0;
            position: absolute;
            margin: auto;
            bottom: 10px;
            right: 0;
            left: 0;
            transition: .2s;
        }

        &:hover,
        &:active {
            .ui-btn {
                opacity: 1;
            }
        }
    
        &__time{
            margin-bottom: .7em;
        }
    }
</style>
  