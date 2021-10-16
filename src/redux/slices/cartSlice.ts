import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddedItem } from '../../types';
import { RootState } from '../store';

export interface CartStateType {
  addedItems: AddedItem[];
  isDisplayed: Boolean;
}

const initialState: CartStateType = {
  addedItems: [],
  isDisplayed: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddedItem>) => {
      state.addedItems.push(action.payload);
    },
    setDisplay: (state, action: PayloadAction<Boolean>) => {
      state.isDisplayed = action.payload;
    },
  },
});

export const { addToCart, setDisplay } = cartSlice.actions;

export const getAddedItems = (state: RootState) => state.cart.addedItems;
export const getIsDisplayed = (state: RootState) => state.cart.isDisplayed;

export default cartSlice.reducer;
