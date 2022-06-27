<template>
    <div>
        <todoHeader></todoHeader>
        <todoInput
        @addTodo="addTodo"
        
        ></todoInput>
        <todoList        
        @modalConfirm="removeTodo"
        @checkedItem= "checked = $event;"
        @checkShow= "showCheck = !showCheck; checked = $event;"
        @toFixItem= "toFix = !toFix; checked = $event;"
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
            

            let lastIndex = this.todoItems.length - 1;
            console.log(lastIndex);
            this.tempArr = this.todoItems.splice(this.checked, (this.todoItems.length - this.checked), todoItem[0].id);
            console.log(this.tempArr);
            if(this.checked !== lastIndex){
                let tempArr2 = this.tempArr.splice(1, this.tempArr.length -1);
                this.tempArr = this.todoItems.concat(tempArr2);
                this.todoItems = this.tempArr;  
            }
            let getData = JSON.parse(localStorage.getItem(index+1));
            console.log(getData[0].id);
            getData[0].id = todoItem;
            localStorage.removeItem(getData[0].id);
            localStorage.setItem(todoItem[0].id, JSON.stringify(todoItem));
            

        }
    }
    
}
</script>