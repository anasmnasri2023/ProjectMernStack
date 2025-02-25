import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotifications: (state, { payload }) => {
      state.push(...(Array.isArray(payload) ? payload : [payload]));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRefresh, toggleModal } = notificationSlice.actions;

export default notificationSlice.reducer;
