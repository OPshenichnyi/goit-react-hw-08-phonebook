import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
const setJwtHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearJwtHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};


export const registration = createAsyncThunk(
    'auth/registretion',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setJwtHeader(response.data.token);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/logined',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setJwtHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
        await axios.post('/users/logout');
        clearJwtHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            
            setJwtHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);