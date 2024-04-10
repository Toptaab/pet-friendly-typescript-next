import axiosConfig from "@/Config/axiosConfig"
import { RootState } from "@/lib/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    user: {
        userName: string,
        email: string
        isAdmin : Boolean
    } | null
    loading: Boolean
}


const initialState: AuthState = {
    user: null,
    loading: true
}

export const authMe = createAsyncThunk('auth/me', async () => {
    try {
        const response = await axiosConfig.get('/auth/me')
        return response.data
    } catch (error) {
        console.log(error)
    }

})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(authMe.pending, (state, action) => {
                state.loading = true
                console.log("Pending...")
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload)
                state.user = action.payload

            })
            .addCase(authMe.rejected, (state, action) => {
                state.loading = false
                state.user = null
                console.log("reject")
            })
    }

})

export const {} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer