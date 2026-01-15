import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/authSlice";
import fanartReducer from "./slice/fanartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        fanart: fanartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;