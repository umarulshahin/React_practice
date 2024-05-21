import { createSlice } from "@reduxjs/toolkit";


const  show_LabelSlice =createSlice({
    name:"show_Label",
    initialState:true,
    reducers:{
        show_Label:(state,action)=>{
            
            return action.payload
        }
    }
});

export const {show_Label}=show_LabelSlice.actions;

export default show_LabelSlice.reducer;
