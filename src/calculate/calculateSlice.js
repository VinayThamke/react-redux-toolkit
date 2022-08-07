import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};
const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    square: (state, action) => {
      state.result = action.payload * action.payload;
    },
    cube: (state, action) => {
      state.result = action.payload * action.payload * action.payload;
    },
    biquadrate: (state, action) => {
      state.result =
        action.payload * action.payload * action.payload * action.payload;
    },
  },
});

export const { square, cube, biquadrate } = calculateSlice.actions;

export default calculateSlice.reducer;
