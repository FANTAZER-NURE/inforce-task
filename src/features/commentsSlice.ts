import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../types/Comment";

export type ProductsState = {
  items: Comment[];
};

const initialState: ProductsState = {
  items: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Comment>) {
      state.items.push(action.payload);
    },
    deleteComment(state, action: PayloadAction<Comment>) {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { add, deleteComment } = commentsSlice.actions;


export default commentsSlice.reducer;
