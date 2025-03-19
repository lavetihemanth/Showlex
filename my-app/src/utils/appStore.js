import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import showsReducer from "./showsSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        shows: showsReducer,
    },
});

export default appStore;