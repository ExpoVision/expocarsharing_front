<template>
    <h1>Статистика сервиса</h1>
    <ul class="statistics-list">
        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Всего пользователей: </span>
            <span class="statistics-list__item-number">{{statistics.users}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Автопарк (активные): </span>
            <span class="statistics-list__item-number">{{statistics.rented}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Автопарк (всего):  </span>
            <span class="statistics-list__item-number">{{statistics.offers}}</span>
        </li>
    </ul>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()

        const statistics = computed(() => {
            return store.getters['admin/getStatistics']
        })

        onMounted(() => {
            store.dispatch('admin/fetchStatistics')
        })

        return {
            statistics
        }
    }
}
</script>

<style lang="scss" scoped>
    .statistics-list{
        &__item{
            font-size: 2rem;
            
            color: $purple;
            &:not(:last-child){
                margin-bottom: 1em;
            }

            &-number{
                color: white
            }
        }
    }
</style>