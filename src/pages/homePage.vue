<template>
    <div>
        <todoHeader></todoHeader>
        <todoInput
        @addTodo="addTodo"        
        ></todoInput>
        <todoList        
        @modalConfirm="removeTodo"
        @checkedItem="checked = $event;"        
        @checkShow="checkShow($event)"
        @toFixItem="toFix = !toFix; checked = $event;"
        @changeItem="changeItem"
        :propsdata="todoItems" :checked="checked" :toFix="toFix"      
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
            checked: 0,
            toFix: false,                                              
        }
    },
    beforeCreate(){
        // console.log("beforCreated");
    },
    created(){
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                // console.log(key);                
                if(key !== 'loglevel:webpack-dev-server'){                    
                    this.todoItems.push(JSON.parse(key));
                }
            }
        }
        // console.log(JSON.parse(JSON.stringify(this.todoItems)));       
        // this.todoItems.sort();                
                        
    },
    updated(){
        
        // console.log(Array.from(JSON.parse(JSON.stringify(this.todoItems))));
        // console.log("upDated");
    },

    components: {

    },
    methods: {
        //리스트 추가하기
        addTodo(todoItem){            
            localStorage.setItem(JSON.stringify(todoItem), JSON.stringify(todoItem));
            this.todoItems.push(todoItem);           
        },
        //선택한 리스트 삭제하기
        removeTodo(todoItem, index){
            // console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);           
        },
        //다 지우기
        clearTodo(){
            localStorage.clear();        
            this.todoItems = [];
        },
        //수정하기
        changeItem(todoItem, index){
            // console.log(todoItem);
            // console.log(index);

            //1.선택한 인덱스의 로컬스토리지 키 값을 가져옴. getItem                               
            let getItem = JSON.parse(localStorage.key(index));
                                    
            //2. getItem을 키로 가지는 로컬스토리지 인덱스를 지우고 같은 인덱스의  todoItems 요소도 지움.
            localStorage.removeItem(JSON.stringify(getItem));
            this.todoItems.splice(index, 1);

            //3. 새로 수정된 값을 로컬스토리지와 todoItems에 추가. (addTodo와 동일)
            localStorage.setItem(JSON.stringify(todoItem),JSON.stringify(todoItem));
            this.todoItems.push(todoItem);
                   
                   
        },
        // localStorage의 value -> checked: flase -> checked: true
        //체크하기
        checkShow(index){                        
            // console.log(index);
            let newIndex = [];
            let indexItem = JSON.parse(JSON.stringify(this.todoItems[index]));
            // console.log(indexItem.isChecked);
            // indexItem.isChecked =!indexItem.isChecked;
            // console.log(indexItem);
            if(indexItem.isChecked == false){
                indexItem.isChecked = true;
                newIndex.push(indexItem);
            } else {
                indexItem.isChecked = false;
                newIndex.push(indexItem);
            }            
            // console.log(newIndex[0]);
            this.todoItems.splice(index,1,newIndex[0]);
            // console.log(JSON.parse(JSON.stringify(this.todoItems)));
            
            
                          
        }      
    }    
}
</script>