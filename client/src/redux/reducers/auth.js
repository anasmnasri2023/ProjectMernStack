import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false, // Default to false
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Set user after login
    setUser: (state, action) => {
      state.isConnected = true;
      state.user = action.payload;
    },
    
    // Logout action
    logoutUser: (state) => {
      state.isConnected = false;
      state.user = {}; // Clear user data
    },
  },
});

// Export actions
export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
