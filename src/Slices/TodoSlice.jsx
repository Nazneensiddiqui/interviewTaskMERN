import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"myTodo",
    initialState:{
        task:[]
    },
    reducers:{
        AddTask:(state, actions)=>{
            state.task.push(actions.payload)
        },
        DeleteTask:(state, actions)=>{
            state.task=state.task.filter(key=>key.id!==actions.payload)
        }, 
        EditTask:(state, actions)=>{
            const item = state.task.find(key=>key.id ===actions.payload.id)
            if(item) item.work=actions.payload.work
        },
        UnComplited:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload)
            if(item) item.status=false
        },
    Complited:(state,actions)=>{
        const item=state.task.find(key=>key.id===actions.payload)
        if(item) item.status=true
    }
        
    }
})
export const {AddTask, DeleteTask, EditTask,UnComplited,Complited}=TodoSlice.actions;
export default TodoSlice.reducer;