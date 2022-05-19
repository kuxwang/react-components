
import {createSlice,configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0,
  },
  reducers: {
    incremented: (state) =>{
      console.log('incremented')
      state.value += 1;
    },
    decrement:state => {
      console.log('decrement')

      state.value -= 1
    },
    incrementByAmount: (state,action) =>{
      console.log('incrementByAmount')

      state.value += action.payload
    }
  },
})

export const {incremented,decrement,incrementByAmount}  = counterSlice.actions

export const incrementAsync = (amount) => dispatch => {
  setTimeout(() =>{
    dispatch(incrementByAmount(amount))
  },1000)
}

export const selectCount = state => state.counter.value

export default counterSlice.reducer