import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};
export const __addNumber = createAsyncThunk(
  "counter/__addNumber", // 첫번째 인자 : action value
  // 두번째 인자 : 함수
  (args, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(args));
    }, 3000);
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;
