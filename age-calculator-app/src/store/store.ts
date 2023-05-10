import {configureStore} from '@reduxjs/toolkit'
import ageReducer from '../features/ageSlice'
export const store = configureStore({
    reducer:{
        age:ageReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch