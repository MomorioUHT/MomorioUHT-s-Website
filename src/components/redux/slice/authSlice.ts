import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: string | null;
    name: string | null;
    email: string | null;
    role: "USER" | "ADMIN" | null;
}

const initialState: User = {
    id: null,
    name: null,
    email: null,
    role: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.id = null;
            state.name = null;
            state.email = null;
            state.role = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;