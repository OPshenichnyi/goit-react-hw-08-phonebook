const { createSlice } = require("@reduxjs/toolkit");
const { getContactApi, addContactApi, deleteContactAPI } = require("./operation");
const { logOut } = require("components/authorization/operationAuth");



const handlPending = (state) => {
    state.isLoading = true;
}

const handlRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,

    extraReducers: {
        [getContactApi.pending]: handlPending,
        [addContactApi.pending]: handlPending,
        [deleteContactAPI.pending]: handlPending,
        [getContactApi.rejected]: handlRejected,
        [addContactApi.rejected]: handlRejected,
        [deleteContactAPI.rejected]: handlRejected,

        [getContactApi.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        [addContactApi.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload)
        },
        [deleteContactAPI.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const findIndex = state.contacts.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.splice(findIndex, 1);
        },
        [logOut.fulfilled](state) {
            state.contact = [];
            state.error = null;
            state.isLoading = false;
        }

    }
})

export const contactsReducer = contactSlice.reducer;