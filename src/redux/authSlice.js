import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: null,
  isOnline: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
    updateNetworkStatus: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});

export const { login, logout, updateNetworkStatus } = authSlice.actions;
export default authSlice.reducer;