import { createSlice } from "@reduxjs/toolkit";

const BgcolorSlice=createSlice({
    name:"Bgcolor",
    initialState:{
        bgclr:"pink"
    },
    reducers:{
        BgclrChange:(state, actions)=>{
            state.bgclr=actions.payload
        }
    }
})
export const {BgclrChange}=BgcolorSlice.actions;
export default BgcolorSlice.reducer;