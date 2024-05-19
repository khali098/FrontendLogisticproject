import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface DataState{
isCreated:boolean
}

const initialState :DataState = {
    isCreated:false,

}

const slice=createSlice({
    name:'create',
    initialState:initialState,
    reducers:{
      handleUserCreation(state,action:PayloadAction<{isCreated:boolean}>){
        state.isCreated = action.payload.isCreated
      }
    },
    extraReducers: (builder) => {
   
  
  },
})

export const {handleUserCreation}= slice.actions
export const reducer=slice.reducer
export default slice