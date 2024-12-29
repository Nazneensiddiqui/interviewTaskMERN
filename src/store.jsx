import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Slices/Bgcolor"
import MyTodoReducer from "./Slices/TodoSlice";
import counterReducer from "./Slices/counter";
const Store=configureStore({
    reducer:{
      Bgcolor:myReducer,
      myTodo:MyTodoReducer,
      myCounter:counterReducer
    }
})
export default Store;