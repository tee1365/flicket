import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddedEvent } from '../../types';
import { RootState } from '../store';

export interface CartStateType {
  addedItems: AddedEvent[];
  drawerDisplay: boolean;
}

type SetQuantityType = Pick<AddedEvent, 'event_id' | 'quantity'>;

const initialState: CartStateType = {
  addedItems: [],
  drawerDisplay: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddedEvent>) => {
      const existedEvent = state.addedItems.find(
        (item) => item.event_id === action.payload.event_id
      );
      if (existedEvent) {
        existedEvent.quantity += action.payload.quantity;
      } else {
        state.addedItems.push(action.payload);
      }
    },
    setQuantity: (state, action: PayloadAction<SetQuantityType>) => {
      const targetEvent = state.addedItems.find(
        (item) => item.event_id === action.payload.event_id
      );
      if (targetEvent) {
        targetEvent.quantity = action.payload.quantity;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.addedItems = state.addedItems.filter(
        (item) => item.event_id !== action.payload
      );
    },
    clearCart: (state) => {
      state.addedItems = initialState.addedItems;
    },
    setDrawerDisplay: (state, action: PayloadAction<boolean>) => {
      state.drawerDisplay = action.payload;
    },
  },
});

export const {
  addToCart,
  setQuantity,
  deleteFromCart,
  clearCart,
  setDrawerDisplay,
} = cartSlice.actions;

export const getAddedItems = (state: RootState) => state.cart.addedItems;
export const getDrawerDisplay = (state: RootState) => state.cart.drawerDisplay;

export default cartSlice.reducer;
