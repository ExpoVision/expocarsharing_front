<template>
  <div class="pagination">
    <div class="pagination__controls">
        <button v-if="currentPage !== 1" class="pagination--toLeft" @click="prevPage"><img src="@/assets/img/icons/arrow-left-purple.svg" alt=""></button>
        <div v-else class="pagination__empty-btn"></div>
        <div class="pagination__body">
            <span class="pagination__current">{{currentPage}}</span> из {{pageCount}}
        </div>
        <button v-if="currentPage !== pageCount" class="pagination--toRight" @click="nextPage"><img src="@/assets/img/icons/arrow-right-purple.svg" alt=""></button>
        <div v-else class="pagination__empty-btn"></div>
    </div>
  </div>
</template>

<script>
export default {
    emits: ['pagechanged'],
    props:{
        items: {
            type: Array,
            required: true
        },
        perPage: {
            type: Number,
            required: false,
            default: 10
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        pageCount(){
            return Math.ceil(this.items.length / this.perPage);
        }
    },
    methods:{
        nextPage(){
            this.currentPage++
            this.$emit('pagechanged', 1);
        },
        prevPage(){
            this.currentPage--
            this.$emit('pagechanged',  this.currentPage);
        }
    },
}
</script>

<style lang="scss" scoped>
.pagination{
    &__controls{
        @include flex-sb-c;
        color: $purple;
        gap: 1.25em;
        min-width: 135px;
        width: fit-content;
        margin: 2em auto;
   

        button{
            border: none;
            background: none;
            cursor: pointer;
        }
    }

    &__current{
        color: #FFF;
        font-size: 1.5em;
        font-weight: 500;
    }

    &__empty-btn{
        width: 23px;
    }
}
          
</style>