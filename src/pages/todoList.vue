<template>
    <div class="list-wrap">        
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" :key="index">
                <!-- 체크 -->
                <span class="list__check-field">
                    <i class="icon-checkmark"
                    v-show="showCheck && checked === index"
                    ></i>
                </span>
                <div class="list__text-field" @click="checkShow(index)"
                v-show="!toFix || checked !== index"
                >
                    {{ todoItem }}
                </div>
                <!-- 수정하기 인풋 -->
                <input type="text" placeholder="수정할 내용을 입력하세요!" v-model="newTodoItem"
                v-show="toFix && checked === index"
                @keyup.enter="changeItem(index)"
                >
                <!--버튼그룹  -->
                <div class="button-group">
                    <!-- 수정버튼 -->
                    <span class="button-group__fix" @click="changeItem(index)">
                        <i class="icon-wrench"></i>
                    </span>
                    <!-- 삭제버튼 -->
                    <span class="button-group__remove" @click="checkedItem(index)">
                        <i class="icon-bin"></i>
                    </span>
                </div>
                <!-- 모달 -->                
                <ModalPop
                v-if="modal && checked === index"
                @modalConfirm="modalConfirm(todoItem, index)"
                @close="close"
                ></ModalPop>
            </li>
        </transition-group>       
    </div>
</template>

<script>
import ModalPop from '../components/ModalPop.vue';
export default {
    props: {
        propsdata: Array,
        showCheck: Boolean,
        checked: Number,
        toFix: Boolean
    },
    created(){
        console.log(this.propsdata);
    },
    data(){
        return {
            modal: false,
            newTodoItem: ""
        }
    },
    components: {
        'ModalPop' : ModalPop
    },
    methods: {
        checkedItem(index){
            this.modal = true;
            // console.log(index);            
            this.$emit('checkedItem', index);           
        },
        modalConfirm(todoItem, index){
            console.log(todoItem, index);
            this.$emit('modalConfirm', todoItem, index);
            this.modal = false;
        },
        close(){
            this.modal = false;
        },
        checkShow(index){
            this.$emit('checkShow', index);
        },
        changeItem(index){
            if(this.newTodoItem !== ""){
                let value = [
                    {
                        id: this.newTodoItem,
                        date: new Date,
                        option1: false,
                        option2: false
                    }
                ];
                this.$emit('changeItem', value, index);
                this.newTodoItem = "";
            }
            this.$emit('toFixItem', index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-bin {
        color: red;
        font-size: 2rem;
    }
    .icon-checkmark {
        color: green;
        font-size: 2rem;
    }
    .icon-wrench {
        color: green;
        font-size: 2rem;
    }
    .list-enter-active, .list-leave-active {
        transition: opacity 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
    }
    ul {
        list-style: none;
        li {
            min-height: 3rem;
            height: 3rem;
            margin: 2rem 0;
            background-color: #fff;
            border-radius: 0.3rem;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .list__check-field {
                width: 5%;
            }
            .list__text-field {
                width: 50%;
                white-space: nowrap;
                margin-left: 1rem;
                font-size: 2rem;
                cursor: pointer;
            }
            .button-group {
                width: 5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &__remove {
                    cursor: pointer;
                }
                &__fix {
                    cursor: pointer;
                }
            }
            input {
                border-style: none;
                font-size: 1rem;
            }
        }
    }
    //미디어쿼리
    @media screen and (max-width: 1025px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 50%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {                   
                    font-size: 1.3rem;
                }
            }
        }
    }
    @media screen and (max-width: 599px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 50%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {                   
                    font-size: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 320px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 30%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {
                    width: 100%;                                     
                    font-size: 1rem;
                }
            }
        }
    }
</style>