import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddedEvent } from '../../types';
import { RootState } from '../store';

export interface CartStateType {
  addedItems: AddedEvent[];
  isDisplayed: Boolean;
}

type SetQuantityType = Pick<AddedEvent, 'event_id' | 'quantity'>;

const initialState: CartStateType = {
  addedItems: [],
  isDisplayed: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddedEvent>) => {
      state.addedItems.push(action.payload);
    },
    setDisplay: (state, action: PayloadAction<Boolean>) => {
      state.isDisplayed = action.payload;
    },
    setQuantity: (state, action: PayloadAction<SetQuantityType>) => {
      const targetEvent = state.addedItems.find(
        (item) => item.event_id === action.payload.event_id
      );
      if (targetEvent) {
        targetEvent.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, setDisplay, setQuantity } = cartSlice.actions;

export const getAddedItems = (state: RootState) => state.cart.addedItems;
export const getIsDisplayed = (state: RootState) => state.cart.isDisplayed;

export default cartSlice.reducer;
