import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calculate } from './ageCalculate';
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
            /* get day validate */ 
            actions.payload <= 31 && (state.day = actions.payload)
        },
        monthChange: (state, actions: PayloadAction<number>) => {
            /* get month validate */
            actions.payload <= 12 && (state.month = actions.payload)
        },
        yearChange: (state, actions: PayloadAction<number>) => {
            /* get years validate */ 
            const getYear = new Date().getFullYear()
            getYear >= actions.payload && (state.year = actions.payload)
        },
        calculateAge: (state) => {
            if (state.day === 0 || state.month === 0 || state.year === 0) {
                state.error = true
            }
            else if (state.year > 0 && state.month > 0 && state.day > 0) {
                state.error = false
                const birthDate = new Date(`${state.year}-${state.month}-${state.day}`)
                // Calculate age function
                const { years, months, days } = calculate(birthDate)
                state.currentDay = days
                state.currentMonth = months
                state.currentYear = years
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