import { combineReducers, createStore } from "redux";

import { authSlice } from "./auth/AuthReducer";
import { calculatorSlice } from "./calculator/CalculatorReducer";

const rootReducer = combineReducers({
  calculator: calculatorSlice.reducer,
  auth: authSlice.reducer
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store render");
});
