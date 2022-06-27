<template>
    <transition name="pop" tag="div">
        <div class="toast" v-if="propsdata">
            <div class="toast__text">
                <span>할 일을 입력하세요!!</span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        propsdata: Boolean
    },
    data(){
        return {

        }
    },
    methods: {
        toastUp(){
            this.$emit('toastUp');
        }
    }
}
</script>

<style lang="scss" scoped>
    .pop-enter-active, .pop-leave-active {
        transition: all 1s;
    }
    .pop-enter, .pop-leave-to {
        opacity: 0;        
    }
    .toast {
        position: fixed;
        top: 20%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 12rem;
        height: 3rem;
        border-radius: 1rem;
        background-color: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        &__text {
            span {
                color: red;
            }
        }
    }
</style>