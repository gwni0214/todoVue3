<template>
    <div>
        <todoHeader></todoHeader>
        <todoInput
        @addTodo="addTodo"
        
        ></todoInput>
        <todoList        
        @modalConfirm="removeTodo"
        @checkedItem="checked = $event;"
        @checkShow="showCheck = !showCheck; checked = $event;"
        @toFixItem="toFix = !toFix; checked = $event;"
        @changeItem="changeItem"
        :propsdata="todoItems" :showCheck="showCheck" :checked="checked" :toFix="toFix"
        ></todoList>
        <todoFooter
        @clearTodo="clearTodo"
        ></todoFooter>
    </div>
</template>

<script>
export default {
    data(){
        return {
            todoItems: [],
            showCheck: false,
            checked: 0,
            toFix: false
        }
    },
    created(){
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                if(key !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(key);
                }
            }
        }
        this.todoItems.sort();        
        console.log(this.todoItems);
    },
    components: {

    },
    methods: {
        addTodo(todoItem){
            localStorage.setItem(todoItem[0].id, JSON.stringify(todoItem));
            this.todoItems.push(todoItem[0].id);
        },
        removeTodo(todoItem, index){
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        clearTodo(){
            localStorage.clear();
            this.todoItems = [];
        },
        //수정하기
        changeItem(todoItem, index){
            //1. 해당 인덱스의 로컬스토리지 데이터 값을 파싱해서 불러오기                               
            let getItem = JSON.parse(localStorage.getItem(index));                       
            //2. 불러온 로컬스토리지 데이터를 수정하기에서 가져온 todoItem으로 치환.
            getItem = todoItem;            
            //3. 원래있던 로컬 인덱스 제거
            localStorage.removeItem(index);
            //4. 치환된 데이터를 새로 입력
            localStorage.setItem(getItem[0].id, JSON.stringify(getItem));
            //5. todoItems 배열의 현재 인덱스 값을 새로바꾸는 값으로 치환.
            this.todoItems[index] = getItem[0].id;        
        }
    }
    
}
</script>