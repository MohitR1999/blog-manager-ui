import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/userAuth';

export default configureStore({
    reducer : {
        userAuth : authReducer
    }
})