import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchResult } from "../../api/api";
import { RootState } from "../store";
import { setPostsLoading } from "./postSlice";

export type TStateError = {
  status: boolean;
  text: string | undefined;
};

export interface IState {
  loading: boolean;
  error: TStateError;
  result: string | null;
}

const initialState: IState = {
  loading: false,
  error: { status: false, text: undefined },
  result: null,
};

export const fetchThunkApi = createAsyncThunk("thunk/fetchResult", fetchResult);

export const thunkSlice = createSlice({
  name: "thunk",
  initialState,
  reducers: {
    resetThunk: (state) => {
      state.loading = false;
      state.error = { status: false, text: undefined };
      state.result = null;
    },
    setThunkLoading: (state) => {
      state.loading = true;
      state.error = { status: false, text: undefined };
      state.result = null;
    },
  },
  extraReducers: (builder) => {
    // Reset state of posts
    builder.addCase(setPostsLoading, (state) => {
      thunkSlice.caseReducers.resetThunk(state);
    });
    builder.addCase(fetchThunkApi.pending, (state) => {
      thunkSlice.caseReducers.setThunkLoading(state);
    });
    builder.addCase(
      fetchThunkApi.fulfilled,
      (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.result = action.payload;
      }
    );
    builder.addCase(fetchThunkApi.rejected, (state, action) => {
      state.loading = false;
      state.error = { status: true, text: action.error.message };
    });
  },
});

// Action creators are generated for each case reducer function
export const { setThunkLoading } = thunkSlice.actions;

// Reducer
export default thunkSlice.reducer;

// Selector
export const thunkSelector = (state: RootState) => state.thunkReducer;
