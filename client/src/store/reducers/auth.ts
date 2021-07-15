import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    username: string;
    loggedIn: boolean;
};

const initialState: AuthState = {
  username: '',
  loggedIn: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.username = action.payload.username;
            state.loggedIn = true;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;