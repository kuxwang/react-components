
import {createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0,
  },
  reducers: {
    incremented: (state) =>{
      state.value += 1;
    },
    decrement:state => {

      state.value -= 1
    },
    incrementByAmount: (state,action) =>{
      state.value += action.payload
    }
  },
})

export const {incremented,decrement,incrementByAmount}  = counterSlice.actions

export const incrementAsync = (amount:string|number) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  setTimeout(() =>{
    dispatch(incrementByAmount(amount))
  },1000)
}

export const selectCount = (state: { counter: { value: any; }; }) => state.counter.value

export default counterSlice.reducer