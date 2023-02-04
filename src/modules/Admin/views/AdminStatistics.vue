<template>
    <h1>Статистика сервиса</h1>
    <ul class="statistics-list">
        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Пользователей онлайн:  </span>
            <span class="statistics-list__item-number">{{statistics.usersOnline}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Всего пользователей: </span>
            <span class="statistics-list__item-number">{{statistics.usersTotal}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Всего завершенных cеансов каршеринга:  </span>
            <span class="statistics-list__item-number">{{statistics.totalCompletedCarsharingSessions}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Автопарк (активные): </span>
            <span class="statistics-list__item-number">{{statistics.carparkActive}}</span>
        </li>

        <li class="statistics-list__item">
            <span class="statistics-list-item-label">Автопарк (всего):  </span>
            <span class="statistics-list__item-number">{{statistics.carparkTotal}}</span>
        </li>
    </ul>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()

        /* {
            usersOnline: 50,
            usersTotal: 100,
            totalCompletedCarsharingSessions: 400,
            carparkActive: 55,
            carparkTotal: 150
        } */
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