import { configureStore } from "@reduxjs/toolkit";
import { fillterReducer } from "components/Contacts/SliceFilter";
import { contactsReducer } from "components/OperationContacts/slice";
import { authorizationReducer } from "components/authorization/sliceAuth";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const authPersistConfiguration = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore(
    {
        reducer: {
            auth: persistReducer(authPersistConfiguration, authorizationReducer),
            contact: contactsReducer,
            fillter: fillterReducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        devTools: process.env.NODE_ENV === 'development'
  }

)

export const persistor = persistStore(store)