import {Action, createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: []
  },
  reducers: {
    addItem: (state,action) => {
      console.log(action)
      console.log('add')
      state.list = [...state.list,action.payload]
    },
    removeItem: (state,action) =>{
      const index = state.list.findIndex(i => i.id === action.payload)
      state.list.splice(index,1)
    }
  }
})

console.log('todoSlice')
console.log(todoSlice)

export const { addItem, removeItem } = todoSlice.actions

export const selectList = state => state.todo.list

export const listLen = state =>  state.todo.list.length

export default todoSlice.reducer