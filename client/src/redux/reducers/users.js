import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _ALL: [],
  _ONE: {},
  _CURRENT: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    _setCurrentUser: (state, action) => {
      state._CURRENT = action.payload;
    },
    _AddUser: (state, action) => {
      state._ALL = [...state._ALL, action.payload];
    },
    _FindUsers: (state, action) => {
      state._ALL = action.payload;
    },
    _FindOneUser: (state, action) => {
      state._ONE = action.payload;
    },
    _FilterUser: (state, action) => {
      state._ALL = state._ALL.filter((item) => item._id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  _AddUser,
  _FindUsers,
  _FindOneUser,
  _FilterUser,
  _setCurrentUser,
} = usersSlice.actions;

export default usersSlice.reducer;
