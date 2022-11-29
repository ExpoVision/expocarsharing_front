<template>
    <div class="breadcrumbs">
        <router-link to="/">Главная</router-link>
        <span class="breadcrumbs__slash">/</span>
        <router-link 
            v-for="(matched, id) in this.$route.matched"
            :key="id"
            :to="matched.path" class="active"
        >{{matched.meta.title}}</router-link>
    </div> 
</template>

<script>
export default {
    name: 'BreadcrumbsComponent',
}
</script>

<style lang="scss" scoped>

    .breadcrumbs{

        margin: 1.5em 0 3.5em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5em;
        font-size: .85rem;

        &__slash{
            color: $purple-dark;
        }

        a{
            color: $purple;

            &.active{
                color: $purple-dark;
            }
        }
    }

</style>