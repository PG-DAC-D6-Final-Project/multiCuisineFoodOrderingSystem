import { createSlice } from "@reduxjs/toolkit";

// Load initial state from sessionStorage
const savedCart = JSON.parse(sessionStorage.getItem("cart"));

const initialState = savedCart || {
  items: [],
};

// Helper to save to sessionStorage
const saveToSession = (state) => {
  sessionStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToSession(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToSession(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveToSession(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
