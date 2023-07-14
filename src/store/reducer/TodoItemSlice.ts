import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import TodoListArray from '../../mockData/mockData'
import {TodoItemType} from "../../api/modal/todoItemType"
export interface CounterState {
    TodoListArray:Array<TodoItemType>
    count:number
}
const initialState: CounterState = {
    TodoListArray:TodoListArray,
    count:TodoListArray.length
}

export const TodoItemSlice = createSlice({
  name: 'TodoItem',
  initialState,
  reducers: {
    addTodo: (state,action:PayloadAction<TodoItemType>) => {
        if(action.payload.title!=""){
            state.TodoListArray=[...state.TodoListArray,{...action.payload,id:state.count}]
            state.count+=1
        }
    },
    updateTodo: (state,action:PayloadAction<TodoItemType>) => {
        state.TodoListArray=state.TodoListArray.map((obj)=>{
            if(obj.id==action.payload.id){
                return obj.title=action.payload.title
            }
            return obj;
        })
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
        state.TodoListArray=state.TodoListArray.filter((obj)=>obj.id!=action.payload)
    },
  },
})
export const { addTodo,updateTodo,deleteTodo} = TodoItemSlice.actions

export default TodoItemSlice.reducer