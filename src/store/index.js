// import { createStore } from "redux";

// const counterReducer = (state = { value: 0 }, action) => {
// 	switch (action.type) {
// 		case "counter/incremented":
// 			return { value: state.value + action.value };
//       default:
//         return {...state}
// 	}
// };

// export  const store = createStore(counterReducer)

import {configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'



export const store =configureStore({
  reducer: {
    counter :counterReducer
  }
})





