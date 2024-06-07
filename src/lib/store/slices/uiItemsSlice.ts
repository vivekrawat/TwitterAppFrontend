import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

interface Alert {
    variant?: 'default' | 'destructive' | 'success',
    title?: string,
    description: string
}

const initialState: {alert: Alert} =  {
    alert : {
        variant: "default",
        title: "",
        description: ""
    }
}
export const settingAlert = createAsyncThunk('ui/alert', async (data: Alert, thunkAPI) => {
  const { dispatch } = thunkAPI
  dispatch(setAlert(data))
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return initialState.alert
});

const uiItemsSlice = createSlice({
    name: 'uiItems',
    initialState,
    reducers: {
        setAlert(state, action: PayloadAction<Alert>){
            state.alert = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(settingAlert.fulfilled, (state, action) => {
            state.alert = action.payload
        })
    }
})

export const { setAlert } = uiItemsSlice.actions

export const uiItemsReducer = uiItemsSlice.reducer