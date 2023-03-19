import { createSlice } from "@reduxjs/toolkit";

import { signUp, signIn, current, signOut } from "./auth-operations";

const initialState = {
    user: [],
    token: "",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (store) => {
                store.loading = true;
                store.error = null;
            })
            .addCase(signUp.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(signUp.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(signIn.pending, (store) => {
                store.loading = true;
                store.error = null;
            })
            .addCase(signIn.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(signIn.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(current.pending, (store) => {
                store.loading = true;
                store.error = null;
            })
            .addCase(current.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = { ...payload };
                store.isLogin = true;
            })
            .addCase(current.rejected, (store, { payload }) => {
                store.loading = false;
                store.token = "";
                store.error = payload;
            })
            .addCase(signOut.pending, (store) => {
                store.loading = true;
                store.error = null;
            })
            .addCase(signOut.fulfilled, (store) => {
                store.loading = false;
                store.user = {};
                store.token = "";
                store.isLogin = false;
            })
            .addCase(signOut.rejected, (store, { payload }) => {
                store.loading = false;
                store.token = "";
                store.error = payload;
            })
    },
});

export default authSlice.reducer;