// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ phone, otp }, { dispatch }) => {
  try {
    const token = await authService.loginUser(phone, otp);
    dispatch(setToken(token));
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Handle the state after a successful login if needed
    });
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
