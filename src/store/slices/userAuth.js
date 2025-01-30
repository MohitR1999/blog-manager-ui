import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
    name : 'userAuth',
    initialState : {
        token : null,
        loggedIn : false
    },
    reducers : {
        login : (state, action) => {
            state.loggedIn = true;
            state.token = action.payload;
        },

        logout : (state) => {
            state.loggedIn = false;
            state.token = null
        }
    }
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;