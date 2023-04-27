import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {
        list: listSlice
    }
});


export default store;