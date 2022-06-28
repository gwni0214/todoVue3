<template>
    <div class="todo-input">
        <div class="todo-input__box">
            <input type="text" placeholder="할 일을 입력하세요." v-model="newTodoItem" @keyup.enter="addTodo">
            <span class="todo-input__box__add" @click="addTodo">
                <i class="icon-plus"></i>
            </span>
        </div>
        <ToastPop
        @toastUp="toastUp"
        :propsdata="toast"
        ></ToastPop>
    </div>
</template>

<script>
import ToastPop from '../components/ToastPop.vue';
export default {
    data(){
        return {
            newTodoItem: "",
            toast: false
        }
    },
    components: {
        'ToastPop' : ToastPop
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ""){
                console.log(this.newTodoItem);
                let todoItem = [
                    {
                        id: this.newTodoItem,
                        date: new Date,
                        option1 : false,
                        option2: false
                    }
                ];
                this.$emit('addTodo', todoItem);
                this.newTodoItem = "";
            } else {
                this.toastUp();
            }
        },
        toastUp(){
            this.toast = true;
            setTimeout(()=>{
                this.toast = false;
            },1000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-plus {
        color: red;
    }
    .todo-input {
        &__box {
            background-color: #fff;
            height: 3rem;
            line-height: 3rem;
            border-radius: 0.3rem;
            input {
                border-style: none;
                font-size: 1.5rem;
            }
            &__add {
                float: right;
                width: 3rem;
                background-color: pink;
                border-radius: 0 0.3rem 0.3rem 0;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 320px) {
        .todo-input {            
            &__box {
                display: flex;
                justify-content: space-between;             
                height: 3rem;
                line-height: 3rem;
                border-radius: 0.3rem;
                input {
                    width: 100%;
                    font-size: 1.5rem;                    
                }
                &__add {
                    width: 3rem;
                    border-radius: 0 0.3rem 0.3rem 0;
                }
            }
        }
    }
</style>