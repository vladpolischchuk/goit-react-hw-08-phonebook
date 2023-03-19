import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/auth-api";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signUp(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
);

export const signIn = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signIn(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
);

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const data = await api.getCurrent(auth.token);
            return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        },
    },
);

export const signOut = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.signOut();
            return data;
        }
        catch ({ respose }) {
            return rejectWithValue(respose);
        }
    }
);
