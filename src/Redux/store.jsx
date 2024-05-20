import { createStore } from "redux";

const initialvalue={
    value:0
}

const Reducer=(state=initialvalue,action)=>{
       
    switch(action.type){
        case "increment":
           
            return {
                ...state,
                value:state.value +1
            };
        case "decrement":

            return {
                ...state,
                value:state.value-1
            }
        default:
            return state

    }

    return state
     
}

const store=createStore(Reducer)

export default store;

