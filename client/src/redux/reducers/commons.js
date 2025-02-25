import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh: false,
  modal: false,
};

export const commonSlice = createSlice({
  name: "commons",
  initialState,
  reducers: {
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRefresh, toggleModal } = commonSlice.actions;

export default commonSlice.reducer;
