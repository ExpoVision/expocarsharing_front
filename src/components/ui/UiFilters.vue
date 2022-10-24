<template>
   <div class="filters">
        <div class="filters__selects">
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks"/>
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks"/>
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks"/>
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks"/>
            <UiSelectCheckboxes title="Марка" :blocks="filterBlocks"/>
            <button class="filters__reset"><img src="@/assets/img/icons/cross-purple.svg" alt=""> Сбросить всё</button>
        </div>
        <div class="filters__bottom">
            <div class="found">
                Найдено 16 авто
            </div>
            <div class="sort">
                <span>Cортировка:</span>
                <div class="sort_by">по возрастанию цены</div>
            </div>
        </div>
    </div>
</template>

<script>
import UiSelectCheckboxes from '@/components/ui/UiSelectCheckboxes.vue'

export default {
    components: { UiSelectCheckboxes },
    data() {
        return {
        filterBlocks: [
            {title: 'Audi S серия', items: [
                {value: 'S1', label: 'S1',},
                {value: 'S2', label: 'S2',},
                {value: 'SQ', label: 'SQ',}, 
                {value: 'TT', label: 'TT',}, 
                {value: 'S3', label: 'S3',},
                {value: 'S4', label: 'S4',}],
            },

            {title: 'Audi S серия', items: [
                {value: 'S1', label: 'S1',},
                {value: 'S2', label: 'S2',},
                {value: 'SQ', label: 'SQ',}, 
                {value: 'TT', label: 'TT',}, 
                {value: 'S3', label: 'S3',},
                {value: 'S4', label: 'S4',}],
            },
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .filters{

        margin-bottom: 3.125em;

        &__bottom{
            @include flex-sb-c;

            @media screen and (max-width: 768px){
                flex-direction: column-reverse;
                align-items: flex-start;

                .sort{
                    margin-bottom: 2.75em;
                }
            }

            .found{
                color: rgba(255, 255, 255, 0.3);
            }

            .sort{
                color: rgba(255, 255, 255, 0.3);

                span{
                    margin-right: 10px;
                }

                &_by{
                    color: $purple;
                    display: inline-block;
                }
            }
        }

        &__selects{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: start;
            gap: 1.875em;
            margin: 2.375em 0;

            @media screen and (max-width: 975px){
                grid-template-columns: repeat(2, 1fr);
            }

            @media screen and (max-width: 768px){
                grid-template-columns: 1fr;
            }
        }

        &__reset{
            display: flex;
            justify-content: center;
            background-color: transparent;
            color: $purple-opacity;
            border: 1px solid $purple-opacity;
            padding: 1.5em 2em;
            text-transform: uppercase;
            cursor: pointer;
            transition: .3s;

            &:hover, &:active{
                border-color: $purple;
            }

            img{
                margin-right: .875em;
            }
        }
    }
</style>