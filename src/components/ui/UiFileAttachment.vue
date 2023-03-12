<template>
    <label>
        <span>{{label}}</span>
        <div class="file-input-wrapper" :class="{'photo': isPhotoAttachment}">
            <div class="file-input-placeholder">
                <img v-if="isPhotoAttachment" src="@/assets/img/icons/file-photo.svg" alt="">
                <img v-else src="@/assets/img/icons/file.svg" alt="">
                {{placeholderTip}}
            </div>
            <input 
                v-if="multiple"
                type="file"
                multiple="multiple"
                accept="image/*"
                @change="$emit('handleFileChange', $event.target.files)"
            />
            <input 
                v-else
                type="file"
                accept="image/*"
                @change="$emit('handleFileChange', $event.target.files[0])"
            />
        </div>
    </label>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: File
        },
        isPhotoAttachment: {
            type: Boolean,
            requied: false,
        },
        label: {
          type: String,
          required: false,
        },
        multiple: {
          type: Boolean,
          required: false,
        },
        placeholderTip: String,
    },
    emits: ['handleFileChange']
}
</script>

<style lang="scss" scoped>
    .file-input-wrapper{
        position: relative;
        border: 1px dashed $purple-dark;
        background-color: transparent;
        color: $purple;
        border: 1px dashed $purple-dark;
        padding: 1.5em 2em;
        cursor: pointer;

        &.photo{
            height: 190px;
        }

        div{
            position: absolute;
            width: fit-content;
            right: 0;
            left: 0; 
            top: 50%;
            transform: translateY(-50%);
            margin: auto;
        }

        input[type=file] {
            cursor: pointer;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
        }
    }

    .file-input-placeholder{
        @include flex-sb-c;
        
        img{
            margin-right: 12px;
        }
    }

    label{
        display: block;
        margin-bottom: 1.813em;
        
        span{
            display: block;
            margin-bottom: 1.1em;
            font-size: 1rem;
            color: $purple-dark;
        }
    }
</style>