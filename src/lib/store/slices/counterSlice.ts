import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState =  {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action: PayloadAction<number>){
            state.counter += action.payload
            // return {counter: state.counter + action.payload}
        }
    }
})

export const { setCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer