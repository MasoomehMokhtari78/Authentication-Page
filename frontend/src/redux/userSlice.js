import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState: {
        access: '',
        refresh: '',
        id: '',
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            const data = action.payload;
            state.isLoggedIn = true;
            state.access = data.access;
            state.refresh = data.refresh;
            state.id = data.id;
        },
        updateToken: (state, action) => {
            const data = action.payload;
            console.log(data.access)
            state.access = data.access;
            state.refresh = data.refresh;
        },
        logout: (state) => {
            state.access = '';
            state.refresh = '';
            state.id = '';
            state.isLoggedIn = false;
        }
    }
    
})

export const {
    login,
    updateToken,
    logout,
} = userSlice.actions;

export default userSlice.reducer;