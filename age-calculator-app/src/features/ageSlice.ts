import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    day: 0,
    month: 0,
    year: 0,
    currentDay: 0,
    currentMonth: 0,
    currentYear: 0,
    error: false
}
const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        dayChange: (state, actions: PayloadAction<number>) => {
            // get day 
            if (actions.payload <= 31) {
                state.day = actions.payload
            }
        },
        monthChange: (state, actions: PayloadAction<number>) => {
            // get month 
            if (actions.payload <= 12) {
                state.month = actions.payload
            }
        },
        yearChange: (state, actions: PayloadAction<number>) => {
            // get years 
            const getYear = new Date().getFullYear()
            if (getYear >= actions.payload) {
                state.year = actions.payload
            }
        },
        calculateAge: (state) => {
            if (state.day === 0 || state.month === 0 || state.year === 0) {
                state.error = true
            }
            else if (state.year > 0 && state.month > 0 && state.day > 0) {
                state.error = false
                state.currentDay = 31 - state.day
                state.currentMonth = 12 - state.month
                state.currentYear = new Date().getFullYear() - state.year
            }
            else {
                state.error = true
                state.currentDay = 0
                state.currentMonth = 0
                state.currentYear = 0
            }
        }
    }
})


export const { dayChange, monthChange, yearChange, calculateAge } = ageSlice.actions
export default ageSlice.reducer