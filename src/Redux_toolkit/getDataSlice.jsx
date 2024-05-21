import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getDatainfo =createAsyncThunk('api/data',()=>{
    return axios.get('http://localhost:5173/data.json')
    .then((response)=>{
        return response.data 
    })
})


const datainfoSlice =createSlice({
    name:"datainfo",
    initialState:{ data: [], Loading: false, error: "" },
    extraReducers:(build)=>{
       build.addCase( getDatainfo.fulfilled,(state,action)=>{
            console.log(action.payload) 
            state.Loading=false,
            state.data=action.payload
        })
        .addCase(getDatainfo.pending,(state,action)=>{
            state.Loading=true
        })
        .addCase(getDatainfo.rejected,(state,action)=>{
            state.Loading=false,
            state.error="some error occured"
        })

    }
})

export {getDatainfo};
export default datainfoSlice.reducer;