import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setToken: (state, value) => {
            state.token = value.payload;
        },
        setUser: (state, value) => {
            state.user = value.payload;
        }
    }
})

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;