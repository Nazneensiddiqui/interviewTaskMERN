import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"myCounter",
    initialState:{
        cnt:100
    },
    reducers:{
        Increment:(state)=>{
            state.cnt=state.cnt+100;
        },
        Decrement:(state)=>{
            state.cnt=state.cnt-100;
        }
    }
})
export const{Increment, Decrement}=counterSlice.actions;
export default counterSlice.reducer
