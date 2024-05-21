import { createStore,combineReducers } from "redux";



const value=(state=0,action)=>{
    switch(action.type){

        case "increment":
           
            return state+1
           
        case "decrement":

            return state-1
            
        default:
            return state
        } 
}

const show_label=(state=true,action)=>{

    switch(action.type){

        case "show_label":
            return action.payload
            
        default:
            return state

    }

    }

function increment(){
    return {
        type:"increment"
    }
}   

function decrement(){
    return {
        type :"decrement"
    }
}

function show_labelcheck(payload){

    return {
        
            type:"show_label",
            payload:payload
    }
}

const Reducer =combineReducers({
        value ,
        show_label
    })    
const store=createStore(Reducer)

export default store;
export{
    increment,
    decrement,
    show_labelcheck
}
