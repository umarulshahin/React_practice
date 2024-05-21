import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueSlice";
import getDataReducer from "./getDataSlice";
import show_LabelReducer from "./showLabelSlice";
const store = configureStore({
    reducer:{
        value :valueReducer,
        datainfo:getDataReducer,
        show_Label:show_LabelReducer
    }
})

export default store;