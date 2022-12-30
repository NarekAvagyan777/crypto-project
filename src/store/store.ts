import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";


export const store = configureStore({
    reducer: {
        crypto: cryptoReducer
    }
})

// @ts-ignore
window.state = store
export type TAppState = ReturnType<typeof store.getState>