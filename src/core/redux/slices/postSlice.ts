import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchThunkApi } from "./thunkSlice";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface IPostState {
  loading: boolean;
  error: string | undefined;
  result: [TPost] | [];
}

const initialState: IPostState = {
  loading: false,
  error: undefined,
  result: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.loading = false;
      state.error = undefined;
      state.result = [];
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPostsSuccess: (state, action: PayloadAction<[]>) => {
      state.result = action.payload;
    },
    setPostsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Will Reset itself if thunk loading
    builder.addCase(fetchThunkApi.pending, (state) => {
      postSlice.caseReducers.resetPosts(state);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPostsLoading, setPostsSuccess, setPostsError } =
  postSlice.actions;

// Reducer
export default postSlice.reducer;

// Selector
export const postSelector = (state: RootState) => state.postReducer;
