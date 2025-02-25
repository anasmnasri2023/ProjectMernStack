import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {},
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.content = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setErrors } = errorsSlice.actions;

export default errorsSlice.reducer;
