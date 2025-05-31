import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../types/auth';

const user = JSON.parse(localStorage.getItem('user') || '{}');
const token = localStorage.getItem('token') || '';

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        role_id: '',
        phone_number: '',
        role: {
            id: '',
            name: ''
        }
    },
    token: ''
};
if (user && token) {
    initialState.isAuthenticated = true;
    initialState.user = user;
    initialState.token = token;
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: AuthState['user']; token: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = initialState.user;
            state.token = '';
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
export type { AuthState };
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;
