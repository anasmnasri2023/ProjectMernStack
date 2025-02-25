import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _ALL: [],
  _CURRENT: {},
  _ONE: {},
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    _AddTask: (state, action) => {
      state._ALL = [...state._ALL, action.payload];
    },
    _FindTasks: (state, action) => {
      state._ALL = action.payload;
    },
    _DeleteTasks: (state, action) => {
      state._ALL = state._ALL.filter((s) => s._id != action.payload);
    },
    _FindOneTask: (state, action) => {
      state._ONE = action.payload;
    },
    _SetCurrentTask: (state, action) => {
      state._CURRENT = action.payload;
    },
  },
});

export const {
  _AddTask,
  _FindTasks,
  _FindOneTask,
  _SetCurrentTask,
  _DeleteTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
