const { createSlice } = require("@reduxjs/toolkit")
const { registration, logIn, logOut, refreshUser } = require("./operationAuth")

//! Створення слайсу Аутентифікації 
//+ Оголошуємо state за замовчуванням 
const initialState = {
    user: { name: null, email: null },
    token: null, 
    isLogined: false,
    isRefresh: false,
}

//+ Оголошуємо Slice за допомогою createSlice
const authSlice = createSlice({
    name: 'auth', // Оголошуємо рядок ідентифікації 
    initialState, // Оголошуємо стейт за замовчуванням 
    //0 Створюємо редусер 
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogined = true
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogined = true
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLogined = false;
        },
        [refreshUser.pending](state) {
            state.isRefresh = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLogined = true;
            state.isRefresh = false;
        },
        [refreshUser.rejected](state) {
            state.isRefresh = false;
        }

    }
})


export const authorizationReducer = authSlice.reducer