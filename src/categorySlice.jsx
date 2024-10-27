import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        value: 'books'
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { change } = categorySlice.actions

export default categorySlice.reducer