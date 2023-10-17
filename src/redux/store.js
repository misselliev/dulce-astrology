import { configureStore } from "@reduxjs/toolkit";
import horoscopeSlice from "./horoscopeSlice";
import signSlice from "./signSlice";

const store = configureStore({
    reducer: {
        horoscope: horoscopeSlice.reducer,
        sign: signSlice.reducer
    }
})

export default store