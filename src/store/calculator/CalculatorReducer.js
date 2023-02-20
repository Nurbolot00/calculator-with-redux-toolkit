import { createSlice } from "@reduxjs/toolkit";

export const calculatorActionType = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
};

const initialState = {
  result: 0,
};


export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
    },
    subtract(state, action) {
      state.result = state.result - action.payload;
    },
    multiply(state, action) {
      state.result = state.result * action.payload;
    },
    divide(state, action) {
      state.result = state.result / action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;