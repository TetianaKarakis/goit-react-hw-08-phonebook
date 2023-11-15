import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/auth';

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
        const result = await api.signupUser(data);
        return result;
        } catch ({ response }) {
        return rejectWithValue(response);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
        const result = await api.loginUser(data);
        return result;
        } catch ({ response }) {
        return rejectWithValue(response);
        }
    }
);

export const current = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
        const { auth } = getState();
        const data = await api.getCurrentUser(auth.token);
        return data;
        } catch ({ response }) {
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
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
        const data = await api.logoutUser();
        return data;
        } catch ({ response }) {
        return rejectWithValue(response);
        }
    }
);