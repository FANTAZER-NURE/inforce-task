import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../api/getProducts";
import { Product } from "../types/Product";

export type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string;
};

export const init = createAsyncThunk('products/fetchProducts', () => {
  return getProducts().then(res => res.json());
});

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      state.items.unshift(action.payload);
    },
    edit(state, action: PayloadAction<Product>) {
      state.items = state.items.filter(item => item.id !== action.payload.id)

      state.items.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<Product>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(
      init.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.items = [...action.payload];
        state.loading = false;
      }
    );
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.rejected, (state) => {
      state.error = 'Unable to load data';
        state.loading = false;
    });
  },
});

export const { add, edit, deleteProduct } = productsSlice.actions;


export default productsSlice.reducer;
