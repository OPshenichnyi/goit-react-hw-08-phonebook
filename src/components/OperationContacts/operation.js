import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactApi = createAsyncThunk(
    'contact/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addContactApi = createAsyncThunk(
    'contact/addContact',
    async (arrContact, thunkAPI) => {
        try {
           const response = await axios.post('/contacts', arrContact)
           return response.data
       } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
       }
    }
)

export const deleteContactAPI = createAsyncThunk(
    'contact/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
